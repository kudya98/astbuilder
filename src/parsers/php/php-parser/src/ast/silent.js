 
"use strict";

var Statement = require('./statement');
var KIND = 'silent';

/**
 * Avoids to show/log warnings & notices from the inner expression
 * @constructor Silent
 * @extends {Statement}
 * @property {Expression} expr
 */
var Silent = Statement.extends(function Silent(expr, location) {
  Statement.apply(this, [KIND, location]);
  this.expr = expr;
});

module.exports = Silent;
