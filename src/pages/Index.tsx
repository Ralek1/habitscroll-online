import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import { useLanguage } from '../context/LanguageContext';
import { habits } from '../data/habits';
import type { Habit } from '../data/habits';
import { Sparkles, HeartPulse, Twitter, Youtube, Instagram, Facebook } from 'lucide-react';
import { Skeleton } from '../components/ui/skeleton';
import CookieConsent from '../components/CookieConsent';

// Lazy load components that aren't needed immediately
const HabitScroll = lazy(() => import('../components/HabitScroll'));
const ClosedScroll = lazy(() => import('../components/ClosedScroll'));
const LanguageSwitcher = lazy(() => import('../components/LanguageSwitcher'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full flex flex-col items-center justify-center p-8">
    <Skeleton className="h-[300px] w-full rounded-md bg-retro-purple-900/20" />
  </div>
);

const Index: React.FC = () => {
  const location = useLocation();
  const { translate } = useLanguage();
  const [currentHabit, setCurrentHabit] = useState<Habit | null>(null);
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const [usedHabitIds, setUsedHabitIds] = useState<number[]>([]);
  const [hasDiscovered, setHasDiscovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    // Mark component as loaded after initial render
    setIsLoaded(true);
    
    const savedHabitId = localStorage.getItem('currentHabitId');
    const showHabit = new URLSearchParams(location.search).get('showHabit') === 'true';
    
    if (savedHabitId && (showHabit || localStorage.getItem('hasDiscovered') === 'true')) {
      const habit = habits.find(h => h.id === parseInt(savedHabitId));
      if (habit) {
        setCurrentHabit(habit);
        setHasDiscovered(true);
        setIsScrollVisible(true);
        localStorage.setItem('hasDiscovered', 'true');
      }
    }

    // Check if cookie consent has been given
    const cookieConsent = localStorage.getItem('cookieConsent');
    setShowCookieConsent(!cookieConsent);
  }, [location]);

  // Preload key components when main content is loaded
  useEffect(() => {
    if (isLoaded) {
      // Preload other components that might be needed soon
      const prefetchComponent = async () => {
        if (!hasDiscovered) {
          // Preload HabitScroll if user is likely to discover a habit
          import('../components/HabitScroll');
        }
      };
      prefetchComponent();
    }
  }, [isLoaded, hasDiscovered]);

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
      
      localStorage.setItem('currentHabitId', newHabit.id.toString());
      localStorage.setItem('hasDiscovered', 'true');
      
      setUsedHabitIds(prev => [...prev, newHabit.id]);
      setHasDiscovered(true);
      
      setIsScrollVisible(true);
    }, 500);
  };

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookieConsent(false);

    // Since consent was given, make sure GA is initialized
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const handleCloseCookieConsent = () => {
    localStorage.setItem('cookieConsent', 'closed');
    setShowCookieConsent(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between py-12 px-4">
      <div className="absolute top-4 right-4 z-10">
        <Suspense fallback={<div className="w-8 h-8 bg-retro-purple-700/20 rounded animate-pulse"></div>}>
          <LanguageSwitcher />
        </Suspense>
      </div>
      
      <div className="text-center mb-8 animate-appear">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">{translate('app.title')}</h1>
        </div>
        <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed">
          {translate('app.subtitle')} <br /> 
          <span className="text-retro-accent">{translate('app.subtitle.highlight')}</span>
        </h2>
      </div>
      
      <div className="w-full max-w-2xl flex flex-col items-center">
        <div className="w-full">
          <Suspense fallback={<LoadingFallback />}>
            {hasDiscovered ? (
              <HabitScroll 
                habit={currentHabit} 
                isVisible={isScrollVisible} 
              />
            ) : (
              <ClosedScroll onClick={handleButtonClick} />
            )}
          </Suspense>
        </div>
        
        <div className="mt-8 mb-4 relative">
          {!hasDiscovered ? (
            <PixelButton onClick={handleButtonClick}>
              {translate('button.becomeBetter')}
            </PixelButton>
          ) : (
            <div className="flex flex-col items-center">
              <p className="font-pixel text-retro-purple-200 text-center mb-4">
                {translate('learn.intro')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link to="/learn-who-you-are">
                  <PixelButton onClick={() => {}}>
                    {translate('learn.yourself')}
                  </PixelButton>
                </Link>
                <Link to="/learn-about-habits">
                  <PixelButton onClick={() => {}}>
                    {translate('learn.habits')}
                  </PixelButton>
                </Link>
                <Link to="/learn-how-to-track">
                  <PixelButton onClick={() => {}}>
                    {translate('learn.tracking')}
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
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex gap-6 items-center justify-center mb-4">
            <a href="https://x.com/habitscroll" target="_blank" rel="noopener noreferrer" className="text-retro-purple-400 hover:text-retro-accent transition-colors">
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
          
          <div className="flex gap-4 items-center">
            <Link to="/impressum" className="text-retro-purple-400 hover:text-retro-accent transition-colors text-sm font-pixel-text">
              {translate('footer.impressum')}
            </Link>
            <Link to="/datenschutz" className="text-retro-purple-400 hover:text-retro-accent transition-colors text-sm font-pixel-text">
              {translate('footer.datenschutz')}
            </Link>
          </div>
        </div>
      </footer>

      {showCookieConsent && (
        <CookieConsent
          onAccept={handleAcceptCookies}
          onClose={handleCloseCookieConsent}
        />
      )}
    </div>
  );
};

export default Index;
