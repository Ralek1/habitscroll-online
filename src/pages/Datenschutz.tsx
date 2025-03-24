
import React from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';

const Datenschutz: React.FC = () => {
  const { translate } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
      
      <div className="text-center mb-8 animate-appear flex flex-col items-center">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">PURPLE HABIT SCROLLS</h1>
        </div>
        <h2 className="font-pixel text-xl text-retro-purple-200 leading-relaxed text-center">
          {translate('footer.datenschutz')}
        </h2>
        <div className="mt-2">
          <Link to="/?showHabit=true">
            <PixelButton onClick={() => {}}>
              {translate('button.home')}
            </PixelButton>
          </Link>
        </div>
      </div>
      
      <div className="w-full max-w-2xl flex flex-col items-center">
        <div className="mb-8 text-left w-full p-6 scroll-paper rounded-lg">
          <h3 className="font-pixel-text text-xl mb-4 text-center">Privacy Policy</h3>
          
          <div className="font-pixel-text text-base space-y-4">
            <p>
              <strong>Data Protection Officer:</strong><br />
              John Smith<br />
              Example Privacy Street 123<br />
              12345 City<br />
              Country<br />
              Email: privacy@example.com
            </p>
            
            <h4 className="text-lg font-bold mt-6 mb-2">1. Data Collection</h4>
            <p>
              We collect the following data when you visit our website:
              IP address, browser type, referring website, date and time of access.
              This data is used to improve our services and ensure the security of our website.
            </p>
            
            <h4 className="text-lg font-bold mt-6 mb-2">2. Cookies</h4>
            <p>
              Our website uses cookies to enhance your browsing experience. You can
              disable cookies in your browser settings, but this may affect the functionality
              of our website.
            </p>
            
            <h4 className="text-lg font-bold mt-6 mb-2">3. Your Rights</h4>
            <p>
              You have the right to request information about your stored personal data, 
              its origin, recipients, and the purpose of its collection. You also have the 
              right to request that it be corrected, blocked, or deleted.
            </p>
            
            <h4 className="text-lg font-bold mt-6 mb-2">4. Contact</h4>
            <p>
              If you have any questions about data protection, please contact us using
              the details provided above.
            </p>
          </div>
        </div>
        
        <Link to="/?showHabit=true">
          <PixelButton onClick={() => {}}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            {translate('button.backToHome')}
          </PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default Datenschutz;
