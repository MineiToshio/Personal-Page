const routes = require('next-routes')

// Name   Page      Pattern
module.exports = routes()
  .add('index')
  .add('blog', '/blog', 'blog')
  .add('post', '/blog/:post', 'post')