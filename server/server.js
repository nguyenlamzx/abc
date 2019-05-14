/* eslint-disable no-console, no-use-before-define */

import fs from 'fs'
import path from 'path'
import express from 'express'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
// import webpackConfig from 'react-scripts/config/webpack.config'
import webpackConfig from '../webpack.config'

import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import App from '../src/App';

const app = new express()
const port = 3000

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

// This is fired every time the server side receives a request
app.get('/', (req, res) => {
  const app = renderToStaticMarkup(<App />);

  const indexFile = path.resolve('./public/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', /* html */`
        <div id="root">${app}</div>
        <script src="/bundle.js" type="text/javascript"></script>
      `)
    );
  });
});

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
