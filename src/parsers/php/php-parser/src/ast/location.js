 

/**
 * Defines the location of the node (with it's source contents as string)
 * @constructor Location
 * @property {String|null} source
 * @property {Position} start
 * @property {Position} end
 */
var Location = function(source, start, end) {
  this.source = source;
  this.start = start;
  this.end = end;
};

module.exports = Location;
