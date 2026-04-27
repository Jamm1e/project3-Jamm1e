import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiUsers, FiCode } from 'react-icons/fi';

function About() {
  const [ghStats, setGhStats] = useState(null);

  useEffect(() => {
    // Fetching Jamm1e's live profile data
    fetch('https://api.github.com/users/Jamm1e')
      .then(res => res.json())
      .then(data => setGhStats(data))
      .catch(err => console.error("GitHub fetch error:", err));
  }, []);

  const skills = [
    'React', 'JavaScript', 'Python', 'Java',
    'Spring Boot', 'TensorFlow', 'Firebase', 'PostgreSQL',
    'Node.js', 'Gemini API', 'REST APIs', 'Git',
  ];

  return (
    <section id="about">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="section-label">03. Who I Am</p>
        <h2 className="section-heading">About Me</h2>

        <div className="about-grid">
          <div className="about-body">
            <p>
              Hello! I'm Jammie-Ann, a <span>Software Engineer</span> who loves building products at the intersection of science and software. 
              Currently, I am a senior at <span>Pace University</span> pursuing my BS in Computer Science with a 3.89 GPA.
            </p>
            <p>
              My technical journey is fueled by a passion for learning and adaptability. Whether I'm developing 
              full-stack finance trackers or experimenting with machine learning pipelines, I focus on creating 
              clean, efficient, and impactful code.
            </p>
            
            <div className="skills-block">
              <h4>Recent Technologies:</h4>
              <ul className="skills-list">
                {skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* GitHub Live Stats Card (Option C) */}
            {ghStats && (
              <div className="github-profile-card">
                <img src={ghStats.avatar_url} alt="GitHub Avatar" className="gh-avatar" />
                <div className="gh-details">
                  <div className="gh-header">
                    <h4>GitHub Live Activity</h4>
                    <a href={ghStats.html_url} target="_blank" rel="noreferrer" className="gh-link">
                      <FiGithub /> @Jamm1e
                    </a>
                  </div>
                  <div className="gh-stats-row">
                    <span><FiUsers /> {ghStats.followers} Followers</span>
                    <span><FiCode /> {ghStats.public_repos} Repositories</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="about-image-wrapper">
            <div className="image-stack">
              <div className="image-accent"></div>
              {/* You can place a professional headshot here */}
              <div className="image-placeholder">
                <FiCode size={50} color="var(--cyan)" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;