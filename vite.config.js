import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';


export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions:{enabled: true}, // vite dev 로 돌려도 PWA 까지 볼 수 있게끔 주는 옵션
      manifest: {
        name: 'Sori',
        short_name: 'sori',
        start_url: "/",
        display: "standalone",
        background_color: '#ffffff', // 예시로 추가
        theme_color: '#ffffff',
        icons:[
            {
          src: "/icon/sori.svg",
          sizes: "128x128",
          type: "image/svg"
        }]
      }
    })
  ],
  optimizeDeps: {
    include: ['msw', '@mswjs/interceptors'],
  },
});

