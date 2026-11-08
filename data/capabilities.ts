export interface CapabilityDomain {
  id: string;
  category: string;
  badge: string;
  description: string;
  technologies: {
    name: string;
    description: string;
    appliedIn: string;
  }[];
}

export const capabilitiesData: CapabilityDomain[] = [
  {
    id: 'programming-languages',
    category: 'Programming Languages',
    badge: 'CORE FOUNDATIONS',
    description: 'Core syntax, data structures, and algorithmic systems across systems and high-level languages.',
    technologies: [
      {
        name: 'Python',
        description: 'Applied in academic AI/ML models, algorithm development, and backend micro-services.',
        appliedIn: 'Complaint Management System & Academic AIML',
      },
      {
        name: 'TypeScript',
        description: 'End-to-end type safety, modern async patterns, and strict component architectures.',
        appliedIn: 'FixBazaar & Unique Diagnostic Centre (UDC)',
      },
      {
        name: 'JavaScript (ES6+)',
        description: 'Core web standards, event loops, DOM performance, and cross-platform runtimes.',
        appliedIn: 'Web platforms and interactive lab experiences',
      },
      {
        name: 'C#',
        description: 'Object-oriented architecture, gameplay scripting, state machines, and physics callbacks in Unity.',
        appliedIn: 'The Last Bell (Game Project)',
      },
      {
        name: 'C',
        description: 'Low-level memory management, pointers, and foundational computer architecture studies.',
        appliedIn: 'BTech Computer Science Foundations',
      },
    ],
  },
  {
    id: 'frontend-systems',
    category: 'Frontend & Mobile Engineering',
    badge: 'CLIENT SYSTEMS',
    description: 'Engineering responsive, accessible, high-performance interfaces across web and mobile platforms.',
    technologies: [
      {
        name: 'Next.js',
        description: 'App Router architecture, static site generation, hybrid rendering, and routing performance.',
        appliedIn: 'myPortfolio & UDC Clinical Web Application',
      },
      {
        name: 'React',
        description: 'Declarative component design, state machines, hooks, and responsive UX architectures.',
        appliedIn: 'Web platforms and interactive visual systems',
      },
      {
        name: 'React Native & Expo',
        description: 'Cross-platform mobile applications with native device capabilities and fast iteration cycles.',
        appliedIn: 'FixBazaar (Mobile Home Services App)',
      },
      {
        name: 'Tailwind CSS',
        description: 'Design token systems, responsive layout engines, dark mode, and sleek micro-interactions.',
        appliedIn: 'myPortfolio, UDC, and web projects',
      },
      {
        name: 'HTML5 & CSS3',
        description: 'Semantic markup, accessible DOM trees, CSS Grid/Flexbox, and hardware-accelerated animations.',
        appliedIn: 'Complaint Management System & web foundations',
      },
    ],
  },
  {
    id: 'backend-databases',
    category: 'Backend & Data Architecture',
    badge: 'DATA & INFRASTRUCTURE',
    description: 'Relational data modeling, API orchestration, authentication, and security isolation layers.',
    technologies: [
      {
        name: 'Flask (Python)',
        description: 'Lightweight WSGI backend routing, Jinja2 templating, and RESTful service architecture.',
        appliedIn: 'Complaint Management System',
      },
      {
        name: 'Supabase & BaaS',
        description: 'Postgres edge infrastructure, authentication pipelines, storage buckets, and real-time triggers.',
        appliedIn: 'FixBazaar & Unique Diagnostic Centre',
      },
      {
        name: 'PostgreSQL',
        description: 'Relational schema design, strict Row-Level Security (RLS) policies, and ACID transactions.',
        appliedIn: 'FixBazaar & UDC Platform',
      },
      {
        name: 'MySQL',
        description: 'Relational data schemas, foreign key cascades, and PyMySQL/SQLAlchemy integration.',
        appliedIn: 'Complaint Management System',
      },
      {
        name: 'SQLAlchemy & SQL',
        description: 'Object-Relational Mapping, query parameterization, and schema migration strategies.',
        appliedIn: 'Complaint Management System',
      },
    ],
  },
  {
    id: 'specialized-domains',
    category: 'Creative Technology & Engine Platforms',
    badge: '3D & GAME ENGINES',
    description: 'Interactive real-time graphics, physics simulations, and developer workflow tooling.',
    technologies: [
      {
        name: 'Unity 6.3 LTS',
        description: 'Real-time 3D engine, Universal Render Pipeline (URP), physics simulation, and input mapping.',
        appliedIn: 'The Last Bell (FPS Survival Game)',
      },
      {
        name: 'Three.js & WebGL',
        description: 'Browser-based 3D scene graphs, custom shaders, procedural geometries, and camera transitions.',
        appliedIn: 'Engineering Visual Lab & Hero Möbius Loop',
      },
      {
        name: 'Git & GitHub',
        description: 'Distributed version control, branching strategies, collaborative PR workflows, and code hygiene.',
        appliedIn: 'All active software and game repositories',
      },
    ],
  },
  {
    id: 'mindset-disciplines',
    category: 'Strategic & Interdisciplinary Domains',
    badge: 'VISION & ARCHITECTURE',
    description: 'The holistic intersection of engineering feasibility, user experience, and business strategy.',
    technologies: [
      {
        name: 'Artificial Intelligence & ML',
        description: 'Academic rigor at VVCE Mysuru; exploring statistical learning, neural networks, and model architectures.',
        appliedIn: 'BTech AIML Academic Studies & Research',
      },
      {
        name: 'Product Architecture',
        description: 'Translating ambiguous human needs into concrete system schemas, user flows, and technical roadmaps.',
        appliedIn: 'FixBazaar founder roadmap',
      },
      {
        name: 'Entrepreneurial Thinking',
        description: 'Evaluating unit economics, market viability, user retention loops, and venture development.',
        appliedIn: 'Founder initiatives and business exploration',
      },
      {
        name: 'UI/UX & Digital Experience',
        description: 'Crafting thoughtful typography, high-contrast aesthetics, tactile interactions, and clear information hierarchy.',
        appliedIn: 'myPortfolio & Product Interfaces',
      },
    ],
  },
];
