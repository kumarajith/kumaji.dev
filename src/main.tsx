import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const siteVersion = import.meta.env.VITE_SITE_VERSION || 'original';

if (siteVersion === 'minimal') {
  import('./minimal.css');
} else {
  import('./index.css');
}

createRoot(document.getElementById("root")!).render(<App />);
