export default function arrayToString(arr) {
  if(arr)
    return arr.toString().replace(/,/g, " / ");
  else 
    return null;
};