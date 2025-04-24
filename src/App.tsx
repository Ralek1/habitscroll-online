import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from './components/ui/toaster';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

// Import common components
import NotFound from './pages/NotFound';

// Lazy‑load page components
const Index             = lazy(() => import('./pages/Index'));
const LearnWhoYouAre    = lazy(() => import('./pages/LearnWhoYouAre'));
const LearnAboutHabits  = lazy(() => import('./pages/LearnAboutHabits'));
const LearnHowToTrack   = lazy(() => import('./pages/LearnHowToTrack'));
const Impressum         = lazy(() => import('./pages/Impressum'));
const Datenschutz       = lazy(() => import('./pages/Datenschutz'));
const Deploy            = lazy(() => import('./pages/Deploy'));
const Blog              = lazy(() => import('./pages/Blog'));
const BlogDetail        = lazy(() => import('./pages/BlogDetail')); // Ensure BlogDetail.tsx exists in the ./pages directory
const Roadmap        = lazy(() => import('./pages/Roadmap')); // Ensure BlogDetail.tsx exists in the ./pages directory

// New category pages
const Bookworms         = lazy(() => import('./pages/categories/Bookworms'));
const Audiophiles       = lazy(() => import('./pages/categories/Audiophiles'));
const VisualLearners    = lazy(() => import('./pages/categories/VisualLearners'));
const KnowledgeSeekers  = lazy(() => import('./pages/categories/KnowledgeSeekers'));

// Loading component
const PageLoading = () => (
  <div className="flex items-center justify-center min-h-screen bg-retro-dark">
    <div className="text-retro-purple-200 font-pixel text-xl animate-pulse">
      Loading...
    </div>
  </div>
);

function App() {
  console.log("App component rendering");

  return (
    <HelmetProvider>
      <AuthProvider>
        <LanguageProvider>
          <Router>
            <Suspense fallback={<PageLoading />}>
              <Routes>
                {/* Main pages */}
                <Route path="/" element={<Index />} />

                {/* Learn pages */}
                <Route path="/learn-who-you-are" element={<LearnWhoYouAre />} />
                <Route path="/learn-about-habits" element={<LearnAboutHabits />} />
                <Route path="/learn-how-to-track" element={<LearnHowToTrack />} />

                {/* Legal & deploy */}
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/deploy" element={<Deploy />} />

                {/* Blog listing and detail */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetail />} />

                {/* Category pages */}
                <Route path="/bookworms" element={<Bookworms />} />
                <Route path="/audiophiles" element={<Audiophiles />} />
                <Route path="/visual-learners" element={<VisualLearners />} />
                <Route path="/knowledge-seekers" element={<KnowledgeSeekers />} />
                <Route path="/Roadmap" element={<Roadmap />} />

                {/* 404 fallback */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <Toaster />
          </Router>
        </LanguageProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
