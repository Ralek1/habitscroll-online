
import React from "react";
import { Link } from "react-router-dom";
import PixelButton from "../components/PixelButton";
import HeaderNavigation from "../components/HeaderNavigation";
import { useLanguage } from "../context/LanguageContext";

const Blog: React.FC = () => {
  const { translate } = useLanguage();
  
  React.useEffect(() => {
    document.title = translate('page.blog.title');
  }, [translate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="absolute top-4 right-4 z-10">
        <HeaderNavigation />
      </div>
      
      <div className="text-center mb-8 animate-appear">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">{translate('app.title')}</h1>
        </div>
        <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed">
          {translate('page.blog.title')} <br /> 
          <span className="text-green-400">{translate('page.blog.subtitle')}</span>
        </h2>
      </div>

      <div className="text-center text-green-200 mb-8 font-pixel-text max-w-2xl">
        {translate('page.blog.comingSoon')}
      </div>
      
      <Link to="/">
        <PixelButton onClick={() => {}}>
          {translate('button.returnHome')}
        </PixelButton>
      </Link>
    </div>
  );
};

export default Blog;
