import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/jemxi',
      target: '_blank',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/john-emmanuel-menor-562a18311/',
      target: '_blank',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'Behance',
      href: 'https://www.behance.net/jemxii',
      icon: (
        <svg className="w-9 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 7h-6V5h6v2zm-6.5 3.5c0-2.21-1.79-4-4-4H3v13h8.5c2.48 0 4.5-2.02 4.5-4.5 0-1.93-1.22-3.57-2.93-4.18.87-.59 1.43-1.58 1.43-2.82zm-9 6H5v-4h1.5c1.38 0 2.5.9 2.5 2s-1.12 2-2.5 2zm0-6H5V7h1.5c1.1 0 2 .67 2 1.5S7.6 10.5 6.5 10.5zm10.44-1.99c-2.07 0-3.75 1.68-3.75 3.75s1.68 3.75 3.75 3.75c1.64 0 3.02-1.05 3.53-2.5h-1.9c-.32.46-.84.75-1.63.75-.94 0-1.69-.53-1.88-1.25h5.5c.05-.23.08-.47.08-.75 0-2.07-1.68-3.75-3.75-3.75zm-1.88 3c.19-.72.94-1.25 1.88-1.25.93 0 1.69.53 1.88 1.25h-3.76z"/>
        </svg>
      ),
    },
    {
      name: 'Email',
      href: 'mailto:azjohnemmanuel@email.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">John Emmanuel S. Menor</h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              IT Student, Web Developer, and UI/UX Designer passionate about creating
              meaningful digital experiences.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="p-2 text-neutral-400 hover:text-emerald-400 hover:scale-110 transition-all duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Guimba, Nueva Ecija</li>
              <li>
                <a href="mailto:jem.menor@email.com" className="hover:text-emerald-400 transition-colors duration-200">
                  azjohnemmanuel@email.com
                </a>
              </li>
              <li>Available for opportunities</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© {currentYear} John Emmanuel S. Menor. All rights reserved.</p>
          <p>
            Built with <span className="text-emerald-400">React</span> &{' '}
            <span className="text-emerald-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
