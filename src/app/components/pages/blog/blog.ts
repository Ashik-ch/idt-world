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
      date: 'May 15, 2026',
      author: 'Elena Rossi',
      category: 'Inbound',
      readTime: '5 min read',
      image: 'assets/images/c.jpg'
    },
    {
      title: 'A Cinematic Journey Through the Sahara',
      excerpt: 'Witness the golden dunes and endless horizons. Our latest expedition took us deep into the Sahara, uncovering the timeless beauty of the desert landscape.',
      date: 'May 10, 2026',
      author: 'Marcus Chen',
      category: 'Expedition',
      readTime: '8 min read',
      image: 'assets/images/a.jpg'
    },
    {
      title: 'Luxury Travel Redefined: The New Standard',
      excerpt: 'What does luxury mean in 2026? We explore the evolving landscape of high-end travel, focusing on bespoke experiences and unparalleled comfort.',
      date: 'May 02, 2026',
      author: 'Sarah Jenkins',
      category: 'Luxury',
      readTime: '6 min read',
      image: 'assets/images/g.jpg'
    },
    {
      title: 'Culinary Delights: Tasting the World',
      excerpt: 'Join us on a gastronomic adventure as we taste the finest local cuisines from street food stalls in Bangkok to Michelin-starred restaurants in Paris.',
      date: 'April 28, 2026',
      author: 'David Kim',
      category: 'Culture',
      readTime: '4 min read',
      image: 'assets/images/a.jpg'
    },
    {
      title: 'Sustainable Tourism: Traveling with Purpose',
      excerpt: 'How we can explore the world while preserving its natural beauty. A look into eco-friendly travel options and sustainable practices for the conscious traveler.',
      date: 'April 20, 2026',
      author: 'Emma Thompson',
      category: 'Eco-Travel',
      readTime: '7 min read',
      image: 'assets/images/b.jpg'
    },
    {
      title: 'The Ultimate Guide to Solo Travel',
      excerpt: 'Embrace the freedom of discovering new destinations on your own terms. Essential tips, top destinations, and personal stories from solo adventurers.',
      date: 'April 12, 2026',
      author: 'James Wilson',
      category: 'Guides',
      readTime: '10 min read',
      image: 'assets/images/feature6.png'
    }
  ];
}
