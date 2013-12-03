var mongoose = require('mongoose');
var config = require('config');
var log = require('lib/log')(module);

var mongooseUri = config.get('mongoose:uri');
var mongooseOpts = config.get('mongoose:options');
mongoose.connect(mongooseUri, mongooseOpts);


["error", "connected", "connecting",
    "open", "disconnecting", "disconnected",
    "close", "reconnected", "fullsetup"].forEach(function (n, i, a) {
        mongoose.connection.on(n, function (data) {
            switch (n) {
                case "error":
                    log.error(data.message);
                    break;
                case "connected":
                    log.info("Mongoose has been started on %s url", mongooseUri);
                    break;
                case "connecting":
                    log.info("Mongoose connecting to %s url", mongooseUri);
                    break;
                case "open":
                    log.info("Mongoose has been opened on %s url", mongooseUri);
                    break;
                case "disconnected":
                    log.warn("Mongoose has been disconnected on %s url", mongooseUri);
                    break;
                case "close":
                    log.warn("Mongoose has been closed on %s url", mongooseUri);
                    break;
                default:
                    log.info("Unknown message type");
                    break
            }
        });
    });

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        log.warn('Mongoose connection disconnected through app termination');
        process.exit(0);
    });
});

module.exports = mongoose;