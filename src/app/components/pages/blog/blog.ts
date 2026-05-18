import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog {
  blogPosts = [
    {
      title: 'Top 10 Hidden Gems in Europe for 2026',
      excerpt: 'Discover the uncharted territories of Europe. From quaint villages in the Swiss Alps to the untouched beaches of the Mediterranean, experience the world like never before.',
      description: 'Embrace the freedom of discovering newEmbrace the freedom of discovering newEmbrace the freedom of discovering new',
      date: 'May 15, 2026',
      author: 'Elena Rossi',
      category: 'blog',
      readTime: '5 min read',
      image: 'assets/images/c.jpg'
    }
  ];
}
