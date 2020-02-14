 
"use strict";

var Statement = require('./statement');
var KIND = 'try';

/**
 * Defines a try statement
 * @constructor Try
 * @extends {Statement}
 * @property {Block} body
 * @property {Catch[]} catches
 * @property {Block} allways
 */
var Try = Statement.extends(function Try(body, catches, always, location) {
  Statement.apply(this, [KIND, location]);
  this.body = body;
  this.catches = catches;
  this.always = always;
});

module.exports = Try;
