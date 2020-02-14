 

var Statement = require('./statement');
var KIND = 'exit';

/**
 * Defines an exit / die call
 * @constructor Exit
 * @extends {Statement}
 * @property {Node|null} status
 */
var Exit = Statement.extends(function Exit(status, location) {
  Statement.apply(this, [KIND, location]);
  this.status = status;
});

module.exports = Exit;
