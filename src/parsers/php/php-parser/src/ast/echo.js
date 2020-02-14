 

var Sys = require('./sys');
var KIND = 'echo';

/**
 * Defines system based call
 * @constructor Echo
 * @extends {Sys}
 */
var Echo = Sys.extends(function Echo(args, location) {
  Sys.apply(this, [KIND, args, location]);
});

module.exports = Echo;
