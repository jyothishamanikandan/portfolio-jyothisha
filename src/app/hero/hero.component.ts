import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="hero">
      <div class="hero-blobs">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
      </div>
      <div class="container hero-content">
        <div class="hero-text">
          <span class="badge">// Available for opportunities</span>
          <h1 class="hero-name">Jyothisha M</h1>
          <div class="hero-role">
            <span class="typed">{{ displayedText() }}</span><span class="cursor" [class.visible]="cursorVisible()">|</span>
          </div>
          <p class="hero-desc">
            Frontend Developer based in <strong>Dubai, UAE</strong> with over <strong>4.5+ years</strong>
            building enterprise Angular applications. Specialising in scalable UI architecture,
            performance optimisation, and complex reactive workflows.
          </p>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-value">4.5+</span>
              <span class="stat-label">Years Exp.</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-value">10+</span>
              <span class="stat-label">Workflows Built</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-value">3</span>
              <span class="stat-label">Companies</span>
            </div>
          </div>
          <div class="hero-actions">
            <a href="#contact" class="btn-primary"><i class="fas fa-paper-plane"></i> Get In Touch</a>
            <a href="#experience" class="btn-outline"><i class="fas fa-briefcase"></i> View Work</a>
          </div>
          <div class="hero-social">
            <a href="mailto:Jyothishamanikandan@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>
            <a href="tel:+971503870890" title="Phone"><i class="fas fa-phone"></i></a>
            <a href="https://github.com" target="_blank" rel="noopener" title="GitHub"><i class="fab fa-github"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="avatar-ring">
            <div class="avatar-inner">
              <span class="avatar-initials">JM</span>
            </div>
          </div>
          <div class="floating-tag tag-1"><i class="fab fa-angular"></i> Angular 20+</div>
          <div class="floating-tag tag-2"><i class="fas fa-code"></i> TypeScript</div>
          <div class="floating-tag tag-3"><i class="fas fa-project-diagram"></i> NgRx</div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh; display: flex; align-items: center;
      position: relative; overflow: hidden;
      padding-top: var(--navbar-height);
    }
    .hero-blobs { position: absolute; inset: 0; pointer-events: none; }
    .blob {
      position: absolute; border-radius: 50%;
      filter: blur(80px); opacity: 0.12;
    }
    .blob-1 {
      width: 500px; height: 500px;
      background: var(--primary); top: -100px; right: -100px;
    }
    .blob-2 {
      width: 400px; height: 400px;
      background: var(--secondary); bottom: -50px; left: -100px;
    }
    .blob-3 {
      width: 300px; height: 300px;
      background: var(--accent); top: 50%; left: 40%;
    }
    .hero-content {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 60px; align-items: center;
      position: relative; z-index: 1;
      padding-top: 40px; padding-bottom: 40px;
    }
    .hero-text { animation: fadeInUp 0.8s ease; }
    .hero-name {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 900; margin: 12px 0 8px;
      background: var(--gradient-text);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .hero-role {
      font-size: clamp(1.2rem, 2.5vw, 1.6rem);
      font-family: 'JetBrains Mono', monospace;
      color: var(--text-secondary); margin-bottom: 24px;
      min-height: 2.2rem;
    }
    .typed { color: var(--primary-light); }
    .cursor {
      color: var(--primary); font-weight: 300;
      opacity: 0; transition: opacity 0.1s;
    }
    .cursor.visible { opacity: 1; }
    .hero-desc {
      color: var(--text-secondary); font-size: 1.05rem;
      line-height: 1.8; margin-bottom: 32px; max-width: 540px;
    }
    .hero-desc strong { color: var(--text-primary); }
    .hero-stats {
      display: flex; align-items: center; gap: 24px; margin-bottom: 36px;
    }
    .stat { text-align: center; }
    .stat-value {
      display: block; font-size: 1.8rem; font-weight: 800;
      background: var(--gradient-text);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-family: 'JetBrains Mono', monospace;
    }
    .stat-label { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; }
    .stat-divider { width: 1px; height: 40px; background: var(--border); }
    .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 32px; }
    .hero-social { display: flex; gap: 12px; }
    .hero-social a {
      width: 40px; height: 40px; border-radius: 10px;
      background: rgba(108,99,255,0.1); border: 1px solid var(--border);
      display: flex; align-items: center; justify-content: center;
      color: var(--text-secondary); font-size: 1rem;
      transition: var(--transition);
    }
    .hero-social a:hover {
      color: var(--primary-light); border-color: var(--primary);
      transform: translateY(-2px);
    }
    .hero-visual {
      position: relative; display: flex;
      justify-content: center; align-items: center;
      animation: fadeInUp 1s ease 0.2s both;
    }
    .avatar-ring {
      width: 280px; height: 280px; border-radius: 50%;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      padding: 4px; animation: float 4s ease-in-out infinite;
    }
    .avatar-inner {
      width: 100%; height: 100%; border-radius: 50%;
      background: var(--bg-dark);
      display: flex; align-items: center; justify-content: center;
    }
    .avatar-initials {
      font-size: 4rem; font-weight: 900;
      background: var(--gradient-text);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-family: 'JetBrains Mono', monospace;
    }
    .floating-tag {
      position: absolute; padding: 8px 16px;
      background: var(--bg-card); border: 1px solid var(--border);
      border-radius: 20px; font-size: 0.8rem; font-weight: 600;
      color: var(--text-primary); display: flex; align-items: center;
      gap: 6px; white-space: nowrap; box-shadow: var(--shadow);
    }
    .floating-tag i { color: var(--primary-light); }
    .tag-1 { top: 10%; right: 0; animation: float 3s ease-in-out infinite 0.5s; }
    .tag-2 { bottom: 20%; right: -20px; animation: float 3.5s ease-in-out infinite 1s; }
    .tag-3 { top: 50%; left: -20px; animation: float 4s ease-in-out infinite 1.5s; }
    @media (max-width: 900px) {
      .hero-content { grid-template-columns: 1fr; gap: 40px; text-align: center; }
      .hero-visual { display: none; }
      .hero-stats { justify-content: center; }
      .hero-actions { justify-content: center; }
      .hero-social { justify-content: center; }
      .hero-desc { margin: 0 auto 32px; }
    }
  `],
})
export class HeroComponent implements OnInit, OnDestroy {
  displayedText = signal('');
  cursorVisible = signal(true);

  private roles = ['Frontend Developer', 'Angular Specialist', 'UI Architect', 'TypeScript Expert'];
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimer: ReturnType<typeof setTimeout> | null = null;
  private cursorTimer: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.typeText();
    this.cursorTimer = setInterval(() => {
      this.cursorVisible.update(v => !v);
    }, 530);
  }

  private typeText(): void {
    const role = this.roles[this.roleIndex];
    if (this.isDeleting) {
      this.displayedText.set(role.slice(0, this.charIndex--));
    } else {
      this.displayedText.set(role.slice(0, this.charIndex++));
    }
    let delay = this.isDeleting ? 60 : 110;
    if (!this.isDeleting && this.charIndex > role.length) {
      delay = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex < 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.charIndex = 0;
      delay = 400;
    }
    this.typingTimer = setTimeout(() => this.typeText(), delay);
  }

  ngOnDestroy(): void {
    if (this.typingTimer) clearTimeout(this.typingTimer);
    if (this.cursorTimer) clearInterval(this.cursorTimer);
  }
}
