
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href === '#projects' && projectsRef.current) {
          projectsRef.current.scrollIntoView({
            behavior: 'smooth'
          });
        } else {
          const target = document.querySelector(href as string);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Immersive gamer-themed background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Main dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gaming-darker via-gaming-dark to-gaming-darker"></div>
        
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-circuit-pattern"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[linear-gradient(90deg,rgba(57,255,20,0.03)_1px,transparent_1px),linear-gradient(0deg,rgba(57,255,20,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        {/* Ambient glow effects */}
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-neon-green/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute -right-32 top-1/3 w-96 h-96 bg-neon-blue/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-neon-green/5 rounded-full filter blur-[100px]"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 right-1/5 w-1 h-1 bg-neon-green rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse opacity-60 animation-delay-700"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-neon-green rounded-full animate-pulse opacity-50 animation-delay-1500"></div>
        <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-neon-green/50 rounded-full animate-pulse opacity-40 animation-delay-300"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-neon-blue/50 rounded-full animate-pulse opacity-30 animation-delay-1000"></div>
        
        {/* Code-like elements */}
        <div className="absolute top-40 left-10 text-neon-green/10 font-mono text-xs opacity-30 transform -rotate-12">
          &lt;div className="game-dev"&gt;
        </div>
        <div className="absolute bottom-60 right-20 text-neon-green/10 font-mono text-xs opacity-30 transform rotate-6">
          console.log("Hello World");
        </div>
        <div className="absolute top-1/3 right-40 text-neon-green/10 font-mono text-xs opacity-30 transform rotate-90">
          function render() { }
        </div>
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <div ref={projectsRef}>
          <ProjectGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
