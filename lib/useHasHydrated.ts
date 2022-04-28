import { useState, useEffect } from 'react';

const useHasHydrated = (): boolean => {
  const [hasHydrated, setHasHydtrated] = useState(false);

  useEffect(() => {
    setHasHydtrated(true);
  }, []);

  return hasHydrated;
};

export default useHasHydrated;
