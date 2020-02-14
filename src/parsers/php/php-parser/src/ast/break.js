 
"use strict";
var Node = require('./node');
var KIND = 'break';

/**
 * A break statement
 * @constructor Break
 * @extends {Node}
 * @property {Number|Null} level
 */
var Break = Node.extends(function Break(level, location) {
  Node.apply(this, [KIND, location]);
  this.level = level;
});

module.exports = Break;
