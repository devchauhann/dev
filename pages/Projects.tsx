
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants.tsx';
import { FolderOpen, ExternalLink, Globe } from 'lucide-react';
import { TechIcon } from '../components/TechIcons.tsx';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-4 mb-10">
        <div className="text-gray-400"><FolderOpen size={32} /></div>
        <h2 className="text-4xl font-bold tracking-tight text-white">Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            onClick={() => navigate(`/projects/${project.id}`)}
            className="bg-[#191919] border border-gray-800 rounded-3xl overflow-hidden group hover:border-gray-600 transition-all duration-300 shadow-xl cursor-pointer"
          >
            <div className="aspect-[16/10] bg-gray-900 relative overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Watermark removed as requested */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold text-gray-400">
                {project.year}
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mt-1">{project.role}</p>
                </div>
                <div className="flex gap-4 text-gray-500">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      onClick={(e) => e.stopPropagation()} 
                      className="hover:text-white transition-colors"
                    >
                      <Globe size={18} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      onClick={(e) => e.stopPropagation()} 
                      className="hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1.5 px-3 py-1 bg-[#121212] border border-gray-800 text-gray-500 text-[10px] font-bold rounded-lg uppercase tracking-widest hover:text-white hover:border-gray-600 transition-colors cursor-default">
                    <TechIcon name={tag} className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
