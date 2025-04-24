import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import HeaderNavigation from '../components/HeaderNavigation';
import SEO from '../components/SEO';


const Roadmap: React.FC = () => {
const { translate, language } = useLanguage();

    <SEO title="Roadmap" description="Roadmap for HabitScroll" />;
  
  const baseKey = 'roadmap'; // Define baseKey with an appropriate value


  

  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="absolute top-4 right-4 z-10">
        <HeaderNavigation />
      </div>

      <div className="text-center mt-2 mb-8 animate-appear flex flex-col items-center">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">Your Habitscroll</h1>
        </div>
        <h2 className="font-pixel text-xl text-green-400 leading-relaxed text-center">
          Roadmap
        </h2>
        <div className="mt-2">
          <Link to="/?showHabit=true">
            <PixelButton onClick={() => {}}>
              {translate('button.home')}
            </PixelButton>
          </Link>
        </div>
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center">
        <div className="mb-8 text-left w-full p-10 scroll-paper rounded-lg">
          <h2 className="mb-8 text-2xl font-bold text-center text-green-400 font-pixel">{translate(`${baseKey}.headline`)}</h2>
          <div className="font-pixel-text text-base space-y-8 max-h-[70vh] overflow-y-auto pr-2">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="/lovable-uploads/chater_1_habit_generator_scrolly_random.png"
                alt="Chapter 1 - Habit Generator"
                className="w-40 h-auto rounded-lg shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold">{translate(`${baseKey}.chapter1.title`)}</h3>
                <h2 className="text-xl ">{translate(`${baseKey}.chapter1.description`)}</h2>
                <h2 className="text-xl ">{translate(`${baseKey}.chapter1.bullets.1`)}</h2>
                <h2 className="text-xl ">{translate(`${baseKey}.chapter1.bullets.2`)}</h2>
                <h2 className="text-xl ">{translate(`${baseKey}.chapter1.bullets.3`)}</h2>
                <h2 className="text-xl ">{translate(`${baseKey}.chapter1.bullets.4`)}</h2>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-6">
              <img
                src="/lovable-uploads/chapter_2_accounts_daily_habit_track_gamifiy.png"
                alt="Chapter 2 - Tracking and Gamification"
                className="w-40 h-auto rounded-lg shadow-md transform scale-x-[-1]"
              />
    
              <div>
                <h3 className="text-xl font-bold">{translate(`${baseKey}.chapter2.title`)}</h3>
                <h2 className="text-xl ">{translate(`${baseKey}.chapter2.description`)}</h2>
                <h2 className="text-xl ">{translate(`${baseKey}.chapter2.bullets.1`)}</h2>
                <h2 className="text-xl ">{translate(`${baseKey}.chapter2.bullets.2`)}</h2>
                <h2 className="text-xl ">{translate(`${baseKey}.chapter2.bullets.3`)}</h2>
                <h2 className="text-xl ">{translate(`${baseKey}.chapter2.bullets.4`)}</h2>
                <h2 className="text-xl ">{translate(`${baseKey}.chapter2.bullets.5`)}</h2>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src="/lovable-uploads/chapter_3_blockchain_habits_nft_ranks_token_mystical.png"
                alt="Chapter 3 - Mystical Fog"
                className="w-40 h-auto rounded-lg shadow-md transform scale-x-[-1]"
              />
             <div>
                <h3 className="text-xl font-bold">{translate(`${baseKey}.chapter3.title`)}</h3>
                <h2 className="text-xl ">{translate(`${baseKey}.chapter3.description`)}</h2>
                <h2 className="text-xl ">{translate(`${baseKey}.chapter3.bullets.1`)}</h2>
                <h2 className="text-xl ">{translate(`${baseKey}.chapter3.bullets.2`)}</h2>
                <h2 className="text-xl ">{translate(`${baseKey}.chapter3.bullets.3`)}</h2>
                <h2 className="text-xl ">{translate(`${baseKey}.chapter3.bullets.4`)}</h2>
                <h2 className="text-xl ">{translate(`${baseKey}.chapter3.bullets.5`)}</h2>
              </div>
            </div>

            <h2 className="italic mt-8 text-retro-purple-400 text-center">{translate(`${baseKey}.footerNote`)}</h2>
             
          </div>
        </div>

        <Link to="/?showHabit=true">
          <PixelButton onClick={() => {}}>
            {translate('button.backToHome')}
          </PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default Roadmap;
