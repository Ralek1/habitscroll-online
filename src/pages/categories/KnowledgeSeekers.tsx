
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../../components/PixelButton';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';
import { Search, ArrowLeft } from 'lucide-react';

const KnowledgeSeekers: React.FC = () => {
  const { translate, language } = useLanguage();
  
  useEffect(() => {
    document.title = translate('category.knowledgeSeekers');
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
          <Search className="w-8 h-8 text-retro-accent" />
          <h2 className="font-pixel text-2xl text-retro-purple-200">
            {translate('category.knowledgeSeekers')}
          </h2>
        </div>
      </div>
      
      <div className="w-full max-w-4xl text-center mb-8">
        <p className="text-amber-100 font-pixel-text">
          {language === 'de' 
            ? "Entdecke unsere Sammlung von Forschungspapieren und Artikeln zum Thema Gewohnheiten."
            : "Discover our collection of research papers and articles about habits."}
        </p>
      </div>
      
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* This is where more research resources would be listed */}
        <div className="coming-soon text-center p-8 border-2 border-retro-purple-600 rounded-lg">
          <span className="text-retro-accent font-pixel">
            {language === 'de' ? "Demnächst mehr Forschungsinhalte" : "More research content coming soon"}
          </span>
        </div>
      </div>
      
      <div className="mt-8">
        <Link to="/learn-about-habits">
          <PixelButton onClick={() => {}}>
            <ArrowLeft className="w-4 h-4" />
            {language === 'de' ? "Zurück zu Gewohnheiten" : "Back to Habits"}
          </PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default KnowledgeSeekers;
