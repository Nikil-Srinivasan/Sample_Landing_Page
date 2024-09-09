import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './achievements-section.component.html',
  styleUrl: './achievements-section.component.css',
})
export class AchievementsSectionComponent { }
