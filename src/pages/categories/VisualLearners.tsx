
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../../components/PixelButton';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';
import { Film } from 'lucide-react';

const VisualLearners: React.FC = () => {
  const { translate, language } = useLanguage();
  
  useEffect(() => {
    document.title = translate('category.visualLearners');
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
          <Film className="w-8 h-8 text-retro-accent" />
          <h2 className="font-pixel text-2xl text-green-400">
            {translate('category.visualLearners')}
          </h2>
        </div>
      </div>
      
      <div className="w-full max-w-4xl text-center mb-8">
        <p className="text-retro-purple-200 font-pixel-text">
          {language === 'de' 
            ? "Entdecke inspirierende Filme und Dokumentationen, die deine Sichtweise auf Gewohnheiten und Leben verändern können."
            : "Discover inspiring films and documentaries that can transform your perspective on habits and life."}
        </p>
      </div>
      
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Visual 1 */}
        <div className="pixel-scroll-closed">
          <div className="scroll-closed-body p-4">
            <a 
              href="https://amzn.to/441T7FV"
              className="flex flex-col items-center hover:opacity-90 transition-opacity gap-3" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="w-16 h-16 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800 mb-3">
                <Film className="w-10 h-10 text-retro-accent" />
              </div>
              <div className="text-center">
                <span className="font-pixel-text text-base text-green-400 block mb-2">
                  {language === 'de' ? 'Minimalismus: Eine Dokumentation' : 'Minimalism: A Documentary About the Important Things'}
                </span>
                <p className="text-xs font-pixel-text text-retro-purple-200">
                  {language === 'de' 
                    ? 'Entdecke, wie die minimalistische Lebensweise dir helfen kann, gesündere Gewohnheiten zu entwickeln und ein erfüllteres Leben zu führen. Diese Dokumentation zeigt dir, wie du dich auf das Wesentliche konzentrieren kannst.' 
                    : 'Discover how embracing minimalism can help you develop healthier habits and lead a more meaningful life by focusing on what truly matters. This documentary shows how less can actually be more.'}
                </p>
              </div>
            </a>
          </div>
        </div>
        
        {/* Visual 2 */}
        <div className="pixel-scroll-closed">
          <div className="scroll-closed-body p-4">
            <a 
              href="https://amzn.to/3XBiiLQ"
              className="flex flex-col items-center hover:opacity-90 transition-opacity gap-3" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="w-16 h-16 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800 mb-3">
                <Film className="w-10 h-10 text-retro-accent" />
              </div>
              <div className="text-center">
                <span className="font-pixel-text text-base text-green-400 block mb-2">
                  {language === 'de' ? 'Das Streben nach Glück' : 'The Pursuit of Happyness'}
                </span>
                <p className="text-xs font-pixel-text text-retro-purple-200">
                  {language === 'de' 
                    ? 'Diese inspirierende wahre Geschichte zeigt, wie Beharrlichkeit und positive Gewohnheiten selbst in den schwierigsten Situationen zum Erfolg führen können. Der Film verdeutlicht die Kraft des Durchhaltevermögens und täglicher konstruktiver Routinen.' 
                    : 'This inspirational true story demonstrates how persistence and positive habits can lead to success even in the most challenging circumstances. The film illustrates the power of perseverance and daily constructive routines.'}
                </p>
              </div>
            </a>
          </div>
        </div>
        
        {/* Visual 3 */}
        <div className="pixel-scroll-closed">
          <div className="scroll-closed-body p-4">
            <a 
              href="https://amzn.to/3FIQEpQ"
              className="flex flex-col items-center hover:opacity-90 transition-opacity gap-3" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="w-16 h-16 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800 mb-3">
                <Film className="w-10 h-10 text-retro-accent" />
              </div>
              <div className="text-center">
                <span className="font-pixel-text text-base text-green-400 block mb-2">
                  {language === 'de' ? 'The Secret - Das Geheimnis' : 'The Secret'}
                </span>
                <p className="text-xs font-pixel-text text-retro-purple-200">
                  {language === 'de' 
                    ? 'Erfahre, wie das Gesetz der Anziehung und positive Gedankenmuster dir helfen können, neue Gewohnheiten zu manifestieren und dein Leben zu transformieren. Diese Dokumentation zeigt praktische Wege zur Visualisierung und Manifestation deiner Ziele.' 
                    : 'Learn how the law of attraction and positive thought patterns can help you manifest new habits and transform your life. This documentary provides practical ways to visualize and manifest your goals through consistent practice and mindset shifts.'}
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

export default VisualLearners;
