
import { createRoot } from 'react-dom/client'
import './index.css'

// Use dynamic import for App to improve initial loading
const renderApp = async () => {
  const { default: App } = await import('./App.tsx')
  createRoot(document.getElementById("root")!).render(<App />);
}

// Initialize app
renderApp();

// Register a performance mark to track initial load
if (typeof window !== 'undefined' && 'performance' in window) {
  window.performance.mark('app-started');
  
  // When content is loaded, mark it for performance measurement
  window.addEventListener('DOMContentLoaded', () => {
    window.performance.mark('dom-content-loaded');
    window.performance.measure('app-load-time', 'app-started', 'dom-content-loaded');
  });
}
