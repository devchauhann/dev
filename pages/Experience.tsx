
import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
      <div className="mb-2">
        <div className="flex items-center gap-3">
          <div className="text-white"><Briefcase size={28} /></div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Experience</h2>
        </div>
        <div className="border-b border-gray-600/30 mt-2"></div>
      </div>

      <div className="grid gap-3 mt-6">
        {EXPERIENCE.map((item, index) => (
          <div key={index} className="bg-[#191919] border border-gray-600/30 rounded-lg p-4 relative hover:border-gray-600/50 transition-all duration-300 group shadow-xl">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
              <div className="flex flex-col">
                <h3 className="text-base md:text-lg font-bold text-white mb-0.5 tracking-tight">{item.role}</h3>
                <p className="text-gray-400 text-xs md:text-sm font-medium">{item.company}</p>
              </div>
              <span className="bg-[#252525] text-gray-400 text-[10px] font-bold px-1.5 py-0.5 rounded-lg border border-gray-600/30 self-start uppercase tracking-wider shadow-inner group-hover:text-gray-300 transition-colors whitespace-nowrap">
                {item.period}
              </span>
            </div>
            
            <p className="text-gray-400 leading-relaxed max-w-3xl text-xs md:text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
