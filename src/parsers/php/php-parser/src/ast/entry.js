 

var Node = require('./node');
var KIND = 'entry';

/**
 * An array entry - see [Array](#array)
 * @constructor Entry
 * @extends {Node}
 * @property {Node|null} key The entry key/offset
 * @property {Node} value The entry value
 */
var Entry = Node.extends(function Entry(key, value, location) {
  Node.apply(this, [KIND, location]);
  this.key = key;
  this.value = value;
});

module.exports = Entry;
