import React, { useEffect, useRef, useState } from 'react';
import PixelSnow from '../pixelsnow/PixelSnow';


const Leadership = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef(null);

  const achievements = [
    {
      title: 'Assistant Team Lead',
      organization: 'Hyundai Quezon Avenue',
      impact: 'Led technical infrastructure and team coordination',
      badge: 'Leadership Role',
      image: '/tlassist.jpg',
      images: ['/tlassist.jpg', '/tlassist2.jpg', '/tlassist3.jpg'], // Multiple images
      status: 'Completed',
      duration: '6 months',
      team: 'IT Support Team',
      description: '🏆 Diagnosed and resolved Wi-Fi, LAN, and basic hardware connectivity issues. Led a team of junior developers in implementing IT solutions and managed technical support operations.',
      keyFeatures: [
        'Network troubleshooting and maintenance',
        'Team coordination and leadership',
        'Hardware diagnostics and repair',
        'Technical documentation',
        'User support and training',
      ],
      techStack: ['Windows Server', 'Networking', 'Hardware Diagnostics', 'Team Management'],
    },
    {
      title: 'Public Relations Officer',
      organization: 'Junior Philippine Computer Society',
      impact: 'Designed visual content reaching 500+ students',
      badge: 'Community Leadership',
      image: '/pros.jpg',
      images: ['/pros.jpg', '/jpcs.jpg', '/jpcs2.jpg'], // Multiple images
      status: 'Active',
      duration: '1 year',
      team: 'JPCS Executive Board',
      description: '🎨 Designed promotional posters and visual content for Facebook and Instagram pages. Created engaging designs that increased student engagement by 40%.',
      keyFeatures: [
        'Social media content creation',
        'Event promotion materials',
        'Brand identity development',
        'Community engagement strategies',
        'Digital marketing campaigns',
      ],
      techStack: ['Figma', 'Adobe Photoshop', 'Canva', 'Social Media Marketing'],
    },
    {
      title: 'IT Quiz Bee - 1st Place',
      organization: 'School Level Competition',
      impact: 'Demonstrated technical excellence and problem-solving',
      badge: 'Award-Winning Achievement',
      image: '/quizbee.jpg',
      images: ['/quizbee.jpg'],
      status: 'Completed',
      duration: '1 day',
      team: 'Individual Competition',
      description: '🏅 First Place for demonstrating strong problem-solving and IT knowledge. Competed against 12+ participants and achieved a perfect score in the final round.',
      keyFeatures: [
        'Advanced IT knowledge demonstration',
        'Problem-solving under pressure',
        'Quick decision-making',
        'Comprehensive technical understanding',
        'Competitive excellence',
      ],
      techStack: ['Programming', 'Networking', 'Database Management', 'Systems Analysis'],
    },
    {
      title: 'Capstone Project Leader',
      organization: 'WasteWise Platform',
      impact: 'Built full-stack platform for sustainable commerce',
      badge: 'Award-Winning Project',
      image: '/capslead.jpg',
      images: ['/capslead.jpg', '/lead.jpg',],
      status: 'In Progress',
      duration: '8 months',
      team: 'Development Team of 5',
      description: 'Led the design and development of a full-stack web platform supporting recycled and upcycled products, helping promote sustainable practices within local communities.</div>',
      keyFeatures: [
        'E-commerce platform for recycled products',
        'User authentication and authorization',
        'Product listing and search functionality',
        'Real-time chat between buyers and sellers',
        'Admin dashboard with analytics',

      ],
     techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'REST API'],
      sourceCode: 'https://github.com/yourusername/wastewise',
      liveProject: 'https://wastewise-demo.vercel.app',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAchievement(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedAchievement && selectedAchievement.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedAchievement.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedAchievement && selectedAchievement.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedAchievement.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="leadership" ref={sectionRef} className="py-24 md:py-32 px-6 bg-black relative overflow-hidden">
    {/* PixelSnow Background */}
    <PixelSnow
      color="#10b981"
      flakeSize={0.015}
      minFlakeSize={1.5}
      pixelResolution={150}
      speed={0.8}
      depthFade={10}
      farPlane={25}
      brightness={0.6}
      gamma={0.5}
      density={0.2}
      variant="snowflake"
      direction={125}
      className="absolute inset-0 z-0 opacity-30"
    />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Impact & Recognition
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-br from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            Leadership & Achievements
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Committed to making a difference through technology and community engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              onClick={() => openModal(achievement)}
              className={`group relative h-[400px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-neutral-900">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-950"><svg class="w-20 h-20 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>`;
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-emerald-500/50 transition-all duration-500" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                  <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-400 text-xs font-semibold rounded-full uppercase tracking-wider">
                      {achievement.badge}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight flex-1">{achievement.title}</h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 flex-shrink-0">
                      <div className="inline-flex items-center gap-2 text-emerald-400 text-sm font-medium whitespace-nowrap">
                        <span>View Details</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-md opacity-90">{achievement.impact}</p>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent" />
                <div className="absolute inset-0 shadow-2xl shadow-emerald-500/20" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className={`inline-flex flex-wrap items-center justify-center gap-12 md:gap-16 px-8 md:px-12 py-8 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-xl border border-white/5 rounded-3xl transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '600ms' }}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-2">5+</div>
              <div className="text-sm text-neutral-400 font-medium">Leadership Roles</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-sm text-neutral-400 font-medium">Team Task Handled </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-2">1</div>
              <div className="text-sm text-neutral-400 font-medium">Awards Won</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal with Carousel */}
      {isModalOpen && selectedAchievement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl" onClick={closeModal}>
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/50 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-6 right-6 z-20 p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Carousel Container */}
              <div className="relative w-full bg-neutral-900 group">
                <img 
                  src={selectedAchievement.images[currentImageIndex]} 
                  alt={`${selectedAchievement.title} ${currentImageIndex + 1}`} 
                  className="w-full h-auto max-h-96 object-contain transition-opacity duration-300"
                  onError={(e) => { e.target.style.display = 'none'; }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-block px-4 py-2 bg-blue-500/90 backdrop-blur-sm text-white text-sm font-bold rounded-xl shadow-lg">{selectedAchievement.badge}</span>
                </div>

                {/* Carousel Controls - Only show if multiple images */}
                {selectedAchievement.images && selectedAchievement.images.length > 1 && (
                  <>
                    {/* Previous Button */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {/* Next Button */}
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 backdrop-blur-sm text-white text-sm rounded-full">
                      {currentImageIndex + 1} / {selectedAchievement.images.length}
                    </div>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 right-6 flex gap-2">
                      {selectedAchievement.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(idx);
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === currentImageIndex ? 'bg-emerald-400 w-6' : 'bg-white/50 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedAchievement.title}</h2>
                <div className="grid grid-cols-3 gap-4 mb-8 mt-6">
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="text-xs text-neutral-400 mb-1">Status</div>
                    <div className={`text-sm font-bold ${selectedAchievement.status === 'Completed' ? 'text-green-400' : selectedAchievement.status === 'Active' ? 'text-blue-400' : 'text-yellow-400'}`}>{selectedAchievement.status}</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="text-xs text-neutral-400 mb-1">Duration</div>
                    <div className="text-sm font-bold text-white">{selectedAchievement.duration}</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="text-xs text-neutral-400 mb-1">Team</div>
                    <div className="text-sm font-bold text-white truncate">{selectedAchievement.team}</div>
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Description</h3>
                  <p className="text-neutral-300 leading-relaxed">{selectedAchievement.description}</p>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedAchievement.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-neutral-300">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedAchievement.techStack.map((tech, idx) => (
                      <span key={idx} className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-lg">{tech}</span>
                    ))}
                  </div>
                </div>
                {(selectedAchievement.sourceCode || selectedAchievement.liveProject) && (
                  <div className="flex flex-wrap gap-4">
                    {selectedAchievement.sourceCode && (
                      <a href={selectedAchievement.sourceCode} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-colors duration-200">View Source Code</a>
                    )}
                    {selectedAchievement.liveProject && (
                      <a href={selectedAchievement.liveProject} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-200">View Project</a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Leadership;