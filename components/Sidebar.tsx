import React from 'react';
import { NAV_ITEMS, PROFILE } from '../constants';
import { Github, Twitter, Linkedin, Mail, GraduationCap } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="w-full md:w-72 md:fixed md:h-screen bg-white md:border-r border-gray-100 flex flex-col justify-between z-50">
      <div className="p-8 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="mb-8 relative group">
          <div className="w-48 h-56 overflow-hidden shadow-xl border-gray-200 border-2">
            <img 
              src={PROFILE.avatarUrl} 
              alt={PROFILE.name}
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
          </div>
        </div>

        <h1 className="text-2xl font-serif font-bold text-gray-900 tracking-tight">
          {PROFILE.name.split(' ')[0]} 
          <span className="font-light text-gray-500 ml-1">{PROFILE.name.split(' ')[1]}</span>
        </h1>
        <p className="text-sm text-gray-500 mt-2 font-medium">{PROFILE.title}</p>
        <p className="text-xs text-gray-400 mt-1">{PROFILE.institution}</p>

        <nav className="mt-12 w-full hidden md:block">
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm uppercase tracking-widest text-gray-500 hover:text-gray-900 hover:pl-2 transition-all duration-300 border-l-2 border-transparent hover:border-academic-accent w-full text-left"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="p-8 flex justify-center md:justify-start gap-4 border-t border-gray-50 md:border-none bg-gray-50 md:bg-transparent">
        <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors" title="GitHub">
          <Github size={20} />
        </a>
        {PROFILE.scholar && (
          <a href={PROFILE.scholar} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors" title="Google Scholar">
            <GraduationCap size={20} />
          </a>
        )}
        {PROFILE.linkedin && (
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors" title="LinkedIn">
            <Linkedin size={20} />
          </a>
        )}
        <a href={`mailto:${PROFILE.email}`} className="text-gray-400 hover:text-gray-900 transition-colors" title="Email">
          <Mail size={20} />
        </a>
      </div>
    </aside>
  );
};