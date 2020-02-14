 
"use strict";

var Operation = require('./operation');
var KIND = 'post';

/**
 * Defines a post operation `$i++` or `$i--`
 * @constructor Post
 * @extends {Operation}
 * @property {String} type
 * @property {Variable} what
 */
var Post = Operation.extends(function Post(type, what, location) {
  Operation.apply(this, [KIND, location]);
  this.type = type;
  this.what = what;
});

module.exports = Post;
