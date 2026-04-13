import { Link } from 'react-router-dom';
import '../css/Home.css';

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <p className="section-label fade-up">Computer Science · Pace University · Class of 2026</p>
          <h1 className="hero-name fade-up delay-1">
            Jammie-Ann<br />
            <span className="hero-name-accent">Matthias</span>
          </h1>
          <p className="hero-tagline fade-up delay-2">
            Full-Stack Developer &amp; AI Enthusiast building thoughtful software
            that makes a difference.
          </p>
          <div className="hero-cta fade-up delay-3">
            <Link to="/projects" className="btn btn-primary">View My Projects</Link>
            <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
          </div>
        </div>

        {/* Decorative grid */}
        <div className="hero-grid" aria-hidden="true">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="grid-dot" style={{ animationDelay: `${(i * 0.07).toFixed(2)}s` }} />
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats fade-up delay-4">
        <div className="stat">
          <span className="stat-number">3.89</span>
          <span className="stat-label">GPA</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-number">3</span>
          <span className="stat-label">Projects</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-number">4</span>
          <span className="stat-label">Certifications</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-number">Dean's</span>
          <span className="stat-label">List Honoree</span>
        </div>
      </section>
    </div>
  );
}
