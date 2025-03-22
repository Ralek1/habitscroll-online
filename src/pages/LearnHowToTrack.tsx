
import React from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import { ArrowLeft } from 'lucide-react';

const LearnHowToTrack: React.FC = () => {
  // Set page title
  React.useEffect(() => {
    document.title = 'Track';
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="text-center mb-8 animate-appear flex flex-col items-center">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">PURPLE HABIT SCROLLS</h1>
        </div>
        <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed text-center">
          Learn How To <br /> 
          <span className="text-retro-accent">Track Habits</span>
        </h2>
        <div className="mt-2">
          <Link to="/?showHabit=true">
            <PixelButton onClick={() => {}}>
              Home
            </PixelButton>
          </Link>
        </div>
      </div>
      
      <div className="w-full max-w-2xl flex flex-col items-center">
        <div className="mb-8 text-center w-full p-6 scroll-paper rounded-lg">
          <h3 className="font-pixel-text text-xl mb-4">Coming Soon!</h3>
          <p className="font-pixel-text text-lg">
            This page will feature links to habit tracking tools, apps, and methodologies 
            to help you build consistency. Check back later!
          </p>
        </div>
        
        <Link to="/?showHabit=true">
          <PixelButton onClick={() => {}}>
            Home
          </PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default LearnHowToTrack;
