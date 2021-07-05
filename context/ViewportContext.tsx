import React from 'react';
import theme from '@/styles/theme';
import useMediaQuery from '@/hooks/useMediaQuery';
import type { Breakpoint } from '@/styles/theme';

type Breakpoints = {
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  isXxl: boolean;
  active: Breakpoint;
};

type ContextProps = {
  breakpoints: Breakpoints;
};

type ViewportProviderProps = {
  children: React.ReactNode | Array<React.ReactNode>;
};

export const ViewportContext = React.createContext<ContextProps>({
  breakpoints: {
    isXs: true,
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    isXxl: false,
    active: 'xs',
  },
});

const ViewportProvider = ({ children }: ViewportProviderProps) => {
  const breakpoints: Breakpoints = {
    isXs: useMediaQuery(theme.breakpoint.xs),
    isSm: useMediaQuery(theme.breakpoint.sm),
    isMd: useMediaQuery(theme.breakpoint.md),
    isLg: useMediaQuery(theme.breakpoint.lg),
    isXl: useMediaQuery(theme.breakpoint.xl),
    isXxl: useMediaQuery(theme.breakpoint.xxl),
    active: 'xs',
  };
  if (breakpoints.isXs) breakpoints.active = 'xs';
  if (breakpoints.isSm) breakpoints.active = 'sm';
  if (breakpoints.isMd) breakpoints.active = 'md';
  if (breakpoints.isLg) breakpoints.active = 'lg';
  if (breakpoints.isXl) breakpoints.active = 'xl';
  if (breakpoints.isXxl) breakpoints.active = 'xxl';

  return <ViewportContext.Provider value={{ breakpoints }}>{children}</ViewportContext.Provider>;
};

export default ViewportProvider;
