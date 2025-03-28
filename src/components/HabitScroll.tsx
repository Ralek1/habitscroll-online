
import React, { useState, useEffect, useRef } from 'react';
import type { Habit } from '../data/habits';
import { useLanguage } from '../context/LanguageContext';

interface HabitScrollProps {
  habit: Habit | null;
  isVisible: boolean;
}

const HabitScroll: React.FC<HabitScrollProps> = ({ habit, isVisible }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const { language } = useLanguage();
  
  useEffect(() => {
    if (isVisible && scrollRef.current) {
      const height = scrollRef.current.scrollHeight;
      document.documentElement.style.setProperty('--scroll-height', `${height}px`);
      setScrollHeight(height);
    }
  }, [isVisible, habit]);

  if (!habit) return null;

  // Use content based on selected language
  const lang = language as 'en' | 'de';

  return (
    <div className={`
      w-full max-w-xl mx-auto mt-6 transform transition-all duration-500
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
    `}>
      <div className="pixel-scroll-container">
        {/* Top scroll handle */}
        <div className="pixel-scroll-handle pixel-scroll-handle-top">
          <div className="pixel-scroll-knob"></div>
          <div className="pixel-wooden-rod"></div>
          <div className="pixel-scroll-knob"></div>
        </div>
        
        {/* Scroll content */}
        <div className="scroll-paper rounded-xl">
          <div 
            ref={scrollRef}
            className={`
              pixel-scroll-content p-6 px-8 overflow-hidden
              ${isVisible ? 'animate-scroll-unroll' : 'h-0 opacity-0'}
            `}
            style={{ height: isVisible ? 'auto' : 0 }}
          >
            <h2 className="font-pixel text-retro-purple-200 text-xl mb-4 text-center">
              {habit.title[lang]}
            </h2>
            
            <p className="font-pixel-text text-lg mb-4 text-retro-dark">
              {habit.description[lang]}
            </p>
            
            <div className="space-y-4">
              <div className="scroll-section">
                <h3 className="font-pixel text-retro-dark text-sm mb-2">
                  {lang === 'en' ? 'HOW TO GAIN' : 'WIE DU BEGINNST'}
                </h3>
                <p className="font-pixel-text text-retro-dark">{habit.howToGain[lang]}</p>
              </div>
              
              <div className="scroll-section">
                <h3 className="font-pixel text-retro-dark text-sm mb-2">
                  {lang === 'en' ? 'PERFECT FOR' : 'PERFEKT FÜR'}
                </h3>
                <p className="font-pixel-text text-retro-dark">{habit.perfectFor[lang]}</p>
              </div>
              
              <div className="scroll-section">
                <h3 className="font-pixel text-retro-dark text-sm mb-2">
                  {lang === 'en' ? 'BENEFITS' : 'VORTEILE'}
                </h3>
                <p className="font-pixel-text text-retro-dark">{habit.benefits[lang]}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom scroll handle */}
        <div className="pixel-scroll-handle pixel-scroll-handle-bottom">
          <div className="pixel-scroll-knob"></div>
          <div className="pixel-wooden-rod"></div>
          <div className="pixel-scroll-knob"></div>
        </div>
      </div>
    </div>
  );
};

export default HabitScroll;
