import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'; 
import PageTransition from './components/PageTransition';
import './theme.css';
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [isLight, setIsLight] = useState(false);
  const location = useLocation();

  // Theme switcher function
  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [isLight]);


  return (
    <div className="app-container">
      {/* Pass the state to the Navbar so we can toggle it there */}
      <MyNavbar isLight={isLight} setIsLight={setIsLight} />
      
      <main className="content-area">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
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