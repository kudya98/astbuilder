 
"use strict";
var Lookup = require('./lookup');
var KIND = 'offsetlookup';

/**
 * Lookup on an offset in an array
 * @constructor OffsetLookup
 * @extends {Lookup}
 */
var OffsetLookup = Lookup.extends(function OffsetLookup(what, offset, location) {
  Lookup.apply(this, [KIND, what, offset, location]);
});

module.exports = OffsetLookup;
