import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ziro_butterflies_23/',
  plugins: [
    vue(),
    VitePWA({
      outDir: 'dist/',
      injectRegister: 'auto',
      registerType: 'auto',
      devOptions: {
          enabled: true
      },
      manifest: {
        name: 'Butterflies of Ziro',
        short_name: 'ZiroButterflies',
        description: 'A field guide for butterflies in Ziro Arunachal Pradesh',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        start_url: './',
        scope: "./",
        display: 'standalone',
        icons: [
          {
            "src": "assets/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "assets/icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "assets/icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "assets/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "assets/icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "assets/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "assets/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "assets/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable any"
          }
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,gif,svg}', 'assets/photos/**/*.*'],
      },
    }),
  ],
})