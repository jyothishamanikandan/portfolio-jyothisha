import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <span class="badge">// About Me</span>
            <h2 class="section-title">Who I Am</h2>
            <p>
              I'm a <strong>Frontend Developer</strong> based in <strong>Dubai, UAE</strong> with over
              <strong>4.5+ years</strong> of experience building enterprise-scale Angular applications.
            </p>
            <p>
              I architected and delivered an enterprise-scale Laboratory Information Management System (LIMS)
              powering 10+ end-to-end workflows — from client onboarding and quotation creation through sample
              scheduling, accessioning, lab assignment, and report generation.
            </p>
            <p>
              I'm passionate about building <strong>scalable UI architectures</strong>, implementing
              performance optimisations like Angular Signals and OnPush change detection, and bridging
              the gap between complex domain requirements and clean, maintainable code.
            </p>
            <div class="about-details">
              <div class="detail-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div class="detail-item">
                <i class="fas fa-envelope"></i>
                <a href="mailto:Jyothishamanikandan@gmail.com">Jyothishamanikandan&#64;gmail.com</a>
              </div>
              <div class="detail-item">
                <i class="fas fa-phone"></i>
                <a href="tel:+971503870890">+971 503870890</a>
              </div>
              <div class="detail-item">
                <i class="fas fa-language"></i>
                <span>English, Malayalam, Hindi, Tamil</span>
              </div>
            </div>
          </div>
          <div class="about-highlights">
            <div class="highlight-card card">
              <i class="fas fa-rocket"></i>
              <h4>Enterprise Scale</h4>
              <p>Delivered LIMS serving 10+ end-to-end laboratory workflows in production.</p>
            </div>
            <div class="highlight-card card">
              <i class="fas fa-tachometer-alt"></i>
              <h4>Performance First</h4>
              <p>Angular Signals, OnPush, Zoneless architecture for high-performance UIs.</p>
            </div>
            <div class="highlight-card card">
              <i class="fas fa-shield-alt"></i>
              <h4>Security</h4>
              <p>JWT auth, token refresh, inactivity logout, and RBAC implementation.</p>
            </div>
            <div class="highlight-card card">
              <i class="fas fa-book"></i>
              <h4>Documentation</h4>
              <p>Comprehensive architecture docs, component APIs, and workflow guides.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section { background: var(--bg-dark); }
    .about-grid {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 60px; align-items: start;
    }
    .about-text p {
      color: var(--text-secondary); margin-bottom: 20px; line-height: 1.8;
    }
    .about-text p strong { color: var(--text-primary); }
    .about-details { margin-top: 32px; display: flex; flex-direction: column; gap: 12px; }
    .detail-item {
      display: flex; align-items: center; gap: 12px;
      color: var(--text-secondary); font-size: 0.9rem;
    }
    .detail-item i { color: var(--primary-light); width: 16px; text-align: center; }
    .detail-item a { color: var(--text-secondary); transition: color 0.2s; }
    .detail-item a:hover { color: var(--primary-light); }
    .about-highlights {
      display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
    }
    .highlight-card {
      padding: 24px; text-align: center;
    }
    .highlight-card i {
      font-size: 1.8rem; color: var(--primary-light);
      margin-bottom: 12px; display: block;
    }
    .highlight-card h4 {
      font-size: 1rem; font-weight: 700;
      color: var(--text-primary); margin-bottom: 8px;
    }
    .highlight-card p { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.6; }
    @media (max-width: 900px) {
      .about-grid { grid-template-columns: 1fr; gap: 40px; }
    }
    @media (max-width: 500px) {
      .about-highlights { grid-template-columns: 1fr; }
    }
  `],
})
export class AboutComponent {}
