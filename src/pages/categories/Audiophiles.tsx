import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../../components/PixelButton';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';
import { Headphones } from 'lucide-react';

const Audiophiles: React.FC = () => {
  const { translate, language } = useLanguage();
  
  useEffect(() => {
    document.title = translate('category.audiophiles');
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
          <Headphones className="w-8 h-8 text-retro-accent" />
          <h2 className="font-pixel text-2xl text-green-400">
            {translate('category.audiophiles')}
          </h2>
        </div>
      </div>
      
      <div className="w-full max-w-4xl text-center mb-8">
        <p className="text-retro-purple-200 font-pixel-text">
          {language === 'de' 
            ? "Entdecke unsere Sammlung von Hörbüchern und Podcasts zum Thema Gewohnheiten."
            : "Discover our collection of audiobooks and podcasts about habits."}
        </p>
      </div>
      
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Audio 1 */}
        <div className="pixel-scroll-closed">
          <div className="scroll-closed-body p-4">
            <a 
              href="https://amzn.to/4cjVW7G"
              className="flex flex-col items-center hover:opacity-90 transition-opacity gap-3" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="w-16 h-16 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800 mb-3">
                <Headphones className="w-10 h-10 text-retro-accent" />
              </div>
              <div className="text-center">
                <span className="font-pixel-text text-base text-green-400 block mb-2">
                  {language === 'de' ? 'Die 1% Methode (Hörbuch)' : 'Atomic Habits (Audiobook)'}
                </span>
                <p className="text-xs font-pixel-text text-retro-purple-200">
                  {language === 'de' 
                    ? 'James Clear, für unterwegs. Perfekt für Pendler, dieses Hörbuch vermittelt die Kernprinzipien der Gewohnheitsentwicklung.' 
                    : 'James Clear, for on-the-go learning. Perfect for commuters, this audiobook delivers the core principles of habit formation.'}
                </p>
              </div>
            </a>
          </div>
        </div>
        
        {/* Audio 2 */}
        <div className="pixel-scroll-closed">
          <div className="scroll-closed-body p-4">
            <a 
              href="https://amzn.to/4ccrtYX"
              className="flex flex-col items-center hover:opacity-90 transition-opacity gap-3" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="w-16 h-16 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800 mb-3">
                <Headphones className="w-10 h-10 text-retro-accent" />
              </div>
              <div className="text-center">
                <span className="font-pixel-text text-base text-green-400 block mb-2">
                  {language === 'de' ? 'Die Macht der Gewohnheit (Hörbuch)' : 'The Power of Habit (Audiobook)'}
                </span>
                <p className="text-xs font-pixel-text text-retro-purple-200">
                  {language === 'de' 
                    ? 'Charles Duhigg erklärt, warum wir tun, was wir tun. Entdecke die neurologischen Muster hinter deinen Gewohnheiten.' 
                    : 'Charles Duhigg explains why we do what we do. Discover the neurological patterns behind your habits and how to transform them.'}
                </p>
              </div>
            </a>
          </div>
        </div>
        
        {/* Audio 3 */}
        <div className="pixel-scroll-closed">
          <div className="scroll-closed-body p-4">
            <a 
              href="https://amzn.to/43x1MAe"
              className="flex flex-col items-center hover:opacity-90 transition-opacity gap-3" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="w-16 h-16 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800 mb-3">
                <Headphones className="w-10 h-10 text-retro-accent" />
              </div>
              <div className="text-center">
                <span className="font-pixel-text text-base text-green-400 block mb-2">
                  {language === 'de' ? 'Die 7 Wege zur Effektivität (Hörbuch)' : 'The 7 Habits of Highly Effective People (Audiobook)'}
                </span>
                <p className="text-xs font-pixel-text text-retro-purple-200">
                  {language === 'de' 
                    ? 'Stephen R. Coveys Klassiker als Hörbuch. Zeitlose Prinzipien für persönliche und berufliche Effektivität durch gute Gewohnheiten.' 
                    : 'Stephen R. Covey\'s classic in audio format. Timeless principles for personal and professional effectiveness through powerful habits.'}
                </p>
              </div>
            </a>
          </div>
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

export default Audiophiles;
