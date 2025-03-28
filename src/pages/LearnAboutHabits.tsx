
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Book, Headphones, Film, Search, ArrowRight } from 'lucide-react';
import { ScrollArea } from '../components/ui/scroll-area';
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
          {translate('page.learn.habits.title')} <br /> 
          <span className="text-retro-accent">{translate('page.learn.habits.subtitle')}</span>
        </h2>
        
        <div className="mt-4 mb-6 text-retro-purple-100 italic max-w-md font-pixel-text text-sm">
          {translate('quote.james.clear')}
        </div>
      </div>
      
      <div className="w-full max-w-6xl">
        {language === 'de' ? (
          <>
            <p className="font-pixel-text text-lg mb-10 text-retro-purple-200 text-center">
              Vertiefe dich in die Wissenschaft und Kunst der Gewohnheiten
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Category 1 */}
              <div className="border-2 border-retro-purple-600 rounded-xl p-6">
                <div className="flex flex-col items-center">
                  <Book className="w-12 h-12 text-retro-accent mb-3" />
                  <h4 className="font-pixel text-retro-light text-xl mb-4">{translate('category.bookworms')}</h4>
                  
                  <p className="text-sm font-pixel-text text-amber-100 mb-4 text-center">
                    Bücher, die dir helfen, gute Gewohnheiten zu entwickeln und schlechte zu überwinden. 
                    Perfekt für alle, die sich gerne Zeit zum Lesen nehmen.
                  </p>
                  
                  <ScrollArea className="h-[360px] w-full rounded-md border border-retro-purple-400/30 p-4 scroll-paper">
                    <div className="mb-4 rounded-lg p-3">
                      <a href="https://www.amazon.de/Die-1-Methode-Ver%C3%A4nderung-Gewohnheiten-erreichen/dp/3442178584?&linkCode=ll1&tag=habitscroll-21&linkId=732a8014feee8c933a134bacef62e35c&language=de_DE&ref_=as_li_ss_tl" 
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Die 1% Methode</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            Dieses Buch von James Clear erklärt, wie kleine 1%-Verbesserungen zu 
                            bahnbrechenden Erfolgen führen. Mit praktischen Strategien zur Gewohnheitsbildung 
                            und wissenschaftlich fundierten Techniken.
                          </p>
                        </div>
                        <img 
                          src="https://m.media-amazon.com/images/I/71DLCNz1NhL._SY522_.jpg" 
                          alt="Die 1% Methode" 
                          className="w-32 h-auto rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0"
                          width={128}
                          height={200}
                          loading="lazy"
                        />
                      </a>
                    </div>
                    
                    <div className="mb-4 rounded-lg p-3">
                      <a href="https://www.amazon.de/Die-Macht-Gewohnheit-Charles-Duhigg/dp/3442393493?&linkCode=ll1&tag=habitscroll-21&linkId=732a8014feee8c933a134bacef62e35c&language=de_DE&ref_=as_li_ss_tl" 
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Die Macht der Gewohnheit</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            Charles Duhigg erklärt, wie Gewohnheiten funktionieren und wie wir sie zu unserem 
                            Vorteil verändern können. Ein faszinierender Einblick in die Wissenschaft der Gewohnheiten.
                          </p>
                        </div>
                        <img 
                          src="https://m.media-amazon.com/images/I/71Ew6F-P9nL._SY522_.jpg" 
                          alt="Die Macht der Gewohnheit" 
                          className="w-32 h-auto rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0"
                          width={128}
                          height={200}
                          loading="lazy"
                        />
                      </a>
                    </div>
                    
                    <div className="mb-4 rounded-lg p-3">
                      <a href="https://www.amazon.de/Das-6-Minuten-Tagebuch-PUR-Erfolgsjournal/dp/B08VNJVZZ7?&linkCode=ll1&tag=habitscroll-21&linkId=732a8014feee8c933a134bacef62e35c&language=de_DE&ref_=as_li_ss_tl" 
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Das 6-Minuten Tagebuch</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            Ein praktisches Tagebuch, das dir hilft, positive Gewohnheiten zu entwickeln und deine 
                            Dankbarkeit zu kultivieren. Perfekt für den Einstieg in die tägliche Reflexion.
                          </p>
                        </div>
                        <img 
                          src="https://m.media-amazon.com/images/I/81lG7kdyuzL._SY522_.jpg" 
                          alt="Das 6-Minuten Tagebuch" 
                          className="w-32 h-auto rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0"
                          width={128}
                          height={200}
                          loading="lazy"
                        />
                      </a>
                    </div>
                    
                    <div className="text-center mt-6">
                      <Link to="/bookworms" className="inline-flex items-center gap-2 text-retro-purple-400 hover:text-retro-accent transition-colors font-pixel-text">
                        {translate('see.more.books')}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </ScrollArea>
                </div>
              </div>
              
              {/* Category 2 */}
              <div className="border-2 border-retro-purple-600 rounded-xl p-6">
                <div className="flex flex-col items-center">
                  <Headphones className="w-12 h-12 text-retro-accent mb-3" />
                  <h4 className="font-pixel text-retro-light text-xl mb-4">{translate('category.audiophiles')}</h4>
                  
                  <p className="text-sm font-pixel-text text-amber-100 mb-4 text-center">
                    Hörbücher und Podcasts über Gewohnheiten und persönliche Entwicklung.
                    Perfekt für unterwegs oder beim Training!
                  </p>
                  
                  <ScrollArea className="h-[360px] w-full rounded-md border border-retro-purple-400/30 p-4 scroll-paper">
                    <div className="mb-4 rounded-lg p-3">
                      <a href="https://www.amazon.de/audible-Die-1-Methode-James-Clear/dp/B07PBQKZ7F?&linkCode=ll1&tag=habitscroll-21&linkId=732a8014feee8c933a134bacef62e35c&language=de_DE&ref_=as_li_ss_tl" 
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Die 1% Methode (Hörbuch)</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            James Clears Bestseller als Hörbuch, perfekt für unterwegs. Lerne über kleine Gewohnheitsänderungen 
                            mit großer Wirkung, während du pendelst oder trainierst.
                          </p>
                        </div>
                        <img 
                          src="https://m.media-amazon.com/images/I/71DLCNz1NhL._SY522_.jpg" 
                          alt="Die 1% Methode Hörbuch" 
                          className="w-32 h-auto rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0"
                          width={128}
                          height={200}
                          loading="lazy"
                        />
                      </a>
                    </div>
                    
                    <div className="mb-4 rounded-lg p-3">
                      <div className="flex flex-row items-center gap-4">
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Podcast: Habits & Growth</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            Ein wöchentlicher Podcast, der praktische Tipps zur Gewohnheitsbildung und persönlichen 
                            Entwicklung bietet. Mit inspirierenden Interviews und konkreten Strategien.
                          </p>
                        </div>
                        <div 
                          className="w-32 h-32 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center"
                        >
                          <Headphones className="w-16 h-16 text-amber-800" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4 rounded-lg p-3">
                      <div className="flex flex-row items-center gap-4">
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Podcast: Gewohnheiten Meistern</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            Ein deutschsprachiger Podcast, der dir hilft, deine Gewohnheiten zu verstehen und zu verbessern.
                            Mit praktischen Übungen und wissenschaftlichen Erkenntnissen.
                          </p>
                        </div>
                        <div 
                          className="w-32 h-32 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center"
                        >
                          <Headphones className="w-16 h-16 text-amber-800" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <Link to="/audiophiles" className="inline-flex items-center gap-2 text-retro-purple-400 hover:text-retro-accent transition-colors font-pixel-text">
                        {translate('see.more.audio')}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </ScrollArea>
                </div>
              </div>
              
              {/* Category 3 */}
              <div className="border-2 border-retro-purple-600 rounded-xl p-6">
                <div className="flex flex-col items-center">
                  <Film className="w-12 h-12 text-retro-accent mb-3" />
                  <h4 className="font-pixel text-retro-light text-xl mb-4">{translate('category.visualLearners')}</h4>
                  
                  <p className="text-sm font-pixel-text text-amber-100 mb-4 text-center">
                    Videos, Dokumentationen und Kurse, die visuelle Lerntypen 
                    ansprechen und komplexe Konzepte einfach visualisieren.
                  </p>
                  
                  <ScrollArea className="h-[360px] w-full rounded-md border border-retro-purple-400/30 p-4 scroll-paper">
                    <div className="mb-4 rounded-lg p-3">
                      <div className="flex flex-row items-center gap-4">
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Kurs: Gewohnheiten Meistern</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            Ein umfassender Videokurs, der dir beibringt, wie du neue Gewohnheiten entwickelst 
                            und alte loswirst. Mit praktischen Übungen und visuellen Hilfsmitteln.
                          </p>
                        </div>
                        <div 
                          className="w-32 h-32 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center"
                        >
                          <Film className="w-16 h-16 text-amber-800" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4 rounded-lg p-3">
                      <div className="flex flex-row items-center gap-4">
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">YouTube: Habits Simplified</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            Ein YouTube-Kanal mit kurzen, prägnanten Videos, die komplexe Konzepte der Gewohnheitsbildung 
                            vereinfachen und visualisieren. Perfekt für schnelles Lernen.
                          </p>
                        </div>
                        <div 
                          className="w-32 h-32 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center"
                        >
                          <Film className="w-16 h-16 text-amber-800" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4 rounded-lg p-3">
                      <div className="flex flex-row items-center gap-4">
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Dokumentation: Die Wissenschaft der Gewohnheiten</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            Eine faszinierende Dokumentation, die die neuesten wissenschaftlichen Erkenntnisse 
                            über Gewohnheiten und ihre Auswirkungen auf unser Leben erforscht.
                          </p>
                        </div>
                        <div 
                          className="w-32 h-32 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center"
                        >
                          <Film className="w-16 h-16 text-amber-800" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <Link to="/visual-learners" className="inline-flex items-center gap-2 text-retro-purple-400 hover:text-retro-accent transition-colors font-pixel-text">
                        {translate('see.more.video')}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </ScrollArea>
                </div>
              </div>
              
              {/* Category 4 */}
              <div className="border-2 border-retro-purple-600 rounded-xl p-6">
                <div className="flex flex-col items-center">
                  <Search className="w-12 h-12 text-retro-accent mb-3" />
                  <h4 className="font-pixel text-retro-light text-xl mb-4">{translate('category.knowledgeSeekers')}</h4>
                  
                  <p className="text-sm font-pixel-text text-amber-100 mb-4 text-center">
                    Forschungspapiere, Artikel und tiefgehende Analysen für alle, 
                    die die Wissenschaft hinter Gewohnheiten verstehen möchten.
                  </p>
                  
                  <ScrollArea className="h-[360px] w-full rounded-md border border-retro-purple-400/30 p-4 scroll-paper">
                    <div className="mb-4 rounded-lg p-3">
                      <div className="flex flex-row items-center gap-4">
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Studie: Neuronale Grundlagen von Gewohnheiten</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            Eine wissenschaftliche Studie, die die neuronalen Mechanismen untersucht, die der Gewohnheitsbildung 
                            zugrunde liegen. Mit detaillierten Erklärungen und Diagrammen.
                          </p>
                        </div>
                        <div 
                          className="w-32 h-32 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center"
                        >
                          <Search className="w-16 h-16 text-amber-800" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4 rounded-lg p-3">
                      <div className="flex flex-row items-center gap-4">
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Artikel: Die Psychologie der Gewohnheitsveränderung</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            Ein umfassender Artikel, der die psychologischen Faktoren untersucht, die bei der 
                            Veränderung von Gewohnheiten eine Rolle spielen. Mit praktischen Anwendungen.
                          </p>
                        </div>
                        <div 
                          className="w-32 h-32 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center"
                        >
                          <Search className="w-16 h-16 text-amber-800" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4 rounded-lg p-3">
                      <div className="flex flex-row items-center gap-4">
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Forschungsanalyse: Langfristige Gewohnheitsbildung</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            Eine Metaanalyse verschiedener Studien zur langfristigen Gewohnheitsbildung, 
                            die Faktoren für Erfolg und Misserfolg identifiziert.
                          </p>
                        </div>
                        <div 
                          className="w-32 h-32 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center"
                        >
                          <Search className="w-16 h-16 text-amber-800" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <Link to="/knowledge-seekers" className="inline-flex items-center gap-2 text-retro-purple-400 hover:text-retro-accent transition-colors font-pixel-text">
                        {translate('see.more.research')}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <p className="font-pixel-text text-lg mb-10 text-retro-purple-200 text-center">
              Dive deep into the science and art of habit formation
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Category 1 */}
              <div className="border-2 border-retro-purple-600 rounded-xl p-6">
                <div className="flex flex-col items-center">
                  <Book className="w-12 h-12 text-retro-accent mb-3" />
                  <h4 className="font-pixel text-retro-light text-xl mb-4">{translate('category.bookworms')}</h4>
                  
                  <p className="text-sm font-pixel-text text-amber-100 mb-4 text-center">
                    Books that help you build good habits and break bad ones.
                    Perfect for those who enjoy taking time to read and reflect.
                  </p>
                  
                  <ScrollArea className="h-[360px] w-full rounded-md border border-retro-purple-400/30 p-4 scroll-paper">
                    <div className="mb-4 rounded-lg p-3">
                      <a href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?&linkCode=ll1&tag=habitscroll-21&linkId=732a8014feee8c933a134bacef62e35c&language=en_US&ref_=as_li_ss_tl" 
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Atomic Habits</span>
                          <p className="mt-1 text-sm font-pixel-text text-amber-900">
                            This book by James Clear explains how tiny 1% improvements lead to 
                            remarkable results. With practical strategies for habit formation and 
                            science-backed techniques.
                          </p>
                        </div>
                        <img 
                          src="https://m.media-amazon.com/images/I/81wgcld4wxL._SY522_.jpg" 
                          alt="Atomic Habits" 
                          className="w-32 h-auto rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0"
                          width={128}
                          height={200}
                          loading="lazy"
                        />
                      </a>
                    </div>
                    
                    <div className="mb-4 rounded-lg p-3">
                      <a href="https://www.amazon.com/Power-Habit-What-Life-Business/dp/081298160X?&linkCode=ll1&tag=habitscroll-21&linkId=732a8014feee8c933a134bacef62e35c&language=en_US&ref_=as_li_ss_tl" 
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">The Power of Habit</span>
                          <p className="mt-1 text-sm font-pixel-text text-amber-900">
                            Charles Duhigg explains how habits work and how we can change them to our advantage.
                            A fascinating look at the science of habit formation and transformation.
                          </p>
                        </div>
                        <img 
                          src="https://m.media-amazon.com/images/I/51Ny4Kw-DHL._SY522_.jpg" 
                          alt="The Power of Habit" 
                          className="w-32 h-auto rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0"
                          width={128}
                          height={200}
                          loading="lazy"
                        />
                      </a>
                    </div>
                    
                    <div className="mb-4 rounded-lg p-3">
                      <a href="https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance/dp/0735211736?&linkCode=ll1&tag=habitscroll-21&linkId=732a8014feee8c933a134bacef62e35c&language=en_US&ref_=as_li_ss_tl" 
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">The Daily Stoic</span>
                          <p className="mt-1 text-sm font-pixel-text text-amber-900">
                            A book that provides 366 days of Stoic insights and exercises. Perfect for 
                            building a daily reflection habit and developing mental resilience.
                          </p>
                        </div>
                        <img 
                          src="https://m.media-amazon.com/images/I/71FNWWH6TfL._SY522_.jpg" 
                          alt="The Daily Stoic" 
                          className="w-32 h-auto rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0"
                          width={128}
                          height={200}
                          loading="lazy"
                        />
                      </a>
                    </div>
                    
                    <div className="text-center mt-6">
                      <Link to="/bookworms" className="inline-flex items-center gap-2 text-retro-purple-400 hover:text-retro-accent transition-colors font-pixel-text">
                        {translate('see.more.books')}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </ScrollArea>
                </div>
              </div>
              
              {/* Category 2 */}
              <div className="border-2 border-retro-purple-600 rounded-xl p-6">
                <div className="flex flex-col items-center">
                  <Headphones className="w-12 h-12 text-retro-accent mb-3" />
                  <h4 className="font-pixel text-retro-light text-xl mb-4">{translate('category.audiophiles')}</h4>
                  
                  <p className="text-sm font-pixel-text text-amber-100 mb-4 text-center">
                    Audiobooks and podcasts about habits and personal development.
                    Perfect for on-the-go learning or during workouts!
                  </p>
                  
                  <ScrollArea className="h-[360px] w-full rounded-md border border-retro-purple-400/30 p-4 scroll-paper">
                    <div className="mb-4 rounded-lg p-3">
                      <a href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/B07RFSSYBH?&linkCode=ll1&tag=habitscroll-21&linkId=732a8014feee8c933a134bacef62e35c&language=en_US&ref_=as_li_ss_tl" 
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Atomic Habits (Audiobook)</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            James Clear's bestseller as an audiobook, perfect for on-the-go learning. 
                            Learn about tiny habit changes with big impacts while commuting or working out.
                          </p>
                        </div>
                        <img 
                          src="https://m.media-amazon.com/images/I/81wgcld4wxL._SY522_.jpg" 
                          alt="Atomic Habits Audiobook" 
                          className="w-32 h-auto rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0"
                          width={128}
                          height={200}
                          loading="lazy"
                        />
                      </a>
                    </div>
                    
                    <div className="mb-4 rounded-lg p-3">
                      <div className="flex flex-row items-center gap-4">
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Podcast: Habit Cast</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            A weekly podcast offering practical tips on habit formation and personal growth. 
                            Featuring inspiring interviews and actionable strategies.
                          </p>
                        </div>
                        <div 
                          className="w-32 h-32 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center"
                        >
                          <Headphones className="w-16 h-16 text-amber-800" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4 rounded-lg p-3">
                      <div className="flex flex-row items-center gap-4">
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Podcast: Habit Hacking</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            A deep-dive podcast exploring the science of habits and practical techniques 
                            for building better routines and breaking bad habits.
                          </p>
                        </div>
                        <div 
                          className="w-32 h-32 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center"
                        >
                          <Headphones className="w-16 h-16 text-amber-800" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <Link to="/audiophiles" className="inline-flex items-center gap-2 text-retro-purple-400 hover:text-retro-accent transition-colors font-pixel-text">
                        {translate('see.more.audio')}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </ScrollArea>
                </div>
              </div>
              
              {/* Category 3 */}
              <div className="border-2 border-retro-purple-600 rounded-xl p-6">
                <div className="flex flex-col items-center">
                  <Film className="w-12 h-12 text-retro-accent mb-3" />
                  <h4 className="font-pixel text-retro-light text-xl mb-4">{translate('category.visualLearners')}</h4>
                  
                  <p className="text-sm font-pixel-text text-amber-100 mb-4 text-center">
                    Videos, documentaries, and courses that appeal to visual learners
                    and simplify complex concepts through visualization.
                  </p>
                  
                  <ScrollArea className="h-[360px] w-full rounded-md border border-retro-purple-400/30 p-4 scroll-paper">
                    <div className="mb-4 rounded-lg p-3">
                      <div className="flex flex-row items-center gap-4">
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Course: Master Your Habits</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            A comprehensive video course teaching you how to develop new habits and 
                            break old ones. With practical exercises and visual aids.
                          </p>
                        </div>
                        <div 
                          className="w-32 h-32 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center"
                        >
                          <Film className="w-16 h-16 text-amber-800" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4 rounded-lg p-3">
                      <div className="flex flex-row items-center gap-4">
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">YouTube: Habits Simplified</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            A YouTube channel featuring short, concise videos that simplify and visualize 
                            complex habit formation concepts. Perfect for quick learning.
                          </p>
                        </div>
                        <div 
                          className="w-32 h-32 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center"
                        >
                          <Film className="w-16 h-16 text-amber-800" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4 rounded-lg p-3">
                      <div className="flex flex-row items-center gap-4">
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Documentary: The Science of Habits</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            A fascinating documentary exploring the latest scientific findings about habits 
                            and their impact on our lives, featuring visualizations and expert interviews.
                          </p>
                        </div>
                        <div 
                          className="w-32 h-32 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center"
                        >
                          <Film className="w-16 h-16 text-amber-800" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <Link to="/visual-learners" className="inline-flex items-center gap-2 text-retro-purple-400 hover:text-retro-accent transition-colors font-pixel-text">
                        {translate('see.more.video')}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </ScrollArea>
                </div>
              </div>
              
              {/* Category 4 */}
              <div className="border-2 border-retro-purple-600 rounded-xl p-6">
                <div className="flex flex-col items-center">
                  <Search className="w-12 h-12 text-retro-accent mb-3" />
                  <h4 className="font-pixel text-retro-light text-xl mb-4">{translate('category.knowledgeSeekers')}</h4>
                  
                  <p className="text-sm font-pixel-text text-amber-100 mb-4 text-center">
                    Research papers, articles, and deep analyses for those who
                    want to understand the science behind habits and behavior change.
                  </p>
                  
                  <ScrollArea className="h-[360px] w-full rounded-md border border-retro-purple-400/30 p-4 scroll-paper">
                    <div className="mb-4 rounded-lg p-3">
                      <div className="flex flex-row items-center gap-4">
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Study: Neural Basis of Habits</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            A scientific study examining the neural mechanisms underlying habit formation.
                            With detailed explanations and diagrams of the processes involved.
                          </p>
                        </div>
                        <div 
                          className="w-32 h-32 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center"
                        >
                          <Search className="w-16 h-16 text-amber-800" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4 rounded-lg p-3">
                      <div className="flex flex-row items-center gap-4">
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Article: The Psychology of Habit Change</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            A comprehensive article exploring the psychological factors involved in 
                            changing habits, with practical applications of theoretical concepts.
                          </p>
                        </div>
                        <div 
                          className="w-32 h-32 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center"
                        >
                          <Search className="w-16 h-16 text-amber-800" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4 rounded-lg p-3">
                      <div className="flex flex-row items-center gap-4">
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Research Analysis: Long-term Habit Formation</span>
                          <p className="text-sm font-pixel-text text-amber-900">
                            A meta-analysis of various studies on long-term habit formation, 
                            identifying factors for success and failure in maintaining habits.
                          </p>
                        </div>
                        <div 
                          className="w-32 h-32 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center"
                        >
                          <Search className="w-16 h-16 text-amber-800" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <Link to="/knowledge-seekers" className="inline-flex items-center gap-2 text-retro-purple-400 hover:text-retro-accent transition-colors font-pixel-text">
                        {translate('see.more.research')}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </div>
          </>
        )}
        
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
