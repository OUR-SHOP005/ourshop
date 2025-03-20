import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for Vercel SPA deployment
export default defineConfig({
  plugins: [react()],
  base: './',                // Ensure relative base path
  build: {
    outDir: 'dist',          // Vercel output directory
    emptyOutDir: true,       // Clean the dist folder on build
  },
  server: {
    host: true,               // Enable local network access
    port: 3000,               // Optional: Local dev server port
  },
  preview: {
    port: 4173,               // Preview server port
  },
  resolve: {
    alias: {
      '@': '/src'             // Optional alias for cleaner imports
    }
  },
  // Handle SPA fallback directly in Vite
  esbuild: {
    drop: ['console', 'debugger']  // Optimize production build
  },
  optimizeDeps: {
    include: ['react', 'react-dom']  // Ensure dependencies are pre-bundled
  }
});




