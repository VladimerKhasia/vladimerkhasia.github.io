import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Publications } from './components/Publications';
// import { CV } from './components/CV';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation / Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="md:pl-72 w-full transition-all duration-300">
        <Hero />
        
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16">
          <About />
          <Publications />
          {/* <CV /> */}
          
          <footer className="py-12 text-center text-gray-400 text-xs border-t border-gray-50 mt-12">
            <p>&copy; {new Date().getFullYear()} Vladimer Khasia. Built with React & Tailwind.</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;