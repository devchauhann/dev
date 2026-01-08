
import React from 'react';
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiJavascript,
  SiCss3,
  SiGithub,
  SiVercel,
  SiHtml5,
  SiKotlin,
  SiNextdotjs
} from "react-icons/si";

export const TechIcon: React.FC<{ name: string; className?: string }> = ({ name, className = "w-4 h-4" }) => {
  const iconName = name.toUpperCase();
  const iconProps = { className } as any;

  switch (iconName) {
    case 'REACT':
      return <SiReact {...iconProps} />;
    case 'TYPESCRIPT':
    case 'TS':
      return <SiTypescript {...iconProps} />;
    case 'TAILWIND CSS':
    case 'TAILWIND':
      return <SiTailwindcss {...iconProps} />;
    case 'GIT':
      return <SiGit {...iconProps} />;
    case 'JAVASCRIPT':
    case 'JS':
      return <SiJavascript {...iconProps} />;
    case 'CSS':
    case 'CSS3':
      return <SiCss3 {...iconProps} />;
    case 'GITHUB':
      return <SiGithub {...iconProps} />;
    case 'VERCEL':
      return <SiVercel {...iconProps} />;
    case 'HTML':
    case 'HTML5':
      return <SiHtml5 {...iconProps} />;
    case 'KOTLIN':
      return <SiKotlin {...iconProps} />;
    case 'NEXT.JS':
    case 'NEXTJS':
    case 'NEXT':
      return <SiNextdotjs {...iconProps} />;
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
