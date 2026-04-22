function About() {
  const skills = [
    'React', 'JavaScript', 'Python', 'Java',
    'Spring Boot', 'TensorFlow', 'Firebase', 'PostgreSQL',
    'Node.js', 'Gemini API', 'REST APIs', 'Git',
  ];

  return (
    <section id="about">
      <p className="section-label">Who I Am</p>
      <h2 className="section-heading">About Me</h2>

      <div className="about-grid">
        <div className="about-body">
          <p>
            I'm a <span>Computer Science student</span> with a passion for building meaningful
            software — especially where technology meets human impact. I thrive on challenges
            that push me outside my comfort zone, because that's where real growth happens.
          </p>
          <p>
            My interests span <span>AI, healthcare, fintech, and social-impact tech</span>. Whether
            it's training a neural network, architecting a RESTful backend, or designing a
            full-stack product from scratch, I bring curiosity and persistence to every project.
          </p>
          <p>
            Currently building with React, Spring Boot, Python, and machine learning libraries —
            always hungry to learn more and solve problems with code.
          </p>
        </div>

        <div className="skills-block">
          <h4>Technologies I work with</h4>
          <ul className="skills-list">
            {skills.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
