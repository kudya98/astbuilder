 

var Node = require('./node');
var KIND = 'statement';

/**
 * Any statement.
 * @constructor Statement
 * @extends {Node}
 */
var Statement = Node.extends(function Statement(kind, location) {
  Node.apply(this, [kind || KIND, location]);
});

module.exports = Statement;
