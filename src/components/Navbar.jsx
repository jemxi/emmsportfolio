import React, { useState, useEffect } from 'react';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },  // ← Combined na
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/50 shadow-lg shadow-black/10'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold tracking-tight hover:text-emerald-400 transition-colors duration-200"
          >
            Emm
          </button>

          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 group ${activeSection === item.id ? 'text-emerald-400' : 'text-neutral-400 hover:text-neutral-100'
                    }`}
                >
                  {/* Mobile menu button */}
                  <button
                    className="md:hidden p-2 text-neutral-400 hover:text-neutral-100"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-emerald-400 transition-all duration-300 ${activeSection === item.id ? 'w-6' : 'w-0 group-hover:w-6'
                      }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block px-5 py-2 bg-emerald-500 text-neutral-950 text-sm font-semibold rounded-lg hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 shadow-lg shadow-emerald-500/20"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
