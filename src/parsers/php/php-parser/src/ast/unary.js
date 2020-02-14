
"use strict";

var Operation = require('./operation');
var KIND = 'unary';

/**
 * Unary operations
 * @constructor Unary
 * @extends {Operation}
 * @property {String} type
 * @property {Expression} what
 */
var Unary = Operation.extends(function Unary(type, what, location) {
  Operation.apply(this, [KIND, location]);
  this.type = type;
  this.what = what;
});

module.exports = Unary;
