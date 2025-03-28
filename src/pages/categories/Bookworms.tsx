
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../../components/PixelButton';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';
import { Book } from 'lucide-react';

const Bookworms: React.FC = () => {
  const { translate, language } = useLanguage();
  
  useEffect(() => {
    document.title = translate('category.bookworms');
  }, [translate]);
  
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
      
      <div className="text-center mb-8 animate-appear">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">{translate('app.title')}</h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Book className="w-8 h-8 text-retro-accent" />
          <h2 className="font-pixel text-2xl text-green-400">
            {translate('category.bookworms')}
          </h2>
        </div>
      </div>
      
      <div className="w-full max-w-4xl text-center mb-8">
        <p className="text-retro-purple-200 font-pixel-text">
          {language === 'de' 
            ? "Entdecke unsere Sammlung von Büchern zum Thema Gewohnheiten und persönliche Entwicklung."
            : "Discover our collection of books about habits and personal development."}
        </p>
      </div>
      
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* This is where more books would be listed */}
        <div className="coming-soon text-center p-8 border-2 border-retro-purple-600 rounded-lg">
          <span className="text-green-400 font-pixel">
            {language === 'de' ? "Demnächst mehr Bücher" : "More books coming soon"}
          </span>
        </div>
      </div>
      
      <div className="mt-8">
        <Link to="/learn-about-habits">
          <PixelButton onClick={() => {}}>
            {language === 'de' ? "Zurück zu Gewohnheiten" : "Back to Habits"}
          </PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default Bookworms;
