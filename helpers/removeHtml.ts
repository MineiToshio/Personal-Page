import { convert } from 'html-to-text';

const removeHtml = (html: string) => {
  const doc = convert(html, {
    selectors: [{ selector: 'img', format: 'skip' }],
  });
  return doc;
};

export default removeHtml;
