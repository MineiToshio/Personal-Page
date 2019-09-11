const next = require('next')
const routes = require('./routes')
const express = require('express')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)
const port = process.env.PORT || 3000;

expressApp = express()

//start the server
app.prepare().then(() => {
  expressApp.use(handler).listen(port)
})