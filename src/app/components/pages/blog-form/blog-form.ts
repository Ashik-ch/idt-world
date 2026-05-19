import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { collection, addDoc, serverTimestamp, getDocs, query, orderBy, doc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../services/firebase.config';

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
  isLoadingPosts: boolean = false;

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

  async fetchBlogs() {
    this.isLoadingPosts = true;
    try {
      const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      this.blogPosts = querySnapshot.docs.map(document => {
        return {
          id: document.id,
          ...document.data()
        };
      });
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      this.isLoadingPosts = false;
    }
  }

  async deleteBlog(id: string) {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog post? This action cannot be undone.");
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'blogPosts', id));
        this.blogPosts = this.blogPosts.filter(post => post.id !== id);
        alert("Blog post deleted successfully.");
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

  async onSubmit() {
    // We only validate the form here, the user commented out the file selection requirement previously but we put it back
    if (this.blogForm.valid) {
      this.isSubmitting = true;

      try {
        // 1. Upload image to Firebase Storage
        let downloadURL = null;
        if (this.selectedFile) {
          const fileName = `${new Date().getTime()}_${this.selectedFile.name}`;
          const storageRef = ref(storage, `blog_images/${fileName}`);
          const uploadTask = await uploadBytesResumable(storageRef, this.selectedFile);
          downloadURL = await getDownloadURL(uploadTask.ref);
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
