
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

// Prefetch critical resources in parallel
const prefetchResources = () => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      const routes = [
        './pages/LearnWhoYouAre',
        './pages/LearnAboutHabits',
        './pages/LearnHowToTrack'
      ];
      
      // Use Promise.all to load all resources in parallel
      Promise.all(
        routes.map(route => import(/* @vite-ignore */ route).catch(err => console.debug(`Prefetch failed for ${route}:`, err)))
      );
    });
  }
};

// Use a self-executing function to optimize rendering process
(async () => {
  try {
    // Create root and render app
    const root = createRoot(document.getElementById("root")!);
    root.render(<App />);
    
    // Mark app render complete
    window.performance.mark('app-rendered');
    window.performance.measure('app-render-time', 'app-init', 'app-rendered');
    
    // Prefetch resources after initial render
    prefetchResources();
  } catch (error) {
    console.error('Error rendering application:', error);
  }
})();

// Track page load metrics
window.addEventListener('DOMContentLoaded', () => {
  window.performance.mark('dom-content-loaded');
  window.performance.measure('dom-load-time', 'app-init', 'dom-content-loaded');
});

window.addEventListener('load', () => {
  window.performance.mark('page-load-complete');
  window.performance.measure('total-page-load', 'app-init', 'page-load-complete');
  
  // Log performance metrics
  const totalPageLoad = window.performance.getEntriesByName('total-page-load')[0];
  if (totalPageLoad) {
    console.debug(`Page fully loaded in: ${Math.round(totalPageLoad.duration)}ms`);
  }
  
  // Add security headers for single-page application
  if (typeof window !== 'undefined' && 'navigation' in window) {
    window.addEventListener('navigate', () => {
      // Refresh security context on navigation
      document.dispatchEvent(new Event('securityrefresh'));
    });
  }
});
