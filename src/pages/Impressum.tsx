
import React from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';

const Impressum: React.FC = () => {
  const { translate, language } = useLanguage();
  
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
          {translate('footer.impressum')}
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
          <h3 className="font-pixel-text text-xl mb-4 text-center">{language === 'en' ? 'Legal Information' : 'Impressum'}</h3>
          
          <div className="font-pixel-text text-base space-y-4">
            {language === 'en' ? (
              // English version
              <>
                <p>
                  <strong>Company:</strong><br />
                  Dranoel UG (limited liability)<br />
                  Rosenleite 16<br />
                  90619 Trautskirchen<br />
                  Germany
                </p>
                
                <p>
                  <strong>Commercial Register:</strong><br />
                  Register Number: 20979<br />
                  Register Court: Fürth
                </p>
                
                <p>
                  <strong>Represented by:</strong><br />
                  Becker Egor
                </p>
                
                <p>
                  <strong>Contact:</strong><br />
                  Phone: +4915203101898<br />
                  Email: info@dranoelug.de
                </p>
                
                <p>
                  <strong>VAT Identification Number:</strong><br />
                  VAT ID according to § 27a of the German VAT Act: 203/124/80663
                </p>
                
                <p>
                  <strong>Editorially responsible:</strong><br />
                  Becker Egor
                </p>
                
                <p>
                  <strong>EU Dispute Resolution:</strong><br />
                  The European Commission provides a platform for online dispute resolution (OS): https://ec.europa.eu/consumers/odr/. You can find our email address in the impressum above.
                </p>
                
                <p>
                  <strong>Consumer Dispute Resolution / Universal Arbitration Board:</strong><br />
                  We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                </p>
                
                <p>
                  <strong>Source:</strong> https://www.e-recht24.de
                </p>
              </>
            ) : (
              // German version
              <>
                <p>
                  <strong>Unternehmen:</strong><br />
                  Dranoel UG (haftungsbeschränkt)<br />
                  Rosenleite 16<br />
                  90619 Trautskirchen
                </p>
                
                <p>
                  <strong>Handelsregister:</strong><br />
                  Registernummer: 20979<br />
                  Registergericht: Fürth
                </p>
                
                <p>
                  <strong>Vertreten durch:</strong><br />
                  Becker Egor
                </p>
                
                <p>
                  <strong>Kontakt:</strong><br />
                  Telefon: +4915203101898<br />
                  E-Mail: info@dranoelug.de
                </p>
                
                <p>
                  <strong>Umsatzsteuer-ID:</strong><br />
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: 203/124/80663
                </p>
                
                <p>
                  <strong>Redaktionell verantwortlich:</strong><br />
                  Becker Egor
                </p>
                
                <p>
                  <strong>EU-Streitschlichtung:</strong><br />
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
                
                <p>
                  <strong>Verbraucherstreitbeilegung/Universalschlichtungsstelle:</strong><br />
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
                
                <p>
                  <strong>Quelle:</strong> https://www.e-recht24.de
                </p>
              </>
            )}
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

export default Impressum;
