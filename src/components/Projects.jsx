import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const projects = [
    {
  title: 'WasteWise',
  category: 'Capstone Project',
  description: 'Electronic platform for recycled products promoting environmental sustainability through technology and community engagement.',
  tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'REST API', 'SMS API', 'Google Cloud Console'],
  gradient: 'from-emerald-500 to-teal-600',
  liveUrl: 'https://wastewise.shop/',
  githubUrl: 'https://github.com/jemxi/wastewise',
},
    {
      title: 'Internship Tracking System',
      category: 'Web Application',
      description: 'A web-based system for tracking internship progress, attendance, tasks, and hours through a clean and user-friendly interface.',
      tech: ['React', 'Vite', 'JavaScript', 'CSS'],
      gradient: 'from-emerald-500 to-teal-600',
      liveUrl: 'https://internship-track.vercel.app/',
      githubUrl: 'https://github.com/jemxi/internship-track',
    },
    {
      title: 'Portfolio Templates',
      category: 'UI/UX Design',
      description: 'Collection of modern, responsive portfolio templates designed in Figma with complete design systems.',
      tech: ['Figma', 'Adobe XD', 'Design Systems'],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Task Management App',
      category: 'Mobile-First Web App',
      description: 'Collaborative task management tool with drag-and-drop interface and real-time team synchronization.',
      tech: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current.querySelectorAll('.project-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 px-6 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Selected works that showcase my passion for design and development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`project-card group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-5 sm:p-6 md:p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-neutral-800 text-emerald-400 text-xs font-semibold rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-neutral-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-neutral-950 border border-neutral-800 text-neutral-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-400 hover:gap-3 transition-all duration-200"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral-400 hover:text-neutral-100 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
