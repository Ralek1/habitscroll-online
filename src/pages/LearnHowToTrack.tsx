
import React from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, PenTool, Monitor, FileText, BarChart3 } from 'lucide-react';
import SEO from '../components/SEO';

const LearnHowToTrack: React.FC = () => {
  const { language, translate } = useLanguage();
  
  React.useEffect(() => {
    document.title = language === 'de' ? 'Tracking' : 'Tracking';
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
        
        <div className="text-center mb-8 animate-appear">
          <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
            <h1 className="font-pixel text-retro-light text-xs">{translate('app.title')}</h1>
          </div>
          <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed">
            {isGerman ? 'Lerne wie man' : 'Learn How To'} <br /> 
            <span className="text-green-400">{isGerman ? 'Trackt' : 'Track'}</span>
          </h2>
        </div>
        
        <div className="w-full max-w-4xl mx-auto">
          <div className="pixel-scroll-container transform hover:scale-[1.02] transition-transform mb-8">
            <div className="pixel-scroll-handle pixel-scroll-handle-top">
              <div className="pixel-scroll-knob"></div>
              <div className="pixel-wooden-rod"></div>
              <div className="pixel-scroll-knob"></div>
            </div>
            
            <div className="scroll-paper p-6">
              <p className="text-center mb-6 font-pixel-text text-xl text-retro-purple-700">
                {isGerman 
                  ? "Gewohnheiten zu Tracken ist keine Kunst, setzt dein Ziel und schreibe auf, was du dafür brauchst und machst, jeden Tag!"
                  : "Tracking habits is not an art, set your goal and write down what you need and do for it, every day!"}
              </p>
            </div>
            
            <div className="pixel-scroll-handle pixel-scroll-handle-bottom">
              <div className="pixel-scroll-knob"></div>
              <div className="pixel-wooden-rod"></div>
              <div className="pixel-scroll-knob"></div>
            </div>
          </div>
          
          {/* Papier-Samurai / Paper Samurai Section */}
          <div className="mb-12">
            <div className="text-center mb-4">
              <h3 className="font-pixel text-xl text-retro-purple-200 mb-2 flex justify-center items-center">
                <PenTool className="w-5 h-5 mr-2 text-green-400" />
                {isGerman ? "Für Papier-Samurai" : "For Paper Samurai"}
              </h3>
              <p className="text-retro-purple-300 font-pixel-text">
                {isGerman 
                  ? "Die traditionelle Kunst des Trackens mit Stift und Papier"
                  : "The traditional art of tracking with pen and paper"}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="pixel-scroll-container">
                <div className="scroll-paper p-4">
                  <h4 className="text-green-700 font-pixel-text mb-2 text-lg">
                    {isGerman ? "Der einfache Weg" : "The Simple Way"}
                  </h4>
                  <div className="mb-3">
                    <a 
                      href="https://amzn.to/3FKGF3k" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-retro-purple-700 hover:text-retro-purple-900 underline font-pixel-text"
                    >
                      {isGerman ? "Einfacher Habit Tracker" : "Simple Habit Tracker"}
                    </a>
                  </div>
                  <p className="text-retro-purple-700 text-sm font-pixel-text">
                    {isGerman 
                      ? "Ein unkomplizierter Ansatz zum Tracken deiner Gewohnheiten mit einfachen Markierungen."
                      : "A straightforward approach to tracking your habits with simple markings."}
                  </p>
                </div>
              </div>
              
              <div className="pixel-scroll-container">
                <div className="scroll-paper p-4">
                  <h4 className="text-green-700 font-pixel-text mb-2 text-lg">
                    {isGerman ? "Der Planer" : "The Planner"}
                  </h4>
                  <div className="mb-3">
                    <a 
                      href="https://amzn.to/447TfUv" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-retro-purple-700 hover:text-retro-purple-900 underline font-pixel-text"
                    >
                      {isGerman ? "Umfassender Planer" : "Comprehensive Planner"}
                    </a>
                  </div>
                  <p className="text-retro-purple-700 text-sm font-pixel-text">
                    {isGerman 
                      ? "Kombiniere deine Gewohnheiten mit deiner Tagesplanung für bessere Integration."
                      : "Combine your habits with your daily planning for better integration."}
                  </p>
                </div>
              </div>
              
              <div className="pixel-scroll-container">
                <div className="scroll-paper p-4">
                  <h4 className="text-green-700 font-pixel-text mb-2 text-lg">
                    {isGerman ? "Der Alleskönner" : "The All-Rounder"}
                  </h4>
                  <div className="mb-3">
                    <a 
                      href="https://amzn.to/4c7RgkW" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-retro-purple-700 hover:text-retro-purple-900 underline font-pixel-text"
                    >
                      {isGerman ? "Vielseitiger Habit Tracker" : "Versatile Habit Tracker"}
                    </a>
                  </div>
                  <p className="text-retro-purple-700 text-sm font-pixel-text">
                    {isGerman 
                      ? "Ein umfassendes System für alle Arten von Gewohnheiten und Zielen."
                      : "A comprehensive system for all types of habits and goals."}
                  </p>
                </div>
              </div>
              
              <div className="pixel-scroll-container">
                <div className="scroll-paper p-4">
                  <h4 className="text-green-700 font-pixel-text mb-2 text-lg">
                    {isGerman ? "Immer Sichtbar" : "Always Visible"}
                  </h4>
                  <div className="mb-3">
                    <a 
                      href="https://amzn.to/4cbyzx1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-retro-purple-700 hover:text-retro-purple-900 underline font-pixel-text"
                    >
                      {isGerman ? "Wandkalender Tracker" : "Wall Calendar Tracker"}
                    </a>
                  </div>
                  <p className="text-retro-purple-700 text-sm font-pixel-text">
                    {isGerman 
                      ? "Halte deine Gewohnheiten an der Wand, damit du sie nie vergisst."
                      : "Keep your habits on the wall so you never forget them."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Byte-Buchhalter / Byte Accountant Section */}
          <div className="mb-12">
            <div className="text-center mb-4">
              <h3 className="font-pixel text-xl text-retro-purple-200 mb-2 flex justify-center items-center">
                <Monitor className="w-5 h-5 mr-2 text-green-400" />
                {isGerman ? "Für Byte-Buchhalter" : "For Byte Accountants"}
              </h3>
              <p className="text-retro-purple-300 font-pixel-text">
                {isGerman 
                  ? "Digitale Apps und Tools für maximale Effizienz"
                  : "Digital apps and tools for maximum efficiency"}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="pixel-scroll-container">
                <div className="scroll-paper p-4">
                  <h4 className="text-green-700 font-pixel-text mb-2 text-lg">
                    {isGerman ? "Für iPhone-Nutzer" : "For iPhone Users"}
                  </h4>
                  <div className="mb-3">
                    <a 
                      href="https://zapier.com/blog/best-habit-tracker-app/#streaks" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-retro-purple-700 hover:text-retro-purple-900 underline font-pixel-text"
                    >
                      Streaks
                    </a>
                  </div>
                  <p className="text-retro-purple-700 text-sm font-pixel-text">
                    {isGerman 
                      ? "Die perfekte App für iPhone-Nutzer mit einer schönen und intuitiven Oberfläche."
                      : "The perfect app for iPhone users with a beautiful and intuitive interface."}
                  </p>
                </div>
              </div>
              
              <div className="pixel-scroll-container">
                <div className="scroll-paper p-4">
                  <h4 className="text-green-700 font-pixel-text mb-2 text-lg">
                    {isGerman ? "Für Android-Nutzer" : "For Android Users"}
                  </h4>
                  <div className="mb-3">
                    <a 
                      href="https://zapier.com/blog/best-habit-tracker-app/#habitnow" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-retro-purple-700 hover:text-retro-purple-900 underline font-pixel-text"
                    >
                      HabitNow
                    </a>
                  </div>
                  <p className="text-retro-purple-700 text-sm font-pixel-text">
                    {isGerman 
                      ? "Eine leistungsstarke App für Android-Geräte mit umfangreichen Funktionen."
                      : "A powerful app for Android devices with comprehensive features."}
                  </p>
                </div>
              </div>
              
              <div className="pixel-scroll-container">
                <div className="scroll-paper p-4">
                  <h4 className="text-green-700 font-pixel-text mb-2 text-lg">
                    {isGerman ? "Für Datensammler" : "For Data Collectors"}
                  </h4>
                  <div className="mb-3">
                    <a 
                      href="https://zapier.com/blog/best-habit-tracker-app/#wayoflife" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-retro-purple-700 hover:text-retro-purple-900 underline font-pixel-text"
                    >
                      Way of Life
                    </a>
                  </div>
                  <p className="text-retro-purple-700 text-sm font-pixel-text">
                    {isGerman 
                      ? "Sammle umfangreiche Daten über deine Gewohnheiten für detaillierte Analysen."
                      : "Gather extensive data about your habits for detailed analysis."}
                  </p>
                </div>
              </div>
              
              <div className="pixel-scroll-container">
                <div className="scroll-paper p-4">
                  <h4 className="text-green-700 font-pixel-text mb-2 text-lg">
                    {isGerman ? "Für Tagesplaner" : "For Day Planners"}
                  </h4>
                  <div className="mb-3">
                    <a 
                      href="https://zapier.com/blog/best-habit-tracker-app/#habitify" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-retro-purple-700 hover:text-retro-purple-900 underline font-pixel-text"
                    >
                      Habitify
                    </a>
                  </div>
                  <p className="text-retro-purple-700 text-sm font-pixel-text">
                    {isGerman 
                      ? "Plane deinen Tag rund um deine Gewohnheiten für maximale Produktivität."
                      : "Plan your day around your habits for maximum productivity."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Markdown-Magier / Markdown Wizards Section */}
          <div className="mb-12">
            <div className="text-center mb-4">
              <h3 className="font-pixel text-xl text-retro-purple-200 mb-2 flex justify-center items-center">
                <FileText className="w-5 h-5 mr-2 text-green-400" />
                {isGerman ? "Für Markdown-Magier" : "For Markdown Wizards"}
              </h3>
              <p className="text-retro-purple-300 font-pixel-text">
                {isGerman 
                  ? "Textbasierte Systeme für Programmierer und Technik-Enthusiasten"
                  : "Text-based systems for programmers and tech enthusiasts"}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="pixel-scroll-container">
                <div className="scroll-paper p-4">
                  <h4 className="text-green-700 font-pixel-text mb-2 text-lg">
                    Obsidian
                  </h4>
                  <div className="mb-3">
                    <a 
                      href="https://obsidian.md/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-retro-purple-700 hover:text-retro-purple-900 underline font-pixel-text"
                    >
                      obsidian.md
                    </a>
                  </div>
                  <p className="text-retro-purple-700 text-sm font-pixel-text">
                    {isGerman 
                      ? "Ein leistungsstarkes Notiz-Tool mit Verknüpfungen und Plugins für Habit Tracking."
                      : "A powerful note-taking tool with connections and plugins for habit tracking."}
                  </p>
                </div>
              </div>
              
              <div className="pixel-scroll-container">
                <div className="scroll-paper p-4">
                  <h4 className="text-green-700 font-pixel-text mb-2 text-lg">
                    Notion
                  </h4>
                  <div className="mb-3">
                    <a 
                      href="https://www.notion.com/de" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-retro-purple-700 hover:text-retro-purple-900 underline font-pixel-text"
                    >
                      notion.com
                    </a>
                  </div>
                  <p className="text-retro-purple-700 text-sm font-pixel-text">
                    {isGerman 
                      ? "Vielseitiges Werkzeug für Notizen, Datenbanken und Habit Tracking in einem."
                      : "Versatile tool for notes, databases, and habit tracking all in one."}
                  </p>
                </div>
              </div>
              
              <div className="pixel-scroll-container">
                <div className="scroll-paper p-4">
                  <h4 className="text-green-700 font-pixel-text mb-2 text-lg">
                    Habitica
                  </h4>
                  <div className="mb-3">
                    <a 
                      href="https://habitica.com/static/home" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-retro-purple-700 hover:text-retro-purple-900 underline font-pixel-text"
                    >
                      habitica.com
                    </a>
                  </div>
                  <p className="text-retro-purple-700 text-sm font-pixel-text">
                    {isGerman 
                      ? "Verwandelt deine Produktivität in ein Rollenspiel mit Belohnungen und Herausforderungen."
                      : "Turns your productivity into a role-playing game with rewards and challenges."}
                  </p>
                </div>
              </div>
              
              <div className="pixel-scroll-container">
                <div className="scroll-paper p-4">
                  <h4 className="text-green-700 font-pixel-text mb-2 text-lg">
                    Ulysses
                  </h4>
                  <div className="mb-3">
                    <a 
                      href="https://ulysses.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-retro-purple-700 hover:text-retro-purple-900 underline font-pixel-text"
                    >
                      ulysses.app
                    </a>
                  </div>
                  <p className="text-retro-purple-700 text-sm font-pixel-text">
                    {isGerman 
                      ? "Eleganter Texteditor für Apple-Geräte, ideal für Gewohnheitsjournal."
                      : "Elegant text editor for Apple devices, ideal for habit journaling."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visu-Alchemisten / Visual Alchemists Section */}
          <div className="mb-12">
            <div className="text-center mb-4">
              <h3 className="font-pixel text-xl text-retro-purple-200 mb-2 flex justify-center items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-green-400" />
                {isGerman ? "Für Visu-Alchemisten" : "For Visual Alchemists"}
              </h3>
              <p className="text-retro-purple-300 font-pixel-text">
                {isGerman 
                  ? "Visuelle Werkzeuge für kreative Köpfe"
                  : "Visual tools for creative minds"}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="pixel-scroll-container">
                <div className="scroll-paper p-4">
                  <h4 className="text-green-700 font-pixel-text mb-2 text-lg">
                    Trello
                  </h4>
                  <div className="mb-3">
                    <a 
                      href="https://trello.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-retro-purple-700 hover:text-retro-purple-900 underline font-pixel-text"
                    >
                      trello.com
                    </a>
                  </div>
                  <p className="text-retro-purple-700 text-sm font-pixel-text">
                    {isGerman 
                      ? "Organisiere deine Gewohnheiten auf visuellen Boards mit Karten und Listen."
                      : "Organize your habits on visual boards with cards and lists."}
                  </p>
                </div>
              </div>
              
              <div className="pixel-scroll-container">
                <div className="scroll-paper p-4">
                  <h4 className="text-green-700 font-pixel-text mb-2 text-lg">
                    Miro
                  </h4>
                  <div className="mb-3">
                    <a 
                      href="https://miro.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-retro-purple-700 hover:text-retro-purple-900 underline font-pixel-text"
                    >
                      miro.com
                    </a>
                  </div>
                  <p className="text-retro-purple-700 text-sm font-pixel-text">
                    {isGerman 
                      ? "Endlose Whiteboards für visuelle Darstellung deiner Gewohnheiten und Fortschritte."
                      : "Endless whiteboards for visually mapping your habits and progress."}
                  </p>
                </div>
              </div>
              
              <div className="pixel-scroll-container">
                <div className="scroll-paper p-4">
                  <h4 className="text-green-700 font-pixel-text mb-2 text-lg">
                    Kanban-Boards
                  </h4>
                  <div className="mb-3">
                    <p className="text-retro-purple-700 font-pixel-text">
                      {isGerman ? "Physisch oder Digital" : "Physical or Digital"}
                    </p>
                  </div>
                  <p className="text-retro-purple-700 text-sm font-pixel-text">
                    {isGerman 
                      ? "Visualisiere den Fortschritt deiner Gewohnheiten durch verschiedene Stadien."
                      : "Visualize the progress of your habits through different stages."}
                  </p>
                </div>
              </div>
              
              <div className="pixel-scroll-container">
                <div className="scroll-paper p-4">
                  <h4 className="text-green-700 font-pixel-text mb-2 text-lg">
                    MindMap
                  </h4>
                  <div className="mb-3">
                    <p className="text-retro-purple-700 font-pixel-text">
                      {isGerman ? "Diverse Tools verfügbar" : "Various Tools Available"}
                    </p>
                  </div>
                  <p className="text-retro-purple-700 text-sm font-pixel-text">
                    {isGerman 
                      ? "Verbinde deine Gewohnheiten mit deinen Zielen und Werten in visuellen Mindmaps."
                      : "Connect your habits with your goals and values in visual mind maps."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10 mb-8">
            <Link to="/?showHabit=true">
              <PixelButton onClick={() => {}}>
                {translate('button.home')}
              </PixelButton>
            </Link>
          </div>
          
          <div className="flex justify-center my-6">
            <Sparkles className="w-8 h-12 text-retro-accent animate-pulse" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnHowToTrack;
