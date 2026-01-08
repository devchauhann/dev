
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  year: string;
  role: string;
  featured?: boolean;
  problemStatement?: string;
  whatIDid?: string[];
  techStackDetails?: {
    backend?: string;
    frontend?: string;
    icons?: string;
    deployment?: string;
  };
  keyLearnings?: {
    title: string;
    description: string;
  }[];
}

export interface Skill {
  technology: string;
  usage: 'Mostly used' | 'Used in few projects' | 'Learning';
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}
