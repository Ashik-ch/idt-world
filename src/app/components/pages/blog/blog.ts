import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../../services/firebase.config';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog implements OnInit {
  blogPosts: any[] = [];
  isLoading: boolean = true;


  constructor(private cdr: ChangeDetectorRef) { }

  async ngOnInit() {
    await this.fetchBlogs();
  }

  async fetchBlogs() {
    this.isLoading = true;
    this.cdr.detectChanges();
    try {
      const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'), limit(20));
      const querySnapshot = await getDocs(q);

      this.blogPosts = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data
        };
      });
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  }
}
