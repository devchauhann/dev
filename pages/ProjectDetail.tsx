
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Globe, Github } from 'lucide-react';
import { PROJECTS } from '../constants.tsx';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} | Dev Chauhan`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
        <button onClick={() => navigate('/projects')} className="text-gray-400 hover:text-white transition-colors">Return to projects</button>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <button 
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Projects</span>
        </button>
        <div className="flex gap-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" className="p-2 bg-[#252525] border border-gray-800 rounded-xl text-gray-400 hover:text-white transition-all">
              <Globe size={18} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" className="p-2 bg-[#252525] border border-gray-800 rounded-xl text-gray-400 hover:text-white transition-all">
              <Github size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="mb-10">
        <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">{project.role} — {project.year}</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tighter">
          {project.title}
        </h1>
      </div>

      <div className="flex flex-wrap gap-2 mb-12">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-3 py-1 bg-[#252525] border border-gray-800 text-gray-400 text-[10px] font-bold rounded-md uppercase tracking-widest"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-gray-400 text-xl md:text-2xl leading-relaxed mb-16 max-w-3xl font-medium">
        {project.fullDescription || project.description}
      </p>

      <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl mb-20 relative">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 md:gap-20 mb-20">
        <h2 className="text-3xl font-bold text-white tracking-tight">The Problem</h2>
        <div className="space-y-6">
          <p className="text-gray-400 text-lg leading-relaxed">
            {project.problemStatement || "This project was built to address technical challenges in its domain, focusing on efficiency and user-centric design."}
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-12 pb-20 flex justify-between items-center">
        <span className="text-gray-600 text-sm font-medium">© 2025 Dev Chauhan</span>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
        >
          Back to top
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
