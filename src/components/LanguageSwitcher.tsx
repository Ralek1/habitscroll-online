
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, translate } = useLanguage();

  const toggleLanguage = () => {
    console.log('Toggling language');
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-retro-purple-200 hover:text-retro-accent transition-colors font-pixel-text text-sm bg-retro-purple-800/50 px-3 py-1 rounded-md"
    >
      <Globe className="w-4 h-4" />
      <span>{translate('language.switcher')}</span>
    </button>
  );
};

export default LanguageSwitcher;
