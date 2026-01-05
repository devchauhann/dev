
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
}

export interface Skill {
  technology: string;
  category: string;
  status: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}
