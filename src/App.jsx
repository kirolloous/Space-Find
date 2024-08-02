import { Outlet } from 'react-router-dom';

import Navbar from '@/components/NavBar/Navbar';
import { useAuth } from './contexts/AuthProvider';

const App = () => {
  const { token } = useAuth();
  return (
    <>
      <div>
        {token && <Navbar />}
        <Outlet />
      </div>
    </>
  );
};

export default App;
