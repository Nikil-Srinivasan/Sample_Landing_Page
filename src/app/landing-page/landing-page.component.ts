import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { ClientSectionComponent } from './sections/client-section/client-section.component';
import { CommunitySectionComponent } from './sections/community-section/community-section.component';
import { ProductSectionComponent } from './sections/product-section/product-section.component';
import { AchievementsSectionComponent } from './sections/achievements-section/achievements-section.component';
import { Feature } from './models/landing-page.models';
import { TestimonialSectionComponent } from './sections/testimonial-section/testimonial-section.component';
import { CommunityUpdateSectionComponent } from './sections/community-update-section/community-update-section.component';

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
    TestimonialSectionComponent,
    CommunityUpdateSectionComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  productDetails1: Feature = {
    title: 'The unseen of spending three years at Pixelgrade',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.',
    logo: 'assets/authentication.svg',
    altText: 'Product 1',
  };

  productDetails2: Feature = {
    title: 'How to design your site footer like we did',
    description:
      'Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.',
    logo: 'assets/login.svg',
    altText: 'Product 2',
  };
}
