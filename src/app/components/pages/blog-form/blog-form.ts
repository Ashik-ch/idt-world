import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { collection, addDoc, serverTimestamp, getDocs, query, orderBy, doc, deleteDoc, limit } from 'firebase/firestore';
import { db } from '../../../services/firebase.config';

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
  imagePreviewUrl: string | ArrayBuffer | null = null;
  isSubmitting: boolean = false;
  
  blogPosts: any[] = [];
  isLoadingPosts = true;

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
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

  trackByPostId(_index: number, post: { id: string }) {
    return post.id;
  }

  async fetchBlogs() {
    this.isLoadingPosts = true;
    this.cdr.detectChanges();
    try {
      const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'), limit(20));
      const querySnapshot = await getDocs(q);
      this.blogPosts = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
      }));
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      this.isLoadingPosts = false;
      this.cdr.detectChanges();
    }
  }

  async deleteBlog(id: string) {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog post? This action cannot be undone.");
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'blogPosts', id));
        this.blogPosts = this.blogPosts.filter(post => post.id !== id);
        this.cdr.detectChanges();
        alert('Blog post deleted successfully.');
      } catch (error) {
        console.error("Error deleting blog:", error);
        alert("Failed to delete blog post.");
      }
    }
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedFile = file;

      // Create preview
      const reader = new FileReader();
      reader.onload = e => this.imagePreviewUrl = reader.result;
      reader.readAsDataURL(file);
    }
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
          
          // Max dimensions for compression
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 600;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round((height * MAX_WIDTH) / width);
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = Math.round((width * MAX_HEIGHT) / height);
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            resolve(event.target?.result as string); // fallback to original base64
            return;
          }
          
          ctx.drawImage(img, 0, 0, width, height);
          
          // Export as JPEG with 0.7 quality compression
          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
          resolve(compressedBase64);
        };
        img.onerror = (err) => reject(err);
      };
      reader.onerror = (err) => reject(err);
    });
  }

  async onSubmit() {
    // We only validate the form here, the user commented out the file selection requirement previously but we put it back
    if (this.blogForm.valid) {
      this.isSubmitting = true;

      try {
        // Convert image to a compressed base64 string to store directly in Firestore,
        // bypassing the Firebase Storage subscription/billing requirement.
        let downloadURL = null;
        if (this.selectedFile) {
          downloadURL = await this.compressAndConvertToBase64(this.selectedFile);
        }

        // 2. Save form data to Firestore
        const blogData = {
          ...this.blogForm.value,
          image: downloadURL,
          createdAt: serverTimestamp()
        };

        await addDoc(collection(db, 'blogPosts'), blogData);

        alert('Blog created successfully!');
        
        // Refresh the table
        this.fetchBlogs();
        
        // Reset form
        this.blogForm.reset();
        this.selectedFile = null;
        this.imagePreviewUrl = null;
        this.blogForm.patchValue({
          category: 'blog',
          readTime: '5 min read',
          date: new Date().toISOString().substring(0, 10)
        });

      } catch (error) {
        console.error("Error adding document: ", error);
        alert('Failed to create blog post. Please try again.');
      } finally {
        this.isSubmitting = false;
        this.cdr.detectChanges();
      }

    } else {
      this.blogForm.markAllAsTouched();
      if (!this.selectedFile) {
        // Just a warning, not blocking anymore since image might be optional based on user's manual edits
        console.warn('No image selected.'); 
      }
    }
  }
}
