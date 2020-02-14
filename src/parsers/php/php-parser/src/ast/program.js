 

var Block = require('./block');
var KIND = 'program';

/**
 * The main program node
 * @constructor Program
 * @extends {Block}
 * @property {Error[]} errors
 */
var Program = Block.extends(function Program(children, errors, location) {
  Block.apply(this, [KIND, children, location]);
  this.errors = errors;
});

module.exports = Program;
