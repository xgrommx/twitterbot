var mongoose = require('mongoose');
var config = require('config');

var mongooseUri = config.get('mongoose:uri');
var mongooseOpts = config.get('mongoose:options');
mongoose.connect(mongooseUri, mongooseOpts);

module.exports = mongoose;