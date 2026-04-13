import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// i18n must be imported before App so translations are ready on first render
import './i18n';
import App from './App.tsx';

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
