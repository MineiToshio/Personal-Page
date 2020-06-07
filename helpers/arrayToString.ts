export default function arrayToString(arr: Array<string>) {
  if (arr) return arr.toString().replace(/,/g, ' / ');
  return null;
}
