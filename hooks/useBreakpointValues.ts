import useBreakpoints from '@/hooks/useBreakpoints';
import { breakpoints } from '@/styles/theme';
import type { Breakpoint } from '@/styles/theme';
import { PartialRecord } from '@/types/utils';

type BreakpointValues<T> = PartialRecord<Breakpoint, T> & {
  xs: T;
};

const useBreakpointValues = <T>(breakpointValues: BreakpointValues<T>) => {
  const { active } = useBreakpoints();

  const value = breakpointValues[active];

  if (value) return value;

  const index = breakpoints.indexOf(active);

  for (let i = index - 1; i >= 0; i--) {
    const currentValue = breakpointValues[breakpoints[i]];
    if (currentValue) return currentValue;
  }

  return breakpointValues.xs;
};

export default useBreakpointValues;
