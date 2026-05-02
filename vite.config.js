import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
  },
  esbuild: {
    // Allow .tsx files to be processed without type-checking
    jsxInject: undefined,
  },
});
