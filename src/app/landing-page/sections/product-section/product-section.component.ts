import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css',
})
export class ProductSectionComponent { }
