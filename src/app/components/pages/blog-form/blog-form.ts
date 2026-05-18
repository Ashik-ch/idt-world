import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './blog-form.html',
  styleUrl: './blog-form.scss'
})
export class BlogForm {
  blogForm: FormGroup;
  selectedFile: File | null = null;
  imagePreviewUrl: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      excerpt: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
      category: ['', Validators.required],
      readTime: ['5 min read', Validators.required],
      date: [new Date().toISOString().substring(0, 10), Validators.required]
    });
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

  onSubmit() {
    if (this.blogForm.valid && this.selectedFile) {
      const formData = new FormData();
      Object.keys(this.blogForm.value).forEach(key => {
        formData.append(key, this.blogForm.value[key]);
      });
      formData.append('image', this.selectedFile, this.selectedFile.name);

      console.log('Form Submitted!', this.blogForm.value);
      console.log('Selected Image:', this.selectedFile);
      
      // Here you would normally send the formData to your backend service
      alert('Blog created successfully! (Check console for data)');
      this.blogForm.reset();
      this.selectedFile = null;
      this.imagePreviewUrl = null;
      
      // Reset default values
      this.blogForm.patchValue({
        readTime: '5 min read',
        date: new Date().toISOString().substring(0, 10)
      });
    } else {
      this.blogForm.markAllAsTouched();
      if (!this.selectedFile) {
        alert('Please select an image.');
      }
    }
  }
}
