import React, { useMemo } from 'react';
import { PUBLICATIONS } from '../constants';
import { FileText, Code, Globe } from 'lucide-react';

const AbstractShape: React.FC<{ seed: string }> = ({ seed }) => {
  // Deterministic random using seed
  const hash = seed.split('').reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
  const rand = (min: number, max: number, offset: number = 0) => {
    const x = Math.sin(hash + offset) * 10000;
    return Math.floor((x - Math.floor(x)) * (max - min) + min);
  };

  const shapes = useMemo(() => {
    const numShapes = rand(3, 6);
    return Array.from({ length: numShapes }).map((_, i) => ({
      cx: rand(10, 90, i),
      cy: rand(10, 90, i + 1),
      r: rand(10, 40, i + 2),
      opacity: (rand(20, 80, i + 3) / 100).toFixed(2),
      color: i % 2 === 0 ? '#fc03ad' : '#e2e8f0', // Accent and slate-200
    }));
  }, [seed]);

  return (
    <div className="w-full h-full bg-gray-50 overflow-hidden relative">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {shapes.map((s, i) => (
          <circle
            key={i}
            cx={s.cx}
            cy={s.cy}
            r={s.r}
            fill={s.color}
            fillOpacity={s.opacity}
            className="animate-pulse"
            style={{ animationDuration: `${3 + i}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

export const Publications: React.FC = () => {
  // Sort by year descending
  const sortedPubs = [...PUBLICATIONS].sort((a, b) => b.year - a.year);

  return (
    <section id="publications" className="py-12 md:py-20 border-b border-gray-100">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">Selected Publications</h2>
        <span className="text-xs text-gray-400 font-mono hidden md:inline-block">SORTED BY DATE</span>
      </div>

      <div className="space-y-12">
        {sortedPubs.map((pub) => (
          <div key={pub.id} className="group flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Abstract Thumbnail */}
            <div className="w-full md:w-56 shrink-0 overflow-hidden rounded-md border border-gray-100 shadow-sm relative h-40 md:h-auto">
                <AbstractShape seed={pub.title} />
                {/* Year Overlay */}
                <div className="absolute top-2 right-2 bg-white/90 px-2 py-0.5 text-xs font-bold shadow-sm rounded-sm z-10">
                    {pub.year}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-start">
              <h3 className="text-xl font-serif font-medium text-gray-900 leading-tight mb-2 group-hover:text-academic-accent transition-colors">
                {pub.title}
              </h3>
              
              <div className="text-sm text-gray-600 mb-3 leading-relaxed">
                {pub.authors.map((author, index) => (
                  <span key={index} className={author.isMe ? "font-bold text-gray-900 border-b border-gray-300" : ""}>
                    {author.name}
                    {index < pub.authors.length - 1 && ", "}
                  </span>
                ))}
              </div>

              <div className="text-sm text-gray-500 italic mb-4">
                In {pub.venue}, {pub.year}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {pub.links.paper && (
                  <a href={pub.links.paper} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border border-gray-800 text-gray-900 rounded-sm hover:bg-gray-900 hover:text-white transition-all">
                    <FileText size={12} />
                    Paper
                  </a>
                )}
                {pub.links.pdf && (
                  <a href={pub.links.pdf} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border border-gray-300 text-gray-600 rounded-sm hover:border-red-600 hover:text-red-600 transition-all">
                    <FileText size={12} />
                    PDF
                  </a>
                )}
                {pub.links.code && (
                  <a href={pub.links.code} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border border-gray-300 text-gray-600 rounded-sm hover:border-gray-900 hover:text-gray-900 transition-all">
                    <Code size={12} />
                    Code
                  </a>
                )}
                {pub.links.website && (
                  <a href={pub.links.website} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider border border-gray-300 text-gray-600 rounded-sm hover:border-academic-accent hover:text-academic-accent transition-all">
                    <Globe size={12} />
                    Website
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};