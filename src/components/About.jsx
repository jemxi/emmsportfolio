import React, { useEffect, useRef, useState } from 'react';
import GlareHover from "../glare/GlareHover.jsx";


const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 px-6 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Building digital solutions with innovation and precision
            </h2>
            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                I’m an aspiring IT professional with hands-on experience building web applications and supporting
                real-world IT operations. I’ve worked with PHP, React, ASP.NET, and modern frontend tools, and I
                focus on creating user-friendly systems with clean design and efficient code.
              </p>

              <p>
                I’ve built multiple projects that emphasize usability, performance, and maintainability, helping
                turn ideas into practical digital solutions that solve real problems.
              </p>

              <p>
                I take pride in writing clean, maintainable code and building solutions that are reliable,
                scalable, and user-focused.
              </p>
            </div>

            <div className="mt-6 md:mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4">
              <div className="px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-emerald-500/50 transition-colors duration-300 group">
                <div className="text-2xl font-bold text-emerald-400 group-hover:scale-110 transition-transform duration-200">8+</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">Features Developed</div>
              </div>
              <div className="px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-emerald-500/50 transition-colors duration-300 group">
                <div className="text-2xl font-bold text-emerald-400 group-hover:scale-110 transition-transform duration-200">5+</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">Tech Stacks Used</div>
              </div>
              <div className="px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-emerald-500/50 transition-colors duration-300 group">
                <div className="text-2xl font-bold text-emerald-400 group-hover:scale-110 transition-transform duration-200">100%</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">Dedicated</div>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500/20 to-neutral-900 border border-neutral-800">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full opacity-20 blur-3xl" />
              </div>
              <GlareHover
                width="100%"
                height="100%"
                borderRadius="1rem"
                background="transparent"
                glareColor="#ffffff"
                glareOpacity={0.25}
                glareAngle={-45}
                glareSize={200}
                transitionDuration={700}
                className="w-full h-full"
              >
                <img
                  src="/mypic.jpg"
                  alt="John Emmanuel Menor"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </GlareHover>



            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
