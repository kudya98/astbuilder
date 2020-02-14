 

/**
 * A generic AST node
 * @constructor Node
 * @property {Location|null} loc
 * @property {String} kind
 */
var Node = function Node(kind, location) {
  this.kind = kind;
  if(location) {
    this.loc = location;
  }
};

/**
 * Helper for extending the Node class
 * @param {Function} constructor
 * @return {Function}
 */
Node.extends = function(constructor) {
  constructor.prototype = Object.create(this.prototype);
  constructor.extends = this.extends;
  constructor.prototype.constructor = constructor;
  return constructor;
};

module.exports = Node;
