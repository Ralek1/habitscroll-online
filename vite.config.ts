
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { ConfigEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => ({
  server: {
    host: "::",
    port: 8080,
    https: undefined, // Use an empty object instead of boolean to match ServerOptions type // deactivateted for now
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "./", // This makes relative paths work on GitHub Pages
  build: {
    outDir: "public", // Output directory for GitHub Pages
    sourcemap: false,
    minify: true,
    cssMinify: true,
    reportCompressedSize: false, // Speeds up build by skipping gzip size calculation
    // Improve chunk splitting strategy
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Group React and related packages
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom') || 
              id.includes('node_modules/react-router-dom')) {
            return 'react-vendor';
          }
          
          // Group UI components and Radix UI
          if (id.includes('@radix-ui') || id.includes('node_modules/sonner')) {
            return 'ui-vendor';
          }
          
          // Group icons 
          if (id.includes('node_modules/lucide-react')) {
            return 'icons';
          }
          
          // Group animations and transitions libraries
          if (id.includes('node_modules/framer-motion') || 
              id.includes('node_modules/tailwindcss-animate')) {
            return 'animations';
          }
          
          // Code splitting for app modules
          if (id.includes('src/pages/') && !id.includes('Index.tsx')) {
            return 'pages';
          }
          
          if (id.includes('src/components/')) {
            return 'components';
          }
        }
      }
    }
  },
  // Add build time optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
    esbuildOptions: {
      target: 'esnext',
    }
  },
  // Improve CSS handling
  css: {
    devSourcemap: false,
  }
}));
