
import React from 'react';
import { SKILLS } from '../constants';
import { Command } from 'lucide-react';

import { TechIcon } from '../components/TechIcons';

const Skills: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
      <div className="mb-2">
        <div className="flex items-center gap-3">
          <div className="text-white"><Command size={28} /></div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Skills Database</h2>
        </div>
        <div className="border-b border-gray-600/30 mt-1"></div>
      </div>

      <div className="relative pl-4 mb-6 space-y-2 mt-6 border-l border-gray-600/30">
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Strong in <span className="text-white underline decoration-gray-600 underline-offset-4 cursor-default">Python</span>, currently learning <span className="text-white underline decoration-gray-600 underline-offset-4 cursor-default">JavaScript</span> and <span className="text-white underline decoration-gray-600 underline-offset-4 cursor-default">SQL</span>, focused on building reliable systems rather than just experimenting with code.
        </p>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Hands-on with <span className="text-white underline decoration-gray-600 underline-offset-4 cursor-default">website development</span>, <span className="text-white underline decoration-gray-600 underline-offset-4 cursor-default">reusable React components</span>, and <span className="text-white underline decoration-gray-600 underline-offset-4 cursor-default">mobile app development</span>, applying concepts directly in real projects, not tutorials.
        </p>
      </div>

      <div className="bg-[#191919] border border-gray-600/30 rounded-lg overflow-hidden shadow-2xl">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[9px] uppercase text-gray-500 border-b border-gray-600/30 tracking-[0.15em] bg-[#1a1a1a]">
                <th className="py-2 font-bold px-4">Technology</th>
                <th className="py-2 font-bold px-4">Category</th>
                <th className="py-2 font-bold px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-600/30">
              {SKILLS.map((skill) => (
                <tr key={skill.technology} className="group hover:bg-[#202020] transition-colors">
                  <td className="py-2.5 px-4 flex items-center gap-2">
                    <span className="text-gray-600 group-hover:text-white transition-colors">
                      <TechIcon name={skill.technology} className="w-4 h-4" />
                    </span>
                    <span className="text-gray-300 text-xs font-medium">{skill.technology}</span>
                  </td>
                  <td className="py-2.5 px-4">
                    <span className="bg-[#252525] border border-gray-600/30 text-gray-400 text-[7px] px-1.5 py-0.5 rounded-md uppercase font-bold tracking-wider group-hover:text-gray-300 transition-colors">
                      {skill.category}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 text-gray-500 text-xs font-medium group-hover:text-gray-400">
                    {skill.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Skills;
