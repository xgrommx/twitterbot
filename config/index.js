// Generated by CoffeeScript 1.6.3
var nconf, path;

nconf = require('nconf');

path = require('path');

nconf.argv().env().file({
  file: path.join(__dirname, 'config.json')
});

module.exports = nconf;

/*
//@ sourceMappingURL=index.map
*/
