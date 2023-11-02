import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/routes';
import './index.css';
import QueryProvider from './shared/components/providers/react-query';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>
);
