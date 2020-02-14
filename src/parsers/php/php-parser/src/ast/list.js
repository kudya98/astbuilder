

var Sys = require('./sys');
var KIND = 'list';

/**
 * Defines list assignment
 * @constructor List
 * @extends {Sys}
 */
var List = Sys.extends(function List(args, location) {
  Sys.apply(this, [KIND, args, location]);
});

module.exports = List;
