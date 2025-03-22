
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
        {/* Top wooden handle */}
        <div className="scroll-handle scroll-handle-top">
          <div className="scroll-wooden-knob scroll-wooden-knob-left"></div>
          <div className="scroll-wooden-knob scroll-wooden-knob-right"></div>
        </div>
        
        {/* Middle rolled parchment */}
        <div className="scroll-roll flex items-center justify-center py-3">
          <Sparkles className="w-6 h-6 text-amber-800/70" />
          <span className="font-pixel text-amber-950 text-sm px-2">Click to discover a habit</span>
          <Sparkles className="w-6 h-6 text-amber-800/70" />
        </div>
        
        {/* Bottom wooden handle */}
        <div className="scroll-handle scroll-handle-bottom">
          <div className="scroll-wooden-knob scroll-wooden-knob-left"></div>
          <div className="scroll-wooden-knob scroll-wooden-knob-right"></div>
        </div>
      </div>
    </div>
  );
};

export default ClosedScroll;
