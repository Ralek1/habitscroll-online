
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Book, Headphones, Film, Search } from 'lucide-react';
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
                  
                  <p className="text-sm font-pixel-text text-amber-900 mb-4 text-center">
                    Bücher, die dir helfen, gute Gewohnheiten zu entwickeln und schlechte zu überwinden. 
                    Perfekt für alle, die sich gerne Zeit zum Lesen nehmen.
                  </p>
                  
                  <ScrollArea className="h-[260px] w-full rounded-md border border-retro-purple-400/30 p-4 scroll-paper">
                    <div className="mb-4 rounded-lg p-3">
                      <a href="https://www.amazon.de/Die-1-Methode-Ver%C3%A4nderung-Gewohnheiten-erreichen/dp/3442178584?crid=1CN8NCTVN51F&dib=eyJ2IjoiMSJ9.qkrD_xpwUFVOJ0j7ub8oXp0yRy9v2OnDeLdC1cBr2G0bnY6xvODh-LPWhcjTDWLtSDLQ1ZUT-NrdHjZvK3hD812DBG4xhLk9lMBofmoOWaTZnKPRSCTmGNxwzN66hVzaegeyndwno3sNNlFTXTXdj6J_Scqw7beHNsQpFDgBrkkefLh_IrUGW1NUHGOVDuEUPcnl25CfY1XylxWl6MdrG6a69eE27GnqKA55EptM4iQ.wWIorMn7z7ezMDJghwdDyYgvUrw0Pe98pal75_6_5F4&dib_tag=se&keywords=james+clear+1+prozent+methode&qid=1743168903&sprefix=james+clear%2Caps%2C85&sr=8-1&linkCode=ll1&tag=habitscroll-21&linkId=732a8014feee8c933a134bacef62e35c&language=de_DE&ref_=as_li_ss_tl" 
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
                    
                    {/* Additional books could be added here */}
                  </ScrollArea>
                </div>
              </div>
              
              {/* Category 2 */}
              <div className="border-2 border-retro-purple-600 rounded-xl p-6">
                <div className="flex flex-col items-center">
                  <Headphones className="w-12 h-12 text-retro-accent mb-3" />
                  <h4 className="font-pixel text-retro-light text-xl mb-4">{translate('category.audiophiles')}</h4>
                  
                  <p className="text-sm font-pixel-text text-amber-900 mb-4 text-center">
                    Hörbücher und Podcasts über Gewohnheiten und persönliche Entwicklung.
                    Perfekt für unterwegs oder beim Training!
                  </p>
                  
                  <ScrollArea className="h-[260px] w-full rounded-md border border-retro-purple-400/30 p-4 scroll-paper">
                    {/* Podcast or audiobook recommendations could be added here */}
                  </ScrollArea>
                </div>
              </div>
              
              {/* Category 3 */}
              <div className="border-2 border-retro-purple-600 rounded-xl p-6">
                <div className="flex flex-col items-center">
                  <Film className="w-12 h-12 text-retro-accent mb-3" />
                  <h4 className="font-pixel text-retro-light text-xl mb-4">{translate('category.visualLearners')}</h4>
                  
                  <p className="text-sm font-pixel-text text-amber-900 mb-4 text-center">
                    Videos, Dokumentationen und Kurse, die visuelle Lerntypen 
                    ansprechen und komplexe Konzepte einfach visualisieren.
                  </p>
                  
                  <ScrollArea className="h-[260px] w-full rounded-md border border-retro-purple-400/30 p-4 scroll-paper">
                    {/* Video recommendations could be added here */}
                  </ScrollArea>
                </div>
              </div>
              
              {/* Category 4 */}
              <div className="border-2 border-retro-purple-600 rounded-xl p-6">
                <div className="flex flex-col items-center">
                  <Search className="w-12 h-12 text-retro-accent mb-3" />
                  <h4 className="font-pixel text-retro-light text-xl mb-4">{translate('category.knowledgeSeekers')}</h4>
                  
                  <p className="text-sm font-pixel-text text-amber-900 mb-4 text-center">
                    Forschungspapiere, Artikel und tiefgehende Analysen für alle, 
                    die die Wissenschaft hinter Gewohnheiten verstehen möchten.
                  </p>
                  
                  <ScrollArea className="h-[260px] w-full rounded-md border border-retro-purple-400/30 p-4 scroll-paper">
                    {/* Research paper recommendations could be added here */}
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
                  
                  <p className="text-sm font-pixel-text text-amber-900 mb-4 text-center">
                    Books that help you build good habits and break bad ones.
                    Perfect for those who enjoy taking time to read and reflect.
                  </p>
                  
                  <ScrollArea className="h-[260px] w-full rounded-md border border-retro-purple-400/30 p-4 scroll-paper">
                    <div className="mb-4 rounded-lg p-3">
                      <a href="https://www.amazon.de/Die-1-Methode-Ver%C3%A4nderung-Gewohnheiten-erreichen/dp/3442178584?crid=1CN8NCTVN51F&dib=eyJ2IjoiMSJ9.qkrD_xpwUFVOJ0j7ub8oXp0yRy9v2OnDeLdC1cBr2G0bnY6xvODh-LPWhcjTDWLtSDLQ1ZUT-NrdHjZvK3hD812DBG4xhLk9lMBofmoOWaTZnKPRSCTmGNxwzN66hVzaegeyndwno3sNNlFTXTXdj6J_Scqw7beHNsQpFDgBrkkefLh_IrUGW1NUHGOVDuEUPcnl25CfY1XylxWl6MdrG6a69eE27GnqKA55EptM4iQ.wWIorMn7z7ezMDJghwdDyYgvUrw0Pe98pal75_6_5F4&dib_tag=se&keywords=james+clear+1+prozent+methode&qid=1743168903&sprefix=james+clear%2Caps%2C85&sr=8-1&linkCode=ll1&tag=habitscroll-21&linkId=732a8014feee8c933a134bacef62e35c&language=de_DE&ref_=as_li_ss_tl" 
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-amber-800 block mb-3">Atomic Habits (German)</span>
                          <p className="mt-1 text-sm font-pixel-text text-amber-900">
                            This book by James Clear explains how tiny 1% improvements lead to 
                            remarkable results. With practical strategies for habit formation and 
                            science-backed techniques.
                          </p>
                        </div>
                        <img 
                          src="https://m.media-amazon.com/images/I/71DLCNz1NhL._SY522_.jpg" 
                          alt="Atomic Habits (German Edition)" 
                          className="w-32 h-auto rounded-md shadow-lg border border-retro-purple-400/30 flex-shrink-0"
                          width={128}
                          height={200}
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </ScrollArea>
                </div>
              </div>
              
              {/* Category 2 */}
              <div className="border-2 border-retro-purple-600 rounded-xl p-6">
                <div className="flex flex-col items-center">
                  <Headphones className="w-12 h-12 text-retro-accent mb-3" />
                  <h4 className="font-pixel text-retro-light text-xl mb-4">{translate('category.audiophiles')}</h4>
                  
                  <p className="text-sm font-pixel-text text-amber-900 mb-4 text-center">
                    Audiobooks and podcasts about habits and personal development.
                    Perfect for on-the-go learning or during workouts!
                  </p>
                  
                  <ScrollArea className="h-[260px] w-full rounded-md border border-retro-purple-400/30 p-4 scroll-paper">
                    {/* Podcast or audiobook recommendations could be added here */}
                  </ScrollArea>
                </div>
              </div>
              
              {/* Category 3 */}
              <div className="border-2 border-retro-purple-600 rounded-xl p-6">
                <div className="flex flex-col items-center">
                  <Film className="w-12 h-12 text-retro-accent mb-3" />
                  <h4 className="font-pixel text-retro-light text-xl mb-4">{translate('category.visualLearners')}</h4>
                  
                  <p className="text-sm font-pixel-text text-amber-900 mb-4 text-center">
                    Videos, documentaries, and courses that appeal to visual learners
                    and simplify complex concepts through visualization.
                  </p>
                  
                  <ScrollArea className="h-[260px] w-full rounded-md border border-retro-purple-400/30 p-4 scroll-paper">
                    {/* Video recommendations could be added here */}
                  </ScrollArea>
                </div>
              </div>
              
              {/* Category 4 */}
              <div className="border-2 border-retro-purple-600 rounded-xl p-6">
                <div className="flex flex-col items-center">
                  <Search className="w-12 h-12 text-retro-accent mb-3" />
                  <h4 className="font-pixel text-retro-light text-xl mb-4">{translate('category.knowledgeSeekers')}</h4>
                  
                  <p className="text-sm font-pixel-text text-amber-900 mb-4 text-center">
                    Research papers, articles, and deep analyses for those who
                    want to understand the science behind habits and behavior change.
                  </p>
                  
                  <ScrollArea className="h-[260px] w-full rounded-md border border-retro-purple-400/30 p-4 scroll-paper">
                    {/* Research paper recommendations could be added here */}
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
