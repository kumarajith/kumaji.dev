
import React from 'react';
import config from '../data/config.json';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white/60 text-sm">
              © {currentYear} {config.personalInfo.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-white/60 hover:text-neon-green text-sm transition-colors"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
