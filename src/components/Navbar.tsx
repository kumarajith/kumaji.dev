
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import config from '../data/config.json';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 ${
        isScrolled ? 'bg-gaming-darker/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-gaming font-bold text-white hover:text-neon-green transition-colors group"
          >
            <span className="inline-block transition-transform group-hover:scale-105">
              {config.personalInfo.name.split(' ')[0]}
              <span className="text-neon-green">.</span>
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="font-gaming text-white/80 hover:text-neon-green link-hover">
              Projects
            </a>
            <a href="#contact" className="font-gaming text-white/80 hover:text-neon-green link-hover">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="block md:hidden text-white hover:text-neon-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-gaming-darker/95 backdrop-blur-lg transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          <a 
            href="#projects" 
            className="font-gaming text-2xl text-white hover:text-neon-green"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="font-gaming text-2xl text-white hover:text-neon-green"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
