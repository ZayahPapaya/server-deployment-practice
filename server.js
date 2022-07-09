'use strict';
const express = require('express');
const stamper = require('./middleware/stamper.js');
const notFoundHandler = require('./handlers/codes/404.js');
const evenodd = require('./handlers/evenodd.js');
const bad = require('./handlers/bad');
const errorHandler = require('./handlers/codes/500.js');
const hello = (req, res) => {
  res.status(200).send('Hello, World');
};
const data = (req, res) => {
  res.status(200).send({
    name: 'Zayah',
    role: 'Student'
  });
};
const app = expreess();
app.get('/', hello);
app.get('/data', data);

function start(port) {
  app.listen(port, () => console.log(`Server up on port ${port}`));
}
module.exports = {
  app,
  start,
};