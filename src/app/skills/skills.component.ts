import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: 'Advanced' | 'Intermediate' | 'Learning';
}

interface SkillGroup {
  category: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="section skills-section">
      <div class="container">

        <div class="section-header">
          <span class="badge">// Technical Skills</span>
          <h2 class="section-title">Technologies & Expertise</h2>
          <p class="section-subtitle">
            Combining enterprise frontend engineering with backend
            development and emerging AI technologies.
          </p>
        </div>

        <div class="skills-grid">
          @for (group of skillGroups; track group.category) {
            <div class="skill-card card">

              <div class="skill-card-header">
                <div class="skill-icon">
                  <i [class]="group.icon"></i>
                </div>
                <h3>{{ group.category }}</h3>
              </div>

              <div class="skill-list">
                @for (skill of group.skills; track skill.name) {
                  <div class="skill-item">
                    <span class="skill-name">{{ skill.name }}</span>

                    <span
                      class="skill-level"
                      [class.advanced]="skill.level === 'Advanced'"
                      [class.intermediate]="skill.level === 'Intermediate'"
                      [class.learning]="skill.level === 'Learning'"
                    >
                      {{ skill.level }}
                    </span>
                  </div>
                }
              </div>

            </div>
          }
        </div>

        <div class="skill-legend">
          <span><i class="dot advanced-dot"></i> Advanced</span>
          <span><i class="dot intermediate-dot"></i> Intermediate</span>
          <span><i class="dot learning-dot"></i> Currently Learning</span>
        </div>

        <div class="tech-tags">
          <h3>Technology Stack</h3>

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
    .skills-section {
      background: var(--bg-section);
    }

    .section-subtitle {
      color: var(--text-secondary);
      max-width: 650px;
      margin: 12px auto 0;
      line-height: 1.7;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-bottom: 25px;
    }

    .skill-card {
      padding: 24px;
      transition: transform 0.3s ease;
    }

    .skill-card:hover {
      transform: translateY(-4px);
    }

    .skill-card-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 22px;
    }

    .skill-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: rgba(108,99,255,0.15);
      border: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      color: var(--primary-light);
    }

    .skill-card-header h3 {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-primary);
    }

    .skill-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .skill-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .skill-name {
      font-size: 0.85rem;
      color: var(--text-secondary);
    }

    .skill-level {
      font-size: 0.68rem;
      font-weight: 700;
      padding: 4px 8px;
      border-radius: 12px;
      white-space: nowrap;
    }

    .advanced {
      color: #00cec9;
      background: rgba(0,206,201,0.12);
    }

    .intermediate {
      color: #f5a623;
      background: rgba(245,166,35,0.12);
    }

    .learning {
      color: #a29bfe;
      background: rgba(162,155,254,0.12);
    }

    .skill-legend {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 24px;
      margin: 30px 0 45px;
      color: var(--text-secondary);
      font-size: 0.78rem;
    }

    .skill-legend span {
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }

    .advanced-dot { background: #00cec9; }
    .intermediate-dot { background: #f5a623; }
    .learning-dot { background: #a29bfe; }

    .tech-tags {
      margin-top: 40px;
      text-align: center;
    }

    .tech-tags h3 {
      font-size: 1rem;
      color: var(--text-muted);
      margin-bottom: 20px;
      font-weight: 600;
    }

    .tags-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }

    .tech-tag {
      padding: 7px 14px;
      font-size: 0.78rem;
      font-weight: 600;
      background: rgba(108,99,255,0.1);
      border: 1px solid var(--border);
      border-radius: 20px;
      color: var(--primary-light);
      font-family: 'JetBrains Mono', monospace;
      transition: var(--transition);
    }

    .tech-tag:hover {
      background: rgba(108,99,255,0.2);
      border-color: var(--primary);
      transform: translateY(-2px);
    }

    @media (max-width: 900px) {
      .skills-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }
    }
  `],
})

export class SkillsComponent {

  skillGroups: SkillGroup[] = [

    {
      category: 'Frontend Engineering',
      icon: 'fas fa-laptop-code',
      skills: [
        { name: 'Angular', level: 'Advanced' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'JavaScript ES6+', level: 'Advanced' },
        { name: 'RxJS / NgRx', level: 'Advanced' },
        { name: 'React', level: 'Learning' },
        { name: 'HTML5 / CSS3 / SCSS', level: 'Advanced' },
        { name: 'Angular Signals', level: 'Advanced' },
      ],
    },

    {
      category: 'Backend Development',
      icon: 'fas fa-server',
      skills: [
        { name: 'Python', level: 'Intermediate' },
        { name: 'FastAPI', level: 'Intermediate' },
        { name: 'REST API Development', level: 'Intermediate' },
        { name: 'SQLAlchemy', level: 'Intermediate' },
        { name: 'Node.js', level: 'Intermediate' },
      ],
    },

    {
      category: 'AI & Generative AI',
      icon: 'fas fa-brain',
      skills: [
        { name: 'LLM Integration', level: 'Intermediate' },
        { name: 'Prompt Engineering', level: 'Intermediate' },
        { name: 'RAG Pipelines', level: 'Intermediate' },
        { name: 'Embeddings', level: 'Intermediate' },
        { name: 'Vector Search', level: 'Intermediate' },
        { name: 'AI Agents', level: 'Intermediate' },
      ],
    },

    {
      category: 'Database & Data',
      icon: 'fas fa-database',
      skills: [
        { name: 'SQL Server', level: 'Intermediate' },
        { name: 'PostgreSQL', level: 'Learning' },
        { name: 'Database Design', level: 'Learning' },
        { name: 'Apollo GraphQL', level: 'Intermediate' },
      ],
    },

    {
      category: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      skills: [
        { name: 'Microsoft Azure', level: 'Learning' },
        { name: 'Docker', level: 'Learning' },
        { name: 'Git / GitHub', level: 'Advanced' },
        { name: 'Bitbucket', level: 'Advanced' },
        { name: 'CI/CD Pipelines', level: 'Intermediate' },
      ],
    },

    {
      category: 'Testing & Development Tools',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Jasmine / Karma', level: 'Intermediate' },
        { name: 'Angular Material', level: 'Advanced' },
        { name: 'Jira', level: 'Advanced' },
        { name: 'VS Code', level: 'Advanced' },
        { name: 'Agile / Scrum', level: 'Intermediate' },
        { name: 'AI Coding Tools', level: 'Intermediate' },
      ],
    },

  ];

  techTags = [
    'Angular', 'React', 'TypeScript', 'JavaScript',
    'Python', 'FastAPI', 'REST APIs', 'RxJS',
    'NgRx', 'PostgreSQL', 'SQL Server', 'SQLAlchemy',
    'LLMs', 'RAG', 'Embeddings', 'Vector Search',
    'AI Agents', 'Prompt Engineering', 'Azure',
    'Docker', 'Git', 'GitHub', 'Bitbucket',
    'Apollo GraphQL', 'Jasmine', 'Karma',
    'Angular Material', 'CI/CD',
  ];

}
