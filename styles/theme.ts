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
      small: '12px',
      title: '56px',
      subtitle: '24px',
      body: '16px',
    },
    weight: {
      normal: 400,
      semibold: 500,
      bold: 600,
      bolder: 700,
    },
  },
  lineHeight: {
    none: 0,
    small: 1.4,
    normal: 2,
  },
});

export type Color = keyof typeof theme.color;
export type FontSize = keyof typeof theme.font.size;
export type FontWeight = keyof typeof theme.font.weight;
export type LineHeight = keyof typeof theme.lineHeight;

export default theme;
