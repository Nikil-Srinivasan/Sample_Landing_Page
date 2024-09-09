import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { ClientSectionComponent } from './sections/client-section/client-section.component';
import { CommunitySectionComponent } from './sections/community-section/community-section.component';
import { ProductSectionComponent } from './sections/product-section/product-section.component';
import { AchievementsSectionComponent } from './sections/achievements-section/achievements-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    ClientSectionComponent,
    CommunitySectionComponent,
    ProductSectionComponent,
    AchievementsSectionComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
