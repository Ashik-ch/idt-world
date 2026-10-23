import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  thumbnail: string;
  category: string;
  duration: string;
}

@Component({
  selector: 'app-vlogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vlogs.html',
  styleUrl: './vlogs.scss'
})
export class Vlogs implements OnInit {
  categories: string[] = ['All', 'Destinations', 'Backwaters', 'Culture', 'Adventure'];
  activeCategory: string = 'All';
  
  videos: Video[] = [
    {
      id: '1',
      title: 'Kerala Backwaters & Houseboat Cruise',
      description: 'Experience the ultimate serenity of Alleppey backwaters on a traditional luxury houseboat, gliding past coconut groves and local villages.',
      youtubeId: 'R88Vn4G1nks',
      thumbnail: 'https://img.youtube.com/vi/R88Vn4G1nks/maxresdefault.jpg',
      category: 'Backwaters',
      duration: '4:15'
    },
    {
      id: '2',
      title: 'Munnar: Majestic Tea Gardens & Hills',
      description: 'A breathtaking journey through the mist-covered valleys, rolling tea estates, and cascading waterfalls of Munnar hill station.',
      youtubeId: 'HCA1Uv-x4v8',
      thumbnail: 'https://img.youtube.com/vi/HCA1Uv-x4v8/maxresdefault.jpg',
      category: 'Destinations',
      duration: '5:32'
    },
    {
      id: '3',
      title: 'Thekkady Wilderness & Elephant Safari',
      description: 'Explore the wildlife sanctuary of Periyar in Thekkady, featuring boating on the lake, spice tours, and elephant safari experiences.',
      youtubeId: 'FpY0W_F3BqE',
      thumbnail: 'https://img.youtube.com/vi/FpY0W_F3BqE/maxresdefault.jpg',
      category: 'Adventure',
      duration: '3:45'
    },
    {
      id: '4',
      title: 'Kathakali: The Classical Art of Kerala',
      description: 'Dive deep into the rich cultural heritage of Kerala with the dramatic makeup, costumes, and expressive mudras of Kathakali performance.',
      youtubeId: 'tK3XU_3hS9w',
      thumbnail: 'https://img.youtube.com/vi/tK3XU_3hS9w/maxresdefault.jpg',
      category: 'Culture',
      duration: '6:12'
    },
    {
      id: '5',
      title: 'Kovalam Beach: Sun, Sand & Serenity',
      description: 'Relax on the crescent beaches of Kovalam, exploring the lighthouse beach, coastal view, and traditional Ayurvedic rejuvenation resorts.',
      youtubeId: 'M2H5w64Xvsw',
      thumbnail: 'https://img.youtube.com/vi/M2H5w64Xvsw/maxresdefault.jpg',
      category: 'Destinations',
      duration: '4:50'
    },
    {
      id: '6',
      title: 'Bamboo Rafting & Trekking in Vagamon',
      description: 'An adrenaline-filled day of trekking in Vagamon pine forests and bamboo rafting through the mountain rivers of Kerala.',
      youtubeId: 'Y9jG5X_y6M4',
      thumbnail: 'https://img.youtube.com/vi/Y9jG5X_y6M4/maxresdefault.jpg',
      category: 'Adventure',
      duration: '5:05'
    }
  ];

  filteredVideos: Video[] = [];
  selectedVideo: Video | null = null;
  safeVideoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.filterVideos();
  }

  setCategory(category: string) {
    this.activeCategory = category;
    this.filterVideos();
  }

  filterVideos() {
    if (this.activeCategory === 'All') {
      this.filteredVideos = this.videos;
    } else {
      this.filteredVideos = this.videos.filter(v => v.category === this.activeCategory);
    }
  }

  openPlayer(video: Video) {
    this.selectedVideo = video;
    const embedUrl = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`;
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    document.body.style.overflow = 'hidden';
  }

  closePlayer() {
    this.selectedVideo = null;
    this.safeVideoUrl = null;
    document.body.style.overflow = 'auto';
  }
}
