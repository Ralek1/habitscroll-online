
import React from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import { ArrowLeft } from 'lucide-react';

const Impressum: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="text-center mb-8 animate-appear">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">PURPLE HABIT SCROLLS</h1>
        </div>
        <h2 className="font-pixel text-xl text-retro-purple-200 leading-relaxed">
          Impressum
        </h2>
      </div>
      
      <div className="w-full max-w-2xl flex flex-col items-center">
        <div className="mb-8 text-left w-full p-6 scroll-paper rounded-lg">
          <h3 className="font-pixel-text text-xl mb-4 text-center">Legal Information</h3>
          
          <div className="font-pixel-text text-base space-y-4">
            <p>
              <strong>Responsible for content:</strong><br />
              Purple Habit Scrolls<br />
              Example Street 123<br />
              12345 City<br />
              Country
            </p>
            
            <p>
              <strong>Contact:</strong><br />
              Email: contact@example.com<br />
              Phone: +1 234 567 890
            </p>
            
            <p>
              <strong>Represented by:</strong><br />
              John Doe
            </p>
            
            <p>
              <strong>Commercial Register:</strong><br />
              Register Court: Example Court<br />
              Registration Number: 12345
            </p>
            
            <p>
              <strong>VAT Identification Number:</strong><br />
              DE123456789
            </p>
          </div>
        </div>
        
        <Link to="/">
          <PixelButton onClick={() => {}}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default Impressum;
