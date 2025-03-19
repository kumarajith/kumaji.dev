
import React from 'react';
import config from '../data/config.json';
import { Github, Youtube, Twitch, Twitter, Linkedin, FileDown } from 'lucide-react';

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
    <footer className="py-6 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white/60 text-sm">
              © {currentYear} {config.personalInfo.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Resume Download */}
            <a
              href="/ajith_kumar.pdf"
              download
              className="text-white/60 hover:text-neon-green transition-colors flex items-center gap-1 text-sm"
              title="Download Resume"
            >
              <FileDown className="h-4 w-4" />
              <span>Resume</span>
            </a>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {config.social.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-neon-green transition-colors"
                  title={item.platform}
                >
                  {iconMap[item.icon.toLowerCase()]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
