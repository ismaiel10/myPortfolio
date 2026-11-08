export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  role: string;
  status: string;
  statusType: 'founder' | 'development' | 'concept' | 'game';
  description: string;
  fullOverview: string;
  technologies: string[];
  serviceCategories?: string[];
  architecture: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    engine?: string[];
    tooling?: string[];
  };
  keyFeatures: string[];
  repoUrl?: string;
  liveUrl?: string;
  badge: string;
  color: string;
}

export interface CapabilityItem {
  name: string;
  category: string;
  context: string;
  verifiedIn: string;
}

export interface JourneyItem {
  id: string;
  year: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  tags: string[];
  verified: boolean;
}
