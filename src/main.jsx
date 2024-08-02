import ReactDOM from 'react-dom/client';

import { seedLocalDatabase } from '@/api/data/seed';
import ThemeProvider from '@/components/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from './state/store';
import Router from './Router';
import './index.css';
import AuthProvider from './contexts/AuthProvider';

seedLocalDatabase();

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Provider store={store}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </Provider>
  </ThemeProvider>,
);
