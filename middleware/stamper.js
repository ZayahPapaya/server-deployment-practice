'use strict';
// attributed to David Souther's github demo
module.exports = (req, res, next) => {
  req.timestamp = new Date();
  next();
}