import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'; 
import PageTransition from './components/PageTransition';
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { projectsData } from './data/projectsData'; 
import './theme.css';

function App() {
  const [isLight, setIsLight] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  // Theme glide logic
  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [isLight]);

  // Dynamic Browser Tab Title
  useEffect(() => {
    const path = location.pathname.substring(1);
    const pageName = path.charAt(0).toUpperCase() + path.slice(1);
    document.title = pageName ? `${pageName} | Jammie-Ann Matthias` : "Jammie-Ann Matthias | Portfolio";
  }, [location]);

  return (
    <div className="app-container">
      <MyNavbar 
        isLight={isLight} 
        setIsLight={setIsLight} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        projectsData={projectsData}
      />
      
      <main className="content-area">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/projects" element={
              <PageTransition>
                <Projects searchQuery={searchQuery} projectsData={projectsData} />
              </PageTransition>
            } />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <footer className="footer">
        <p>Designed & Built by <a href="https://github.com/Jamm1e" target="_blank" rel="noopener noreferrer">Jammie-Ann Matthias</a></p>
      </footer>
    </div>
  );
}

export default App;