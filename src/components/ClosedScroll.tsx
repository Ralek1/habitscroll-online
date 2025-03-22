
import React from 'react';
import { Sparkles } from 'lucide-react';

interface ClosedScrollProps {
  onClick: () => void;
}

const ClosedScroll: React.FC<ClosedScrollProps> = ({ onClick }) => {
  return (
    <div 
      className="w-full max-w-md mx-auto cursor-pointer transition-transform hover:scale-105 duration-300"
      onClick={onClick}
    >
      <div className="pixel-scroll-closed relative">
        <div className="scroll-closed-body flex items-center justify-center py-6 px-4">
          <Sparkles className="w-6 h-6 text-amber-800/80" />
          <span className="font-pixel text-amber-950 text-sm px-3">Click to discover a habit</span>
          <Sparkles className="w-6 h-6 text-amber-800/80" />
        </div>
      </div>
    </div>
  );
};

export default ClosedScroll;
