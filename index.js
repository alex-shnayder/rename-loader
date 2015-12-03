'use strict';

var loaderUtils = require('loader-utils');

module.exports = function(content) {
  this.cacheable && this.cacheable();

  var query = loaderUtils.parseQuery(this.query);
  var pathTemplate = query.name;
  var loaderContextPrototype = Object.getPrototypeOf(this);

  if (!pathTemplate) {
    Object.keys(query).forEach(function(paramName) {
      if (['context', 'regExp'].indexOf(paramName) === -1) {
        pathTemplate = paramName;
      }
    });
  }

  loaderContextPrototype.resourcePath = loaderUtils.interpolateName(this, pathTemplate, {
    content: content,
    context: query.context || this.options.context,
    regExp: query.regExp
  });

  return content;
};

module.exports.raw = true;
