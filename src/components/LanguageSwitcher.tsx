
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, translate } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-retro-purple-400 hover:text-retro-accent transition-colors font-pixel-text text-xs"
    >
      <Globe className="w-4 h-4" />
      <span>{translate('language.switch')}</span>
    </button>
  );
};

export default LanguageSwitcher;
