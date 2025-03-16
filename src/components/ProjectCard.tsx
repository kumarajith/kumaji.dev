
import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, MonitorSmartphone } from 'lucide-react';

interface Project {
  id: number;
  year: string;
  title: string;
  platforms: string[];
  tech: string[];
  description: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const getPlatformIcons = (platforms: string[]) => {
    return platforms.join(', ');
  };

  return (
    <div 
      className={`gaming-card group overflow-hidden animate-fade-in`}
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="p-6 transition-all duration-300">
        {/* Card Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-neon-green" />
            <span className="text-neon-green/80 font-mono text-sm">{project.year}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MonitorSmartphone className="h-4 w-4 text-white/60" />
            <span className="text-white/60 font-mono text-sm">{getPlatformIcons(project.platforms)}</span>
          </div>
        </div>
        
        {/* Card Title */}
        <h3 className="text-xl font-gaming font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
          {project.title}
        </h3>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="badge text-xs">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span key={index} className="text-white/70 bg-white/5 px-2 py-1 rounded text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Description - Collapsed/Expanded */}
        <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-96' : 'max-h-20'}`}>
          <p className="text-white/70 text-sm">
            {project.description}
          </p>
        </div>
        
        {/* Expand/Collapse button */}
        <button 
          className="mt-4 flex items-center text-neon-green/70 hover:text-neon-green text-sm font-medium space-x-1 transition-colors"
          onClick={toggleExpand}
        >
          <span>{expanded ? 'Show Less' : 'Read More'}</span>
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
      </div>
      
      {/* Bottom glowing border accent that animates on hover */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default ProjectCard;
