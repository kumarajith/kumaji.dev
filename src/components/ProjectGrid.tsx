
import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import config from '../data/config.json';
import { X, Clock } from 'lucide-react';

interface Project {
  id: number;
  year: string;
  title: string;
  platforms: string[];
  description: string;
  tags: string[];
}

const ProjectGrid: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  // Extract all unique tags from projects
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    config.projects.forEach(project => {
      project.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, []);
  
  // Filter projects based on active tag
  const filteredProjects = useMemo(() => {
    if (!activeTag) return config.projects;
    return config.projects.filter(project => 
      project.tags.includes(activeTag)
    );
  }, [activeTag]);
  
  const handleTagClick = (tag: string) => {
    setActiveTag(tag === activeTag ? null : tag);
  };
  
  const clearTagFilter = () => {
    setActiveTag(null);
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title mb-12">Projects</h2>
        
        {/* Tag filter */}
        {/* <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-white/90 font-gaming">Filter by:</h3>
            {activeTag && (
              <button 
                onClick={clearTagFilter}
                className="flex items-center gap-1 text-neon-green hover:text-neon-green/80 transition-colors"
              >
                <span>Clear filter</span>
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`badge transition-all ${
                  activeTag === tag 
                    ? 'bg-neon-green/20 border-neon-green' 
                    : 'hover:bg-gaming-accent/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div> */}
        
        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              delay={index}
            />
          ))}
          
          {/* Coming Soon Project Card */}
          <div className="gaming-card group overflow-hidden animate-fade-in flex flex-col items-center justify-center p-8">
            <Clock className="h-16 w-16 text-neon-green/40 mb-4 animate-pulse" />
            <h3 className="text-xl font-gaming font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
              More Coming Soon...
            </h3>
            <p className="text-white/50 text-sm text-center">
              Stay tuned for upcoming projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
