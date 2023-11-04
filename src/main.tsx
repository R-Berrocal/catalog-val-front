import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';

import App from './components/app/routes';
import './index.css';
import QueryProvider from './shared/components/providers/react-query';
import { Fallback } from './shared/components/templates/fallback';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <ErrorBoundary FallbackComponent={Fallback}>
        <App />
      </ErrorBoundary>
      <Toaster />
    </QueryProvider>
  </React.StrictMode>
);
