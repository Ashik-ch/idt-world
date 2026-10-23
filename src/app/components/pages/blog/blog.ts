import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../../services/firebase.config';

export interface BlogPostRow {
  id: string;
  title?: string;
  excerpt?: string;
  author?: string;
  category?: string;
  readTime?: string;
  date?: string;
  image?: string;
  [key: string]: unknown;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog implements OnInit {
  blogPosts = signal<BlogPostRow[]>([]);
  isLoading = signal(true);

  async ngOnInit() {
    await this.fetchBlogs();
  }

  async fetchBlogs() {
    this.isLoading.set(true);
    try {
      const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'), limit(20));
      const querySnapshot = await getDocs(q);

      this.blogPosts.set(
        querySnapshot.docs.map(docSnap => ({
          id: docSnap.id,
          ...docSnap.data()
        })) as BlogPostRow[]
      );
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      this.isLoading.set(false);
    }
  }
}
