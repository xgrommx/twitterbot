var Rx = require('rx');

Rx.Node.fromTwitterStream = function(stream, eventName) {
    return Rx.Observable.create(function(observer) {
        function dataHandler(data) {
            observer.onNext(data);
        }

        function errorHandler(err) {
            observer.onError(err);
        }

        function endHandler() {
            observer.onComplete();
        }

        stream.addListener(eventName, dataHandler);
        stream.addListener('error', errorHandler);
        stream.addListener('end', endHandler);

        return function() {
            stream.removeListener('tweet', dataHandler);
            stream.removeListener('error', errorHandler);
            stream.removeListener('end', endHandler);
        }
    }).publish().refCount();
};

module.exports = Rx;