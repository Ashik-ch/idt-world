import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { collection, addDoc, serverTimestamp, getDocs, query, orderBy, doc, deleteDoc, limit } from 'firebase/firestore';
import { db } from '../../../services/firebase.config';

export interface BlogPostRow {
  id: string;
  title?: string;
  author?: string;
  date?: string;
  category?: string;
  image?: string;
  [key: string]: unknown;
}

@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './blog-form.html',
  styleUrl: './blog-form.scss'
})
export class BlogForm implements OnInit {
  blogForm: FormGroup;
  selectedFile: File | null = null;
  imagePreviewUrl = signal<string | ArrayBuffer | null>(null);
  isSubmitting = signal(false);

  blogPosts = signal<BlogPostRow[]>([]);
  isLoadingPosts = signal(true);
  deletingPostId = signal<string | null>(null);

  constructor(private fb: FormBuilder) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      excerpt: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
      category: ['blog'],
      readTime: ['5 min read', Validators.required],
      date: [new Date().toISOString().substring(0, 10), Validators.required]
    });
  }

  ngOnInit() {
    this.fetchBlogs();
  }

  trackByPostId(_index: number, post: BlogPostRow) {
    return post.id;
  }

  isDeleting(postId: string): boolean {
    return this.deletingPostId() === postId;
  }

  isDeleteBusy(): boolean {
    return this.deletingPostId() !== null;
  }

  clearImagePreview() {
    this.selectedFile = null;
    this.imagePreviewUrl.set(null);
  }

  async fetchBlogs() {
    this.isLoadingPosts.set(true);
    try {
      const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'), limit(20));
      const querySnapshot = await getDocs(q);
      this.blogPosts.set(
        querySnapshot.docs.map(document => ({
          id: document.id,
          ...document.data()
        })) as BlogPostRow[]
      );
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      this.isLoadingPosts.set(false);
    }
  }

  async deleteBlog(id: string) {
    if (this.isDeleteBusy()) {
      return;
    }

    const confirmDelete = window.confirm('Are you sure you want to delete this blog post? This action cannot be undone.');
    if (!confirmDelete) {
      return;
    }

    this.deletingPostId.set(id);
    try {
      await deleteDoc(doc(db, 'blogPosts', id));
      this.blogPosts.update(posts => posts.filter(post => post.id !== id));
      alert('Blog post deleted successfully.');
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Failed to delete blog post.');
    } finally {
      this.deletingPostId.set(null);
    }
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) {
      return;
    }
    this.selectedFile = file;

    const reader = new FileReader();
    reader.onload = () => this.imagePreviewUrl.set(reader.result);
    reader.readAsDataURL(file);
  }

  compressAndConvertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');

          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 600;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round((height * MAX_WIDTH) / width);
              width = MAX_WIDTH;
            }
          } else if (height > MAX_HEIGHT) {
            width = Math.round((width * MAX_HEIGHT) / height);
            height = MAX_HEIGHT;
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            resolve(event.target?.result as string);
            return;
          }

          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', 0.7));
        };
        img.onerror = (err) => reject(err);
      };
      reader.onerror = (err) => reject(err);
    });
  }

  async onSubmit() {
    if (!this.blogForm.valid) {
      this.blogForm.markAllAsTouched();
      if (!this.selectedFile) {
        console.warn('No image selected.');
      }
      return;
    }

    this.isSubmitting.set(true);

    try {
      let downloadURL: string | null = null;
      if (this.selectedFile) {
        downloadURL = await this.compressAndConvertToBase64(this.selectedFile);
      }

      const blogData = {
        ...this.blogForm.value,
        image: downloadURL,
        createdAt: serverTimestamp()
      };

      await addDoc(collection(db, 'blogPosts'), blogData);

      alert('Blog created successfully!');

      await this.fetchBlogs();

      this.blogForm.reset();
      this.clearImagePreview();
      this.blogForm.patchValue({
        category: 'blog',
        readTime: '5 min read',
        date: new Date().toISOString().substring(0, 10)
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Failed to create blog post. Please try again.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
