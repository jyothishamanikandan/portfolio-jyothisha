import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationsComponent,
    AchievementsComponent,
    ContactComponent,
  ],
  template: `
    <app-navbar />
    <app-hero />
    <app-about />
    <app-skills />
    <app-experience />
    <app-education />
    <app-certifications />
    <app-achievements />
    <app-contact />
    <footer class="footer">
      <div class="container">
        <p>© 2025 Jyothisha M. Crafted with Angular &amp; passion.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      padding: 32px 0;
      text-align: center;
      border-top: 1px solid var(--border);
      color: var(--text-muted);
      font-size: 0.9rem;
    }
  `],
})
export class AppComponent {}
