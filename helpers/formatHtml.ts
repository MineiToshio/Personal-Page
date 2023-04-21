import removeHtml from './removeHtml';
import shortenText from './shortenText';

const formatHtml = (html: string, charLength: number) => {
  const textWithoutHtml = removeHtml(html);
  const shortText = shortenText(textWithoutHtml, charLength);
  return shortText;
};

export default formatHtml;
