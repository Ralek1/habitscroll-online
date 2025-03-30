
import React from "react";
import { Link } from "react-router-dom";
import PixelButton from "../components/PixelButton";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

const Deploy: React.FC = () => {
  const { translate } = useLanguage();
  
  React.useEffect(() => {
    document.title = translate('page.deploy.success');
  }, [translate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-retro-purple-900">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
      
      <div className="text-center mb-8 animate-appear">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">{translate('app.title')}</h1>
        </div>
        <h2 className="font-pixel text-2xl text-retro-purple-200 leading-relaxed">
          Build <br /> 
          <span className="text-green-400">{translate('page.deploy.success')}</span>
        </h2>
      </div>

      <div className="text-center text-green-200 mb-8 font-pixel-text">
        {translate('page.deploy.text')}
      </div>
      
      <Link to="/">
        <PixelButton onClick={() => {}}>
          {translate('button.returnHome')}
        </PixelButton>
      </Link>
    </div>
  );
};

export default Deploy;
