import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: false
      },
      manifest: {
        name: 'Hospital',
        short_name: 'Hospital',
        theme_color: '#fbfcfe',
        background_color: '#fbfcfe'
      }
    })
  ],
  server: {
    port: 3000
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version)
  }
});
