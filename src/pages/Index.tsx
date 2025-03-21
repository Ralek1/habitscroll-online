import React, { useState, useEffect } from 'react';
import PixelButton from '../components/PixelButton';
import HabitScroll from '../components/HabitScroll';
import { habits } from '../data/habits';
import type { Habit } from '../data/habits';
import { Sparkles, HeartPulse } from 'lucide-react';

const Index: React.FC = () => {
  const [currentHabit, setCurrentHabit] = useState<Habit | null>(null);
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const [usedHabitIds, setUsedHabitIds] = useState<number[]>([]);

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
    setIsScrollVisible(false);
    
    setTimeout(() => {
      const newHabit = getRandomHabit();
      setCurrentHabit(newHabit);
      
      setUsedHabitIds(prev => [...prev, newHabit.id]);
      
      setIsScrollVisible(true);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="text-center mb-8 animate-appear">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">PURPLE HABIT SCROLLS</h1>
        </div>
        <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed">
          Discover Your Next <br /> 
          <span className="text-retro-accent">Daily Habit</span>
        </h2>
      </div>
      
      <div className="w-full max-w-2xl flex flex-col items-center">
        <div className="w-full">
          {currentHabit ? (
            <HabitScroll 
              habit={currentHabit} 
              isVisible={isScrollVisible} 
            />
          ) : (
            <div className="text-center py-10 px-6 bg-retro-purple-900/50 rounded-lg border-2 border-retro-purple-700">
              <Sparkles className="w-8 h-8 mx-auto text-retro-purple-400 mb-4" />
              <p className="font-pixel text-retro-purple-200 text-sm">
                Click the button below to discover a new habit!
              </p>
            </div>
          )}
        </div>
        
        <div className="mt-8 mb-4 relative">
          <PixelButton onClick={handleButtonClick}>
            {currentHabit ? "New Habit" : "Discover Habit"}
          </PixelButton>
          
          <div className="absolute -bottom-6 w-full text-center">
            <HeartPulse className="w-5 h-5 mx-auto text-retro-purple-400 animate-pulse" />
          </div>
        </div>
      </div>
      
      <div className="mt-auto pt-8 pb-2 text-center">
        <p className="font-pixel-text text-retro-purple-400 text-sm">
          Build healthy habits, one scroll at a time
        </p>
      </div>
    </div>
  );
};

export default Index;
