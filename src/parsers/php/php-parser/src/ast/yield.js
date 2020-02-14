 
"use strict";

var Expression = require('./expression');
var KIND = 'yield';

/**
 * Defines a yield generator statement
 * @constructor Yield
 * @extends {Expression}
 * @property {Expression|Null} value
 * @property {Expression|Null} key
 * @see http://php.net/manual/en/language.generators.syntax.php
 */
var Yield = Expression.extends(function Yield(value, key, location) {
  Expression.apply(this, [KIND, location]);
  this.value = value;
  this.key = key;
});

module.exports = Yield;
