
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Book, Headphones, Film, Search, ArrowRight, BookOpen } from 'lucide-react';
import { optimizedImage } from '../utils/optimizeImage';

const LearnAboutHabits: React.FC = () => {
  const { translate, language } = useLanguage();
  
  // Set page title
  useEffect(() => {
    document.title = translate('learn.habits');
    
    // Initialize performance mark for page load
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.performance.mark('learn-habits-page-loaded');
    }
  }, [translate]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
      
      <div className="text-center mb-8 animate-appear flex flex-col items-center">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">{translate('app.title')}</h1>
        </div>
        <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed text-center">
          {language === 'de' ? 'Lerne mehr über' : 'Learn About'} <br /> 
          <span className="text-green-400">{translate('page.learn.habits.subtitle')}</span>
        </h2>
        
        <div className="mt-4 mb-6 text-retro-purple-100 italic max-w-md font-pixel-text text-sm">
          {translate('quote.james.clear')}
        </div>
      </div>
      
      <div className="w-full max-w-6xl">
        <p className="font-pixel-text text-lg mb-10 text-retro-light text-center">
          {language === 'de' 
            ? 'Vertiefe dich in die Wissenschaft und Kunst der Gewohnheiten' 
            : 'Dive deep into the science and art of habit formation'}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Category 1: Bookworms */}
          <div className="border-2 border-retro-purple-600 rounded-xl p-6">
            <div className="flex flex-col items-center">
              <Book className="w-12 h-12 text-retro-accent mb-3" />
              <h4 className="font-pixel text-green-400 text-xl mb-4">{translate('category.bookworms')}</h4>
              
              <p className="text-sm font-pixel-text text-retro-purple-200 mb-6 text-center">
                {language === 'de' 
                  ? 'Wie kannst du gute Gewohnheiten entwickeln und schlechte überwinden?' 
                  : 'Books that help you build good habits and break bad ones.'}
              </p>
              
              <div className="space-y-4 w-full mb-6">
                {/* Book 1 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <a 
                      href="https://amzn.to/3DXTSFy"
                      className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-green-400 block mb-1">
                          {language === 'de' ? 'Die 1% Methode' : 'Atomic Habits'}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? 'Kleine Gewohnheiten, große Veränderungen. Dieses Buch zeigt dir, wie kleine Änderungen in deinem Alltag zu massiven Verbesserungen führen können.' 
                            : 'Tiny changes, remarkable results. This book shows how small habits can lead to significant life improvements.'}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                        <BookOpen className="w-8 h-8 text-retro-accent" />
                      </div>
                    </a>
                  </div>
                </div>
                
                {/* Book 2 - Updated with consistent icon */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <a 
                      href="https://amzn.to/3Yc3i7d"
                      className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-green-400 block mb-1">
                          {language === 'de' ? 'Die Macht der Gewohnheit' : 'The Power of Habit'}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? 'Warum wir tun, was wir tun. Erkenne die neurologischen Muster, die deine Gewohnheiten steuern und finde Wege, sie zu verändern.' 
                            : 'Why we do what we do. Discover the neurological patterns behind your habits and learn how to transform them.'}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                        <BookOpen className="w-8 h-8 text-retro-accent" />
                      </div>
                    </a>
                  </div>
                </div>
                
                {/* Book 3 - Updated title, description and icon */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <a 
                      href="https://amzn.to/4caPShG"
                      className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-green-400 block mb-1">
                          {language === 'de' ? 'Die 7 Wege zur Effektivität' : 'The 7 Habits of Highly Effective People'}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? 'Ein praxisorientierter Ansatz für persönliche und berufliche Entwicklung durch effektive Gewohnheiten und Prinzipien.' 
                            : 'A practical approach to personal and professional development through effective habits and principles that stand the test of time.'}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                        <BookOpen className="w-8 h-8 text-retro-accent" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              
              <Link to="/bookworms">
                <PixelButton onClick={() => {}}>
                  {translate('see.more.books')}
                </PixelButton>
              </Link>
            </div>
          </div>
          
          {/* Category 2: Audiophiles */}
          <div className="border-2 border-retro-purple-600 rounded-xl p-6">
            <div className="flex flex-col items-center">
              <Headphones className="w-12 h-12 text-retro-accent mb-3" />
              <h4 className="font-pixel text-green-400 text-xl mb-4">{translate('category.audiophiles')}</h4>
              
              <p className="text-sm font-pixel-text text-retro-purple-200 mb-6 text-center">
                {language === 'de' 
                  ? 'Hörbücher und Podcasts über Gewohnheiten und persönliche Entwicklung.' 
                  : 'Audiobooks and podcasts about habits and personal development.'}
              </p>
              
              <div className="space-y-4 w-full mb-6">
                {/* Audio 1 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <a 
                      href="https://amzn.to/4cjVW7G"
                      className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-green-400 block mb-1">
                          {language === 'de' ? 'Die 1% Methode (Hörbuch)' : 'Atomic Habits (Audiobook)'}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? 'James Clear, für unterwegs. Perfekt für Pendler, dieses Hörbuch vermittelt die Kernprinzipien der Gewohnheitsentwicklung.' 
                            : 'James Clear, for on-the-go learning. Perfect for commuters, this audiobook delivers the core principles of habit formation.'}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                        <Headphones className="w-8 h-8 text-retro-accent" />
                      </div>
                    </a>
                  </div>
                </div>
                
                {/* Audio 2 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <a 
                      href="https://amzn.to/4ccrtYX"
                      className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-green-400 block mb-1">
                          {language === 'de' ? 'Die Macht der Gewohnheit (Hörbuch)' : 'The Power of Habit (Audiobook)'}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? 'Charles Duhigg erklärt, warum wir tun, was wir tun. Entdecke die neurologischen Muster hinter deinen Gewohnheiten.' 
                            : 'Charles Duhigg explains why we do what we do. Discover the neurological patterns behind your habits and how to transform them.'}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                        <Headphones className="w-8 h-8 text-retro-accent" />
                      </div>
                    </a>
                  </div>
                </div>
                
                {/* Audio 3 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <a 
                      href="https://amzn.to/43x1MAe"
                      className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-green-400 block mb-1">
                          {language === 'de' ? 'Die 7 Wege zur Effektivität (Hörbuch)' : 'The 7 Habits of Highly Effective People (Audiobook)'}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? 'Stephen R. Coveys Klassiker als Hörbuch. Zeitlose Prinzipien für persönliche und berufliche Effektivität durch gute Gewohnheiten.' 
                            : 'Stephen R. Covey\'s classic in audio format. Timeless principles for personal and professional effectiveness through powerful habits.'}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                        <Headphones className="w-8 h-8 text-retro-accent" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              
              <Link to="/audiophiles">
                <PixelButton onClick={() => {}}>
                  {translate('see.more.audio')}
                </PixelButton>
              </Link>
            </div>
          </div>
          
          {/* Category 3: Visual Learners */}
          <div className="border-2 border-retro-purple-600 rounded-xl p-6">
            <div className="flex flex-col items-center">
              <Film className="w-12 h-12 text-retro-accent mb-3" />
              <h4 className="font-pixel text-green-400 text-xl mb-4">{translate('category.visualLearners')}</h4>
              
              <p className="text-sm font-pixel-text text-retro-purple-200 mb-6 text-center">
                {language === 'de' 
                  ? 'Inspirierende Filme und Dokumentationen, die deine Denkweise verändern können.' 
                  : 'Inspiring films and documentaries that can change your perspective on habits and life.'}
              </p>
              
              <div className="space-y-4 w-full mb-6">
                {/* Visual 1 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <a 
                      href="https://amzn.to/441T7FV"
                      className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-green-400 block mb-1">
                          {language === 'de' ? 'Minimalismus: Eine Dokumentation' : 'Minimalism: A Documentary About the Important Things'}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? 'Entdecke, wie die minimalistische Lebensweise dir helfen kann, gesündere Gewohnheiten zu entwickeln und ein erfüllteres Leben zu führen.' 
                            : 'Discover how embracing minimalism can help you develop healthier habits and lead a more meaningful life by focusing on what truly matters.'}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                        <Film className="w-8 h-8 text-retro-accent" />
                      </div>
                    </a>
                  </div>
                </div>
                
                {/* Visual 2 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <a 
                      href="https://amzn.to/3XBiiLQ"
                      className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-green-400 block mb-1">
                          {language === 'de' ? 'Das Streben nach Glück' : 'The Pursuit of Happyness'}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? 'Diese inspirierende wahre Geschichte zeigt, wie Beharrlichkeit und positive Gewohnheiten selbst in den schwierigsten Situationen zum Erfolg führen können.' 
                            : 'This inspirational true story demonstrates how persistence and positive habits can lead to success even in the most challenging circumstances.'}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                        <Film className="w-8 h-8 text-retro-accent" />
                      </div>
                    </a>
                  </div>
                </div>
                
                {/* Visual 3 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <a 
                      href="https://amzn.to/3FIQEpQ"
                      className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-green-400 block mb-1">
                          {language === 'de' ? 'The Secret - Das Geheimnis' : 'The Secret'}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? 'Erfahre, wie das Gesetz der Anziehung und positive Gedankenmuster dir helfen können, neue Gewohnheiten zu manifestieren und dein Leben zu transformieren.' 
                            : 'Learn how the law of attraction and positive thought patterns can help you manifest new habits and transform your life through visualization and consistent practice.'}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                        <Film className="w-8 h-8 text-retro-accent" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              
              <Link to="/visual-learners">
                <PixelButton onClick={() => {}}>
                  {translate('see.more.video')}
                </PixelButton>
              </Link>
            </div>
          </div>
          
          {/* Category 4: Knowledge Seekers */}
          <div className="border-2 border-retro-purple-600 rounded-xl p-6">
            <div className="flex flex-col items-center">
              <Search className="w-12 h-12 text-retro-accent mb-3" />
              <h4 className="font-pixel text-green-400 text-xl mb-4">{translate('category.knowledgeSeekers')}</h4>
              
              <p className="text-sm font-pixel-text text-retro-purple-200 mb-6 text-center">
                {language === 'de' 
                  ? 'Forschungspapiere, Artikel und tiefgehende Analysen für Wissbegierige.' 
                  : 'Research papers, articles, and deep analyses for those who want to understand the science.'}
              </p>
              
              <div className="space-y-4 w-full mb-6">
                {/* Knowledge 1 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <div className="flex flex-row items-center gap-3">
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-green-400 block mb-1">
                          {language === 'de' ? 'Studie: Neuronale Grundlagen von Gewohnheiten' : 'Study: Neural Basis of Habits'}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? 'Neuronale Mechanismen und Diagramme. Detaillierte Analyse der Gehirnaktivität während der Gewohnheitsbildung und -durchführung.' 
                            : 'Neural mechanisms with detailed explanations. In-depth analysis of brain activity during habit formation and execution.'}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                        <Search className="w-8 h-8 text-retro-accent" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Knowledge 2 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <div className="flex flex-row items-center gap-3">
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-green-400 block mb-1">
                          {language === 'de' ? 'Artikel: Die Psychologie der Gewohnheitsveränderung' : 'Article: The Psychology of Habit Change'}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? 'Psychologische Faktoren und Anwendungen. Eine wissenschaftliche Betrachtung der kognitiven Prozesse, die unsere Gewohnheiten antreiben.' 
                            : 'Psychological factors and applications. A scientific look at the cognitive processes that drive our habits.'}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                        <Search className="w-8 h-8 text-retro-accent" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Knowledge 3 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <div className="flex flex-row items-center gap-3">
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-green-400 block mb-1">
                          {language === 'de' ? 'Forschungsanalyse: Langfristige Gewohnheitsbildung' : 'Research Analysis: Long-term Habit Formation'}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? 'Metaanalyse verschiedener Studien. Zusammenfassung von Forschungsergebnissen über die Faktoren, die langfristige Gewohnheiten beeinflussen.' 
                            : 'Meta-analysis of various studies on habits. Summary of research findings on the factors that influence long-term habit formation.'}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                        <Search className="w-8 h-8 text-retro-accent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link to="/knowledge-seekers">
                <PixelButton onClick={() => {}}>
                  {translate('see.more.research')}
                </PixelButton>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center my-6">
          <Sparkles className="w-8 h-8 text-retro-accent animate-pulse" />
        </div>
      </div>
      
      <div className="mt-8">
        <Link to="/">
          <PixelButton onClick={() => {}}>
            {translate('button.home')}
          </PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default LearnAboutHabits;
