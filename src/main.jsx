import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
//
// // MSW 워커 시작 (개발 모드에서만)
// if (import.meta.env.DEV) {
//     const { worker } = await import('./apis/mock/browser');
//     await worker.start({
//         serviceWorker: {
//             url: '/mockServiceWorker.js',
//         },
//     });
// }


createRoot(document.getElementById('root')).render(
    <App />
);
