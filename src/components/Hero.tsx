
import React from 'react';
import config from '../data/config.json';

const Hero: React.FC = () => {
  const { name, title, description, photo } = config.personalInfo;

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-8 px-4">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left animate-fade-in">
            <div className="inline-block mb-2">
              <span className="badge bg-gaming-accent/20 text-neon-green">
                <span className="mr-1">&#60;</span>
                {title}
                <span className="ml-1">/&#62;</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-gaming font-bold text-white">
              Hi, I'm <span className="text-neon-green text-glow">{name.split(' ')[0]}</span>
            </h1>
            <p className="text-lg text-white/80 max-w-lg mx-auto lg:mx-0">
              {description}
            </p>
            <div className="pt-4">
              <a 
                href="#projects" 
                className="btn-primary px-6 py-3 rounded-md inline-flex items-center gap-2"
              >
                View Projects
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-neon-green/10 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Hexagonal frame for photo */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 to-neon-blue/20 rounded-lg rotate-45 transform scale-[0.7] animate-pulse"></div>
                <div className="absolute inset-0 border-2 border-neon-green/30 rounded-lg rotate-45 transform scale-[0.7]"></div>
                
                {/* Photo container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-neon-green/50 shadow-neon-sm">
                    <img 
                      src={photo} 
                      alt={name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-green rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-neon-blue rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-1/2 -right-3 w-3 h-3 bg-neon-green/80 rounded-full animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
