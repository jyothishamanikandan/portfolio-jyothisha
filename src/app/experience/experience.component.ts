import { Component } from '@angular/core';

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  tech: string[];
  highlights: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="section experience-section">
      <div class="container">
        <div class="section-header">
          <span class="badge">// Experience</span>
          <h2 class="section-title">Work Experience</h2>
          <p class="section-subtitle">4.5+ years building enterprise web applications</p>
        </div>
        <div class="timeline">
          @for (job of jobs; track job.company) {
            <div class="timeline-item">
              <div class="timeline-dot" [class.current]="job.current"></div>
              <div class="job-card card">
                <div class="job-header">
                  <div class="job-main">
                    <div class="job-company-row">
                      <span class="job-company">{{ job.company }}</span>
                      @if (job.current) {
                        <span class="current-badge">Current</span>
                      }
                    </div>
                    <span class="job-role">{{ job.role }}</span>
                  </div>
                  <div class="job-meta">
                    <span><i class="fas fa-calendar-alt"></i> {{ job.period }}</span>
                    <span><i class="fas fa-map-marker-alt"></i> {{ job.location }}</span>
                  </div>
                </div>
                <div class="job-tech">
                  @for (t of job.tech; track t) {
                    <span class="tech-pill">{{ t }}</span>
                  }
                </div>
                <ul class="job-highlights">
                  @for (h of job.highlights; track h) {
                    <li>{{ h }}</li>
                  }
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience-section { background: var(--bg-section); }
    .timeline {
      position: relative; padding-left: 48px;
      display: flex; flex-direction: column; gap: 32px;
    }
    .timeline::before {
      content: ''; position: absolute; left: 8px; top: 16px; bottom: 0;
      width: 2px; background: linear-gradient(to bottom, var(--primary), rgba(108,99,255,0.1));
    }
    .timeline-item { position: relative; }
    .timeline-dot {
      position: absolute; left: -44px; top: 24px;
      width: 18px; height: 18px; border-radius: 50%;
      background: var(--bg-dark); border: 3px solid var(--primary);
      transition: var(--transition); z-index: 1;
    }
    .timeline-dot.current {
      background: var(--gradient); border-color: transparent;
      box-shadow: 0 0 16px rgba(108,99,255,0.6);
    }
    .job-card { padding: 28px 32px; }
    .job-header {
      display: flex; justify-content: space-between;
      align-items: flex-start; gap: 24px; margin-bottom: 16px; flex-wrap: wrap;
    }
    .job-company-row { display: flex; align-items: center; gap: 10px; margin-bottom: 4px; }
    .job-company { font-size: 1.2rem; font-weight: 700; color: var(--text-primary); }
    .job-role { font-size: 1rem; font-weight: 500; color: var(--primary-light); }
    .current-badge {
      font-size: 0.7rem; font-weight: 600; padding: 3px 10px;
      background: rgba(108,99,255,0.2); border: 1px solid var(--primary);
      border-radius: 20px; color: var(--primary-light);
      font-family: 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: 0.5px;
    }
    .job-meta { display: flex; flex-direction: column; gap: 6px; text-align: right; }
    .job-meta span {
      font-size: 0.85rem; color: var(--text-muted);
      display: flex; align-items: center; gap: 6px; justify-content: flex-end;
    }
    .job-meta span i { color: var(--primary-light); font-size: 0.75rem; }
    .job-tech { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
    .tech-pill {
      padding: 4px 12px; font-size: 0.75rem; font-weight: 600;
      background: rgba(0,206,201,0.08); border: 1px solid rgba(0,206,201,0.25);
      border-radius: 20px; color: var(--secondary);
      font-family: 'JetBrains Mono', monospace;
    }
    .job-highlights { list-style: none; display: flex; flex-direction: column; gap: 10px; }
    .job-highlights li {
      position: relative; padding-left: 20px;
      font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;
    }
    .job-highlights li::before {
      content: '▸'; position: absolute; left: 0;
      color: var(--primary-light); font-size: 0.8rem;
    }
    @media (max-width: 768px) {
      .timeline { padding-left: 32px; }
      .timeline-dot { left: -30px; }
      .job-header { flex-direction: column; }
      .job-meta { text-align: left; }
      .job-meta span { justify-content: flex-start; }
    }
  `],
})
export class ExperienceComponent {

jobs: Job[] = [
  {
    company: 'Geo Chem Middle East LLC',
    role: 'Software Developer (AI-Native Full Stack Developer)',
    period: 'June 2025 – Present',
    location: 'Dubai, UAE',
    current: true,

    tech: [
      'Angular',
      'TypeScript',
      'Python',
      'FastAPI',
      'REST APIs',
      'LLMs',
      'RAG',
      'Vector Search',
      'AI Agents',
      'Microsoft Azure',
      'Docker',
      'Git',
      'CI/CD'
    ],

    highlights: [
      'Architected and developed an enterprise Laboratory Information Management System (LIMS) supporting multiple end-to-end laboratory workflows using Angular, TypeScript, and modern application architecture.',

      'Developed full-stack application features integrating frontend components, backend REST APIs, business logic, and database operations.',

      'Built reusable UI components, dynamic forms, data-intensive tables, and responsive interfaces to streamline laboratory operations.',

      'Designed and integrated REST API services using Python and FastAPI to support business workflows, data processing, and application integrations.',

      'Explored LLM-powered capabilities to enable intelligent document processing, contextual information retrieval, and automated workflows using RAG and vector search.',

      'Implemented AI-powered application features using LLM APIs, prompt engineering, embeddings, and AI agent workflows.',

      'Applied performance optimisation, authentication, JWT-based security, and role-based access control to improve application reliability and security.',

      'Leveraged Microsoft Azure, Docker, Git, and CI/CD practices to support scalable application deployment and maintenance.',

      'Collaborated with stakeholders to translate business requirements into scalable full-stack solutions and technical documentation.',

      'Leveraged AI-assisted development tools, including ChatGPT, Claude, and Cursor, for code generation, debugging, refactoring, test case creation, technical documentation, and development optimisation.',

      'Used AI-assisted workflows to accelerate feature development, troubleshoot complex issues, improve code quality, and reduce repetitive development tasks.'
    ]
  },

  {
    company: 'Zycus Infotech Private Limited',
    role: 'Software Developer (AI-Native Full Stack Developer)',
    period: 'June 2022 – June 2025',
    location: 'Bengaluru, India',
    current: false,

    tech: [
      'Angular',
      'React.js',
      'TypeScript',
      'Python',
      'FastAPI',
      'REST APIs',
      'GitHub Actions',
      'Bitbucket Pipelines',
      'Jasmine',
      'Karma',
      'Git',
      'CI/CD'
    ],

    highlights: [
      'Developed scalable full-stack web applications using Angular, React.js, TypeScript, Python, and FastAPI, building reusable components and backend services.',

      'Designed and developed RESTful APIs using Python and FastAPI to support application workflows, business logic, data processing, and frontend integration.',

      'Implemented backend services, database operations, API integrations, and application-level authentication to support scalable application architecture.',

      'Led Angular version migrations, resolving compatibility issues, updating dependencies, and optimising application performance.',

      'Developed application management and registration systems to streamline application lifecycle management and issue diagnostics.',

      'Built a QA automation dashboard providing test report tracking, real-time insights, and improved release visibility.',

      'Integrated frontend applications with backend APIs, implementing dynamic data fetching, state management, and responsive user interfaces.',

      'Implemented unit testing, API validation, debugging, and code reviews to improve software quality and maintainability.',

      'Leveraged AI-assisted development tools such as ChatGPT, Claude, and Cursor for code generation, debugging, refactoring, test creation, and development optimisation.',

      'Improved application performance through lazy loading, change detection optimisation, and efficient API communication.',

      'Configured CI/CD pipelines using GitHub Actions and Bitbucket Pipelines to automate builds, testing, and deployments.',

      'Collaborated with cross-functional teams to deliver scalable application solutions within Agile/Scrum environments.'
    ]
  },

  {
    company: 'Expeed Software Private Limited',
    role: 'Associate Software Developer',
    period: 'September 2021 – June 2022',
    location: 'Kochi, India',
    current: false,

    tech: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3'
    ],

    highlights: [
      'Assisted in the development and maintenance of Angular-based web applications, gaining hands-on experience building responsive and user-friendly interfaces.',

      'Collaborated with senior developers to implement new features and troubleshoot issues.',

      'Participated in code reviews and quality assurance processes, ensuring adherence to best practices.',

      'Supported the design and implementation of user interfaces, translating design mockups into functional web elements.'
    ]
  }
];

}
