 
"use strict";

var Statement = require('./statement');
var KIND = 'call';

/**
 * Executes a call statement
 * @constructor Call
 * @extends {Statement}
 * @property {Identifier|Variable|??} what
 * @property {Arguments[]} arguments
 */
var Call = Statement.extends(function Call(what, args, location) {
  Statement.apply(this, [KIND, location]);
  this.what = what;
  this.arguments = args;
});

module.exports = Call;
