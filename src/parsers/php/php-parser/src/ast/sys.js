

var Statement = require('./statement');
var KIND = 'sys';

/**
 * Defines system based call
 * @constructor Sys
 * @extends {Statement}
 * @property {Node[]} arguments
 */
var Sys = Statement.extends(function Sys(kind, args, location) {
  Statement.apply(this, [kind || KIND, location]);
  this.arguments = args;
});

module.exports = Sys;
