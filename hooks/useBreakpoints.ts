import { useContext } from 'react';
import { ViewportContext } from '@/context/ViewportContext';

const useBreakpoints = () => {
  const { breakpoints } = useContext(ViewportContext);
  return breakpoints;
};

export default useBreakpoints;
