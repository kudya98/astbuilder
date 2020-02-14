 

var Sys = require('./sys');
var KIND = 'unset';

/**
 * Deletes references to a list of variables
 * @constructor Unset
 * @extends {Sys}
 */
var Unset = Sys.extends(function Unset(args, location) {
  Sys.apply(this, [KIND, args, location]);
});

module.exports = Unset;
