
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import SocialLinks from '../components/SocialLinks';
import Footer from '../components/Footer';
import SecretButton from '../components/SecretButton';

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
    <div className="relative">
      {/* Background gradients */}
      <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-neon-green/5 to-transparent pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-1/3 h-64 bg-gradient-to-t from-neon-blue/5 to-transparent pointer-events-none"></div>
      
      {/* Gaming background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-20 top-1/3 w-40 h-40 opacity-10">
          <div className="w-full h-full bg-neon-green rounded-full animate-pulse blur-xl"></div>
        </div>
        <div className="absolute left-10 bottom-1/4 w-16 h-16 opacity-10">
          <div className="w-full h-full bg-neon-blue rounded-full animate-pulse delay-500 blur-xl"></div>
        </div>
        <div className="absolute left-1/2 top-2/3 w-24 h-24 opacity-5">
          <div className="w-full h-full bg-neon-pink rounded-full animate-pulse delay-1000 blur-xl"></div>
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
