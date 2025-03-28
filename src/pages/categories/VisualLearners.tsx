
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../../components/PixelButton';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';
import { Film, ArrowLeft } from 'lucide-react';

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
            ? "Entdecke unsere Sammlung von visuellen Kursen und Videos, die Gewohnheitsbildung verständlich machen."
            : "Discover our collection of visual courses and videos that make habit formation easy to understand."}
        </p>
      </div>
      
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Visual 1 */}
        <div className="pixel-scroll-closed">
          <div className="scroll-closed-body p-4">
            <a 
              href="https://amzn.to/4iLDS8G"
              className="flex flex-col items-center hover:opacity-90 transition-opacity gap-3" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="w-16 h-16 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800 mb-3">
                <Film className="w-10 h-10 text-retro-accent" />
              </div>
              <div className="text-center">
                <span className="font-pixel-text text-base text-green-400 block mb-2">
                  {language === 'de' ? 'Meisterkurs: Gewohnheiten & Routinen' : 'Masterclass: Habits & Routines'}
                </span>
                <p className="text-xs font-pixel-text text-retro-purple-200">
                  {language === 'de' 
                    ? 'Video-Kurs mit praktischen Übungen und Visualisierungen. Schritt-für-Schritt Anleitung für dauerhafte Gewohnheitsänderung.' 
                    : 'Video course with practical exercises and visualizations. Step-by-step guide for lasting habit change with visual demonstrations.'}
                </p>
              </div>
            </a>
          </div>
        </div>
        
        {/* Visual 2 */}
        <div className="pixel-scroll-closed">
          <div className="scroll-closed-body p-4">
            <a 
              href="https://amzn.to/42ljzZU"
              className="flex flex-col items-center hover:opacity-90 transition-opacity gap-3" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="w-16 h-16 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800 mb-3">
                <Film className="w-10 h-10 text-retro-accent" />
              </div>
              <div className="text-center">
                <span className="font-pixel-text text-base text-green-400 block mb-2">
                  {language === 'de' ? 'Visuelle Lernreihe: Habit Stacking' : 'Visual Learning Series: Habit Stacking'}
                </span>
                <p className="text-xs font-pixel-text text-retro-purple-200">
                  {language === 'de' 
                    ? 'Animierte Tutorials, die zeigen, wie du neue Gewohnheiten an bestehende knüpfst. Mit visuellen Lernhilfen und Gedächtnistechniken.' 
                    : 'Animated tutorials showing how to stack new habits onto existing ones. Visual aids and memory techniques that make habit formation intuitive.'}
                </p>
              </div>
            </a>
          </div>
        </div>
        
        {/* Visual 3 */}
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
                  {language === 'de' ? 'Neuroplastizität & Gewohnheiten: Videoserie' : 'Neuroplasticity & Habits: Video Series'}
                </span>
                <p className="text-xs font-pixel-text text-retro-purple-200">
                  {language === 'de' 
                    ? 'Faszinierende visuelle Erklärungen der Gehirnveränderungen durch Gewohnheiten. Mit 3D-Animationen und praktischen Beispielen.' 
                    : 'Fascinating visual explanations of brain changes through habits. With 3D animations and practical examples of neuroplasticity in action.'}
                </p>
              </div>
            </a>
          </div>
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

export default VisualLearners;
