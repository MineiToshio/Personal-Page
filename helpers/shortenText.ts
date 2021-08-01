// eslint-disable-next-line no-useless-escape
const shortenText = (text: string, charLength: number) => {
  const trimmedString = text.substr(0, charLength);
  return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')));
};

export default shortenText;
