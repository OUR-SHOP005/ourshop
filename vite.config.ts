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
  base: "/",  // ✅ Use "/" for Vercel deployment
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...cartographerPlugin,
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    fs: {
      allow: ['.']
    }
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),       // ✅ Ensure the output folder is "dist"
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html") // ✅ Explicitly add "index.html"
      }
    }
  },
  preview: {
    port: 4173,
    open: true,
    host: true
  }
});
