import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommunityFeaturesComponent } from './community-features/community-features.component';
import { Feature } from '../../models/landing-page.models';

@Component({
  selector: 'app-community-section',
  standalone: true,
  imports: [CommonModule, CommunityFeaturesComponent],
  templateUrl: './community-section.component.html',
  styleUrl: './community-section.component.css',
})
export class CommunitySectionComponent {
  communityFeatures: Feature[] = [
    {
      title: 'Membership Organisations',
      description:
        'Our membership management software provides full automation of membership renewals and payments',
      logo: 'assets/membership_org.svg',
      altText: 'Membership Organizations',
    },
    {
      title: 'National Associations',
      description:
        'Our membership management software provides full automation of membership renewals and payments',
      logo: 'assets/national_associations.svg',
      altText: 'National Associations',
    },
    {
      title: 'Clubs And Groups',
      description:
        'Our membership management software provides full automation of membership renewals and payments',
      logo: 'assets/clubs_and_groups.svg',
      altText: 'Clubs And Groups',
    },
  ];
}
