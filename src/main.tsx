import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PortfolioApp } from './PortfolioApp.tsx'
import "./styles/globals.css";
import "./styles/typography.css";
import "./styles/animations.css";
import "./styles/components.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioApp />
  </StrictMode>,
)
