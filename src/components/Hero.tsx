
import React from 'react';
import config from '../data/config.json';

const Hero: React.FC = () => {
  const { name, title, description, photo } = config.personalInfo;

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
