
import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import config from '../data/config.json';
import { X } from 'lucide-react';

interface Project {
  id: number;
  year: string;
  title: string;
  platforms: string[];
  tech: string[];
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
    return Array.from(tagsSet);
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
        <div className="mb-10">
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
        </div>
        
        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              delay={index}
            />
          ))}
        </div>
        
        {/* Future projects note - styled better */}
        <div className="mt-16 mx-auto max-w-2xl">
          <div className="gaming-card bg-gaming-card/70 border-neon-green/20 p-6 relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-neon-green/50 rounded-full"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-neon-green/50 rounded-full"></div>
            <p className="text-white/80 text-lg font-gaming text-balance">
              There are lots of other projects that were dumped mid development, as I had moved on to other things. 
              <span className="text-neon-green"> I'm currently working on exciting new ideas</span> and planning to work on more in the near future.
              <span className="block mt-2 text-white/60 text-sm">Stay tuned for more!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
