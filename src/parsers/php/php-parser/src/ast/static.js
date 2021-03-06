 
"use strict";
var Statement = require('./statement');
var KIND = 'static';

/**
 * Declares a static variable into the current scope
 * @constructor Static
 * @extends {Statement}
 * @property {Variable[]|Assign[]} items
 */
var Static = Statement.extends(function Static(items, location) {
  Statement.apply(this, [KIND, location]);
  this.items = items;
});

module.exports = Static;
