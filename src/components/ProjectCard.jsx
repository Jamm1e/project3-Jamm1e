// export default function ProjectCard({ title, description, tech, github, demo, isGitHubRepo }) {
//   const technologies = tech.split(',').map(t => t.trim());

//   return (
//     <div className="project-card">
//       <div className="card-top-bar">
//         <span className="card-folder-icon">{isGitHubRepo ? '' : '⬡'}</span>
//         <div className="card-links">
//           {github && (
//             <a href={github} target="_blank" rel="noopener noreferrer" className="repo-link-btn">
//               {isGitHubRepo ? "View Repo" : "GitHub"}
//             </a>
//           )}
//         </div>
//       </div>

//       <h3 className="card-title">{title}</h3>
//       <p className="card-desc">{description}</p>

//       <ul className="card-tech">
//         {technologies.map((t, i) => <li key={i}>{t}</li>)}
//       </ul>
//     </div>
//   );
// }

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiStar, FiEye } from 'react-icons/fi'; // npm install react-icons

export default function ProjectCard(project) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="project-card" onClick={() => setIsModalOpen(true)}>
        <div className="card-top-bar">
          <FiFolder className="card-folder-icon" />
          <div className="card-links">
            {project.github && <FiGithub />}
          </div>
        </div>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.description}</p>
        <ul className="card-tech">
          {project.tech.split(',').map(t => <li key={t}>{t.trim()}</li>)}
        </ul>
      </div>

      {/* Detail Modal */}
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
                  <div className="stat"><FiStar /> Stars: {project.stars}</div>
                  <div className="stat"><FiEye /> Watchers: {project.watchers}</div>
                  <div className="stat">❗ Issues: {project.issues}</div>
                </div>
              )}
              
              <div className="modal-footer">
                <a href={project.github} target="_blank" rel="noreferrer" className="hero-cta">
                  <FiGithub /> View Source
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}