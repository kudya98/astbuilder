 

var Sys = require('./sys');
var KIND = 'isset';

/**
 * Defines an isset call
 * @constructor Isset
 * @extends {Sys}
 */
var Isset = Sys.extends(function Isset(args, location) {
  Sys.apply(this, [KIND, args, location]);
});

module.exports = Isset;
