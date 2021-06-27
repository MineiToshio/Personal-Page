const replaceElementInArray = <T>(arr: Array<T>, itemToReplace: T, newItem: T) =>
  arr.map(item => (item === itemToReplace ? newItem : item));

export default replaceElementInArray;
