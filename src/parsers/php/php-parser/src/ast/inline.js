 

var Literal = require('./literal');
var KIND = 'inline';

/**
 * Defines inline html output (treated as echo output)
 * @constructor Inline
 * @extends {Literal}
 */
var Inline = Literal.extends(function Inline(value, location) {
  Literal.apply(this, [KIND, value, location]);
});

module.exports = Inline;
