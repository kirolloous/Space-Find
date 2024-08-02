import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SignInForm from '@/components/SignInForm/SignInForm';
import { useAuth } from '@/contexts/AuthProvider';

const SignInPage = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/', { replace: true });
    }
  }, [navigate, token]);

  return (
    <div className='container flex h-screen items-center justify-center py-4'>
      <SignInForm />
    </div>
  );
};

export default SignInPage;