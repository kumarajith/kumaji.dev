
import React from 'react';
import { Github, Youtube, Twitch, Twitter, Linkedin } from 'lucide-react';
import config from '../data/config.json';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" />,
  youtube: <Youtube className="h-5 w-5" />,
  twitch: <Twitch className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />
};

const SocialLinks: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="section-title">Connect</h2>
        
        <div className="bg-gaming-card border border-gaming-accent/20 rounded-lg p-8 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-white/80 mb-6">
              Find me on these platforms and let's connect
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {config.social.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gaming-card flex items-center gap-2 px-4 py-3 hover:bg-gaming-accent/10 transition-all group"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
