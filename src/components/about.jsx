import '../css/About.css';

export default function About() {
  const highlights = [
    { icon: '🎓', label: "Dean's List", detail: 'First & Second Honors · Tau Sigma' },
    { icon: '🤖', label: 'AI Developer', detail: 'Gemini APIs, TensorFlow, Prompt Engineering' },
    { icon: '🖥️', label: 'Full-Stack', detail: 'React · Spring Boot · PostgreSQL' },
    { icon: '🏥', label: 'Helpdesk Rep', detail: 'IT Support · Pace University' },
  ];

  return (
    <div className="page">
      <p className="section-label fade-up">Who I Am</p>
      <h2 className="section-title fade-up delay-1">About Me</h2>
      <div className="section-divider fade-up delay-1" />

      <div className="about-grid fade-up delay-2">
        <div className="about-bio">
          <p>
            Hi! I'm <strong>Jammie-Ann</strong>, a Computer Science student at Pace University's
            Seidenberg School, graduating May 2026. I'm passionate about using technology to build
            meaningful experiences. I don’t have all the answers yet, but I’m incredibly passionate about
            the "why" behind the work and eager to grow alongside a forward-thinking team.
          </p>
          <p>
            I’ve always been drawn to the intersection of different worlds. While my background is in Computer
             Science, I’ve never been satisfied staying in just one lane. I’m just as likely to be found diving 
             into a complex Neurobiology textbook as I am debugging a backend issue. For me, the most exciting 
             part of being a developer isn't writing code, it's the constant process of learning a new domain and 
             figuring out how technology can make it better.
          </p>
          <p>
            Outside of code, I care deeply about mental health advocacy and emergency preparedness;
            values that inspired my nonprofit web project{' '}
            <em>In the Face of Catastrophe</em>.
          </p>

          <div className="about-certs">
            <p className="section-label" style={{ marginBottom: '12px' }}>Certifications</p>
            <ul className="cert-list">
              <li>Hewlett Packard Enterprise · Software Engineering <span className="cert-year">2026</span></li>
              <li>Goldman Sachs · Operations <span className="cert-year">2025</span></li>
              <li>J.P. Morgan Chase · Advanced SWE Simulation <span className="cert-year">2025</span></li>
              <li>BCG · Generative AI Simulation <span className="cert-year">2024</span></li>
            </ul>
          </div>
        </div>

        <div className="about-highlights">
          {highlights.map((h) => (
            <div key={h.label} className="card highlight-card">
              <span className="highlight-icon">{h.icon}</span>
              <div>
                <p className="highlight-label">{h.label}</p>
                <p className="highlight-detail">{h.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
