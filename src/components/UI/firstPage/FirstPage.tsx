import { useRouter } from 'next/router';
import { useEffect } from 'react';

const FirstPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/page/1-50');
  }, [router]);

  return <></>;
};

export default FirstPage;