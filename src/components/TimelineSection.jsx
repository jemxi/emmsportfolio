import React, { useEffect, useRef, useState } from 'react';

const TimelineSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  // Combined Experience + Education
  const timelineData = [
    // EXPERIENCE
    {
      type: 'experience',
      title: 'IT Intern / Assistant Team Lead',
      organization: 'Hyundai Quezon Avenue',
      date: 'January 2026 - Present',
      description: [
        'Led a team of junior developers in implementing IT solutions',
        'Managed technical support operations and system maintenance',
        'Collaborated with cross-functional teams to optimize workflows',
        'Developed internal tools to improve operational efficiency',
      ],
    },
    {
      type: 'experience',
      title: 'Video Editor',
      organization: 'Global Future Services',
      date: 'December 2025 - February 2026',
      description: [
        'Edited advertisement and promotional videos for digital marketing campaigns',
        'Produced video ads for Facebook, YouTube, and other online platforms',
        'Collaborated with the marketing team to align video ads with brand strategy',
      ],
    },
    {
      type: 'experience',
      title: 'Freelance C# / ASP.NET Developer',
      organization: 'Self-Employed',
      date: 'September 2023 - November 2023',
      description: [
        'Developed web applications using C# and ASP.NET with SQL Server integration',
        'Built authentication systems, CRUD modules, and admin dashboards',
        'Worked directly with clients to gather requirements and deliver custom solutions',
      ],
    },
    
    // EDUCATION
    {
      type: 'education',
      title: 'Bachelor of Science in Information Technology',
      organization: 'Our Lady of the Sacred Heart College of Guimba, Inc.',
      date: '2022 - 2026',
      description: [
        'Specialization in Web Development and UI/UX Design',
        'Capstone Project: WasteWise - Electronic Platform for Recycled Products',
        'Active member of IT Society and Web Development Club',
      ],
    },
    {
      type: 'education',
      title: 'Senior High School',
      organization: 'Ramos National High School',
      date: '2022',
      description: [
        'Wrote my first “Hello, World!”',
        'Discovered HTML and explored basic web development',
        'Started building simple webpages and learning CSS for styling',
      ],
    },
  ];

  // Find the index where education starts
  const educationStartIndex = timelineData.findIndex(item => item.type === 'education');

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !lineRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const relativeScroll = scrollPosition - sectionTop;
      const progress = Math.min(Math.max(relativeScroll / sectionHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current.querySelectorAll('.timeline-item');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header - Responsive */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-block text-emerald-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 md:mb-4">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight px-4">
            Experience & Education
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line - Desktop & Tablet */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-800 md:-translate-x-1/2">
            <div
              ref={lineRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-emerald-500 to-emerald-400 transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            />

            {/* Glowing indicator */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-500/50 transition-all duration-300 ease-out"
              style={{ top: `${scrollProgress * 100}%` }}
            >
              <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
            </div>
          </div>

          {/* Timeline items - Responsive Grid */}
          <div className="space-y-8 md:space-y-16">
            {timelineData.map((item, index) => (
              <div key={index}>
                {/* Education Label - Show before first education item */}
                {index === educationStartIndex && (
                  <div className={`relative flex justify-center mb-8 md:mb-12 transition-all duration-700 ${
                    visibleItems.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}>
                    <div className="relative z-10 px-6 py-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span className="text-sm md:text-base font-bold text-white uppercase tracking-wider">
                          Education
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div
                  data-index={index}
                  className={`timeline-item relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 transition-all duration-700 ${
                    visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Mobile: All items on right side */}
                  {/* Desktop: Alternating left/right */}
                  <div className={`pl-10 md:pl-0 ${index % 2 === 0 ? '' : 'md:col-start-2'}`}>
                    <div
                      className={`group bg-neutral-950 border border-neutral-800 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 ${
                        index % 2 === 0 ? 'md:ml-auto' : ''
                      }`}
                    >
                      {/* Date Badge */}
                      <div className="mb-3 md:mb-4 text-left">
                        <span className="inline-block px-2.5 sm:px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs font-semibold rounded-full uppercase tracking-wider">
                          {item.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-200 leading-tight">
                        {item.title}
                      </h3>

                      {/* Organization */}
                      <p className="text-emerald-500 font-semibold mb-3 md:mb-4 text-sm sm:text-base">
                        {item.organization}
                      </p>

                      {/* Description List */}
                      <ul className="space-y-2 text-neutral-400 text-xs sm:text-sm text-left">
                        {item.description.map((desc, descIndex) => (
                          <li key={descIndex} className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5" />
                            <span className="flex-1 leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center dot - Mobile: Left side, Desktop: Center */}
                  <div className="absolute left-4 md:left-1/2 top-6 sm:top-8 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-emerald-500 border-2 md:border-4 border-neutral-900 rounded-full z-10 group-hover:scale-125 transition-transform duration-300">
                    <div className="absolute inset-0 bg-emerald-500 rounded-full blur-sm opacity-75" />
                  </div>

                  {/* Right side (even items) - empty for desktop layout */}
                  {index % 2 === 0 && <div className="hidden md:block" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;