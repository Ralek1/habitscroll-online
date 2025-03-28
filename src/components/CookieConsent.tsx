
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import PixelButton from './PixelButton';
import { X, Cookie } from 'lucide-react';

interface CookieConsentProps {
  onAccept: () => void;
  onClose: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onClose }) => {
  const { translate } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a slight delay for animation purposes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    // Add a small delay to let the animation finish
    setTimeout(() => {
      onAccept();
    }, 300);
  };

  const handleClose = () => {
    setIsVisible(false);
    // Add a small delay to let the animation finish
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="max-w-4xl mx-auto scroll-paper border-4 border-retro-purple-700 p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-shrink-0 bg-retro-purple-700 p-2 rounded-full">
          <Cookie className="w-6 h-6 text-retro-light" />
        </div>
        
        <div className="flex-grow text-left">
          <h3 className="font-pixel text-retro-purple-800 text-lg mb-1">{translate('cookies.title') || 'Cookies & Privacy'}</h3>
          <p className="font-pixel-text text-retro-purple-600 text-sm">
            {translate('cookies.description') || 'This website uses cookies to ensure you get the best retro experience. By using our site, you acknowledge that you have read and understand our Cookie Policy and Privacy Policy.'}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0">
          <PixelButton onClick={handleAccept} className="w-full sm:w-auto">
            {translate('cookies.accept') || 'Accept'}
          </PixelButton>
          <button 
            onClick={handleClose} 
            className="text-retro-purple-600 hover:text-retro-purple-800 font-pixel text-xs p-2 flex items-center justify-center transition-colors"
            aria-label="Close cookie notice"
          >
            <X className="w-4 h-4 mr-1" />
            <span>{translate('cookies.close') || 'Close'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
