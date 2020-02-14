 
"use strict";

var Operation = require('./operation');
var KIND = 'cast';

/**
 * Binary operations
 * @constructor Cast
 * @extends {Operation}
 * @property {String} type
 * @property {Expression} what
 */
var Cast = Operation.extends(function Cast(type, what, location) {
  Operation.apply(this, [KIND, location]);
  this.type = type;
  this.what = what;
});

module.exports = Cast;
