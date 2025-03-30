
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, PenTool, Monitor, FileText, BarChart3 } from 'lucide-react';
import SEO from '../components/SEO';

const LearnHowToTrack: React.FC = () => {
  const { language, translate } = useLanguage();
  
  useEffect(() => {
    document.title = language === 'de' ? 'Tracking' : 'Tracking';
    
    // Initialize performance mark for page load
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.performance.mark('learn-track-page-loaded');
    }
  }, [language]);
  
  const isGerman = language === 'de';
  
  return (
    <>
      <SEO 
        title={isGerman ? "Gewohnheiten tracken" : "Track Your Habits"}
        description={isGerman 
          ? "Entdecke verschiedene Methoden, um deine Gewohnheiten zu tracken" 
          : "Discover different methods to track your habits effectively"}
        canonicalPath="/learn-how-to-track"
        type="article"
      />
      
      <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
        <div className="absolute top-4 right-4 z-10">
          <LanguageSwitcher />
        </div>
        
        <div className="text-center mb-8 animate-appear flex flex-col items-center">
          <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
            <h1 className="font-pixel text-retro-light text-xs">{translate('app.title')}</h1>
          </div>
          <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed text-center">
            {isGerman ? 'Lerne wie man' : 'Learn How To'} <br /> 
            <span className="text-green-400">{isGerman ? 'Trackt' : 'Track'}</span>
          </h2>
          
          <div className="mt-4 mb-6 text-retro-purple-100 italic max-w-md font-pixel-text text-sm">
            {isGerman 
              ? "Gewohnheiten zu Tracken ist keine Kunst, setzt dein Ziel und schreibe auf, was du dafür brauchst und machst, jeden Tag!"
              : "Tracking habits is not an art, set your goal and write down what you need and do for it, every day!"}
          </div>
        </div>
        
        <div className="w-full max-w-6xl">
          <p className="font-pixel-text text-lg mb-10 text-retro-light text-center">
            {language === 'de' 
              ? 'Vertiefe dich in verschiedene Methoden, deine Gewohnheiten zu tracken' 
              : 'Explore different methods to track your habits effectively'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Category 1: Papier-Samurai / Paper Samurai */}
            <div className="border-2 border-retro-purple-600 rounded-xl p-6">
              <div className="flex flex-col items-center">
                <PenTool className="w-12 h-12 text-retro-accent mb-3" />
                <h4 className="font-pixel text-green-400 text-xl mb-4">{isGerman ? "Für Papier-Samurai" : "For Paper Samurai"}</h4>
                
                <p className="text-sm font-pixel-text text-retro-purple-200 mb-6 text-center">
                  {isGerman 
                    ? "Die traditionelle Kunst des Trackens mit Stift und Papier" 
                    : "The traditional art of tracking with pen and paper"}
                </p>
                
                <div className="space-y-4 w-full mb-6">
                  {/* Item 1 */}
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
                            {isGerman ? "Der einfache Weg" : "The Simple Way"}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {isGerman 
                              ? "Ein unkomplizierter Ansatz zum Tracken deiner Gewohnheiten mit einfachen Markierungen."
                              : "A straightforward approach to tracking your habits with simple markings."}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <PenTool className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Item 2 */}
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
                            {isGerman ? "Der Planer" : "The Planner"}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {isGerman 
                              ? "Kombiniere deine Gewohnheiten mit deiner Tagesplanung für bessere Integration."
                              : "Combine your habits with your daily planning for better integration."}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <PenTool className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Item 3 */}
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
                            {isGerman ? "Der Alleskönner" : "The All-Rounder"}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {isGerman 
                              ? "Ein umfassendes System für alle Arten von Gewohnheiten und Zielen."
                              : "A comprehensive system for all types of habits and goals."}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <PenTool className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Item 4 */}
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
                            {isGerman ? "Immer Sichtbar" : "Always Visible"}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {isGerman 
                              ? "Halte deine Gewohnheiten an der Wand, damit du sie nie vergisst."
                              : "Keep your habits on the wall so you never forget them."}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <PenTool className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Category 2: Byte-Buchhalter / Byte Accountants */}
            <div className="border-2 border-retro-purple-600 rounded-xl p-6">
              <div className="flex flex-col items-center">
                <Monitor className="w-12 h-12 text-retro-accent mb-3" />
                <h4 className="font-pixel text-green-400 text-xl mb-4">{isGerman ? "Für Byte-Buchhalter" : "For Byte Accountants"}</h4>
                
                <p className="text-sm font-pixel-text text-retro-purple-200 mb-6 text-center">
                  {isGerman 
                    ? "Digitale Apps und Tools für maximale Effizienz" 
                    : "Digital apps and tools for maximum efficiency"}
                </p>
                
                <div className="space-y-4 w-full mb-6">
                  {/* Item 1 */}
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
                            {isGerman ? "Für iPhone-Nutzer" : "For iPhone Users"}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {isGerman 
                              ? "Die perfekte App für iPhone-Nutzer mit einer schönen und intuitiven Oberfläche."
                              : "The perfect app for iPhone users with a beautiful and intuitive interface."}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <Monitor className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Item 2 */}
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
                            {isGerman ? "Für Android-Nutzer" : "For Android Users"}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {isGerman 
                              ? "Eine leistungsstarke App für Android-Geräte mit umfangreichen Funktionen."
                              : "A powerful app for Android devices with comprehensive features."}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <Monitor className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Item 3 */}
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
                            {isGerman ? "Für Datensammler" : "For Data Collectors"}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {isGerman 
                              ? "Sammle umfangreiche Daten über deine Gewohnheiten für detaillierte Analysen."
                              : "Gather extensive data about your habits for detailed analysis."}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <Monitor className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Item 4 */}
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
                            {isGerman ? "Für Tagesplaner" : "For Day Planners"}
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {isGerman 
                              ? "Plane deinen Tag rund um deine Gewohnheiten für maximale Produktivität."
                              : "Plan your day around your habits for maximum productivity."}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <Monitor className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Category 3: Markdown-Magier / Markdown Wizards */}
            <div className="border-2 border-retro-purple-600 rounded-xl p-6">
              <div className="flex flex-col items-center">
                <FileText className="w-12 h-12 text-retro-accent mb-3" />
                <h4 className="font-pixel text-green-400 text-xl mb-4">{isGerman ? "Für Markdown-Magier" : "For Markdown Wizards"}</h4>
                
                <p className="text-sm font-pixel-text text-retro-purple-200 mb-6 text-center">
                  {isGerman 
                    ? "Textbasierte Systeme für Programmierer und Technik-Enthusiasten" 
                    : "Text-based systems for programmers and tech enthusiasts"}
                </p>
                
                <div className="space-y-4 w-full mb-6">
                  {/* Item 1 */}
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
                            Obsidian
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {isGerman 
                              ? "Ein leistungsstarkes Notiz-Tool mit Verknüpfungen und Plugins für Habit Tracking."
                              : "A powerful note-taking tool with connections and plugins for habit tracking."}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <FileText className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Item 2 */}
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
                            Notion
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {isGerman 
                              ? "Vielseitiges Werkzeug für Notizen, Datenbanken und Habit Tracking in einem."
                              : "Versatile tool for notes, databases, and habit tracking all in one."}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <FileText className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Item 3 */}
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
                            Habitica
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {isGerman 
                              ? "Verwandelt deine Produktivität in ein Rollenspiel mit Belohnungen und Herausforderungen."
                              : "Turns your productivity into a role-playing game with rewards and challenges."}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <FileText className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Item 4 */}
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
                            Ulysses
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {isGerman 
                              ? "Eleganter Texteditor für Apple-Geräte, ideal für Gewohnheitsjournal."
                              : "Elegant text editor for Apple devices, ideal for habit journaling."}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <FileText className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Category 4: Visu-Alchemisten / Visual Alchemists */}
            <div className="border-2 border-retro-purple-600 rounded-xl p-6">
              <div className="flex flex-col items-center">
                <BarChart3 className="w-12 h-12 text-retro-accent mb-3" />
                <h4 className="font-pixel text-green-400 text-xl mb-4">{isGerman ? "Für Visu-Alchemisten" : "For Visual Alchemists"}</h4>
                
                <p className="text-sm font-pixel-text text-retro-purple-200 mb-6 text-center">
                  {isGerman 
                    ? "Visuelle Werkzeuge für kreative Köpfe" 
                    : "Visual tools for creative minds"}
                </p>
                
                <div className="space-y-4 w-full mb-6">
                  {/* Item 1 */}
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
                            Trello
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {isGerman 
                              ? "Organisiere deine Gewohnheiten auf visuellen Boards mit Karten und Listen."
                              : "Organize your habits on visual boards with cards and lists."}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <BarChart3 className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Item 2 */}
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
                            Miro
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {isGerman 
                              ? "Endlose Whiteboards für visuelle Darstellung deiner Gewohnheiten und Fortschritte."
                              : "Endless whiteboards for visually mapping your habits and progress."}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <BarChart3 className="w-8 h-8 text-retro-accent" />
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  {/* Item 3 */}
                  <div className="pixel-scroll-closed">
                    <div className="scroll-closed-body p-3">
                      <div className="flex flex-row items-center gap-3">
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-green-400 block mb-1">
                            Kanban-Boards
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {isGerman 
                              ? "Visualisiere den Fortschritt deiner Gewohnheiten durch verschiedene Stadien."
                              : "Visualize the progress of your habits through different stages."}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <BarChart3 className="w-8 h-8 text-retro-accent" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="pixel-scroll-closed">
                    <div className="scroll-closed-body p-3">
                      <div className="flex flex-row items-center gap-3">
                        <div className="flex-1">
                          <span className="font-pixel-text text-base text-green-400 block mb-1">
                            MindMap
                          </span>
                          <p className="text-xs font-pixel-text text-retro-purple-200">
                            {isGerman 
                              ? "Verbinde deine Gewohnheiten mit deinen Zielen und Werten in visuellen Mindmaps."
                              : "Connect your habits with your goals and values in visual mind maps."}
                          </p>
                        </div>
                        <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                          <BarChart3 className="w-8 h-8 text-retro-accent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
    </>
  );
};

export default LearnHowToTrack;
