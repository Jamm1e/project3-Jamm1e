import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiStar, FiEye } from 'react-icons/fi';

export default function ProjectCard(project) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* ── Project Card ── */}
      <div className="project-card" onClick={() => setIsModalOpen(true)}>
        <div className="card-top-bar">
          <FiFolder className="card-folder-icon" />
          <div className="card-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                <FiGithub />
              </a>
            )}
            {/* Show external link icon if demo exists */}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="demo-icon-link">
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.description}</p>
        
        <ul className="card-tech">
          {project.tech.split(',').map(t => <li key={t}>{t.trim()}</li>)}
        </ul>

        {project.demo && (
          <div className="card-demo-tag">Live Demo Available</div>
        )}
      </div>

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <motion.div 
              className="modal-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="section-heading">{project.title}</h3>
              <p className="modal-desc">{project.description}</p>
              
              {project.isGitHubRepo && (
                <div className="modal-stats">
                  <div className="stat"><FiStar /> {project.stars || 0}</div>
                  <div className="stat"><FiEye /> {project.watchers || 0}</div>
                  <div className="stat">❗ {project.issues || 0}</div>
                </div>
              )}
              
              <div className="modal-footer" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="hero-cta">
                    <FiGithub /> View Source
                  </a>
                )}
                {/* Prominent Demo Button */}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="demo-cta">
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}