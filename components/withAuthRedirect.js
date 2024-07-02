// components/withAuthRedirect.js
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

const withAuthRedirect = (WrappedComponent) => {
  return (props) => {
    const { isSignedIn, isLoaded } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (isLoaded && isSignedIn) {
        router.push('/dashboard');
      }
    }, [isLoaded, isSignedIn, router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuthRedirect;
