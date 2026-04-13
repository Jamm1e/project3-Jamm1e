import '../css/Projects.css';

const projects = [
  {
    title: 'Finance Tracker & AI Insight Generator',
    description:
      'A full-stack finance application with real-time data processing and AI-generated insights. I designed and built the entire system — from PostgreSQL schemas to RESTful APIs — giving users actionable intelligence about their spending habits.',
    tech: ['React', 'Bootstrap', 'Spring Boot', 'PostgreSQL', 'Firebase', 'Node.js', 'Gemini API'],
    highlight: 'Featured Project',
    links: { github: 'https://github.com/Jamm1e' },
  },
  {
    title: 'Multilingual Chatbot & Iris Classifier',
    description:
      'A real-time chatbot powered by Gemini 2.5 Flash API that translates between world languages, paired with an Iris flower classification model built with TensorFlow and Scikit-learn.',
    tech: ['Python', 'Gemini API', 'TensorFlow', 'Scikit-learn'],
    highlight: 'AI / ML',
    links: { github: 'https://github.com/Jamm1e' },
  },
  {
    title: 'In the Face of Catastrophe',
    description:
      'A nonprofit website promoting emergency preparedness and mental health resources. Designed to align with the organization\'s mission of resilience — a project close to my heart.',
    tech: ['HTML', 'Bootstrap', 'JavaScript', 'CSS'],
    highlight: 'Nonprofit',
    links: { github: 'https://github.com/Jamm1e' },
  },
];

export default function Projects() {
  return (
    <div className="page">
      <p className="section-label fade-up">What I've Built</p>
      <h2 className="section-title fade-up delay-1">Projects</h2>
      <div className="section-divider fade-up delay-1" />

      <div className="projects-list">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`card project-card fade-up delay-${Math.min(i + 2, 4)}`}
          >
            <div className="project-header">
              <span className="badge project-badge">{project.highlight}</span>
              <div className="project-links">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline project-link-btn"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary project-link-btn"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
