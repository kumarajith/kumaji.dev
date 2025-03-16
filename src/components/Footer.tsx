
import React from 'react';
import { Github, Youtube, Twitch, Twitter, Linkedin, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import config from '../data/config.json';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" />,
  youtube: <Youtube className="h-5 w-5" />,
  twitch: <Twitch className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
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
        
        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {config.social.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="gaming-card flex items-center gap-2 px-4 py-2 hover:bg-gaming-accent/10 transition-all group"
            >
              <span className="text-white/70 group-hover:text-neon-green transition-colors">
                {iconMap[item.icon.toLowerCase()]}
              </span>
              <span className="font-gaming text-white/90 group-hover:text-white transition-colors">
                {item.platform}
              </span>
            </a>
          ))}
        </div>
        
        {/* Secret button integrated in footer */}
        <div className="absolute bottom-16 right-5 md:bottom-8 md:right-8 opacity-30 hover:opacity-100 transition-opacity duration-500">
          <Link
            to="/hobbies"
            className="block p-3 transition-all duration-300 hover:scale-110 relative"
            aria-label="Secret area"
          >
            <Gamepad2 className="h-8 w-8 text-neon-green animate-pulse" />
            <span className="absolute inset-0 border border-neon-green/20 rounded-full animate-ping"></span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
