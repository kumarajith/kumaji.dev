
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import SocialLinks from '../components/SocialLinks';
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
      {/* Background gradients */}
      <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-neon-green/5 to-transparent pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-1/3 h-64 bg-gradient-to-t from-neon-blue/5 to-transparent pointer-events-none"></div>
      
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid />
        <SocialLinks />
      </main>
      <Footer />
      <SecretButton />
    </div>
  );
};

export default Index;
