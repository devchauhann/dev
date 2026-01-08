
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
            src="/dev.png" 
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
          I'm a developer and builder who enjoys creating production-ready applications and exploring new technologies. I focus on building reliable systems with clean code and scalable architectures. My coding journey started in 2025, and I'm passionate about full-stack development, AI integrations, and system architecture.
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
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-300 transition-colors">Coding Journey Begins</h3>
                <span className="text-xs text-gray-500">2025 - Present</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">Started my professional coding journey. Building production-ready applications with React, TypeScript, and modern web technologies. Focused on system architecture and scalable solutions.</p>
            </div>
          </div>

          {/* Timeline item 2 */}
          <div className="relative">
            <div className="absolute -left-8 top-1 w-4 h-4 bg-gray-600/50 rounded-full border-2 border-[#0a0a0a]"></div>
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-300 transition-colors">Built Colora</h3>
                <span className="text-xs text-gray-500">2025</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">Created Colora, a comprehensive color design platform with 500+ named colors, color space conversions, palette generation, and WCAG accessibility checker. Deployed on Vercel as a production-ready product.</p>
            </div>
          </div>

          {/* Timeline item 3 */}
          <div className="relative">
            <div className="absolute -left-8 top-1 w-4 h-4 bg-gray-600/50 rounded-full border-2 border-[#0a0a0a]"></div>
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-sm font-semibold text-white group-hover:text-gray-300 transition-colors">Launched Brainsync</h3>
                <span className="text-xs text-gray-500">2025</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">Developed Brainsync, a centralized study platform for engineering students with searchable resources, file uploads, and community sharing features. Deployed on Vercel for global accessibility.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-6 border-t border-gray-600/30">
        <div className="flex gap-2 justify-center">
          <a href="https://linkedin.com/in/devchauhann3" target="_blank" className="p-2 text-gray-400 hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/devchauhan" target="_blank" className="p-2 text-gray-400 hover:text-white transition-colors">
            <Github size={18} />
          </a>
          <a href="https://youtube.com/devchauhann" target="_blank" className="p-2 text-gray-400 hover:text-white transition-colors">
            <Youtube size={18} />
          </a>
          <a href="https://instagram.com/devchauhan.in" target="_blank" className="p-2 text-gray-400 hover:text-white transition-colors">
            <Instagram size={18} />
          </a>
        </div>
        <div className="flex items-center gap-4 justify-center mt-4">
          <div className="w-12 border-t border-gray-600/30"></div>
          <p className="text-xs text-gray-500 font-medium">© 2026 Dev Chauhan</p>
          <div className="w-12 border-t border-gray-600/30"></div>
        </div>
      </div>

    </div>
  );
};

export default Home;
