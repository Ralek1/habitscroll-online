
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import PixelButton from "../components/PixelButton";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { translate } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-retro-purple-900">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
      
      <div className="text-center mb-8 animate-appear">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">PURPLE HABIT SCROLLS</h1>
        </div>
        <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed">
          404 <br /> 
          <span className="text-retro-accent">{translate('page.notFound')}</span>
        </h2>
      </div>

      <div className="text-center text-retro-purple-200 mb-8 font-pixel-text">
        {translate('page.notFound.text')}
      </div>
      
      <Link to="/">
        <PixelButton onClick={() => {}}>
          {translate('button.returnHome')}
        </PixelButton>
      </Link>
    </div>
  );
};

export default NotFound;
