 

var Statement = require('./statement');
var KIND = 'clone';

/**
 * Defines a clone call
 * @constructor Clone
 * @extends {Statement}
 * @property {Expression} what
 */
var Clone = Statement.extends(function Clone(what, location) {
  Statement.apply(this, [KIND, location]);
  this.what = what;
});

module.exports = Clone;
