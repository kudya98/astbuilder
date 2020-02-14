 
"use strict";

var Statement = require('./statement');
var KIND = 'throw';

/**
 * Defines a throw statement
 * @constructor Throw
 * @extends {Statement}
 * @property {Expression} what
 */
var Throw = Statement.extends(function Throw(what, location) {
  Statement.apply(this, [KIND, location]);
  this.what = what;
});

module.exports = Throw;
