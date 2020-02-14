 
"use strict";
var Lookup = require('./lookup');
var KIND = 'staticlookup';

/**
 * Lookup to a static property
 * @constructor StaticLookup
 * @extends {Lookup}
 */
var StaticLookup = Lookup.extends(function StaticLookup(what, offset, location) {
  Lookup.apply(this, [KIND, what, offset, location]);
});

module.exports = StaticLookup;
