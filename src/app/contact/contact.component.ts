import { Component } from '@angular/core';

interface ContactLink { icon: string; label: string; value: string; href: string | null; }

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="section contact-section">
      <div class="container">
        <div class="section-header">
          <span class="badge">// Contact</span>
          <h2 class="section-title">Let's Build Something Together</h2>
          <p class="section-subtitle">
            Looking for a frontend developer who can architect scalable Angular applications, lead complex UI workflows,
            and deliver production-grade solutions
          </p>
        </div>
        <div class="contact-grid">
          <div class="contact-info card">
            <p class="contact-intro">
              I'm currently open to new opportunities. Whether you have a question, a project in mind, or just want to say hello
              — my inbox is always open!
            </p>
            <div class="contact-links">
              @for (link of contactLinks; track link.label) {
                <div class="contact-item">
                  <div class="contact-icon"><i [class]="link.icon"></i></div>
                  <div class="contact-detail">
                    <span class="contact-label">{{ link.label }}</span>
                    @if (link.href) {
                      <a [href]="link.href" class="contact-value">{{ link.value }}</a>
                    } @else {
                      <span class="contact-value">{{ link.value }}</span>
                    }
                  </div>
                </div>
              }
            </div>
          </div>
          <div class="contact-cta card">
            <div class="cta-icon"><i class="fas fa-paper-plane"></i></div>
            <h3>Ready to work together?</h3>
            <p>Drop me an email and I'll get back to you within 24 hours.</p>
            <a href="mailto:Jyothishamanikandan@gmail.com" class="btn-primary">
              <i class="fas fa-envelope"></i> Send a Message
            </a>
            <div class="social-row">
              <a href="https://github.com/jyothishamanikandan" target="_blank" rel="noopener" class="social-btn">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/jyothisha-m-61a262202/" target="_blank" rel="noopener" class="social-btn">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section { background: var(--bg-section); }
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
    .contact-intro { color: var(--text-secondary); line-height: 1.8; margin-bottom: 32px; }
    .contact-links { display: flex; flex-direction: column; gap: 20px; }
    .contact-item { display: flex; align-items: center; gap: 16px; }
    .contact-icon {
      width: 44px; height: 44px; border-radius: 12px;
      background: rgba(108,99,255,0.1); border: 1px solid var(--border);
      display: flex; align-items: center; justify-content: center;
      font-size: 1rem; color: var(--primary-light); flex-shrink: 0;
    }
    .contact-label { display: block; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 2px; }
    .contact-value { font-size: 0.9rem; color: var(--text-secondary); transition: color 0.2s; }
    a.contact-value:hover { color: var(--primary-light); }
    .contact-cta { text-align: center; display: flex; flex-direction: column; align-items: center; gap: 20px; }
    .cta-icon {
      width: 72px; height: 72px; border-radius: 20px;
      background: var(--gradient); display: flex; align-items: center;
      justify-content: center; font-size: 1.8rem; color: #fff;
    }
    .contact-cta h3 { font-size: 1.4rem; font-weight: 700; color: var(--text-primary); }
    .contact-cta p { color: var(--text-secondary); }
    .social-row { display: flex; gap: 12px; }
    .social-btn {
      width: 44px; height: 44px; border-radius: 12px;
      background: rgba(108,99,255,0.1); border: 1px solid var(--border);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.1rem; color: var(--text-secondary); transition: var(--transition);
    }
    .social-btn:hover { color: var(--primary-light); border-color: var(--primary); transform: translateY(-2px); }
    @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; } }
  `],
})
export class ContactComponent {
  contactLinks: ContactLink[] = [
    { icon: 'fas fa-envelope', label: 'Email', value: 'Jyothishamanikandan@gmail.com', href: 'mailto:Jyothishamanikandan@gmail.com' },
    { icon: 'fas fa-phone', label: 'Phone', value: '+971 503870890', href: 'tel:+971503870890' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Dubai, United Arab Emirates', href: null },
    { icon: 'fab fa-linkedin-in', label: 'LinkedIn', value: 'linkedin.com/in/jyothisha-m-61a262202', href: 'https://www.linkedin.com/in/jyothisha-m-61a262202/' },
    { icon: 'fab fa-github', label: 'GitHub', value: 'github.com/jyothishamanikandan', href: 'https://github.com/jyothishamanikandan' },
  ];
}
