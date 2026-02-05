import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  const youtubeUrl = "https://www.youtube.com/@wsabsurd";
  
  const handleYouTubeClick = () => {
    window.open(youtubeUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/50">
            <img 
              src="/logo.jpg" 
              alt="WSAbsurd Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
          WSAbsurd
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-4">
          Content Creator | Video Editor | Graphic Designer
        </p>
        
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          Crafting compelling visual stories that captivate and inspire audiences
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Tombol YouTube */}
          <button
            onClick={handleYouTubeClick}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg shadow-red-500/50"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Visit YouTube Channel
          </button>

          {/* Tombol View My Work */}
          <button
            onClick={() => scrollToSection('project')}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
          >
            View My Work
            <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;