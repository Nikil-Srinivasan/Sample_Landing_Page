import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Feature } from '../../models/landing-page.models';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css',
})
export class ProductSectionComponent {
  @Input() productDetails!: Feature;
}
