import { Component } from '@angular/core';

interface Achievement {
  icon: string;
  color: string;
  category: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  template: `
    <section id="achievements" class="section achievements-section">
      <div class="container">

        <div class="section-header">
          <span class="badge">// Achievements & Milestones</span>
          <h2 class="section-title">Professional Journey & Recognition</h2>
          <p class="section-subtitle">
            Highlights from my academic journey, software engineering
            experience and continuous technical growth.
          </p>
        </div>

        <div class="achievements-list">
          @for (item of items; track item.title) {
            <div class="achievement-card card">

              <div
                class="ach-icon"
                [style.color]="item.color"
                [style.background]="item.color + '1a'"
              >
                <i [class]="item.icon"></i>
              </div>

              <div class="ach-content">
                <span class="ach-category">{{ item.category }}</span>
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
    .achievements-section {
      background: var(--bg-dark);
    }

    .section-subtitle {
      color: var(--text-secondary);
      max-width: 650px;
      margin: 12px auto 0;
      line-height: 1.7;
    }

    .achievements-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 850px;
      margin: 0 auto;
    }

    .achievement-card {
      display: flex;
      align-items: flex-start;
      gap: 20px;
      padding: 24px 28px;
      transition: transform 0.3s ease, border-color 0.3s ease;
    }

    .achievement-card:hover {
      transform: translateY(-4px);
    }

    .ach-icon {
      width: 54px;
      height: 54px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      flex-shrink: 0;
      border: 1px solid currentColor;
      opacity: 0.85;
    }

    .ach-category {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--primary-light);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }

    .ach-content h4 {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 8px;
    }

    .ach-content p {
      font-size: 0.9rem;
      color: var(--text-secondary);
      line-height: 1.7;
    }

    @media (max-width: 600px) {
      .achievement-card {
        flex-direction: column;
        padding: 22px;
      }
    }
  `],
})
export class AchievementsComponent {

  items: Achievement[] = [

    {
      icon: 'fas fa-code',
      color: '#6c63ff',
      category: 'Professional Experience',
      title: '5+ Years in Software Development',
      desc: 'Built enterprise web applications and business-critical frontend solutions using Angular, TypeScript, JavaScript, RxJS and NgRx across professional projects.',
    },


    {
      icon: 'fas fa-trophy',
      color: '#f5a623',
      category: 'Academic Recognition · 2021',
      title: 'Second Prize — International Hackathon',
      desc: 'Secured second prize for Paper/Project Presentation at an international-level hackathon event in 2021.',
    },

    {
      icon: 'fas fa-medal',
      color: '#6c63ff',
      category: 'Academic Recognition · 2021',
      title: 'First Prize — College Technical Event',
      desc: 'Secured first prize for Paper/Project Presentation at a college-level technical event in 2021.',
    },

    {
      icon: 'fas fa-microphone-alt',
      color: '#00cec9',
      category: 'Research & Presentation',
      title: 'International Conference Presenter',
      desc: 'Presented the paper "PINTAR POWERED CLUSTERED SYSTEM" at the First International e-Conference on Management, Science & Technology (ICMST – Online).',
    },

  ];
}
