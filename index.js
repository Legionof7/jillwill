const path = require('path');
const express = require('express');
const compression = require('compression');
const serveFavicon = require('serve-favicon');
const serveStatic = require('serve-static');
const logger = require('morgan');
const errorHandler = require('errorhandler');

const app = express();

app.use(compression());
app.use(serveFavicon(path.resolve(__dirname, './public/favicon.ico')));
app.use(logger('dev'));
app.use(serveStatic(path.resolve(__dirname, './public')));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
