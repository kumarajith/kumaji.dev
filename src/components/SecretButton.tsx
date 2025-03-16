
import React, { useState } from 'react';
import { Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SecretButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="fixed bottom-8 right-8 z-30">
      <Link
        to="/hobbies"
        className="relative block p-3 bg-gaming-card/80 border border-neon-green/30 rounded-full transition-all duration-300 hover:scale-110"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Gamepad2 
          className={`h-6 w-6 text-neon-green transition-all duration-300 ${
            isHovered ? 'animate-pulse' : ''
          }`} 
        />
        
        {/* Ripple effect */}
        <span className="absolute inset-0 border border-neon-green/20 rounded-full animate-ping"></span>
        
        {/* Tooltip */}
        <span 
          className={`absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gaming-card/90 border border-neon-green/30 text-white text-xs py-1 px-3 rounded transition-opacity duration-300 whitespace-nowrap ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Secret area
        </span>
      </Link>
    </div>
  );
};

export default SecretButton;
