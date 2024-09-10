import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CommunityDetails } from '../../../models/landing-page.models';


@Component({
  selector: 'app-community-update-tile',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './community-update-tile.component.html',
  styleUrl: './community-update-tile.component.css',
})
export class CommunityUpdateTileComponent {
  @Input() communityDetails!: CommunityDetails;

 }
