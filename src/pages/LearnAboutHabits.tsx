
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Book, Headphones, Film, Search, ArrowRight } from 'lucide-react';
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
          <span className="text-retro-accent">{translate('page.learn.habits.subtitle')}</span>
        </h2>
        
        <div className="mt-4 mb-6 text-retro-purple-100 italic max-w-md font-pixel-text text-sm">
          {translate('quote.james.clear')}
        </div>
      </div>
      
      <div className="w-full max-w-6xl">
        <p className="font-pixel-text text-lg mb-10 text-retro-purple-200 text-center">
          {language === 'de' 
            ? 'Vertiefe dich in die Wissenschaft und Kunst der Gewohnheiten' 
            : 'Dive deep into the science and art of habit formation'}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Category 1: Bookworms */}
          <div className="border-2 border-retro-purple-600 rounded-xl p-6">
            <div className="flex flex-col items-center">
              <Book className="w-12 h-12 text-retro-accent mb-3" />
              <h4 className="font-pixel text-retro-light text-xl mb-4">{translate('category.bookworms')}</h4>
              
              <p className="text-sm font-pixel-text text-retro-purple-200 mb-6 text-center">
                {language === 'de' 
                  ? 'Bücher, die dir helfen, gute Gewohnheiten zu entwickeln und schlechte zu überwinden.' 
                  : 'Books that help you build good habits and break bad ones.'}
              </p>
              
              <div className="space-y-4 w-full mb-6">
                {/* Book 1 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <a 
                      href={language === 'de' 
                        ? "https://www.amazon.de/Die-1-Methode-Ver%C3%A4nderung-Gewohnheiten-erreichen/dp/3442178584?&linkCode=ll1&tag=habitscroll-21&linkId=732a8014feee8c933a134bacef62e35c&language=de_DE&ref_=as_li_ss_tl"
                        : "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?&linkCode=ll1&tag=habitscroll-21&linkId=732a8014feee8c933a134bacef62e35c&language=en_US&ref_=as_li_ss_tl"}
                      className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-amber-800 block mb-1">
                          {language === 'de' ? 'Die 1% Methode' : 'Atomic Habits'}
                        </span>
                        <p className="text-xs font-pixel-text text-amber-900">
                          {language === 'de' 
                            ? 'Kleine Gewohnheiten, große Veränderungen' 
                            : 'Tiny changes, remarkable results'}
                        </p>
                      </div>
                      <img 
                        src={language === 'de' 
                          ? "https://m.media-amazon.com/images/I/71DLCNz1NhL._SY522_.jpg"
                          : "https://m.media-amazon.com/images/I/81wgcld4wxL._SY522_.jpg"}
                        alt={language === 'de' ? "Die 1% Methode" : "Atomic Habits"}
                        className="w-16 h-auto rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0"
                        width={64}
                        height={100}
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
                
                {/* Book 2 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <a 
                      href={language === 'de' 
                        ? "https://www.amazon.de/Die-Macht-Gewohnheit-Charles-Duhigg/dp/3442393493?&linkCode=ll1&tag=habitscroll-21&linkId=732a8014feee8c933a134bacef62e35c&language=de_DE&ref_=as_li_ss_tl"
                        : "https://www.amazon.com/Power-Habit-What-Life-Business/dp/081298160X?&linkCode=ll1&tag=habitscroll-21&linkId=732a8014feee8c933a134bacef62e35c&language=en_US&ref_=as_li_ss_tl"}
                      className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-amber-800 block mb-1">
                          {language === 'de' ? 'Die Macht der Gewohnheit' : 'The Power of Habit'}
                        </span>
                        <p className="text-xs font-pixel-text text-amber-900">
                          {language === 'de' 
                            ? 'Warum wir tun, was wir tun' 
                            : 'Why we do what we do'}
                        </p>
                      </div>
                      <img 
                        src={language === 'de' 
                          ? "https://m.media-amazon.com/images/I/71Ew6F-P9nL._SY522_.jpg"
                          : "https://m.media-amazon.com/images/I/51Ny4Kw-DHL._SY522_.jpg"}
                        alt={language === 'de' ? "Die Macht der Gewohnheit" : "The Power of Habit"}
                        className="w-16 h-auto rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0"
                        width={64}
                        height={100}
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
                
                {/* Book 3 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <a 
                      href={language === 'de' 
                        ? "https://www.amazon.de/Das-6-Minuten-Tagebuch-PUR-Erfolgsjournal/dp/B08VNJVZZ7?&linkCode=ll1&tag=habitscroll-21&linkId=732a8014feee8c933a134bacef62e35c&language=de_DE&ref_=as_li_ss_tl"
                        : "https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance/dp/0735211736?&linkCode=ll1&tag=habitscroll-21&linkId=732a8014feee8c933a134bacef62e35c&language=en_US&ref_=as_li_ss_tl"}
                      className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-amber-800 block mb-1">
                          {language === 'de' ? 'Das 6-Minuten Tagebuch' : 'The Daily Stoic'}
                        </span>
                        <p className="text-xs font-pixel-text text-amber-900">
                          {language === 'de' 
                            ? 'Ein Journal für mehr Dankbarkeit' 
                            : '366 daily meditations on wisdom'}
                        </p>
                      </div>
                      <img 
                        src={language === 'de' 
                          ? "https://m.media-amazon.com/images/I/81lG7kdyuzL._SY522_.jpg"
                          : "https://m.media-amazon.com/images/I/71FNWWH6TfL._SY522_.jpg"}
                        alt={language === 'de' ? "Das 6-Minuten Tagebuch" : "The Daily Stoic"}
                        className="w-16 h-auto rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0"
                        width={64}
                        height={100}
                        loading="lazy"
                      />
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
              <h4 className="font-pixel text-retro-light text-xl mb-4">{translate('category.audiophiles')}</h4>
              
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
                      href={language === 'de' 
                        ? "https://www.amazon.de/audible-Die-1-Methode-James-Clear/dp/B07PBQKZ7F?&linkCode=ll1&tag=habitscroll-21&linkId=732a8014feee8c933a134bacef62e35c&language=de_DE&ref_=as_li_ss_tl"
                        : "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/B07RFSSYBH?&linkCode=ll1&tag=habitscroll-21&linkId=732a8014feee8c933a134bacef62e35c&language=en_US&ref_=as_li_ss_tl"}
                      className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-amber-800 block mb-1">
                          {language === 'de' ? 'Die 1% Methode (Hörbuch)' : 'Atomic Habits (Audiobook)'}
                        </span>
                        <p className="text-xs font-pixel-text text-amber-900">
                          {language === 'de' 
                            ? 'James Clear, für unterwegs' 
                            : 'James Clear, for on-the-go learning'}
                        </p>
                      </div>
                      <div className="w-16 h-16 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center">
                        <Headphones className="w-10 h-10 text-amber-800" />
                      </div>
                    </a>
                  </div>
                </div>
                
                {/* Audio 2 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <div className="flex flex-row items-center gap-3">
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-amber-800 block mb-1">
                          {language === 'de' ? 'Podcast: Habits & Growth' : 'Podcast: Habit Cast'}
                        </span>
                        <p className="text-xs font-pixel-text text-amber-900">
                          {language === 'de' 
                            ? 'Wöchentliche Tipps zur Gewohnheitsbildung' 
                            : 'Weekly tips on habit formation'}
                        </p>
                      </div>
                      <div className="w-16 h-16 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center">
                        <Headphones className="w-10 h-10 text-amber-800" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Audio 3 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <div className="flex flex-row items-center gap-3">
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-amber-800 block mb-1">
                          {language === 'de' ? 'Podcast: Gewohnheiten Meistern' : 'Podcast: Habit Hacking'}
                        </span>
                        <p className="text-xs font-pixel-text text-amber-900">
                          {language === 'de' 
                            ? 'Wissenschaftliche Erkenntnisse & Praxis' 
                            : 'Science of habits & practical techniques'}
                        </p>
                      </div>
                      <div className="w-16 h-16 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center">
                        <Headphones className="w-10 h-10 text-amber-800" />
                      </div>
                    </div>
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
              <h4 className="font-pixel text-retro-light text-xl mb-4">{translate('category.visualLearners')}</h4>
              
              <p className="text-sm font-pixel-text text-retro-purple-200 mb-6 text-center">
                {language === 'de' 
                  ? 'Videos, Dokumentationen und Kurse, die visuelle Lerntypen ansprechen.' 
                  : 'Videos, documentaries, and courses that appeal to visual learners.'}
              </p>
              
              <div className="space-y-4 w-full mb-6">
                {/* Visual 1 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <div className="flex flex-row items-center gap-3">
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-amber-800 block mb-1">
                          {language === 'de' ? 'Kurs: Gewohnheiten Meistern' : 'Course: Master Your Habits'}
                        </span>
                        <p className="text-xs font-pixel-text text-amber-900">
                          {language === 'de' 
                            ? 'Umfassender Videokurs mit praktischen Übungen' 
                            : 'Comprehensive video course with exercises'}
                        </p>
                      </div>
                      <div className="w-16 h-16 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center">
                        <Film className="w-10 h-10 text-amber-800" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Visual 2 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <div className="flex flex-row items-center gap-3">
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-amber-800 block mb-1">
                          {language === 'de' ? 'YouTube: Habits Simplified' : 'YouTube: Habits Simplified'}
                        </span>
                        <p className="text-xs font-pixel-text text-amber-900">
                          {language === 'de' 
                            ? 'Kurze Videos zu komplexen Konzepten' 
                            : 'Short videos that simplify complex concepts'}
                        </p>
                      </div>
                      <div className="w-16 h-16 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center">
                        <Film className="w-10 h-10 text-amber-800" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Visual 3 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <div className="flex flex-row items-center gap-3">
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-amber-800 block mb-1">
                          {language === 'de' ? 'Dokumentation: Die Wissenschaft der Gewohnheiten' : 'Documentary: The Science of Habits'}
                        </span>
                        <p className="text-xs font-pixel-text text-amber-900">
                          {language === 'de' 
                            ? 'Neueste wissenschaftliche Erkenntnisse' 
                            : 'Latest scientific findings with visualizations'}
                        </p>
                      </div>
                      <div className="w-16 h-16 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center">
                        <Film className="w-10 h-10 text-amber-800" />
                      </div>
                    </div>
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
              <h4 className="font-pixel text-retro-light text-xl mb-4">{translate('category.knowledgeSeekers')}</h4>
              
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
                        <span className="font-pixel-text text-base text-amber-800 block mb-1">
                          {language === 'de' ? 'Studie: Neuronale Grundlagen von Gewohnheiten' : 'Study: Neural Basis of Habits'}
                        </span>
                        <p className="text-xs font-pixel-text text-amber-900">
                          {language === 'de' 
                            ? 'Neuronale Mechanismen und Diagramme' 
                            : 'Neural mechanisms with detailed explanations'}
                        </p>
                      </div>
                      <div className="w-16 h-16 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center">
                        <Search className="w-10 h-10 text-amber-800" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Knowledge 2 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <div className="flex flex-row items-center gap-3">
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-amber-800 block mb-1">
                          {language === 'de' ? 'Artikel: Die Psychologie der Gewohnheitsveränderung' : 'Article: The Psychology of Habit Change'}
                        </span>
                        <p className="text-xs font-pixel-text text-amber-900">
                          {language === 'de' 
                            ? 'Psychologische Faktoren und Anwendungen' 
                            : 'Psychological factors and applications'}
                        </p>
                      </div>
                      <div className="w-16 h-16 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center">
                        <Search className="w-10 h-10 text-amber-800" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Knowledge 3 */}
                <div className="pixel-scroll-closed">
                  <div className="scroll-closed-body p-3">
                    <div className="flex flex-row items-center gap-3">
                      <div className="flex-1">
                        <span className="font-pixel-text text-base text-amber-800 block mb-1">
                          {language === 'de' ? 'Forschungsanalyse: Langfristige Gewohnheitsbildung' : 'Research Analysis: Long-term Habit Formation'}
                        </span>
                        <p className="text-xs font-pixel-text text-amber-900">
                          {language === 'de' 
                            ? 'Metaanalyse verschiedener Studien' 
                            : 'Meta-analysis of various studies on habits'}
                        </p>
                      </div>
                      <div className="w-16 h-16 rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0 bg-amber-50 flex items-center justify-center">
                        <Search className="w-10 h-10 text-amber-800" />
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
