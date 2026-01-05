
import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 rounded-2xl bg-[#191919] flex items-center justify-center text-gray-400">
          <Briefcase size={24} />
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-white">Experience</h2>
      </div>

      <div className="grid gap-8">
        {EXPERIENCE.map((item, index) => (
          <div key={index} className="bg-[#191919] border border-gray-800 rounded-3xl p-8 md:p-12 relative hover:border-gray-700 transition-all duration-300 group shadow-xl">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div className="flex items-center gap-6">
                <div className="hidden md:flex w-14 h-14 rounded-2xl bg-[#252525] items-center justify-center text-gray-500 group-hover:text-white transition-colors border border-gray-800">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">{item.role}</h3>
                  <p className="text-gray-400 text-lg font-medium">{item.company}</p>
                </div>
              </div>
              <span className="bg-[#121212] text-gray-500 text-xs font-bold px-5 py-2.5 rounded-xl border border-gray-800 self-start uppercase tracking-[0.15em] shadow-inner">
                {item.period}
              </span>
            </div>
            
            <p className="text-gray-400 leading-relaxed max-w-3xl text-lg md:text-xl">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
