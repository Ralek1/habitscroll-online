import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import HeaderNavigation from '../components/HeaderNavigation';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, PenTool, Monitor, FileText, BarChart3 } from 'lucide-react';
import { optimizedImage } from '../utils/optimizeImage';

const LearnHowToTrack: React.FC = () => {
  const { translate, language } = useLanguage();
  
  // Set page title
  useEffect(() => {
    document.title = translate('learn.tracking');
    
    // Initialize performance mark for page load
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.performance.mark('learn-track-page-loaded');
    }
  }, [translate]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="absolute top-4 right-4 z-10">
        <HeaderNavigation />
      </div>
      
      <div className="text-center mb-8 animate-appear flex flex-col items-center">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">{translate('app.title')}</h1>
        </div>
        <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed text-center">
          {language === 'de' ? 'Lerne wie man' : 'Learn How To'} <br /> 
          <span className="text-green-400">{language === 'de' ? 'Trackt' : 'Track'}</span>
        </h2>
        
        <div className="mt-4 mb-6 text-retro-purple-100 italic max-w-md font-pixel-text text-sm">
          {language === 'de' 
            ? "Gewohnheiten zu Tracken ist keine Kunst, setzt dein Ziel und schreibe auf, was du dafür brauchst und machst, jeden Tag!"
            : "Tracking habits is not difficult. Set your goal, write down what you need, and track your progress every day!"}
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
              <h4 className="font-pixel text-green-400 text-xl mb-4">
                {language === 'de' ? "Für Papier-Samurai" : "For Paper Samurai"}
              </h4>
              
              <p className="text-sm font-pixel-text text-retro-purple-200 mb-6 text-center">
                {language === 'de' 
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
                          {language === 'de' ? "Der einfache Weg" : "The Simple Way"}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? "Ein einfaches Bullet Journal, um deine Gewohnheiten mit Stift und Papier zu verfolgen."
                            : "A simple bullet journal to track your habits with pen and paper."}
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
                          {language === 'de' ? "Der strukturierte Ansatz" : "The Structured Approach"}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? "Ein geführter Habit-Tracker mit vordesignten Vorlagen."
                            : "A guided habit tracker with pre-designed templates."}
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
                          {language === 'de' ? "Der Alleskönner" : "The All-Rounder"}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? "Ein umfassendes Habit-Tracking-System, das sich an deine Bedürfnisse anpasst."
                            : "A comprehensive habit tracking system that adapts to your needs."}
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
                          {language === 'de' ? "Immer Sichtbar" : "Always Visible"}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? "Ein großer Wandkalender, um deine Gewohnheiten jederzeit sichtbar zu halten."
                            : "A large wall calendar to keep your habits visible at all times."}
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
                  {language === 'de' ? "Mehr für Papier-Samurai" : "More for Paper Samurai"}
                </PixelButton>
              </Link>
            </div>
          </div>
          
          {/* Category 2: Byte-Buchhalter / Byte Accountants */}
          <div className="border-2 border-retro-purple-600 rounded-xl p-6">
            <div className="flex flex-col items-center">
              <Monitor className="w-12 h-12 text-retro-accent mb-3" />
              <h4 className="font-pixel text-green-400 text-xl mb-4">
                {language === 'de' ? "Für Byte-Buchhalter" : "For Byte Bookkeepers"}
              </h4>
              
              <p className="text-sm font-pixel-text text-retro-purple-200 mb-6 text-center">
                {language === 'de' 
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
                          {language === 'de' ? "Streaks (iPhone)" : "Streaks (iPhone)"}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? "Perfekt für iPhone-Benutzer, die bis zu zwölf Gewohnheiten verfolgen möchten."
                            : "Perfect for iPhone users who want to track up to twelve habits."}
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
                          {language === 'de' ? "HabitNow (Android)" : "HabitNow (Android)"}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? "Großartig für Android-Benutzer mit leistungsstarken Habit-Tracking-Funktionen."
                            : "Great for Android users with powerful habit tracking capabilities."}
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
                          {language === 'de' ? "Way of Life" : "Way of Life"}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? "Zum Sammeln vieler Daten über deine Gewohnheiten und Verhaltensweisen."
                            : "For gathering lots of data about your habits and behaviors."}
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
                          {language === 'de' ? "Habitify" : "Habitify"}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? "Zum Planen deines Tages rund um deine Gewohnheiten und Ziele."
                            : "For planning your day around your habits and goals."}
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
                  {language === 'de' ? "Mehr für Byte-Buchhalter" : "More for Byte Bookkeepers"}
                </PixelButton>
              </Link>
            </div>
          </div>
          
          {/* Category 3: Markdown-Magier / Markdown Wizards */}
          <div className="border-2 border-retro-purple-600 rounded-xl p-6">
            <div className="flex flex-col items-center">
              <FileText className="w-12 h-12 text-retro-accent mb-3" />
              <h4 className="font-pixel text-green-400 text-xl mb-4">
                {language === 'de' ? "Für Markdown-Magier" : "For Markdown Magicians"}
              </h4>
              
              <p className="text-sm font-pixel-text text-retro-purple-200 mb-6 text-center">
                {language === 'de' 
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
                          {language === 'de' 
                            ? "Eine leistungsstarke Wissensdatenbank, die auf einem lokalen Ordner mit einfachen Markdown-Textdateien basiert."
                            : "A powerful knowledge base that works on top of a local folder of plain text Markdown files."}
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
                          {language === 'de' 
                            ? "All-in-One-Arbeitsbereich für Notizen, Aufgaben, Wikis und Datenbanken."
                            : "All-in-one workspace for notes, tasks, wikis, and databases."}
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
                          {language === 'de' 
                            ? "Eine spielerische Habit-Tracking-App, die dein Leben wie ein Rollenspiel behandelt."
                            : "A gamified habit tracking app that treats your life like an RPG."}
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
                          {language === 'de' 
                            ? "Eine Schreib-App, die dein Habit-Tracking in einen kreativen Prozess verwandelt."
                            : "A writing app that turns your habit tracking into a creative process."}
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
                  {language === 'de' ? "Mehr für Markdown-Magier" : "More for Markdown Magicians"}
                </PixelButton>
              </Link>
            </div>
          </div>
          
          {/* Category 4: Visu-Alchemisten / Visual Alchemists */}
          <div className="border-2 border-retro-purple-600 rounded-xl p-6">
            <div className="flex flex-col items-center">
              <BarChart3 className="w-12 h-12 text-retro-accent mb-3" />
              <h4 className="font-pixel text-green-400 text-xl mb-4">
                {language === 'de' ? "Für Visu-Alchemisten" : "For Visual Alchemists"}
              </h4>
              
              <p className="text-sm font-pixel-text text-retro-purple-200 mb-6 text-center">
                {language === 'de' 
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
                          {language === 'de' 
                            ? "Ein visuelles Tool, das das Tracking von Gewohnheiten unterhaltsam und kollaborativ macht."
                            : "A visual tool that makes tracking habits fun and collaborative."}
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
                          {language === 'de' 
                            ? "Eine unendliche Leinwand für deine Habit-Tracking-Visualisierung."
                            : "An infinite canvas for your habit tracking visualization."}
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
                          {language === 'de' ? "Kanban-Boards" : "Kanban Boards"}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? "Verfolge deine Gewohnheiten mit Spalten für To-Do, In Bearbeitung und Erledigt."
                            : "Track your habits with columns for to-do, doing, and done."}
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
                          {language === 'de' ? "MindMaps" : "Mind Maps"}
                        </span>
                        <p className="text-xs font-pixel-text text-retro-purple-200">
                          {language === 'de' 
                            ? "Erstelle visuelle Verbindungen zwischen deinen Gewohnheiten und Zielen."
                            : "Create visual connections between your habits and goals."}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center bg-retro-purple-800">
                        <BarChart3 className="w-8 h-8 text-retro-accent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link to="/">
                <PixelButton onClick={() => {}}>
                  {language === 'de' ? "Mehr für Visu-Alchemisten" : "More for Visual Alchemists"}
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

export default LearnHowToTrack;
