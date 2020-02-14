 

var fn = require('./function');
var KIND = 'method';

/**
 * Defines a class/interface/trait method
 * @constructor Method
 * @extends {Function}
 * @property {boolean} isAbstract
 * @property {boolean} isFinal
 * @property {boolean} isStatic
 * @property {string} visibility
 */
var Method = fn.extends(function Method() {
  fn.apply(this, arguments);
  this.kind = KIND;
});

module.exports = Method;
