
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles } from 'lucide-react';

const LearnHowToTrack: React.FC = () => {
  const { translate } = useLanguage();
  
  // Set page title
  useEffect(() => {
    document.title = translate('learn.tracking');
  }, [translate]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
      
      <div className="text-center mb-8 animate-appear flex flex-col items-center">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">PURPLE HABIT SCROLLS</h1>
        </div>
        <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed text-center">
          {translate('page.learn.track.title')} <br /> 
          <span className="text-retro-accent">{translate('page.learn.track.subtitle')}</span>
        </h2>
      </div>
      
      <div className="w-full max-w-2xl flex flex-col items-center">
        {/* Scroll Component */}
        <div className="pixel-scroll-container w-full max-w-xl mx-auto mb-8">
          {/* Top scroll handle */}
          <div className="pixel-scroll-handle pixel-scroll-handle-top">
            <div className="pixel-scroll-knob"></div>
            <div className="pixel-wooden-rod"></div>
            <div className="pixel-scroll-knob"></div>
          </div>
          
          {/* Scroll content */}
          <div className="scroll-paper rounded-xl">
            <div className="p-6 px-8">
              <h3 className="font-pixel text-amber-950 text-xl mb-4 text-center">
                {translate('page.learn.track.comingSoon')}
              </h3>
              
              <p className="font-pixel-text text-lg mb-4 text-amber-950">
                {translate('page.learn.track.description')}
              </p>
              
              <div className="flex justify-center my-6">
                <Sparkles className="w-6 h-6 text-amber-800/80 animate-pulse" />
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
        
        <Link to="/">
          <PixelButton onClick={() => {}}>
            {translate('button.home')}
          </PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default LearnHowToTrack;
