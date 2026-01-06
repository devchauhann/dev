
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Globe, Github, Tag, Link as LinkIcon, Server, Lightbulb, FileText, Database, ExternalLink } from 'lucide-react';
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
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl pt-6 md:pt-8">
      {/* Back Button - Top */}
      <button 
        onClick={() => navigate('/projects')}
        className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors group mb-8 font-medium"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm">Back to Projects</span>
      </button>

      {/* Hero Image */}
      <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-750 border border-gray-600/30 shadow-2xl mb-8 relative">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title & Quick Info Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            {project.title}
          </h1>
        </div>
        
        {/* Quick Info - Icon based layout like reference */}
        <div className="space-y-6 text-xs">
          {/* Tags Section */}
          <div className="flex gap-4">
            <div className="text-gray-500 flex items-center gap-1.5 flex-shrink-0 w-16">
              <Tag size={14} />
              <span className="text-gray-400">Tags</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-[#222222] border border-gray-600/30 text-gray-300 text-xs font-medium rounded">
                  {tag}
                </span>
              ))}
              {project.tags.length > 2 && (
                <span className="px-3 py-1.5 bg-[#222222] border border-gray-600/30 text-gray-300 text-xs font-medium rounded">
                  +{project.tags.length - 2}
                </span>
              )}
            </div>
          </div>

          {/* Links Section */}
          <div className="flex gap-4">
            <div className="text-gray-500 flex items-center gap-1.5 flex-shrink-0 w-16">
              <Globe size={14} />
              <span className="text-gray-400">Links</span>
            </div>
            <div className="flex items-center gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-xs font-medium flex items-center gap-1 underline">
                  <ExternalLink size={12} />
                  Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-xs font-medium flex items-center gap-1 underline">
                  <Github size={12} />
                  GitHub
                </a>
              )}
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="flex gap-4">
            <div className="text-gray-500 flex items-center gap-1.5 flex-shrink-0">
              <Database size={14} />
              <span className="text-gray-400">Tech Stack</span>
            </div>
            <div className="text-gray-300">
              {project.tags.join(", ")}
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      {project.fullDescription && (
        <div className="mb-6">
          <h2 className="text-sm font-bold text-white mb-3 uppercase tracking-widest">Overview</h2>
          <p className="text-xs text-gray-400 leading-relaxed">{project.fullDescription}</p>
        </div>
      )}

      {/* Problem Section - With Vertical Line */}
      {project.problemStatement && (
        <div className="mb-6 relative pl-4 border-l-2 border-gray-600/50">
          <h2 className="text-sm font-bold text-white mb-3 uppercase tracking-widest">The Problem</h2>
          <p className="text-xs text-gray-400 leading-relaxed">{project.problemStatement}</p>
        </div>
      )}

      {/* What I Did Section */}
      {project.whatIDid && project.whatIDid.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold text-white mb-3 uppercase tracking-widest">What I Did</h2>
          <ul className="space-y-2">
            {project.whatIDid.map((item, index) => (
              <li key={index} className="text-xs text-gray-400 leading-relaxed flex gap-2">
                <span className="text-gray-600 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Key Learnings Section */}
      {project.keyLearnings && project.keyLearnings.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold text-white mb-3 uppercase tracking-widest">Key Learnings</h2>
          <div className="space-y-3">
            {project.keyLearnings.map((learning, index) => (
              <div key={index}>
                <h3 className="text-white font-bold text-xs mb-1">{learning.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{learning.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="border-t border-gray-600/30 pt-4 pb-4 flex justify-between items-center">
        <span className="text-gray-600 text-xs font-medium">© 2025 Dev Chauhan</span>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest"
        >
          Back to top ↑
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
