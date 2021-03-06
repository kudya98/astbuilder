
"use strict";
var Expr = require('./expression');
var KIND = 'variadic';

/**
 * Introduce a list of items into the arguments of the call
 * @constructor Variadic
 * @extends {Expression}
 * @property {Array|Expression} what
 * @see https://wiki.php.net/rfc/argument_unpacking
 */
var Variadic = Expr.extends(function Variadic(what, location) {
  Expr.apply(this, [KIND, location]);
  this.what = what;
});

module.exports = Variadic;
