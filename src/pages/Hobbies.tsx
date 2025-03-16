
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Hobbies: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gaming-dark">
      <div className="text-center max-w-lg">
        <h1 className="text-3xl font-gaming font-bold text-neon-green mb-4 animate-pulse">
          Secret Area Discovered!
        </h1>
        <p className="text-white/80 mb-6">
          This page will contain details about my hobbies and personal interests soon.
        </p>
        <div className="gaming-card inline-block p-6 border border-neon-green/30">
          <div className="text-xl font-gaming text-white mb-4">Coming Soon</div>
          <div className="w-16 h-1 bg-neon-green mx-auto mb-4 animate-pulse"></div>
          <p className="text-white/60 text-sm mb-6">
            This section is under development. Check back later!
          </p>
        </div>
        <div className="mt-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-neon-green hover:text-neon-green/80 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Return to portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
