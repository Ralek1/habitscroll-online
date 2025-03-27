
import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

// Import common components
import NotFound from './pages/NotFound';

// Lazy-load page components
const Index = lazy(() => import('./pages/Index'));
const LearnWhoYouAre = lazy(() => import('./pages/LearnWhoYouAre'));
const LearnAboutHabits = lazy(() => import('./pages/LearnAboutHabits'));
const LearnHowToTrack = lazy(() => import('./pages/LearnHowToTrack'));
const Impressum = lazy(() => import('./pages/Impressum'));
const Datenschutz = lazy(() => import('./pages/Datenschutz'));
const Deploy = lazy(() => import('./pages/Deploy'));

// Loading component
const PageLoading = () => (
  <div className="flex items-center justify-center min-h-screen bg-retro-dark">
    <div className="text-retro-purple-200 font-pixel text-xl animate-pulse">Loading...</div>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/learn-who-you-are" element={<LearnWhoYouAre />} />
            <Route path="/learn-about-habits" element={<LearnAboutHabits />} />
            <Route path="/learn-how-to-track" element={<LearnHowToTrack />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/deploy" element={<Deploy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </LanguageProvider>
  );
}

export default App;
