import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import GlobalSearch from './GlobalSearch';

export default function MyNavbar({ isLight, setIsLight, searchQuery, setSearchQuery, projectsData }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="jme-nav">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>JME</Link>

      <div className="nav-right-group" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        
        {/* MUI Global Search */}
        <GlobalSearch 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          projectsData={projectsData} 
        />

        {/* Visual Day/Night Toggle */}
        <div 
          className="theme-switch-wrapper" 
          onClick={() => setIsLight(!isLight)}
          aria-label="Toggle dark and light mode"
        >
          <div className="switch-handle" />
        </div>

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {['home','projects','about','contact'].map(id => (
          <li key={id}>
            <NavLink 
              to={id === 'home' ? '/' : `/${id}`} 
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              {id}
            </NavLink>
          </li>
        ))}
        <li>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}