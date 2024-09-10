import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './testimonial-section.component.html',
  styleUrl: './testimonial-section.component.css',
})
export class TestimonialSectionComponent { }
