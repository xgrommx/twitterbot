Common = require 'lib/common'

job = new Common.cronJob {
  cronTime: '*/5 * * * * *'
  onTick: () ->
    Common.log.info "Tick"
  onComplete: () ->
    Common.log.info "Stop"
  start: off
}

app = Common.express()
server = Common.http.createServer app
io = require('socket.io').listen server, Common.config.get('socket.io')

tweetReader = require('routes/socket')

app.set 'views', __dirname + '/views'
app.set 'view engine', 'jade'
app.use Common.express.favicon()
app.use Common.express.logger 'dev'
app.use app.router
app.use Common.express.static Common.path.join(__dirname, 'public')

app.use Common.express.errorHandler if app.get('env') is 'development'

#io.sockets.on 'connection', tweetReader.tweetReader

app.get '/tweets/:hashtag', Common.tweet

server.listen Common.config.get('port'), () ->
  port = Common.config.get 'port'
  Common.log.info "Express server listening on port #{port}"
  return
