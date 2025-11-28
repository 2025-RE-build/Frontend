import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from "../src/styles/GlobalStyles.ts";
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
)
