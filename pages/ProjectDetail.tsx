
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Globe, Github, Tag, Link as LinkIcon, Server, Lightbulb, FileText } from 'lucide-react';
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
      {/* Back Button */}
      <button 
        onClick={() => navigate('/projects')}
        className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors group mb-8"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back to Projects</span>
      </button>

      {/* Hero Image */}
      <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-750 border border-gray-600/30 shadow-2xl mb-8 relative">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <LinkIcon size={20} className="text-gray-500" />
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {project.title}
          </h1>
        </div>

        {/* Tags, Links, Tech Stack Section */}
        <div className="space-y-4 mb-8">
          {/* Tags */}
          <div className="flex items-start gap-8">
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium uppercase tracking-wider min-w-[80px]">
              <Tag size={16} />
              Tags
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1.5 bg-[#222222] border border-gray-600/30 text-gray-400 text-xs font-bold rounded-md uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium uppercase tracking-wider min-w-[80px]">
              <LinkIcon size={16} />
              Links
            </div>
            <div className="flex items-center gap-6">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium border-b border-gray-400/30 hover:border-white pb-1">
                  <Globe size={14} />
                  Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium border-b border-gray-400/30 hover:border-white pb-1">
                  <Github size={14} />
                  GitHub
                </a>
              )}
            </div>
          </div>

          {/* Tech Stack */}
          {project.techStackDetails && (
            <div className="flex items-start gap-8">
              <div className="flex items-center gap-2 text-gray-500 text-sm font-medium uppercase tracking-wider min-w-[80px]">
                <Server size={16} />
                Tech Stack
              </div>
              <div className="text-gray-400 text-sm leading-relaxed">
                {[
                  project.techStackDetails.backend,
                  project.techStackDetails.frontend,
                  project.techStackDetails.icons,
                  project.techStackDetails.deployment
                ].filter(Boolean).join(", ")}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overview Section */}
      {project.fullDescription && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-400 text-base leading-relaxed">
            {project.fullDescription}
          </p>
        </div>
      )}

      {/* The Problem Section */}
      {project.problemStatement && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
          <div className="bg-[#1a1a1a] border-l-4 border-gray-400 p-6 rounded-lg">
            <p className="text-gray-400 text-base leading-relaxed italic">
              {project.problemStatement}
            </p>
          </div>
        </div>
      )}

      {/* What I Did Section */}
      {project.whatIDid && project.whatIDid.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">What I Did</h2>
          <ul className="space-y-3">
            {project.whatIDid.map((item, index) => (
              <li key={index} className="flex gap-4 text-gray-400 text-base leading-relaxed">
                <span className="text-white font-bold flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Key Learnings Section */}
      {project.keyLearnings && project.keyLearnings.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Key Learnings</h2>
          <div className="space-y-4">
            {project.keyLearnings.map((learning, index) => (
              <div key={index} className="bg-[#1a1a1a] border border-gray-600/30 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-2">
                  <Lightbulb size={16} className="text-yellow-500 flex-shrink-0 mt-1" />
                  <h3 className="text-white font-bold text-base">{learning.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed ml-7">
                  {learning.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="border-t border-gray-600/30 pt-8 pb-8 flex justify-between items-center">
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
