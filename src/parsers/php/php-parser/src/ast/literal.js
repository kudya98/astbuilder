 

var Expr = require('./expression');
var KIND = 'literal';

/**
 * Defines an array structure
 * @constructor Literal
 * @extends {Expression}
 * @property {Node|string|number|boolean|null} value
 */
var Literal = Expr.extends(function Literal(kind, value, location) {
  Expr.apply(this, [kind || KIND, location]);
  this.value = value;
});

module.exports = Literal;
