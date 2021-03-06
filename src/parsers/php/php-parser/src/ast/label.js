
"use strict";
var Node = require('./node');
var KIND = 'label';

/**
 * A label statement (referenced by goto)
 * @constructor Label
 * @extends {Node}
 * @property {String} name
 */
var Label = Node.extends(function Label(name, location) {
  Node.apply(this, [KIND, location]);
  this.name = name;
});

module.exports = Label;
