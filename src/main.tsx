import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CustomizePage from './components/CustomizePage.tsx'

// Simple routing based on URL path
const renderApp = () => {
  const path = window.location.pathname;
  
  if (path === '/customize') {
    return <CustomizePage />;
  }
  
  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {renderApp()}
  </StrictMode>,
)
