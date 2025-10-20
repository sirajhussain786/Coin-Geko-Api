
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'; // Import from TanStack
import { BrowserRouter } from 'react-router-dom';

// Step 1: Create a QueryClient instance
const queryClient = new QueryClient();

// Step 2: Wrap <App /> with <QueryClientProvider>
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
  
);
