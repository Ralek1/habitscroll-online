
import React from "react";
import { Link } from "react-router-dom";
import { Home, BookOpen, Menu, FileText } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderNavigationProps {
  className?: string;
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { translate } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`relative z-20 ${className}`}>
      <div className="flex items-center justify-end gap-4">
        <div className="hidden sm:flex items-center gap-3 bg-retro-purple-800/80 px-3 py-2 rounded-lg border border-retro-purple-700">
          <Link to="/" className="font-pixel-text text-retro-purple-200 hover:text-retro-accent flex items-center gap-1 px-2 py-1 rounded transition-colors">
            <Home className="w-4 h-4" />
            <span>{translate('nav.home')}</span>
          </Link>
          <Link to="/learn-about-habits" className="font-pixel-text text-retro-purple-200 hover:text-retro-accent flex items-center gap-1 px-2 py-1 rounded transition-colors">
            <BookOpen className="w-4 h-4" />
            <span>{translate('nav.habits')}</span>
          </Link>
          <Link to="/blog" className="font-pixel-text text-retro-purple-200 hover:text-retro-accent flex items-center gap-1 px-2 py-1 rounded transition-colors">
            <FileText className="w-4 h-4" />
            <span>{translate('nav.blog')}</span>
          </Link>
        </div>
        
        <button 
          className="sm:hidden flex items-center gap-1 bg-retro-purple-800/80 px-3 py-2 rounded-lg border border-retro-purple-700 text-retro-purple-200 hover:text-retro-accent transition-colors"
          onClick={toggleMenu}
        >
          <Menu className="w-5 h-5" />
          <span className="font-pixel-text text-xs">{translate('nav.menu')}</span>
        </button>
        
        <div className="bg-retro-purple-800/80 px-3 py-2 rounded-lg border border-retro-purple-700">
          <LanguageSwitcher />
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-retro-purple-800 border border-retro-purple-700 rounded-md shadow-lg p-2 sm:hidden">
          <Link 
            to="/" 
            className="block font-pixel-text text-retro-purple-200 hover:text-retro-accent px-3 py-2 rounded transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span>{translate('nav.home')}</span>
            </div>
          </Link>
          <Link 
            to="/learn-about-habits" 
            className="block font-pixel-text text-retro-purple-200 hover:text-retro-accent px-3 py-2 rounded transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>{translate('nav.habits')}</span>
            </div>
          </Link>
          <Link 
            to="/blog" 
            className="block font-pixel-text text-retro-purple-200 hover:text-retro-accent px-3 py-2 rounded transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>{translate('nav.blog')}</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HeaderNavigation;
