import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const siteVersion = import.meta.env.VITE_SITE_VERSION || 'original';

async function init() {
  if (siteVersion === 'minimal') {
    await import('./minimal.css');
  } else {
    await import('./index.css');
  }
  createRoot(document.getElementById("root")!).render(<App />);
}

init();
