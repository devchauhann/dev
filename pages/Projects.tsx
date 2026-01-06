
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants.tsx';
import { FolderOpen, ExternalLink, Github } from 'lucide-react';
import { TechIcon } from '../components/TechIcons.tsx';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-700">
        <div className="text-white"><FolderOpen size={24} /></div>
        <h2 className="text-3xl font-bold tracking-tight text-white">Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            onClick={() => navigate(`/projects/${project.id}`)}
            className="bg-[#1a1a1a] border border-gray-600/30 rounded-lg overflow-hidden group hover:border-gray-600/50 transition-all duration-300 shadow-lg cursor-pointer w-full"
          >
            <div className="w-full h-40 sm:h-48 bg-gray-900 relative overflow-hidden rounded-t-lg">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-5">
              <div className="flex justify-between items-start mb-2 gap-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <FolderOpen size={14} className="text-white flex-shrink-0" />
                    <h3 className="text-base font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="flex gap-2.5 text-white flex-shrink-0">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      onClick={(e) => e.stopPropagation()} 
                      className="hover:text-white transition-colors"
                    >
                      <Github size={14} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      onClick={(e) => e.stopPropagation()} 
                      className="hover:text-white transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-gray-400 text-xs leading-relaxed mb-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#222222] border border-gray-600/30 text-gray-400 text-[10px] font-bold rounded-md uppercase tracking-widest hover:text-white hover:border-gray-600/50 transition-colors cursor-default">
                    <TechIcon name={tag} className="w-2 h-2" />
                    {tag}
                  </span>
                ))}
                {project.tags.length > 2 && (
                  <span className="inline-flex items-center px-2 py-0.5 bg-[#222222] border border-gray-600/30 text-gray-400 text-[10px] font-bold rounded-md uppercase tracking-widest">
                    +{project.tags.length - 2}
                  </span>
                )}
              </div>

              <a href={`/projects/${project.id}`} className="text-gray-500 text-xs font-medium hover:text-white transition-colors inline-flex items-center gap-1">
                Read Problem Statement →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
