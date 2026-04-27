import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

function Projects({ searchQuery, projectsData: featuredProjects }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Fetching most recent public repos for Jamm1e
        const response = await fetch('https://api.github.com/users/Jamm1e/repos?sort=updated&per_page=6');
        const data = await response.json();
        
        // Mapping GitHub data to match your ProjectCard format
        const githubProjects = data.map(repo => ({
          title: repo.name,
          description: repo.description || "No description provided.",
          tech: repo.language || "Web",
          github: repo.html_url,
          isGitHubRepo: true // Flag to distinguish dynamic repos
        }));

        setRepos(githubProjects);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Combine featured projects with GitHub repos, avoiding duplicates
  const allProjects = [...featuredProjects, ...repos];
  
  const filteredProjects = allProjects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tech.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="projects">
      <p className="section-label">02. What I've Built</p>
      <h2 className="section-heading">Projects & Repos</h2>

      <div className="projects-grid">
        {loading ? (
          <p className="no-results">Loading latest repos...</p>
        ) : filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))
        ) : (
          <div className="no-results">
            <p>No matches for "{searchQuery}"</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;