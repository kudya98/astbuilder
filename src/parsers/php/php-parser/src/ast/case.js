
"use strict";
var Node = require('./node');
var KIND = 'case';

/**
 * A switch case statement
 * @constructor Case
 * @extends {Node}
 * @property {Expression|null} test - if null, means that the default case
 * @property {Block|null} body
 */
var Case = Node.extends(function Case(test, body, location) {
  Node.apply(this, [KIND, location]);
  this.test = test;
  this.body = body;
});

module.exports = Case;
