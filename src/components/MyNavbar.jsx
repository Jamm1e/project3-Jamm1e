import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// function MyNavbar() {
//   const [open, setOpen] = useState(false);

//   const links = [
//     { name: 'Home', path: '/' },
//     { name: 'Projects', path: '/projects' },
//     { name: 'About', path: '/about' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   return (
//     <nav className="jme-nav">
//       <Link to="/" className="brand" onClick={() => setOpen(false)}>JME</Link>

//       <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
//         <span /><span /><span />
//       </button>

//       <ul className={`nav-links ${open ? 'open' : ''}`}>
//         {links.map((link) => (
//           <li key={link.path}>
//             <NavLink 
//               to={link.path} 
//               onClick={() => setOpen(false)}
//               className={({ isActive }) => (isActive ? 'active-link' : '')}
//             >
//               {link.name}
//             </NavLink>
//           </li>
//         ))}
//         <li>
//           <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
//             Resume
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default MyNavbar;


// 2
// export default function MyNavbar({ isLight, setIsLight }) {
//   const [open, setOpen] = useState(false);

//   const links = [
//     { name: 'Home', path: '/' },
//     { name: 'Projects', path: '/projects' },
//     { name: 'About', path: '/about' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   return (
//     <nav className="jme-nav">
//       <Link to="/" className="brand">JME</Link>

//       <div className="nav-right-group" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
//         {/* Theme Toggle Button */}
//         <button 
//           onClick={() => setIsLight(!isLight)} 
//           className="theme-toggle"
//           aria-label="Toggle Theme"
//           style={{ background: 'none', border: 'none', color: 'var(--cyan)', cursor: 'pointer', fontSize: '1.2rem' }}
//         >
//           {isLight ? '🌙' : '☀️'}
//         </button>

//         <button className="hamburger" onClick={() => setOpen(!open)}>
//           <span /><span /><span />
//         </button>
//       </div>

//       <ul className={`nav-links ${open ? 'open' : ''}`}>
//         {links.map((link) => (
//           <li key={link.path}>
//             <NavLink 
//               to={link.path} 
//               onClick={() => setOpen(false)}
//               className={({ isActive }) => (isActive ? 'active-link' : '')}
//             >
//               {link.name}
//             </NavLink>
//           </li>
//         ))}
//         <li>
//           <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
//             Resume
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }


export default function MyNavbar({ isLight, setIsLight }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="jme-nav">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>JME</Link>

      <div className="nav-right-group" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        
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