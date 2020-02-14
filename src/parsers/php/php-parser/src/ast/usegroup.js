 
"use strict";
var Statement = require('./statement');
var KIND = 'usegroup';

/**
 * Defines a use statement (with a list of use items)
 * @constructor UseGroup
 * @extends {Statement}
 * @property {String|null} name
 * @property {String|null} type - Possible value : function, const
 * @property {UseItem[]} item
 * @see {Namespace}
 * @see http://php.net/manual/en/language.namespaces.importing.php
 */
var UseGroup = Statement.extends(function UseGroup(name, type, items, location) {
  Statement.apply(this, [KIND, location]);
  this.name = name;
  this.type = type;
  this.items = items;
});

module.exports = UseGroup;
