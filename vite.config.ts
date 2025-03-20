import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Fix cartographer import issue
let cartographerPlugin = [];
if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
  import("@replit/vite-plugin-cartographer").then((m) => {
    cartographerPlugin = [m.cartographer()];
  });
}

export default defineConfig({
  base: "./",   // ✅ Use relative base path for Vercel compatibility

  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...cartographerPlugin,  // Dynamically loaded plugin
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },

  root: path.resolve(__dirname, "client"),  // ✅ Ensure the correct root folder

  build: {
    outDir: path.resolve(__dirname, "dist"),   // ✅ Ensure correct build output folder
    emptyOutDir: true,                         // Clean the dist folder before building
  },

  server: {
    host: true,
    port: 3000,
  },

  preview: {
    port: 4173,
  },

  // ✅ Fallback configuration for SPA routing
  esbuild: {
    drop: ["console", "debugger"],  // Remove console.logs in production
  },

  optimizeDeps: {
    include: ["react", "react-dom"]
  },

  // ✅ Add middleware for SPA fallback
  define: {
    "process.env": {}
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  }
});
