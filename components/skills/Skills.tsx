'use client';

import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Wrench,
  ShieldCheck,
} from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  no: string;
  icon: React.ElementType;
  skills: { name: string; context: string }[];
}

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories: SkillCategory[] = [
    {
      id: 'programming',
      name: 'Programming',
      no: '01',
      icon: Code2,
      skills: [
        { name: 'Python', context: 'Core scripting, AI pipelines & FastSAM integration' },
        { name: 'TypeScript', context: 'Strictly typed full-stack architecture & schemas' },
        { name: 'JavaScript (ESNext)', context: 'Modern asynchronous web runtimes' },
        { name: 'C#', context: 'Gameplay systems & Unity ScriptableObjects' },
        { name: 'C / C++', context: 'Algorithmic foundations & memory optimization' },
        { name: 'SQL', context: 'Relational data modeling, RLS policies & queries' },
      ],
    },
    {
      id: 'frontend',
      name: 'Frontend & Mobile',
      no: '02',
      icon: Layout,
      skills: [
        { name: 'Next.js 14', context: 'App Router, Server Components & Static Export' },
        { name: 'React 18', context: 'State primitives, custom hooks & concurrency' },
        { name: 'React Native', context: 'Cross-platform mobile applications (iOS/Android)' },
        { name: 'Expo SDK', context: 'Application services (EAS) & native builds' },
        { name: 'Tailwind CSS', context: 'Systematic tokens, typography & design systems' },
        { name: 'Three.js / WebGL', context: 'Procedural 3D shaders & interactive viewports' },
        { name: 'GSAP & ScrollTrigger', context: 'Cinematic timeline choreography & parallax' },
        { name: 'Framer Motion', context: 'Declarative gesture & spring-physics transitions' },
      ],
    },
    {
      id: 'backend',
      name: 'Backend & Infrastructure',
      no: '03',
      icon: Server,
      skills: [
        { name: 'FastAPI', context: 'High-throughput asynchronous Python microservices' },
        { name: 'Flask', context: 'Lightweight municipal & internal web platforms' },
        { name: 'Node.js', context: 'Server runtimes & Edge function handlers' },
        { name: 'Supabase Edge Functions', context: 'Serverless compute & real-time WebSockets' },
        { name: 'RESTful Protocols', context: 'Deterministic contract design & OpenAPI specs' },
      ],
    },
    {
      id: 'databases',
      name: 'Databases & Storage',
      no: '04',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', context: 'Row-Level Security (RLS) & ACID transactions' },
        { name: 'Supabase', context: 'Managed relational state & cryptographic auth' },
        { name: 'MySQL', context: 'Enterprise relational database systems' },
        { name: 'PostGIS', context: 'Geospatial indexing & coordinate queries' },
        { name: 'ChromaDB', context: 'Vector database for document embedding retrieval' },
      ],
    },
    {
      id: 'aiml',
      name: 'AI & Machine Learning',
      no: '05',
      icon: Cpu,
      skills: [
        { name: 'PyTorch', context: 'Deep learning tensor operations & model inference' },
        { name: 'OpenCV', context: 'Image preprocessing, contour extraction & transforms' },
        { name: 'FastSAM', context: 'Real-time zero-shot visual defect segmentation' },
        { name: 'LangChain', context: 'RAG pipelines across machine technical manuals' },
        { name: 'Hugging Face', context: 'Pretrained transformer embeddings & tokenizers' },
      ],
    },
    {
      id: 'tools',
      name: 'Engineering & Dev Tools',
      no: '06',
      icon: Wrench,
      skills: [
        { name: 'Unity 6.3 LTS', context: 'Universal Render Pipeline (URP) & PhysX engine' },
        { name: 'Git & GitHub', context: 'Version control, branch isolation & actions' },
        { name: 'Docker', context: 'Containerization & isolated runtime environments' },
        { name: 'Linux / Bash', context: 'Shell automation & environment deployment' },
        { name: 'Figma', context: 'Art direction, interface wireframes & design systems' },
      ],
    },
  ];

  const displayedCategories =
    activeCategory === 'all'
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 sm:py-36 px-6 sm:px-8 lg:px-12 bg-background border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-black/[0.08] gap-6 text-stone text-xs font-mono tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="text-charcoal font-semibold">(04)</span>
            <span>/</span>
            <span>TECHNICAL CAPABILITIES MATRIX</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-olive" />
            <span>Strict Truth: Zero Arbitrary Proficiency Scores</span>
          </div>
        </div>

        {/* Narrative & Filters Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal tracking-tight">
              Verified Technical Stack
            </h2>
            <p className="text-base sm:text-lg text-stone font-light leading-relaxed">
              An honest architectural inventory of languages, frameworks, and engineering tools applied across my software projects and academic coursework at VVCE.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-charcoal text-white'
                  : 'bg-surface text-stone hover:text-charcoal hover:bg-black/5'
              }`}
            >
              All Disciplines
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-charcoal text-white'
                    : 'bg-surface text-stone hover:text-charcoal hover:bg-black/5'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categorical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="p-8 rounded-2xl bg-paper border border-black/[0.08] shadow-subtle flex flex-col justify-between space-y-6"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface border border-black/[0.06] flex items-center justify-center text-charcoal">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif text-xl font-medium text-charcoal">
                        {cat.name}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-stone">
                      {cat.no}
                    </span>
                  </div>

                  {/* Skills List with Context */}
                  <div className="space-y-4">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="font-mono text-xs font-semibold text-charcoal">
                          {skill.name}
                        </div>
                        <div className="text-xs text-stone font-light leading-relaxed">
                          {skill.context}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-mono text-stone">
                  <span>Verified Competency</span>
                  <span className="text-accent-olive font-medium">Applied</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
