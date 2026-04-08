import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './components/about';
import Skills from './components/skills';
import Home from './components/home';
import Contact from './components/contact';


export default function App() {
  return (
    <>

      <BrowserRouter>
            {/* Navigation */}
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/skills">Skills</Link> |{" "}
                <Link to="/contact">Contact</Link> |{" "}
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
        
    </>
  );
}