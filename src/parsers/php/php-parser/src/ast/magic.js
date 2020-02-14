

var Literal = require('./literal');
var KIND = 'magic';

/**
 * Defines magic constant
 * @constructor Magic
 * @extends {Literal}
 */
var Magic = Literal.extends(function Magic(value, location) {
  Literal.apply(this, [KIND, value, location]);
});

module.exports = Magic;
