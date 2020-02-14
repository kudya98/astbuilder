 
"use strict";

var Statement = require('./statement');
var KIND = 'halt';

/**
 * Halts the compiler execution
 * @constructor Halt
 * @extends {Statement}
 * @property {String} after - String after the halt statement
 * @see http://php.net/manual/en/function.halt-compiler.php
 */
var Halt = Statement.extends(function Halt(after, location) {
  Statement.apply(this, [KIND, location]);
  this.after = after;
});

module.exports = Halt;
