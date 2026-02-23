import React, { useEffect, useRef } from 'react';
import Squares from '../square/Squares';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const elements = heroRef.current.querySelectorAll('.animate-in');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('active');
      }, index * 100);
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-neutral-950 to-neutral-950" />

      {/* Squares Background */}
      <div className="absolute inset-0 z-[5]">
        <Squares
          speed={0.25}
          squareSize={48}
          direction="diagonal"
          borderColor="rgba(120, 90, 255, 0.15)"
          hoverFillColor="rgba(120, 90, 255, 0.25)"
        />
      </div>

      {/* Glow Overlay */}
      <div
        className=" w-full sm:w-auto absolute inset-0 z-[6] pointer-events-none
        bg-[radial-gradient(circle_at_center,rgba(120,90,255,0.15),transparent_60%)]"
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* CONTENT */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">

        <div className="animate-in opacity-0 translate-y-4 transition-all duration-500">
          <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase rounded-full mb-6">
            Available for Opportunities
          </span>
        </div>

        <h1 className="animate-in opacity-0 translate-y-4 transition-all duration-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
          John Emmanuel<br />S. Menor
        </h1>

        <p className="animate-in opacity-0 translate-y-4 transition-all duration-500 text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-400 font-light mb-4 tracking-wide">
          Full Stack Developer · UI/UX Designer
        </p>

        <p className="animate-in opacity-0 translate-y-4 transition-all duration-500 text-base text-neutral-500 max-w-2xl mx-auto mb-10">
          Based in Guimba, Nueva Ecija • Crafting digital experiences with purpose and precision
        </p>

        <div className="animate-in opacity-0 translate-y-4 transition-all duration-500 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">

          <a
            href="#projects"
            className="group px-8 py-3.5 bg-emerald-500 text-neutral-950 font-semibold rounded-lg
              hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.97]
              transition-all duration-200 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
          >
            View My Work
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>

          <a
            href="#contact"
            className="px-8 py-3.5 bg-transparent border border-neutral-700 text-neutral-100 font-semibold rounded-lg
              hover:bg-neutral-800 hover:border-neutral-600 hover:scale-[1.02]
              active:scale-[0.97] transition-all duration-200"
          >
            Contact Me
          </a>

        </div>

        {/* SOCIAL ICONS */}
        <div className="animate-in opacity-0 translate-y-4 transition-all duration-500 mt-16 flex items-center justify-center gap-6 text-neutral-500">

          {/* GitHub */}
          <a href="https://github.com/jemxi" className="hover:text-emerald-400 transition-all duration-200 hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/john-emmanuel-menor-562a18311/" className="hover:text-emerald-400 transition-all duration-200 hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
            </svg>
          </a>

          <a
            href="https://www.behance.net/jemxii"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-all duration-200 hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 7h-6V5h6v2zm-9.5 5.5c0-2.1-1.5-3.5-3.7-3.5H2v10h7.1c2.3 0 3.9-1.5 3.9-3.6 0-1.6-1-2.8-2.5-3.2 1.2-.4 2-1.4 2-2.7zM5 11h3.5c1 0 1.7.6 1.7 1.5S9.5 14 8.5 14H5v-3zm3.8 6H5v-3h3.8c1 0 1.8.6 1.8 1.5S9.8 17 8.8 17zM22 12.5c0-2.6-1.7-4.5-4.3-4.5-2.5 0-4.3 1.8-4.3 4.6 0 2.9 1.8 4.6 4.4 4.6 2 0 3.5-1 4-2.7h-2.3c-.3.8-.9 1.2-1.7 1.2-1.2 0-2-.8-2.1-2h6.2c.1-.3.1-.7.1-1.2zm-6.3-.6c.1-1.2.9-1.9 2-1.9s1.8.8 1.9 1.9h-3.9z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Animation Helper */}
      <style jsx>{`
        .animate-in {
          transition: opacity 500ms ease-out, transform 500ms ease-out;
        }
        .animate-in.active {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

    </section>
  );
};

export default Hero;
