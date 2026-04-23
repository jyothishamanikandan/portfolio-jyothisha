import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar" [class.scrolled]="scrolled()">
      <div class="container nav-inner">
        <a href="#hero" class="logo">
          <span class="logo-bracket">&lt;</span>JM<span class="logo-bracket">/&gt;</span>
        </a>
        <ul class="nav-links" [class.open]="menuOpen()">
          @for (link of navLinks; track link.href) {
            <li><a [href]="link.href" (click)="closeMenu()">{{ link.label }}</a></li>
          }
        </ul>
        <a href="mailto:Jyothishamanikandan@gmail.com" class="btn-primary nav-cta">Hire Me</a>
        <button class="hamburger" aria-label="Menu" [class.open]="menuOpen()" (click)="toggleMenu()">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed; top: 0; left: 0; right: 0;
      z-index: 1000; height: var(--navbar-height);
      transition: var(--transition); background: transparent;
    }
    .navbar.scrolled {
      background: rgba(10,10,15,0.92);
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border);
      box-shadow: 0 4px 24px rgba(0,0,0,0.3);
    }
    .nav-inner {
      display: flex; align-items: center;
      justify-content: space-between; height: 100%; gap: 32px;
    }
    .logo {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.4rem; font-weight: 700;
      color: var(--text-primary); white-space: nowrap;
    }
    .logo .logo-bracket { color: var(--primary); }
    .nav-links {
      display: flex; list-style: none; gap: 8px; margin: 0;
    }
    .nav-links a {
      padding: 8px 16px; border-radius: 8px; font-size: 0.9rem;
      font-weight: 500; color: var(--text-secondary);
      transition: var(--transition);
    }
    .nav-links a:hover { color: var(--text-primary); background: rgba(108,99,255,0.1); }
    .nav-cta { padding: 10px 24px; font-size: 0.9rem; }
    .hamburger { display: none; }
    @media (max-width: 768px) {
      .nav-links {
        display: none; position: fixed; top: var(--navbar-height);
        left: 0; right: 0; flex-direction: column;
        background: rgba(10,10,15,0.98); padding: 24px; gap: 8px;
        border-bottom: 1px solid var(--border);
      }
      .nav-links.open { display: flex; }
      .nav-links a { padding: 14px 20px; border-radius: 10px; }
      .nav-cta { display: none; }
      .hamburger {
        display: flex; flex-direction: column; gap: 5px;
        background: none; border: none; cursor: pointer; padding: 8px;
      }
      .hamburger span {
        display: block; width: 22px; height: 2px;
        background: var(--text-primary); border-radius: 2px;
        transition: var(--transition);
      }
    }
  `],
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
