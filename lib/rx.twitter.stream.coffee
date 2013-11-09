Rx = require 'rx'

Rx.Node.fromTwitterStream = (stream) ->
  Rx.Observable.create((observer) ->
    dataHandler = (data) ->
      observer.onNext data
      return

    errorHandler = (err) ->
      observer.onError err
      return

    endHandler = () ->
      observer.onCompleted()
      return

    stream.addListener 'tweet', dataHandler
    stream.addListener 'error', errorHandler
    stream.addListener 'end', endHandler

    () ->
      stream.removeListener 'tweet', dataHandler
      stream.removeListener 'error', errorHandler
      stream.removeListener 'end', endHandler
      return
  ).publish().refCount()

module.exports = Rx