import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/atom-one-dark.css';

import Css from 'highlight.js/lib/languages/css';
import Markdown from 'highlight.js/lib/languages/markdown';
import JavaScript from 'highlight.js/lib/languages/javascript';
import JSON from 'highlight.js/lib/languages/json';
import PlainText from 'highlight.js/lib/languages/plaintext';
import TypeScript from 'highlight.js/lib/languages/typescript';
import XML from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('css', Css);
hljs.registerLanguage('markdown', Markdown);
hljs.registerLanguage('javascript', JavaScript);
hljs.registerLanguage('css', JSON);
hljs.registerLanguage('plaintext', PlainText);
hljs.registerLanguage('typescript', TypeScript);
hljs.registerLanguage('xml', XML);

export default hljs;
