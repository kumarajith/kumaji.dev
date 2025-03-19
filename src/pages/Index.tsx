
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SecretButton from '../components/SecretButton';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Handle initial page load animations
    const handleInitialLoad = () => {
      document.body.classList.add('loaded');
    };
    
    window.addEventListener('load', handleInitialLoad);
    return () => window.removeEventListener('load', handleInitialLoad);
  }, []);

  return (
    <div className="relative">
      {/* Enhanced background with tech/space theme */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gaming-darker bg-fixed opacity-25"></div>
        
        {/* Top glow */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-neon-blue/20 to-transparent"></div>
        
        {/* Bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-neon-blue/20 to-transparent"></div>
        
        {/* Star field overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIxMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgcj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMiIgZD0iTTEwMCA1MGExIDEgMCAxIDEgMC0yIDEgMSAwIDAgMSAwIDJabTQwIDE1MGExIDEgMCAxIDEgMC0yIDEgMSAwIDAgMSAwIDJabTM1MCA4MGExIDEgMCAxIDEgMC0yIDEgMSAwIDAgMSAwIDJabTQwMC01MGExIDEgMCAxIDEgMC0yIDEgMSAwIDAgMSAwIDJabS0xNTAgMzUwYTEgMSAwIDEgMSAwLTIgMSAxIDAgMCAxIDAgMlptLTMwMC0xNTBhMSAxIDAgMSAxIDAtMiAxIDEgMCAwIDEgMCAyWm04MDAgMTgwYTEgMSAwIDEgMSAwLTIgMSAxIDAgMCAxIDAgMlptLTYwLTMwYTEgMSAwIDEgMSAwLTIgMSAxIDAgMCAxIDAgMlptLTcwLTEwYTEgMSAwIDEgMSAwLTIgMSAxIDAgMCAxIDAgMlptLTY1MCAxMGExIDEgMCAxIDEgMC0yIDEgMSAwIDAgMSAwIDJabS01MC0xMGExIDEgMCAxIDEgMC0yIDEgMSAwIDAgMSAwIDJabTQ1MCAyMGExIDEgMCAxIDEgMC0yIDEgMSAwIDAgMSAwIDJabTUwIDEwYTEgMSAwIDEgMSAwLTIgMSAxIDAgMCAxIDAgMlptLTQwMC0zMGExIDEgMCAxIDEgMC0yIDEgMSAwIDAgMSAwIDJabTg1MCAtMjBhMSAxIDAgMSAxIDAtMiAxIDEgMCAwIDEgMCAyWm0tNTAtNGExIDEgMCAxIDEgMC0yIDEgMSAwIDAgMSAwIDJaIi8+PC9nPjwvc3ZnPg==')] opacity-70"></div>
        
        {/* Digital grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(57,255,20,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(57,255,20,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Subtle tech elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-neon-blue/10 opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full border border-neon-green/10 opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-neon-blue/5 opacity-10"></div>
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
