import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, PenTool, Monitor, FileText, BarChart3 } from 'lucide-react';
import SEO from '../components/SEO';

const LearnHowToTrack: React.FC = () => {
  const { translate, language } = useLanguage();
  
  // Set page title
  useEffect(() => {
    document.title = translate('learn.tracking');
    
    // Initialize performance mark for page load
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.performance.mark('learn-tracking-page-loaded');
    }
  }, [translate]);
  
  return (
    <>
      <SEO 
        title={translate('learn.tracking')}
        description={translate('page.learn.track.description') || 'Learn how to effectively track your habits and measure your progress'}
        canonicalPath="/learn-how-to-track"
        type="article"
      />
      
      <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-retro-purple-900">
        <div className="absolute top-4 right-4 z-10">
          <LanguageSwitcher />
        </div>
        
        <div className="text-center mb-8 animate-appear flex flex-col items-center">
          <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
            <h1 className="font-pixel text-retro-light text-xs">{translate('app.title')}</h1>
          </div>
          <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed text-center">
            {translate('page.learn.track.title')} <br /> 
            <span className="text-green-400">{translate('page.learn.track.subtitle')}</span>
          </h2>
          
          <div className="mt-4 mb-6 text-retro-purple-100 italic max-w-md font-pixel-text text-sm">
            {translate('quote.james.clear')}
          </div>
        </div>
        
        <div className="w-full max-w-6xl">
          <p className="font-pixel-text text-lg mb-10 text-retro-light text-center">
            {translate('page.learn.track.intro')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Category 1: Paper Samurai */}
            <div className="border-2 border-retro-purple-600 rounded-xl p-6">
              <div className="flex flex-col items-center">
                <PenTool className="w-12 h-12 text-retro-accent mb-3" />
                <h4 className="font-pixel text-green-400 text-xl mb-4">{translate('page.learn.track.categories.paperSamurai')}</h4>
                
                <p className="text-sm font-pixel-text text-retro-purple-200 mb-6 text-center">
                  {language === 'de' 
                    ? 'Klassische Methoden mit Stift und Papier zum Tracken deiner Gewohnheiten.' 
                    : 'Traditional methods using pen and paper to track your habits.'}
                </p>
                
                <div className="space-y-4 w-full mb-6">
                  {/* Paper 1 */}
                  <div className="pixel-scroll-closed">
                    <div className="scroll-closed-body p-3">
                      <a 
                        href="https://amzn.to/3FKGF3k"
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-green-400 block mb-1">
                            {translate('page.learn.track.items.paper.simple.title')}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {translate('page.learn.track.items.paper.simple.description')}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <PenTool className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Paper 2 */}
                  <div className="pixel-scroll-closed">
                    <div className="scroll-closed-body p-3">
                      <a 
                        href="https://amzn.to/447TfUv"
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-green-400 block mb-1">
                            {translate('page.learn.track.items.paper.structured.title')}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {translate('page.learn.track.items.paper.structured.description')}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <PenTool className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Paper 3 */}
                  <div className="pixel-scroll-closed">
                    <div className="scroll-closed-body p-3">
                      <a 
                        href="https://amzn.to/4c7RgkW"
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-green-400 block mb-1">
                            {translate('page.learn.track.items.paper.allrounder.title')}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {translate('page.learn.track.items.paper.allrounder.description')}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <PenTool className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Paper 4 */}
                  <div className="pixel-scroll-closed">
                    <div className="scroll-closed-body p-3">
                      <a 
                        href="https://amzn.to/4cbyzx1"
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-green-400 block mb-1">
                            {translate('page.learn.track.items.paper.visible.title')}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {translate('page.learn.track.items.paper.visible.description')}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <PenTool className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                
                <Link to="/">
                  <PixelButton onClick={() => {}}>
                    {translate('see.more.paper')}
                  </PixelButton>
                </Link>
              </div>
            </div>
            
            {/* Category 2: Byte Bookkeepers */}
            <div className="border-2 border-retro-purple-600 rounded-xl p-6">
              <div className="flex flex-col items-center">
                <Monitor className="w-12 h-12 text-retro-accent mb-3" />
                <h4 className="font-pixel text-green-400 text-xl mb-4">{translate('page.learn.track.categories.byteBookkeepers')}</h4>
                
                <p className="text-sm font-pixel-text text-retro-purple-200 mb-6 text-center">
                  {language === 'de' 
                    ? 'Digitale Apps und Tools zur Verfolgung deiner Gewohnheiten.' 
                    : 'Digital apps and tools to track your habits.'}
                </p>
                
                <div className="space-y-4 w-full mb-6">
                  {/* Digital 1 */}
                  <div className="pixel-scroll-closed">
                    <div className="scroll-closed-body p-3">
                      <a 
                        href="https://zapier.com/blog/best-habit-tracker-app/#streaks"
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-green-400 block mb-1">
                            {translate('page.learn.track.items.digital.iphone.title')}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {translate('page.learn.track.items.digital.iphone.description')}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <Monitor className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Digital 2 */}
                  <div className="pixel-scroll-closed">
                    <div className="scroll-closed-body p-3">
                      <a 
                        href="https://zapier.com/blog/best-habit-tracker-app/#habitnow"
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-green-400 block mb-1">
                            {translate('page.learn.track.items.digital.android.title')}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {translate('page.learn.track.items.digital.android.description')}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <Monitor className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Digital 3 */}
                  <div className="pixel-scroll-closed">
                    <div className="scroll-closed-body p-3">
                      <a 
                        href="https://zapier.com/blog/best-habit-tracker-app/#wayoflife"
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-green-400 block mb-1">
                            {translate('page.learn.track.items.digital.data.title')}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {translate('page.learn.track.items.digital.data.description')}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <Monitor className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Digital 4 */}
                  <div className="pixel-scroll-closed">
                    <div className="scroll-closed-body p-3">
                      <a 
                        href="https://zapier.com/blog/best-habit-tracker-app/#habitify"
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-green-400 block mb-1">
                            {translate('page.learn.track.items.digital.planning.title')}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {translate('page.learn.track.items.digital.planning.description')}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <Monitor className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                
                <Link to="/">
                  <PixelButton onClick={() => {}}>
                    {translate('see.more.digital')}
                  </PixelButton>
                </Link>
              </div>
            </div>
            
            {/* Category 3: Markdown Magicians */}
            <div className="border-2 border-retro-purple-600 rounded-xl p-6">
              <div className="flex flex-col items-center">
                <FileText className="w-12 h-12 text-retro-accent mb-3" />
                <h4 className="font-pixel text-green-400 text-xl mb-4">{translate('page.learn.track.categories.markdownMagicians')}</h4>
                
                <p className="text-sm font-pixel-text text-retro-purple-200 mb-6 text-center">
                  {language === 'de' 
                    ? 'Werkzeuge für diejenigen, die Text und Struktur lieben.' 
                    : 'Tools for those who love text and structure.'}
                </p>
                
                <div className="space-y-4 w-full mb-6">
                  {/* Markdown 1 */}
                  <div className="pixel-scroll-closed">
                    <div className="scroll-closed-body p-3">
                      <a 
                        href="https://obsidian.md/"
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-green-400 block mb-1">
                            {translate('page.learn.track.items.markdown.obsidian.title')}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {translate('page.learn.track.items.markdown.obsidian.description')}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <FileText className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Markdown 2 */}
                  <div className="pixel-scroll-closed">
                    <div className="scroll-closed-body p-3">
                      <a 
                        href="https://www.notion.com/de"
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-green-400 block mb-1">
                            {translate('page.learn.track.items.markdown.notion.title')}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {translate('page.learn.track.items.markdown.notion.description')}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <FileText className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Markdown 3 */}
                  <div className="pixel-scroll-closed">
                    <div className="scroll-closed-body p-3">
                      <a 
                        href="https://habitica.com/static/home"
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-green-400 block mb-1">
                            {translate('page.learn.track.items.markdown.habitica.title')}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {translate('page.learn.track.items.markdown.habitica.description')}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <FileText className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Markdown 4 */}
                  <div className="pixel-scroll-closed">
                    <div className="scroll-closed-body p-3">
                      <a 
                        href="https://ulysses.app/"
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-green-400 block mb-1">
                            {translate('page.learn.track.items.markdown.ulysses.title')}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {translate('page.learn.track.items.markdown.ulysses.description')}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <FileText className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                
                <Link to="/">
                  <PixelButton onClick={() => {}}>
                    {translate('see.more.markdown')}
                  </PixelButton>
                </Link>
              </div>
            </div>
            
            {/* Category 4: Visual Alchemists */}
            <div className="border-2 border-retro-purple-600 rounded-xl p-6">
              <div className="flex flex-col items-center">
                <BarChart3 className="w-12 h-12 text-retro-accent mb-3" />
                <h4 className="font-pixel text-green-400 text-xl mb-4">{translate('page.learn.track.categories.visualAlchemists')}</h4>
                
                <p className="text-sm font-pixel-text text-retro-purple-200 mb-6 text-center">
                  {language === 'de' 
                    ? 'Visuelle Werkzeuge zur Gewohnheitsverfolgung und -visualisierung.' 
                    : 'Visual tools for habit tracking and visualization.'}
                </p>
                
                <div className="space-y-4 w-full mb-6">
                  {/* Visual 1 */}
                  <div className="pixel-scroll-closed">
                    <div className="scroll-closed-body p-3">
                      <a 
                        href="https://trello.com/"
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-green-400 block mb-1">
                            {translate('page.learn.track.items.visual.trello.title')}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {translate('page.learn.track.items.visual.trello.description')}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <BarChart3 className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Visual 2 */}
                  <div className="pixel-scroll-closed">
                    <div className="scroll-closed-body p-3">
                      <a 
                        href="https://miro.com/"
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-green-400 block mb-1">
                            {translate('page.learn.track.items.visual.miro.title')}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {translate('page.learn.track.items.visual.miro.description')}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <BarChart3 className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Visual 3 */}
                  <div className="pixel-scroll-closed">
                    <div className="scroll-closed-body p-3">
                      <a 
                        href="https://kanban.org/"
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-green-400 block mb-1">
                            {translate('page.learn.track.items.visual.kanban.title')}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {translate('page.learn.track.items.visual.kanban.description')}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <BarChart3 className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Visual 4 */}
                  <div className="pixel-scroll-closed">
                    <div className="scroll-closed-body p-3">
                      <a 
                        href="https://www.mindmeister.com/"
                        className="flex flex-row items-center hover:opacity-90 transition-opacity gap-3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-green-400 block mb-1">
                            {translate('page.learn.track.items.visual.mindmap.title')}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {translate('page.learn.track.items.visual.mindmap.description')}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <BarChart3 className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                
                <Link to="/">
                  <PixelButton onClick={() => {}}>
                    {translate('see.more.visual')}
                  </PixelButton>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center my-6">
            <Sparkles className="w-8 h-12 text-retro-accent animate-pulse" />
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
    </>
  );
};

export default LearnHowToTrack;
