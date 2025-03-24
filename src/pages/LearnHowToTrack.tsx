
import React from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';

const LearnHowToTrack: React.FC = () => {
  const { translate } = useLanguage();
  
  // Set page title
  React.useEffect(() => {
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
        <div className="mt-2">
          <Link to="/">
            <PixelButton onClick={() => {}}>
              {translate('button.home')}
            </PixelButton>
          </Link>
        </div>
      </div>
      
      <div className="w-full max-w-2xl flex flex-col items-center">
        <div className="mb-8 text-center w-full p-6 scroll-paper rounded-lg">
          <h3 className="font-pixel-text text-xl mb-4">{translate('page.learn.track.comingSoon')}</h3>
          <p className="font-pixel-text text-lg">
            {translate('page.learn.track.description')}
          </p>
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
