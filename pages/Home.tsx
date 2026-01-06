
import React, { useState } from 'react';
import { Linkedin, Github, Youtube, Instagram, Zap, Code, Rocket, Book } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl space-y-8">
      
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1">
          <div className="mb-3">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-2">Welcome to my portfolio</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
              Dev Chauhan
            </h1>
            <p className="text-sm text-gray-400 max-w-lg">
              Full Stack System Architect building production-ready applications with focus on AI-Powered Workflows & scalable web experiences.
            </p>
          </div>
        </div>
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden bg-gray-900 border border-gray-600/30 shadow-xl grayscale brightness-110 contrast-110 flex-shrink-0">
          <img 
            src="https://picsum.photos/seed/dev-chauhan-portrait/800/800" 
            alt="Dev Chauhan" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-[#191919] border border-gray-600/30 rounded-lg p-3">
          <div className="text-gray-500 text-xs mb-1">Location</div>
          <div className="text-white text-xs font-medium">New Delhi, India</div>
        </div>
        <div className="bg-[#191919] border border-gray-600/30 rounded-lg p-3">
          <div className="text-gray-500 text-xs mb-1">Experience</div>
          <div className="text-white text-xs font-medium">Full Stack Dev</div>
        </div>
        <div className="bg-[#191919] border border-gray-600/30 rounded-lg p-3">
          <div className="text-gray-500 text-xs mb-1">Focus</div>
          <div className="text-white text-xs font-medium">AI & Web</div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative pl-4 border-l border-gray-600/30">
        <p className="text-gray-400 text-sm leading-relaxed">
          I'm a developer and content creator who enjoys building web applications and exploring new technologies. I focus on creating reliable systems rather than just experimenting with code. My journey started in 2019, and now I'm diving deep into full-stack development and AI integrations.
        </p>
      </div>

      {/* Skills Preview */}
      <div className="space-y-3">
        <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">Core Skills</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="bg-[#191919] border border-gray-600/30 rounded-lg p-3 text-center hover:border-gray-600/50 transition-all">
            <Code size={16} className="text-gray-400 mx-auto mb-1" />
            <div className="text-xs text-gray-300 font-medium">Frontend</div>
          </div>
          <div className="bg-[#191919] border border-gray-600/30 rounded-lg p-3 text-center hover:border-gray-600/50 transition-all">
            <Zap size={16} className="text-gray-400 mx-auto mb-1" />
            <div className="text-xs text-gray-300 font-medium">Backend</div>
          </div>
          <div className="bg-[#191919] border border-gray-600/30 rounded-lg p-3 text-center hover:border-gray-600/50 transition-all">
            <Rocket size={16} className="text-gray-400 mx-auto mb-1" />
            <div className="text-xs text-gray-300 font-medium">DevOps</div>
          </div>
          <div className="bg-[#191919] border border-gray-600/30 rounded-lg p-3 text-center hover:border-gray-600/50 transition-all">
            <Book size={16} className="text-gray-400 mx-auto mb-1" />
            <div className="text-xs text-gray-300 font-medium">AI/ML</div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="space-y-4">
        <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">Journey</p>
        <div className="relative pl-6 border-l-2 border-gray-600/30 space-y-6">
          
          {/* Timeline item 1 */}
          <div className="relative">
            <div className="absolute -left-8 top-1 w-4 h-4 bg-gray-600/50 rounded-full border-2 border-[#0a0a0a]"></div>
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-300 transition-colors">Started Coding</h3>
                <span className="text-xs text-gray-500">2019</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">Began my coding journey, learning fundamentals and building first projects to understand web development basics.</p>
            </div>
          </div>

          {/* Timeline item 2 */}
          <div className="relative">
            <div className="absolute -left-8 top-1 w-4 h-4 bg-gray-600/50 rounded-full border-2 border-[#0a0a0a]"></div>
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-300 transition-colors">Web Development Focus</h3>
                <span className="text-xs text-gray-500">2021 - 2023</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">Mastered React, Next.js, and full-stack development. Built multiple production-ready applications for startups.</p>
            </div>
          </div>

          {/* Timeline item 3 */}
          <div className="relative">
            <div className="absolute -left-8 top-1 w-4 h-4 bg-gray-600/50 rounded-full border-2 border-[#0a0a0a]"></div>
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-300 transition-colors">Full-Stack & AI Integration</h3>
                <span className="text-xs text-gray-500">2024 - Present</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">Exploring AI/ML integrations, DevOps, and system architecture. Building scalable, intelligent applications.</p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Footer */}
      <div className="pt-6 border-t border-gray-600/30">
        <div className="flex gap-2 justify-center">
          <a href="https://linkedin.com" target="_blank" className="p-2 text-gray-400 hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/devchauhan" target="_blank" className="p-2 text-gray-400 hover:text-white transition-colors">
            <Github size={18} />
          </a>
          <a href="https://youtube.com" target="_blank" className="p-2 text-gray-400 hover:text-white transition-colors">
            <Youtube size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" className="p-2 text-gray-400 hover:text-white transition-colors">
            <Instagram size={18} />
          </a>
        </div>
        <div className="flex items-center gap-4 justify-center mt-4">
          <div className="w-12 border-t border-gray-600/30"></div>
          <p className="text-xs text-gray-500 font-medium">© 2025 Dev Chauhan</p>
          <div className="w-12 border-t border-gray-600/30"></div>
        </div>
      </div>

    </div>
  );
};

export default Home;
