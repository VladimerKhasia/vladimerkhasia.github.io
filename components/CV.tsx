import React from 'react';
import { EXPERIENCES, EDUCATION } from '../constants';
import { Download } from 'lucide-react';

export const CV: React.FC = () => {
  return (
    <section id="cv" className="py-12 md:py-20 mb-10">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">Curriculum Vitae</h2>
        <button className="flex items-center gap-2 text-sm font-medium text-academic-accent hover:text-purple-700 transition-colors">
            <Download size={16} />
            Download PDF
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education */}
        <div>
           <h3 className="text-lg font-serif font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Education</h3>
           <div className="space-y-8 border-l border-gray-100 ml-2 pl-6">
              {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative">
                      <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-academic-accent ring-4 ring-white"></div>
                      <h4 className="text-md font-bold text-gray-800">{edu.degree}</h4>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-sm text-gray-400 mt-1 font-mono">{edu.year}</p>
                  </div>
              ))}
           </div>
        </div>

        {/* Experience */}
        <div>
           <h3 className="text-lg font-serif font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Experience</h3>
           <div className="space-y-8 border-l border-gray-100 ml-2 pl-6">
              {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="relative">
                       <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-300 ring-4 ring-white"></div>
                      <h4 className="text-md font-bold text-gray-800">{exp.role}</h4>
                      <p className="text-gray-600">{exp.company}</p>
                      <p className="text-sm text-gray-400 mt-1 font-mono mb-2">{exp.period}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{exp.description}</p>
                  </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};