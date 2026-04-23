import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  template: `
    <section id="education" class="section education-section">
      <div class="container">
        <div class="section-header">
          <span class="badge">// Education</span>
          <h2 class="section-title">Academic Background</h2>
        </div>
        <div class="edu-card card">
          <div class="edu-icon"><i class="fas fa-graduation-cap"></i></div>
          <div class="edu-content">
            <div class="edu-header">
              <div>
                <h3>Bachelor of Engineering</h3>
                <h4>Computer Science and Engineering</h4>
              </div>
              <div class="edu-meta">
                <span class="grade">GPA 8.04 / 10</span>
                <span class="period"><i class="fas fa-calendar-alt"></i> Aug 2017 – Aug 2021</span>
              </div>
            </div>
            <p class="edu-college"><i class="fas fa-university"></i> CMS College of Engineering and Technology</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .education-section { background: var(--bg-dark); }
    .edu-card {
      display: flex; align-items: flex-start; gap: 28px;
      max-width: 760px; margin: 0 auto;
    }
    .edu-icon {
      width: 64px; height: 64px; border-radius: 16px;
      background: rgba(108,99,255,0.15); border: 1px solid var(--border);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.8rem; color: var(--primary-light); flex-shrink: 0;
    }
    .edu-content { flex: 1; }
    .edu-header {
      display: flex; justify-content: space-between;
      align-items: flex-start; gap: 16px; flex-wrap: wrap; margin-bottom: 14px;
    }
    .edu-header h3 { font-size: 1.3rem; font-weight: 700; color: var(--text-primary); margin-bottom: 4px; }
    .edu-header h4 { font-size: 1rem; font-weight: 500; color: var(--primary-light); }
    .edu-meta { display: flex; flex-direction: column; gap: 6px; text-align: right; }
    .grade {
      font-family: 'JetBrains Mono', monospace; font-size: 1rem; font-weight: 700;
      background: var(--gradient-text);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .period {
      font-size: 0.85rem; color: var(--text-muted);
      display: flex; align-items: center; gap: 6px; justify-content: flex-end;
    }
    .period i { color: var(--primary-light); font-size: 0.75rem; }
    .edu-college {
      font-size: 0.95rem; color: var(--text-secondary);
      display: flex; align-items: center; gap: 8px;
    }
    .edu-college i { color: var(--primary-light); }
    @media (max-width: 600px) {
      .edu-card { flex-direction: column; }
      .edu-meta { text-align: left; }
      .period { justify-content: flex-start; }
    }
  `],
})
export class EducationComponent {}
