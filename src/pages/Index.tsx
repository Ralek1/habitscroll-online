
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import HabitScroll from '../components/HabitScroll';
import ClosedScroll from '../components/ClosedScroll';
import { habits } from '../data/habits';
import type { Habit } from '../data/habits';
import { Sparkles, HeartPulse, Twitter, Youtube, Instagram, Facebook } from 'lucide-react';

const Index: React.FC = () => {
  const [currentHabit, setCurrentHabit] = useState<Habit | null>(null);
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const [usedHabitIds, setUsedHabitIds] = useState<number[]>([]);
  const [hasDiscovered, setHasDiscovered] = useState(false);

  const getRandomHabit = () => {
    if (usedHabitIds.length >= habits.length) {
      setUsedHabitIds([]);
    }
    
    const availableHabits = habits.filter(habit => !usedHabitIds.includes(habit.id));
    
    if (availableHabits.length === 0) return habits[0];
    
    const randomIndex = Math.floor(Math.random() * availableHabits.length);
    return availableHabits[randomIndex];
  };

  const handleButtonClick = () => {
    if (hasDiscovered) return;
    
    setIsScrollVisible(false);
    
    setTimeout(() => {
      const newHabit = getRandomHabit();
      setCurrentHabit(newHabit);
      
      setUsedHabitIds(prev => [...prev, newHabit.id]);
      setHasDiscovered(true);
      
      setIsScrollVisible(true);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between py-12 px-4">
      <div className="text-center mb-8 animate-appear">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">THE HABIT SCROLLS</h1>
        </div>
        <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed">
          Now Start Your Next <br /> 
          <span className="text-retro-accent">Daily Habit</span>
        </h2>
      </div>
      
      <div className="w-full max-w-2xl flex flex-col items-center">
        <div className="w-full">
          {hasDiscovered ? (
            <HabitScroll 
              habit={currentHabit} 
              isVisible={isScrollVisible} 
            />
          ) : (
            <ClosedScroll onClick={handleButtonClick} />
          )}
        </div>
        
        <div className="mt-8 mb-4 relative">
          {!hasDiscovered ? (
            <PixelButton onClick={handleButtonClick}>
              Discover Habit
            </PixelButton>
          ) : (
            <div className="flex flex-col items-center">
              <p className="font-pixel text-retro-purple-200 text-center mb-4">
                Don't know how to start a habit? Learn more about:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link to="/learn-who-you-are">
                  <PixelButton onClick={() => {}}>
                    Learn Who You Are
                  </PixelButton>
                </Link>
                <Link to="/learn-about-habits">
                  <PixelButton onClick={() => {}}>
                    Learn About Habits
                  </PixelButton>
                </Link>
                <Link to="/learn-how-to-track">
                  <PixelButton onClick={() => {}}>
                    Learn How To Track
                  </PixelButton>
                </Link>
              </div>
            </div>
          )}
          
          <div className="absolute -bottom-6 w-full text-center">
            <HeartPulse className="w-5 h-5 mx-auto text-retro-purple-400 animate-pulse" />
          </div>
        </div>
      </div>
      
      <footer className="w-full mt-12 pt-8 pb-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left section - empty for now */}
            <div className="hidden md:block"></div>
            
            {/* Center section - Social media */}
            <div className="flex gap-6 items-center">
              <a href="#" className="text-retro-purple-400 hover:text-retro-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-retro-purple-400 hover:text-retro-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-retro-purple-400 hover:text-retro-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-retro-purple-400 hover:text-retro-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            
            {/* Right section - Legal links */}
            <div className="flex gap-4 items-center">
              <Link to="/impressum" className="text-retro-purple-400 hover:text-retro-accent transition-colors text-sm font-pixel-text">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-retro-purple-400 hover:text-retro-accent transition-colors text-sm font-pixel-text">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
