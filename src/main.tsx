
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// Register performance markers
if (typeof window !== 'undefined' && 'performance' in window) {
  window.performance.mark('app-init');
  
  // Add performance observer to track long tasks
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log long tasks (tasks that block the main thread for more than 50ms)
          if (entry.duration > 50) {
            console.debug('Long task detected:', entry);
          }
        }
      });
      
      observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      console.debug('PerformanceObserver for longtask not supported');
    }
  }
}

// Prefetch critical components and resources when idle
const prefetchResources = () => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      // Prefetch important routes
      import('./pages/LearnWhoYouAre');
      import('./pages/LearnAboutHabits');
      import('./pages/LearnHowToTrack');
    });
  }
};

// Directly render the App component with all its providers
createRoot(document.getElementById("root")!).render(<App />);

// Mark app render complete
if (typeof window !== 'undefined' && 'performance' in window) {
  window.performance.mark('app-rendered');
  window.performance.measure('app-render-time', 'app-init', 'app-rendered');
  
  // Prefetch other resources after initial render
  prefetchResources();
}

// Register additional performance marks
window.addEventListener('DOMContentLoaded', () => {
  window.performance.mark('dom-content-loaded');
  window.performance.measure('dom-load-time', 'app-init', 'dom-content-loaded');
});

// Track when the page is fully loaded
window.addEventListener('load', () => {
  window.performance.mark('page-load-complete');
  window.performance.measure('total-page-load', 'app-init', 'page-load-complete');
  
  // Log performance metrics
  const totalPageLoad = window.performance.getEntriesByName('total-page-load')[0];
  if (totalPageLoad) {
    console.debug(`Page fully loaded in: ${Math.round(totalPageLoad.duration)}ms`);
  }
});
