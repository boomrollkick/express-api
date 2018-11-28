'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;

  var api = (0, _express.Router)();
  for (let i=0; i<50; i++) {
    var message = Math.round(Math.random()*50);
    var person = Math.round(Math.random()*20);
  }

  return api;
};
//# sourceMappingURL=index.js.map