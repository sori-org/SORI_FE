// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['msw', '@mswjs/interceptors'], // msw + interceptors 둘 다
  },
});


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
//
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/naver-api': {
//         target: 'https://openapi.naver.com',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/naver-api/, ''),
//       },
//     },
//   },
// });
