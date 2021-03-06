

var Node = require('./node');
var KIND = 'traituse';

/**
 * Defines a trait usage
 * @constructor TraitUse
 * @extends {Node}
 * @property {Identifier[]} traits
 * @property {Node[]|null} adaptations
 */
var TraitUse = Node.extends(function TraitUse(traits, adaptations, location) {
  Node.apply(this, [KIND, location]);
  this.traits = traits;
  this.adaptations = adaptations;
});

module.exports = TraitUse;
