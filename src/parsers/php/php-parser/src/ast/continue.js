 
"use strict";
var Node = require('./node');
var KIND = 'continue';

/**
 * A continue statement
 * @constructor Continue
 * @extends {Node}
 * @property {Number|Null} level
 */
var Continue = Node.extends(function Continue(level, location) {
  Node.apply(this, [KIND, location]);
  this.level = level;
});

module.exports = Continue;
