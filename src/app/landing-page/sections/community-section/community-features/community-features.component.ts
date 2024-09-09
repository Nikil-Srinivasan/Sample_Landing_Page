import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Feature } from '../../../models/landing-page.models';

@Component({
  selector: 'app-community-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './community-features.component.html',
  styleUrl: './community-features.component.css',
})
export class CommunityFeaturesComponent {
  @Input() feature!: Feature;
}
