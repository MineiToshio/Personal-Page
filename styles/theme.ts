const theme = Object.freeze({
  color: {
    main: '#1abc9c',
    secondary: '#26408b',
    dark: '#272727',
    danger: '#ff6868',
    muted: '#828282',
    border: '#cccccc',
    white: '#ffffff',
    black: '#000000',
  },
  font: {
    family: {
      default: 'Open Sans, sans-serif',
      title: 'BebasNeue, sans- serif',
      logo: 'playlist script, sans- serif',
      elegant: 'Heldane',
      blog: 'Charter',
    },
    size: {
      tiny: {
        xs: '12px',
      },
      small: {
        xs: '14px',
      },
      hero: {
        xs: '40px',
        sm: '50px',
        md: '60px',
        lg: '80px',
        xl: '100px',
      },
      heroSubtitle: {
        xs: '20px',
        sm: '30px',
        md: '30px',
        lg: '38px',
        xl: '44px',
      },
      title: {
        xs: '40px',
        md: '48px',
        lg: '56px',
      },
      subtitle: {
        xs: '20px',
        lg: '22px',
      },
      body: {
        xs: '18px',
      },
    },
    weight: {
      normal: 400,
      semibold: 500,
      bold: 600,
      bolder: 700,
    },
  },
  lineHeight: {
    none: 1,
    small: 1.4,
    normal: 2,
  },
  breakpoint: {
    xs: '(max-width: 640px)',
    sm: '(min-width: 641px) and (max-width: 767px)',
    md: '(min-width: 768px) and (max-width: 1023px)',
    lg: '(min-width: 1024px) and (max-width: 1399px)',
    xl: '(min-width: 1400px) and (max-width: 2047px)',
    xxl: '(min-width: 2048px)',
    xsUp: '(min-width: 0)',
    smUp: '(min-width: 641px)',
    mdUp: '(min-width: 768px)',
    lgUp: '(min-width: 1024px)',
    xlUp: '(min-width: 1400px)',
    xxlUp: '(min-width: 2048px)',
  },
});

export const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;

export type Color = keyof typeof theme.color;
export type FontFamily = keyof typeof theme.font.family;
export type FontSize = keyof typeof theme.font.size;
export type FontWeight = keyof typeof theme.font.weight;
export type LineHeight = keyof typeof theme.lineHeight;
export type Breakpoint = typeof breakpoints[number];
export type Align = 'right' | 'left' | 'center';

export default theme;
