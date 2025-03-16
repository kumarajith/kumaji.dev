
import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-gaming font-bold text-center mb-8 text-white">
          <span className="text-neon-green text-glow">Contact</span>
        </h2>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/80 flex items-center justify-center gap-2">
            <Mail className="h-5 w-5 text-neon-green" />
            Reach out to me at <a href="mailto:kumarajith1996@gmail.com" className="text-neon-green hover:underline">kumarajith1996@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
