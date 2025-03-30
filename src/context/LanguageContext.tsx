
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'de';

// Define a recursive type for translations that matches our JSON structure
type TranslationValue = string | { [key: string]: TranslationValue };
type TranslationObject = { [key: string]: TranslationValue };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<Record<string, TranslationObject>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        console.log('Loading translations...');
        // Force import as any to avoid TypeScript errors
        const enTranslations = await import('../translations/en.json');
        const deTranslations = await import('../translations/de.json');
        
        setTranslations({
          en: enTranslations,
          de: deTranslations
        });
        
        console.log('Translations loaded successfully:', {
          en: Object.keys(enTranslations).length,
          de: Object.keys(deTranslations).length
        });
        
        setIsLoaded(true);
      } catch (error) {
        console.error('Error loading translations:', error);
      }
    };

    loadTranslations();
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      console.log(`Language set to: ${language}`);
      console.log('Available translation keys:', translations && translations[language] ? Object.keys(translations[language] || {}) : 'None');
    }
  }, [isLoaded, language, translations]);

  const changeLanguage = (lang: Language) => {
    console.log(`Changing language from ${language} to ${lang}`);
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  const translate = (key: string): string => {
    if (!translations || !translations[language]) {
      console.warn(`No translations available for language: ${language}`);
      return key;
    }
    
    // Handle nested keys like "app.title"
    const keys = key.split('.');
    let result: any = translations[language];
    
    // Navigate through the nested objects
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key; // Key not found, return the original key
      }
    }
    
    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
