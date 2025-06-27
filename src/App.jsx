import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ProtfolioShowcase from './components/PortfolioShowcase/PortfolioShowcase';
import Contact from './components/Contact/Contact';

const SECTIONS = ['hero', 'about', 'projects', 'contact'];

function App() {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const sectionElements = SECTIONS.map(id => document.getElementById(id));
    function onScroll() {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(SECTIONS[i]);
          break;
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    onScroll(); 
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <NavBar activeId={activeId} />
      <Hero />
      <About />
      <ProtfolioShowcase />
      <Contact />
    </>
  );
}

export default App;
