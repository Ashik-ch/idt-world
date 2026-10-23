import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogForm } from '../blog-form/blog-form';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, BlogForm],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.scss'
})
export class AdminPanel {

}
