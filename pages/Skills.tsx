
import React from 'react';
import { SKILLS } from '../constants';
import { Command } from 'lucide-react';
import { TechIcon } from '../components/TechIcons';

const Skills: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="text-white"><Command size={28} /></div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Skills Database</h2>
      </div>

      <div className="relative pl-6 mb-12 border-l-2 border-gray-800 space-y-4">
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          Strong in <span className="text-white underline decoration-gray-600 underline-offset-4 cursor-default">Python</span>, currently learning <span className="text-white underline decoration-gray-600 underline-offset-4 cursor-default">JavaScript</span> and <span className="text-white underline decoration-gray-600 underline-offset-4 cursor-default">SQL</span>, focused on building reliable systems rather than just experimenting with code.
        </p>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          Hands-on with <span className="text-white underline decoration-gray-600 underline-offset-4 cursor-default">website development</span>, <span className="text-white underline decoration-gray-600 underline-offset-4 cursor-default">reusable React components</span>, and <span className="text-white underline decoration-gray-600 underline-offset-4 cursor-default">mobile app development</span>, applying concepts directly in real projects, not tutorials.
        </p>
      </div>

      <div className="bg-[#191919] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10px] uppercase text-gray-500 border-b border-gray-800/50 tracking-[0.2em] bg-[#1a1a1a]">
                <th className="py-4 font-bold px-6">Technology</th>
                <th className="py-4 font-bold px-6">Category</th>
                <th className="py-4 font-bold px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/30">
              {SKILLS.map((skill) => (
                <tr key={skill.technology} className="group hover:bg-[#202020] transition-colors">
                  <td className="py-4 px-6 flex items-center gap-3">
                    <span className="text-gray-600 group-hover:text-white transition-colors">
                      <TechIcon name={skill.technology} className="w-4 h-4" />
                    </span>
                    <span className="text-gray-300 text-sm font-medium">{skill.technology}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="bg-[#252525] border border-gray-800 text-gray-400 text-[9px] px-2.5 py-1 rounded-md uppercase font-bold tracking-wider group-hover:text-gray-300 transition-colors">
                      {skill.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-500 text-sm font-medium group-hover:text-gray-400">
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
