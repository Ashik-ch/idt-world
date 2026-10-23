import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @ViewChild('searchInput') searchInputRef!: ElementRef<HTMLInputElement>;

  isMenuOpen   = false;
  isSearchOpen = false;
  searchQuery  = '';

  constructor(private router: Router) {}

  openSearch() {
    this.isSearchOpen = true;
    setTimeout(() => this.searchInputRef?.nativeElement.focus(), 60);
  }

  closeSearch() {
    this.isSearchOpen = false;
    this.searchQuery  = '';
  }

  submitSearch() {
    const q = this.searchQuery.trim();
    if (!q) return;
    this.router.navigate(['/search'], { queryParams: { q } });
    this.closeSearch();
    this.isMenuOpen = false;
  }
}
