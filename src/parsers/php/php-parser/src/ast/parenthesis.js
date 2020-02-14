 
"use strict";

var Operation = require('./operation');
var KIND = 'parenthesis';

/**
 * Parenthesis encapsulation `(... expr ...)`
 * @constructor Parenthesis
 * @extends {Operation}
 * @property {Expression} inner
 */
var Parenthesis = Operation.extends(function Parenthesis(inner, location) {
  Operation.apply(this, [KIND, location]);
  this.inner = inner;
});

module.exports = Parenthesis;
