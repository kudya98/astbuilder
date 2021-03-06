 

var Statement = require('./statement');
var KIND = 'include';

/**
 * Defines system include call
 * @constructor Include
 * @extends {Statement}
 * @property {Node} target
 * @property {boolean} once
 * @property {boolean} require
 */
var Include = Statement.extends(function Include(once, require, target, location) {
  Statement.apply(this, [KIND, location]);
  this.once = once;
  this.require = require;
  this.target = target;
});

module.exports = Include;
