// eslint-disable-next-line import/prefer-default-export
export const hexToRgba = (hex: string, alpha = 1) => {
  const rgb = hex.match(/\w\w/g);
  if (rgb) {
    const [r, g, b] = rgb.map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  }
  throw new Error('Bad hex format');
};
