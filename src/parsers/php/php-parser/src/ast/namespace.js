 

var Block = require('./block');
var Identifier = require('./identifier');
var KIND = 'namespace';

/**
 * The main program node
 * @constructor Namespace
 * @extends {Block}
 * @property {String} name
 * @property {Boolean} withBrackets
 */
var Namespace = Block.extends(function Namespace(name, children, withBrackets, location) {
  Block.apply(this, [KIND, children, location]);
  this.name = name;
  this.withBrackets = withBrackets || false;
});

module.exports = Namespace;
