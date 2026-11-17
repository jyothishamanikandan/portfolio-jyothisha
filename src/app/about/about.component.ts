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
            <h2 class="section-title">Building Intelligent Digital Solutions</h2>

            <p>
              I'm an <strong>AI-Native Full Stack Engineer</strong> based in
              <strong>Dubai, UAE</strong>, with over
              <strong>5 years of experience</strong> in software development,
              specializing in enterprise frontend architecture and scalable
              web applications.
            </p>

            <p>
              My professional experience includes developing enterprise
              applications using <strong>Angular, TypeScript, JavaScript,
              RxJS and NgRx</strong>. At Geo Chem, I contributed to a
              Laboratory Information Management System (LIMS), supporting
              end-to-end laboratory workflows, operational processes and
              business requirements.
            </p>

            <p>
              I'm expanding my full-stack capabilities with
              <strong>Python, FastAPI, React and PostgreSQL</strong>,
              while exploring <strong>Generative AI, Large Language Models
              (LLMs), Retrieval-Augmented Generation (RAG), vector search
              and AI agents</strong>.
            </p>

            <p>
              My goal is to combine strong frontend engineering foundations
              with backend development and AI technologies to build
              intelligent, scalable and production-ready applications.
            </p>

            <div class="about-details">
              <div class="detail-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>Dubai, United Arab Emirates</span>
              </div>

              <div class="detail-item">
                <i class="fas fa-envelope"></i>
                <a href="mailto:Jyothishamanikandan@gmail.com">
                  Jyothishamanikandan&#64;gmail.com
                </a>
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
              <i class="fas fa-code"></i>
              <h4>Frontend Engineering</h4>
              <p>
                5+ years of experience building enterprise applications
                using Angular, TypeScript, RxJS and NgRx.
              </p>
            </div>

            <div class="highlight-card card">
              <i class="fas fa-server"></i>
              <h4>Backend Development</h4>
              <p>
                Building backend development skills with Python,
                FastAPI, REST APIs and PostgreSQL.
              </p>
            </div>

            <div class="highlight-card card">
              <i class="fas fa-brain"></i>
              <h4>Generative AI</h4>
              <p>
                Exploring LLM integrations, RAG pipelines,
                embeddings, vector search and AI agents.
              </p>
            </div>

            <div class="highlight-card card">
              <i class="fas fa-cloud"></i>
              <h4>Cloud & DevOps</h4>
              <p>
                Developing knowledge of Microsoft Azure,
                Docker and CI/CD deployment workflows.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  `,

  styles: [`
    .about-section {
      background: var(--bg-dark);
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: start;
    }

    .about-text p {
      color: var(--text-secondary);
      margin-bottom: 20px;
      line-height: 1.8;
    }

    .about-text p strong {
      color: var(--text-primary);
    }

    .about-details {
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 12px;
      color: var(--text-secondary);
      font-size: 0.9rem;
    }

    .detail-item i {
      color: var(--primary-light);
      width: 16px;
      text-align: center;
    }

    .detail-item a {
      color: var(--text-secondary);
      transition: color 0.2s;
    }

    .detail-item a:hover {
      color: var(--primary-light);
    }

    .about-highlights {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .highlight-card {
      padding: 24px;
      text-align: center;
    }

    .highlight-card i {
      font-size: 1.8rem;
      color: var(--primary-light);
      margin-bottom: 12px;
      display: block;
    }

    .highlight-card h4 {
      font-size: 1rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 8px;
    }

    .highlight-card p {
      font-size: 0.85rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    @media (max-width: 900px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
    }

    @media (max-width: 500px) {
      .about-highlights {
        grid-template-columns: 1fr;
      }
    }
  `],
})
export class AboutComponent {}
