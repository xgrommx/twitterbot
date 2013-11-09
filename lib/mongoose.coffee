mongoose = require 'mongoose'
config = require 'config'

mongooseUri = config.get('mongoose:uri')
mongooseOpts = config.get('mongoose:options')
mongoose.connect mongooseUri, mongooseOpts

module.exports = mongoose