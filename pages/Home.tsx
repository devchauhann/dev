
import React, { useState } from 'react';
import { MapPin, Briefcase, Globe, Send, Linkedin, Github, Youtube, Instagram } from 'lucide-react';

const Home: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-x-12">
        
        {/* 1. Profile Image (Mobile: 1st, Desktop: Right Column Top) */}
        <div className="md:col-start-2 md:row-start-1 mb-6 md:mb-8">
          <div className="w-40 md:w-full aspect-square rounded-lg md:rounded-lg overflow-hidden bg-gray-900 border border-gray-600/30 shadow-xl grayscale brightness-110 contrast-110">
            <img 
              src="https://picsum.photos/seed/dev-chauhan-portrait/800/800" 
              alt="Dev Chauhan" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 2-5. Main Content (Mobile: Next, Desktop: Left Column Full) */}
        <div className="md:col-start-1 md:row-start-1 md:row-span-3">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight text-white leading-tight">
            Hello, I'm Dev
          </h1>

        {/* 3. Details Section (Vertical line) */}
          <div className="relative pl-6 border-l border-gray-600/30 space-y-2 mb-6 md:mb-8">
            <div className="flex items-start gap-4">
              <div className="w-5 text-gray-500 flex justify-center pt-0.5 flex-shrink-0"><MapPin size={16} /></div>
              <div className="flex items-baseline gap-4 text-sm md:text-base">
                <span className="text-gray-500 font-medium min-w-[80px]">Location</span>
                <span className="text-white/90">New Delhi, India (IST)</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-5 text-gray-500 flex justify-center pt-0.5 flex-shrink-0"><Briefcase size={16} /></div>
              <div className="flex items-baseline gap-4 text-sm md:text-base">
                <span className="text-gray-500 font-medium min-w-[80px]">Role</span>
                <span className="text-white/90">Full Stack System Architect</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-5 text-gray-500 flex justify-center pt-0.5 flex-shrink-0"><Globe size={16} /></div>
              <div className="flex items-baseline gap-4 text-sm md:text-base">
                <span className="text-gray-500 font-medium min-w-[80px]">Focus</span>
                <span className="text-white/90">AI-Powered Workflows & Web Apps</span>
              </div>
            </div>
          </div>

          {/* 4. Bio Section */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg">
            I'm a developer and a content creator who enjoys building web applications and exploring new technologies — basically, I spend most of my time in front of a screen.
          </p>

          {/* 5. Message Input */}
          <form onSubmit={handleSubmit} className="flex gap-3 mb-6 md:mb-8">
            <div className="flex-1 bg-[#1a1a1a] border border-gray-600/30 rounded-lg focus-within:border-gray-600/50 transition-all flex items-center px-4 py-3">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Send a quick message..." 
                className="bg-transparent w-full text-sm outline-none text-white placeholder-gray-600"
              />
            </div>
            <button 
              type="submit"
              className="bg-[#2a2a2a] text-gray-200 p-3 rounded-lg hover:bg-white hover:text-black transition-all flex items-center justify-center border border-gray-600/30 w-12 h-12 flex-shrink-0"
            >
              <Send size={18} />
            </button>
          </form>
        </div>

        {/* 6. Social Links (Mobile: After Message, Desktop: Right Column Mid) */}
        <div className="md:col-start-2 md:row-start-2 mb-8">
          <div className="grid grid-cols-4 gap-2.5">
            <a href="https://linkedin.com" target="_blank" className="flex justify-center py-3 bg-[#191919] border border-gray-600/30 rounded-lg hover:border-gray-600/50 hover:bg-[#1e1e1e] transition-all text-gray-500 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/devchauhan" target="_blank" className="flex justify-center py-3 bg-[#191919] border border-gray-600/30 rounded-lg hover:border-gray-600/50 hover:bg-[#1e1e1e] transition-all text-gray-500 hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" className="flex justify-center py-3 bg-[#191919] border border-gray-600/30 rounded-lg hover:border-gray-600/50 hover:bg-[#1e1e1e] transition-all text-gray-500 hover:text-white">
              <Youtube size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" className="flex justify-center py-3 bg-[#191919] border border-gray-600/30 rounded-lg hover:border-gray-600/50 hover:bg-[#1e1e1e] transition-all text-gray-500 hover:text-white">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* 7. Timeline (Mobile: Last, Desktop: Right Column Bottom) */}
        <div className="md:col-start-2 md:row-start-3">
          <div className="text-[13px] text-gray-600 space-y-2 font-medium tracking-tight pl-1">
            <p className="flex items-center gap-2 opacity-80">
              <span className="text-gray-800">·</span>
              2019 — Started coding
            </p>
            <p className="flex items-center gap-2 opacity-80">
              <span className="text-gray-800">·</span>
              2025 — Full-stack & AI focus
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
