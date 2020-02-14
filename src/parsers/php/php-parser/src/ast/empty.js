 

var Sys = require('./sys');
var KIND = 'empty';

/**
 * Defines an empty check call
 * @constructor Empty
 * @extends {Sys}
 */
var Empty = Sys.extends(function Empty(args, location) {
  Sys.apply(this, [KIND, args, location]);
});

module.exports = Empty;
