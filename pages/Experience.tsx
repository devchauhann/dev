
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
        <div className="border-b border-gray-600/30 mt-1"></div>
      </div>

      <div className="grid gap-4 mt-6">
        {EXPERIENCE.map((item, index) => (
          <div key={index} className="bg-[#191919] border border-gray-600/30 rounded-lg p-5 md:p-6 relative hover:border-gray-600/50 transition-all duration-300 group shadow-xl">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div className="flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 tracking-tight">{item.role}</h3>
                <p className="text-gray-400 text-sm font-medium">{item.company}</p>
              </div>
              <span className="bg-[#252525] text-gray-400 text-xs font-bold px-3 py-1.5 rounded-md border border-gray-600/30 self-start uppercase tracking-wider shadow-inner group-hover:text-gray-300 transition-colors">
                {item.period}
              </span>
            </div>
            
            <p className="text-gray-400 leading-relaxed max-w-3xl text-sm md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
