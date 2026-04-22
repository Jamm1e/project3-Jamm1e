import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section id="home">
      <div className="hero-grid-overlay" />
      <div className="hero-orb" />

      <div className="hero-content">
        <span className="hero-greeting">Hi, my name is</span>

        <h1 className="hero-name">Jammie-Ann Matthias.</h1>

        <p className="hero-tagline">
          <TypeAnimation
            sequence={[
              'I build things for the web.',
              1500,
              'I craft meaningful applications.',
              1500,
              'I love AI, HealthTech & Fintech.',
              1500,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
          />
        </p>

        <p className="hero-desc">
          I'm a Computer Science student and aspiring software architect passionate about
          building beautiful, meaningful applications that make a real difference —
          especially at the intersection of AI, healthcare, and finance.
        </p>

        <Link to="/projects" className="hero-cta">
          View my work
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default Home;
