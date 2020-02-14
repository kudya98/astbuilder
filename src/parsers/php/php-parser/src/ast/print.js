

var Sys = require('./sys');
var KIND = 'print';

/**
 * Outputs
 * @constructor Print
 * @extends {Sys}
 */
var Print = Sys.extends(function Print(args, location) {
  Sys.apply(this, [KIND, args, location]);
});

module.exports = Print;
