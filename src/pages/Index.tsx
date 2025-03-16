
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
      {/* Enhanced gamer-themed background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Main dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gaming-darker via-gaming-dark to-gaming-darker"></div>
        
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-circuit-pattern"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[linear-gradient(90deg,rgba(57,255,20,0.03)_1px,transparent_1px),linear-gradient(0deg,rgba(57,255,20,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        {/* Digital noise effect */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay">
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+')]"></div>
        </div>
        
        {/* Ambient glow effects */}
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-neon-green/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute right-0 top-60 w-96 h-96 bg-neon-blue/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute left-1/4 bottom-0 w-72 h-72 bg-neon-green/5 rounded-full filter blur-[100px]"></div>
        
        {/* Terminal-like elements */}
        <div className="absolute top-20 left-10 text-neon-green/10 font-mono text-xs opacity-30 transform -rotate-12">
          &lt;div className="game-dev"&gt;
        </div>
        <div className="absolute bottom-60 right-20 text-neon-green/10 font-mono text-xs opacity-30 transform rotate-6">
          console.log("Hello World");
        </div>
        <div className="absolute top-1/3 right-40 text-neon-green/10 font-mono text-xs opacity-30 transform rotate-45">
          function render() { }
        </div>
        
        {/* Matrix-like falling code effect */}
        <div className="absolute top-0 left-1/4 h-full w-px bg-gradient-to-b from-transparent via-neon-green/20 to-transparent animate-matrix-fall opacity-30" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute top-0 left-2/4 h-full w-px bg-gradient-to-b from-transparent via-neon-green/20 to-transparent animate-matrix-fall opacity-30" style={{ animationDelay: "1.2s" }}></div>
        <div className="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-transparent via-neon-green/20 to-transparent animate-matrix-fall opacity-30" style={{ animationDelay: "0.8s" }}></div>
        
        {/* HUD-like elements */}
        <div className="absolute top-40 right-10 w-20 h-1 bg-neon-green/20 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-neon-green/40 animate-pulse"></div>
        </div>
        <div className="absolute bottom-80 left-20 w-20 h-1 bg-neon-green/20 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-neon-green/40 animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <div ref={projectsRef} className="mt-[-80px]">
          <ProjectGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
