
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../../components/PixelButton';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';
import { Search, FileText } from 'lucide-react';

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
          <h2 className="font-pixel text-2xl text-green-400">
            {translate('category.knowledgeSeekers')}
          </h2>
        </div>
      </div>
      
      <div className="w-full max-w-4xl text-center mb-8">
        <p className="text-retro-purple-200 font-pixel-text">
          {language === 'de' 
            ? "Entdecke unsere Sammlung von Forschungspapieren und Artikeln zum Thema Gewohnheiten."
            : "Discover our collection of research papers and articles about habits."}
        </p>
      </div>
      
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Research Paper 1 */}
        <div className="pixel-scroll-closed">
          <div className="scroll-closed-body p-3">
            <a 
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4826769/"
              className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="flex-1">
                <span className="font-pixel-text text-base text-green-400 block mb-1">
                  {language === 'de' 
                    ? "Neue Erkenntnisse über Gewohnheitsbildung"
                    : "New Insights on Habit Formation"}
                </span>
                <p className="text-xs font-pixel-text text-retro-purple-200">
                  {language === 'de' 
                    ? "Eine umfassende Analyse der neuronalen Mechanismen, die der Bildung von Gewohnheiten zugrunde liegen. Diese Studie untersucht, wie das Gehirn Verhaltensroutinen erlernt und speichert."
                    : "A comprehensive analysis of the neural mechanisms underlying habit formation. This study examines how the brain learns and stores behavioral routines."}
                </p>
              </div>
              <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                <FileText className="w-8 h-8 text-retro-accent" />
              </div>
            </a>
          </div>
        </div>

        {/* Research Paper 2 */}
        <div className="pixel-scroll-closed">
          <div className="scroll-closed-body p-3">
            <a 
              href="https://www.researchgate.net/publication/228671219_Review_Behaviors_Models_and_Clinical_Applications_of_Vergence_Eye_Movements"
              className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="flex-1">
                <span className="font-pixel-text text-base text-green-400 block mb-1">
                  {language === 'de' 
                    ? "Verhalten, Modelle und klinische Anwendungen"
                    : "Behaviors, Models, and Clinical Applications"}
                </span>
                <p className="text-xs font-pixel-text text-retro-purple-200">
                  {language === 'de' 
                    ? "Diese Studie untersucht Verhaltensmodelle und deren klinische Anwendungen. Die Erkenntnisse lassen sich auf die Entwicklung und Veränderung von Gewohnheitsmustern übertragen."
                    : "This study examines behavioral models and their clinical applications. The findings can be applied to the development and modification of habit patterns."}
                </p>
              </div>
              <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                <FileText className="w-8 h-8 text-retro-accent" />
              </div>
            </a>
          </div>
        </div>

        {/* Research Paper 3 */}
        <div className="pixel-scroll-closed">
          <div className="scroll-closed-body p-3">
            <div className="flex flex-row items-center gap-3">
              <div className="flex-1">
                <span className="font-pixel-text text-base text-green-400 block mb-1">
                  {language === 'de' 
                    ? "Metaanalyse: Langfristige Gewohnheitsbildung"
                    : "Meta-analysis: Long-term Habit Formation"}
                </span>
                <p className="text-xs font-pixel-text text-retro-purple-200">
                  {language === 'de' 
                    ? "Metaanalyse verschiedener Studien. Zusammenfassung von Forschungsergebnissen über die Faktoren, die langfristige Gewohnheiten beeinflussen."
                    : "Meta-analysis of various studies on habits. Summary of research findings on the factors that influence long-term habit formation."}
                </p>
              </div>
              <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                <FileText className="w-8 h-8 text-retro-accent" />
              </div>
            </div>
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

export default KnowledgeSeekers;
