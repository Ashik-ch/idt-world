import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../services/firebase.config';

export interface BlogPost {
  id: string;
  title?: string;
  excerpt?: string;
  description?: string;
  author?: string;
  category?: string;
  readTime?: string;
  date?: string;
  image?: string;
  [key: string]: unknown;
}

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.scss'
})
export class BlogDetail implements OnInit {
  post = signal<BlogPost | null>(null);
  isLoading = signal(true);
  notFound = signal(false);

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPost();
  }

  private async loadPost() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['/blog']);
      return;
    }

    this.isLoading.set(true);
    this.notFound.set(false);

    try {
      const snapshot = await getDoc(doc(db, 'blogPosts', id));
      if (!snapshot.exists()) {
        this.notFound.set(true);
        return;
      }
      this.post.set({ id: snapshot.id, ...snapshot.data() } as BlogPost);
    } catch (error) {
      console.error('Error loading blog post:', error);
      this.notFound.set(true);
    } finally {
      this.isLoading.set(false);
    }
  }
}
