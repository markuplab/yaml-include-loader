var yaml = require('js-yaml');
var include = require('./include');

module.exports = function (source) {
  this.cacheable && this.cacheable();

  var res = yaml.safeLoad(source, {
    schema: include,
    filename: this.resourcePath
  });

  return JSON.stringify(res, null, '\t');
};
