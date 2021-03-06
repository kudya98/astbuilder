 
"use strict";

var Statement = require('./statement');
var KIND = 'do';

/**
 * Defines a do/while statement
 * @constructor Do
 * @extends {Statement}
 * @property {Expression} test
 * @property {Statement} body
 */
var Do = Statement.extends(function Do(test, body, location) {
  Statement.apply(this, [KIND, location]);
  this.test = test;
  this.body = body;
});

module.exports = Do;
