import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@jopau-react/utils': path.resolve(__dirname, '../utils/src'),
      '@jopau-react/utils/*': path.resolve(__dirname, '../utils/src/*'),
      '@jopau-react/hooks/*': path.resolve(__dirname, '../hooks/src/*')
    }
  }
});
