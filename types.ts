export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  color?: string;
  link?: string;
  github?: string;
}

export interface Sketch {
  id: string;
  title: string;
  category: 'sketch' | 'painting' | 'ink';
  imageUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category?: 'design' | 'art' | 'soft';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  certificateUrl?: string;
  awardUrl?: string;
  giftUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score?: string;
}

export interface Journey {
  title: string;
  description: string;
  learnings: { title: string; desc: string }[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  socials: {
    github: string; // Using github field for generic links if needed, or generic social
    linkedin: string;
    twitter?: string;
  };
  journey: Journey;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  sketches: Sketch[];
}