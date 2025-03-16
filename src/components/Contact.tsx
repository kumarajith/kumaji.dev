
import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="section-title mb-8">Contact</h2>
        
        <div className="bg-gaming-card border border-gaming-accent/20 rounded-lg p-8 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-white/80 mb-6">
              Feel free to reach out to me at
            </p>
            
            <div className="inline-flex items-center justify-center gap-2 px-4 py-3 gaming-card hover:bg-gaming-accent/10 transition-all group">
              <Mail className="h-5 w-5 text-white/70 group-hover:text-neon-green transition-colors" />
              <a 
                href="mailto:kumarajith1996@gmail.com" 
                className="font-gaming text-white/90 group-hover:text-white transition-colors"
              >
                kumarajith1996@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
