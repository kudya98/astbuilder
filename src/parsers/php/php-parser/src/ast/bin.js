
"use strict";

var Operation = require('./operation');
var KIND = 'bin';
/**
 * Binary operations
 * @constructor Bin
 * @extends {Operation}
 * @property {String} type
 * @property {Expression} left
 * @property {Expression} right
 */
var Bin = Operation.extends(function Bin(type, left, right, location) {
  Operation.apply(this, [KIND, location]);
  this.type = type;
  this.left = left;
  this.right = right;
});

module.exports = Bin;
