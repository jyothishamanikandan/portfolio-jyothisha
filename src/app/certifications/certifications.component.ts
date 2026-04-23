import { Component } from '@angular/core';

interface Cert { name: string; platform: string; icon: string; }

@Component({
  selector: 'app-certifications',
  standalone: true,
  template: `
    <section id="certifications" class="section certs-section">
      <div class="container">
        <div class="section-header">
          <span class="badge">// Certifications</span>
          <h2 class="section-title">Continuous Learning</h2>
          <p class="section-subtitle">Professional development courses completed on Udemy</p>
        </div>
        <div class="certs-grid">
          @for (cert of certs; track cert.name) {
            <div class="cert-card card">
              <div class="cert-icon"><i [class]="cert.icon"></i></div>
              <div class="cert-info">
                <h4>{{ cert.name }}</h4>
                <span class="cert-platform"><i class="fas fa-certificate"></i> {{ cert.platform }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .certs-section { background: var(--bg-section); }
    .certs-grid {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 20px; max-width: 900px; margin: 0 auto;
    }
    .cert-card { display: flex; align-items: center; gap: 16px; padding: 20px 24px; }
    .cert-icon {
      width: 48px; height: 48px; border-radius: 12px;
      background: rgba(108,99,255,0.15); border: 1px solid var(--border);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.3rem; color: var(--primary-light); flex-shrink: 0;
    }
    .cert-info h4 { font-size: 0.95rem; font-weight: 600; color: var(--text-primary); margin-bottom: 4px; }
    .cert-platform { font-size: 0.78rem; color: var(--text-muted); }
    .cert-platform i { color: #f5a623; margin-right: 4px; }
    @media (max-width: 768px) { .certs-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 480px) { .certs-grid { grid-template-columns: 1fr; } }
  `],
})
export class CertificationsComponent {
  certs: Cert[] = [
    { name: 'Advanced Angular', platform: 'Udemy', icon: 'fab fa-angular' },
    { name: 'JavaScript', platform: 'Udemy', icon: 'fab fa-js' },
    { name: 'Angular Unit Testing', platform: 'Udemy', icon: 'fas fa-vial' },
    { name: 'Advanced HTML & CSS', platform: 'Udemy', icon: 'fab fa-html5' },
    { name: 'GraphQL UI', platform: 'Udemy', icon: 'fas fa-project-diagram' },
    { name: 'Tailwind CSS', platform: 'Udemy', icon: 'fas fa-wind' },
  ];
}
