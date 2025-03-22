
import React, { useState, useEffect, useRef } from 'react';
import type { Habit } from '../data/habits';

interface HabitScrollProps {
  habit: Habit | null;
  isVisible: boolean;
}

const HabitScroll: React.FC<HabitScrollProps> = ({ habit, isVisible }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  
  useEffect(() => {
    if (isVisible && scrollRef.current) {
      const height = scrollRef.current.scrollHeight;
      document.documentElement.style.setProperty('--scroll-height', `${height}px`);
      setScrollHeight(height);
    }
  }, [isVisible, habit]);

  if (!habit) return null;

  return (
    <div className={`
      w-full max-w-xl mx-auto mt-6 transform transition-all duration-500
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
    `}>
      {/* Scroll content with the new image-based design */}
      <div className="pixel-scroll-container">
        <img 
          src="/lovable-uploads/4ac26d16-a0d7-46ba-96a1-75965c9125aa.png" 
          alt="Scroll background" 
          className="scroll-background"
        />
        
        <div 
          ref={scrollRef}
          className={`
            pixel-scroll-content p-6 px-8 overflow-hidden
            ${isVisible ? 'animate-scroll-unroll' : 'h-0 opacity-0'}
          `}
          style={{ height: isVisible ? 'auto' : 0 }}
        >
          <h2 className="font-pixel text-amber-950 text-xl mb-4 text-center">
            {habit.title}
          </h2>
          
          <p className="font-pixel-text text-lg mb-4 text-amber-950">
            {habit.description}
          </p>
          
          <div className="space-y-4">
            <div className="scroll-section">
              <h3 className="font-pixel text-amber-950 text-sm mb-2">HOW TO GAIN</h3>
              <p className="font-pixel-text text-amber-950">{habit.howToGain}</p>
            </div>
            
            <div className="scroll-section">
              <h3 className="font-pixel text-amber-950 text-sm mb-2">HOW TO TRACK</h3>
              <p className="font-pixel-text text-amber-950">{habit.howToTrack}</p>
            </div>
            
            <div className="scroll-section">
              <h3 className="font-pixel text-amber-950 text-sm mb-2">BENEFITS</h3>
              <p className="font-pixel-text text-amber-950">{habit.benefits}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitScroll;
