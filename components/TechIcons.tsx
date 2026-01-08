
import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiDocker,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript
} from "react-icons/si";

export const TechIcon: React.FC<{ name: string; className?: string }> = ({ name, className = "w-4 h-4" }) => {
  const iconName = name.toUpperCase();
  const iconProps = { className } as any;

  switch (iconName) {
    case 'REACT':
      return <SiReact {...iconProps} />;
    case 'NEXT.JS':
    case 'NEXTJS':
      return <SiNextdotjs {...iconProps} />;
    case 'TYPESCRIPT':
    case 'TS':
      return <SiTypescript {...iconProps} />;
    case 'NODE.JS':
    case 'NODE':
      return <SiNodedotjs {...iconProps} />;
    case 'POSTGRESQL':
    case 'POSTGRES':
      return <SiPostgresql {...iconProps} />;
    case 'SUPABASE':
      return <SiSupabase {...iconProps} />;
    case 'TAILWIND CSS':
    case 'TAILWIND':
      return <SiTailwindcss {...iconProps} />;
    case 'DOCKER':
      return <SiDocker {...iconProps} />;
    case 'FRAMER MOTION':
      return <SiFramer {...iconProps} />;
    case 'GIT':
      return <SiGit {...iconProps} />;
    case 'GITHUB':
      return <SiGithub {...iconProps} />;
    case 'HTML':
    case 'HTML5':
      return <SiHtml5 {...iconProps} />;
    case 'JAVASCRIPT':
    case 'JS':
      return <SiJavascript {...iconProps} />;
    case 'AI/LLMS':
    case 'AI':
    case 'SYSTEM DESIGN':
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      );
  }
};
