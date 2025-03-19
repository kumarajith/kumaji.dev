
import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, MonitorSmartphone, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface Project {
  id: number;
  year: string;
  title: string;
  platforms: string[];
  description: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay }) => {
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const getPlatformIcons = (platforms: string[]) => {
    return platforms.join(', ');
  };

  // Extract first sentence for the card preview
  const getDescriptionPreview = (description: string) => {
    const firstSentence = description.split('.')[0] + '.';
    return firstSentence;
  };

  return (
    <>
      <div 
        className="gaming-card group overflow-hidden animate-fade-in cursor-pointer"
        style={{ animationDelay: `${delay * 100}ms` }}
        onClick={() => setModalOpen(true)}
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
          
          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span key={index} className="text-white/70 bg-white/5 px-2 py-1 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Description Preview */}
          <p className="text-white/70 text-sm mb-4 line-clamp-3">
            {getDescriptionPreview(project.description)}
          </p>
          
          {/* View Details Hint */}
          <div className="text-neon-green/70 text-sm flex items-center gap-1 mt-auto">
            <span>View Details</span>
            <ExternalLink className="h-3 w-3" />
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-gaming-dark border-gaming-accent max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <DialogTitle className="text-2xl font-gaming text-white">
                {project.title}
              </DialogTitle>
              <span className="text-neon-green/80 font-mono text-sm">{project.year}</span>
            </div>
          </DialogHeader>
          
          <div className="mt-4 space-y-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span key={index} className="badge text-xs">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Platforms */}
            <div className="flex items-center space-x-2">
              <h4 className="text-white font-medium">Platforms:</h4>
              <span className="text-white/70">{project.platforms.join(', ')}</span>
            </div>
            
            {/* Full Description */}
            <div>
              <h4 className="text-white font-medium mb-2">About this Project:</h4>
              <p className="text-white/70 whitespace-pre-line text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
