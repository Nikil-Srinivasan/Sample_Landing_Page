import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LandingPageComponent],
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'css_project';
}
