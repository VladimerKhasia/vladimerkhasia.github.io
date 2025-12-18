import React from 'react';
import { PROFILE } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-20 border-b border-gray-100">
      <div className="max-w-3xl">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">About Me</h2>
        <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
          {PROFILE.about.split('\n').map((paragraph, idx) => (
             <p key={idx} className="mb-4">{paragraph}</p>
          ))}
          <p className="mt-6">
              My current research interests align closely with open problems in <span className="text-academic-accent font-medium">Scientific Machine Learning</span> and <span className="text-academic-accent font-medium">Deep Learning</span>.
              {/* My research focuses on investigating the foundations of artificial intelligence <a href="https://github.com/VladimerKhasia" className="underline decoration-gray-300 hover:decoration-academic-accent transition-all text-gray-900">PRIMAL</a> and <a href="https://github.com/VladimerKhasia" className="underline decoration-gray-300 hover:decoration-academic-accent transition-all text-gray-900">Vekuanet</a> that bridge theoretical gaps and practical applications. */}
          </p>
        </div>
      </div>
    </section>
  );
};