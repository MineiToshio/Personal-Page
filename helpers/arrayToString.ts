const arrayToString = (arr: Array<string>) => {
  if (arr) return arr.toString().replace(/,/g, ' / ');
  return null;
};

export default arrayToString;
