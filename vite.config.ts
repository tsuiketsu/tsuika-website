import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  server: { port: 4321 },
  plugins: [tailwindcss(), sveltekit()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
