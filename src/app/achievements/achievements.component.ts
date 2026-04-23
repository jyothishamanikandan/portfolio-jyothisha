import { Component } from '@angular/core';

interface Achievement { icon: string; color: string; title: string; desc: string; }

@Component({
  selector: 'app-achievements',
  standalone: true,
  template: `
    <section id="achievements" class="section achievements-section">
      <div class="container">
        <div class="section-header">
          <span class="badge">// Achievements</span>
          <h2 class="section-title">Milestones &amp; Awards</h2>
        </div>
        <div class="achievements-list">
          @for (item of items; track item.title) {
            <div class="achievement-card card">
              <div class="ach-icon" [style.color]="item.color" [style.background]="item.color + '1a'">
                <i [class]="item.icon"></i>
              </div>
              <div class="ach-content">
                <h4>{{ item.title }}</h4>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .achievements-section { background: var(--bg-dark); }
    .achievements-list {
      display: flex; flex-direction: column; gap: 20px;
      max-width: 800px; margin: 0 auto;
    }
    .achievement-card { display: flex; align-items: flex-start; gap: 20px; padding: 24px 28px; }
    .ach-icon {
      width: 54px; height: 54px; border-radius: 14px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.4rem; flex-shrink: 0;
      border: 1px solid currentColor; opacity: 0.85;
    }
    .ach-content h4 { font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; }
    .ach-content p { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; }
    @media (max-width: 600px) { .achievement-card { flex-direction: column; } }
  `],
})
export class AchievementsComponent {
  items: Achievement[] = [
    {
      icon: 'fas fa-trophy',
      color: '#f5a623',
      title: 'Second Prize — International Hackathon',
      desc: 'Secured 2nd prize for Paper/Project Presentation at an International Level Hackathon Events in 2021.',
    },
    {
      icon: 'fas fa-medal',
      color: '#6c63ff',
      title: 'First Prize — College Technical Event',
      desc: 'Secured 1st prize for Paper/Project Presentation at College Level Technical Events 2021.',
    },
    {
      icon: 'fas fa-microphone-alt',
      color: '#00cec9',
      title: 'International Conference Presenter',
      desc: 'Presented the paper "PINTAR POWERED CLUSTERED SYSTEM" at the First International e-Conference on Management, Science & Technology (ICMST – Online).',
    },
  ];
}
