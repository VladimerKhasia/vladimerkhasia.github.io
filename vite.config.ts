import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // This must be '/' for your specific repository name
  plugins: [react()],
  // ... rest of your config
});
