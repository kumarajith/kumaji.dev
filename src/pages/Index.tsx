
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
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
      {/* Enhanced background with gaming theme */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gaming-darker bg-circuit-pattern bg-fixed opacity-25"></div>
        
        {/* Top glow */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-neon-green/10 to-transparent"></div>
        
        {/* Bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-neon-blue/10 to-transparent"></div>
        
        {/* Dot grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        
        {/* Random glowing "pixels" */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-neon-green blur-sm animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 rounded-full bg-neon-blue blur-sm animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 rounded-full bg-neon-pink blur-sm animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-neon-green blur-sm animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-neon-green blur-sm animate-pulse"></div>
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid />
      </main>
      <Footer />
      <SecretButton />
    </div>
  );
};

export default Index;
