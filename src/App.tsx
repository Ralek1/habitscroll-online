
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import LearnWhoYouAre from './pages/LearnWhoYouAre';
import LearnAboutHabits from './pages/LearnAboutHabits';
import LearnHowToTrack from './pages/LearnHowToTrack';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import NotFound from './pages/NotFound';
import DownloadablePNGs from './components/DownloadablePNGs';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/learn-who-you-are" element={<LearnWhoYouAre />} />
        <Route path="/learn-about-habits" element={<LearnAboutHabits />} />
        <Route path="/learn-how-to-track" element={<LearnHowToTrack />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/download-pngs" element={<DownloadablePNGs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
