// const next = require('next')
// const routes = require('./routes')
// const app = next({ dev: process.env.NODE_ENV !== 'production' })
// const handler = routes.getRequestHandler(app)
// const port = process.env.PORT || 3000;
// const { join } = require('path')
// const { parse } = require('url')
// const { createServer } = require('http')

// app.prepare().then(() => {
//   createServer((req, res) => {
//     const parsedUrl = parse(req.url, true)
//     const { pathname } = parsedUrl

//     if (pathname === '/service-worker.js') {
//       const filePath = join(__dirname, '.next', pathname)

//       app.serveStatic(req, res, filePath)
//     } else {
//       handler(req, res, parsedUrl)
//     }
//   }).listen(port)
// })

const { join } = require('path');
const express = require('express');
const next = require('next');
const cache = require('lru-cache'); // for using least-recently-used based caching

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const ssrCache = new cache({
  max: 20, // not more than 20 results will be cached
  maxAge: 1000 * 60 * 5, // 5 mins
});

app.prepare().then(() => {
  const server = express();

  server.get('/', (req, res) => {
    renderAndCache(req, res, '/');
  });

  server.get('*', (req, res) => {
    if (req.url.includes('/sw')) {
      const filePath = join(__dirname, 'static', 'workbox', 'sw.js');
      app.serveStatic(req, res, filePath);
    } else if (req.url.startsWith('static/workbox/')) {
      app.serveStatic(req, res, join(__dirname, req.url));
    } else {
      handle(req, res, req.url);
    }
  });

  server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Live @ https://localhost:${PORT}`);
  });
});

async function renderAndCache(req, res, pagePath, queryParams) {
  const key = req.url;

  // if page is in cache, server from cache
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    return;
  }

  try {
    // if not in cache, render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams);

    // if something wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    ssrCache.set(key, html);

    res.setHeader('x-cache', 'MISS');
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
}
