import { Component } from '@angular/core';

interface Skill { name: string; level: number; }
interface SkillGroup { category: string; icon: string; skills: Skill[]; }

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="section skills-section">
      <div class="container">
        <div class="section-header">
          <span class="badge">// Skills</span>
          <h2 class="section-title">Technical Expertise</h2>
          <p class="section-subtitle">Technologies I've worked with across enterprise-scale projects</p>
        </div>
        <div class="skills-grid">
          @for (group of skillGroups; track group.category) {
            <div class="skill-card card">
              <div class="skill-card-header">
                <div class="skill-icon"><i [class]="group.icon"></i></div>
                <h3>{{ group.category }}</h3>
              </div>
              <div class="skill-list">
                @for (skill of group.skills; track skill.name) {
                  <div class="skill-item">
                    <div class="skill-meta">
                      <span class="skill-name">{{ skill.name }}</span>
                      <span class="skill-pct">{{ skill.level }}%</span>
                    </div>
                    <div class="skill-bar">
                      <div class="skill-fill" [style.width.%]="skill.level"></div>
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        </div>
        <div class="tech-tags">
          <h3>All Technologies</h3>
          <div class="tags-list">
            @for (tag of techTags; track tag) {
              <span class="tech-tag">{{ tag }}</span>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-section { background: var(--bg-section); }
    .skills-grid {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 24px; margin-bottom: 40px;
    }
    .skill-card-header {
      display: flex; align-items: center; gap: 12px; margin-bottom: 20px;
    }
    .skill-icon {
      width: 40px; height: 40px; border-radius: 10px;
      background: rgba(108,99,255,0.15); border: 1px solid var(--border);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.1rem; color: var(--primary-light);
    }
    .skill-card-header h3 { font-size: 0.95rem; font-weight: 700; color: var(--text-primary); }
    .skill-list { display: flex; flex-direction: column; gap: 14px; }
    .skill-meta { display: flex; justify-content: space-between; margin-bottom: 6px; }
    .skill-name { font-size: 0.85rem; color: var(--text-secondary); }
    .skill-pct {
      font-size: 0.75rem; font-family: 'JetBrains Mono', monospace;
      color: var(--primary-light);
    }
    .skill-bar {
      height: 4px; background: rgba(255,255,255,0.06);
      border-radius: 2px; overflow: hidden;
    }
    .skill-fill {
      height: 100%; border-radius: 2px;
      background: var(--gradient); transition: width 1s ease;
    }
    .tech-tags { margin-top: 40px; text-align: center; }
    .tech-tags h3 { font-size: 1rem; color: var(--text-muted); margin-bottom: 16px; font-weight: 600; }
    .tags-list { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
    .tech-tag {
      padding: 6px 14px; font-size: 0.78rem; font-weight: 600;
      background: rgba(108,99,255,0.1); border: 1px solid var(--border);
      border-radius: 20px; color: var(--primary-light);
      font-family: 'JetBrains Mono', monospace;
      transition: var(--transition);
    }
    .tech-tag:hover {
      background: rgba(108,99,255,0.2);
      border-color: var(--primary); transform: translateY(-2px);
    }
    @media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 600px) { .skills-grid { grid-template-columns: 1fr; } }
  `],
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      category: 'Core Framework', icon: 'fas fa-layer-group',
      skills: [
        { name: 'Angular (v2–20+)', level: 95 },
        { name: 'TypeScript', level: 92 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'ReactJS', level: 65 },
      ],
    },
    {
      category: 'State & Data', icon: 'fas fa-database',
      skills: [
        { name: 'NgRx', level: 85 },
        { name: 'Apollo GraphQL', level: 82 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Angular Signals', level: 88 },
      ],
    },
    {
      category: 'Styling & UI', icon: 'fas fa-palette',
      skills: [
        { name: 'SCSS / CSS3', level: 90 },
        { name: 'Bootstrap 5', level: 88 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Responsive Design', level: 92 },
      ],
    },
    {
      category: 'Architecture & Perf', icon: 'fas fa-tachometer-alt',
      skills: [
        { name: 'OnPush Change Detection', level: 90 },
        { name: 'Zoneless Architecture', level: 82 },
        { name: 'JWT Auth / RBAC', level: 88 },
        { name: 'Reactive Forms', level: 95 },
      ],
    },
    {
      category: 'Testing & Quality', icon: 'fas fa-vial',
      skills: [
        { name: 'Jasmine / Karma', level: 80 },
        { name: 'Code Reviews', level: 85 },
        { name: 'Debugging', level: 90 },
        { name: 'Agile / Scrum', level: 88 },
      ],
    },
    {
      category: 'Tools & Workflow', icon: 'fas fa-tools',
      skills: [
        { name: 'Git / GitHub / Bitbucket', level: 88 },
        { name: 'Jira', level: 85 },
        { name: 'VS Code', level: 92 },
        { name: 'Project Documentation', level: 85 },
      ],
    },
  ];

  techTags = [
    'Angular', 'TypeScript', 'JavaScript', 'NgRx', 'Apollo GraphQL',
    'SCSS', 'Bootstrap 5', 'Tailwind CSS', 'Reactive Forms', 'JWT',
    'OnPush', 'Zoneless', 'HTML5', 'Git', 'Jasmine', 'Karma',
    'Jira', 'Bitbucket', 'ReactJS', 'Signals', 'REST API', 'RBAC',
  ];
}
