import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommunityUpdateTileComponent } from './community-update-tile/community-update-tile.component';
import { CommunityDetails } from '../../models/landing-page.models';

@Component({
  selector: 'app-community-update-section',
  standalone: true,
  imports: [CommonModule, CommunityUpdateTileComponent],
  templateUrl: './community-update-section.component.html',
  styleUrl: './community-update-section.component.css',
})
export class CommunityUpdateSectionComponent {
  communityDetails: CommunityDetails[] = [
    {
      title: 'Creating Streamlined Safeguarding Processes with OneRen',
      logo: 'assets/update_1.svg',
      altText: 'Community Update 1 Logo',
    },
    {
      title:
        'What are your safeguarding responsibilities and how can you manage them?',
      logo: 'assets/update_2.svg',
      altText: 'Community Update 2 Logo',
    },
    {
      title: 'Revamping the Membership Model with Triathlon Australia',
      logo: 'assets/update_3.svg',
      altText: 'Community Update 3 Logo',
    },
  ];
}
