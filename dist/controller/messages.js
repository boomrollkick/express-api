'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _lorem = require('../data/lorem.json');

var textdata = _interopRequireWildcard(_lorem);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function () {
  var api = (0, _express.Router)();

  api.get('/', function (req, res) {
    var dataout = JSON.stringify(textdata);
    res.json(textdata);
  });

  return api;
};
//# sourceMappingURL=messages.js.map