 
"use strict";
var Node = require('./node');
var KIND = 'return';

/**
 * A continue statement
 * @constructor Return
 * @extends {Node}
 * @property {Expression|null} expr
 */
var Return = Node.extends(function Return(expr, location) {
  Node.apply(this, [KIND, location]);
  this.expr = expr;
});

module.exports = Return;
