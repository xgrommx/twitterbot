// Generated by CoffeeScript 1.6.3
var ENV, getLogger, winston;

winston = require('winston');

ENV = process.env.NODE_ENV;

getLogger = function(module) {
  var path;
  path = module.filename.split('/').slice(-2).join('/');
  return new winston.Logger({
    transports: [
      new winston.transports.Console({
        colorize: true,
        level: ENV === 'development' ? 'debug' : 'error',
        label: path
      })
    ]
  });
};

module.exports = getLogger;

/*
//@ sourceMappingURL=log.map
*/