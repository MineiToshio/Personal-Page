import removeHtml from './removeHtml';
import shortenText from './shortenText';

const formatHtml = (html: string, charLength: number) => {
  const textWithoutHtml = removeHtml(html);
  const shortText = shortenText(textWithoutHtml, charLength);
  console.log(shortText, 'shortText');
  return shortText;
};

export default formatHtml;
