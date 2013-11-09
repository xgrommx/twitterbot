getRandomArbitary = (min, max) -> Math.random() * (max - min) + min

((ng, $) ->
  app = ng.module 'app', [
    'app.TweetCtrl'
    'app.TweetAnimation'
    'app.TweetDirective'
    'app.TweetService'
    'app.TweetSpinner'
    'btford.socket-io'
    'ngAnimate'
    'ngResource'
    'google-maps'
    'nvd3ChartDirectives'
    'tools'
  ]
  app.constant {socketUrl: 'http://localhost'}
  app.config (socketProvider, socketUrl) ->
    appSocket = io.connect(socketUrl)
    # Other configuration for the socket
    socketProvider.ioSocket appSocket
    return

  ng.module('app.TweetSpinner', [])
  .constant('_START_REQUEST_', '_START_REQUEST_')
  .constant('_END_REQUEST_', '_END_REQUEST_')
  .config(['$httpProvider', '_START_REQUEST_', '_END_REQUEST_', ($httpProvider, _START_REQUEST_, _END_REQUEST_) ->
      interceptor = ['$q', '$injector', ($q, $injector) ->
          success = (response) ->
            $http = $http || $injector.get '$http'
            if $http.pendingRequests.length < 1
              rootScope = rootScope || $injector.get '$rootScope'
              rootScope.$broadcast _END_REQUEST_
            return response
          error = (response) ->
            $http = $http || $injector.get '$http'
            if $http.pendingRequests.length < 1
              rootScope = rootScope || $injector.get '$rootScope'
              rootScope.$broadcast _END_REQUEST_
            return $q.reject response

          (promise) ->
            rootScope = rootScope || $injector.get '$rootScope'
            rootScope.$broadcast _START_REQUEST_
            promise.then success, error
      ]
      $httpProvider.responseInterceptors.push interceptor
      return
    ]).directive 'loader', ['_START_REQUEST_', '_END_REQUEST_', (_START_REQUEST_, _END_REQUEST_) ->
      {
        restrict: "A",
        link: (scope, element) ->
          scope.$on(_START_REQUEST_, () ->
            console.log('Loading')
            return
          )
          scope.$on(_END_REQUEST_, () ->
            console.log('Finished')
            return
          )
          return
      }
  ]
  ng.module('app.TweetService', []).factory 'TweetService', ($resource) ->
    $resource '/tweets/:hashtag', {}, {
      getTweets: { method: 'GET', params: {
        hashtag: '@hashtag'
      }}
    }

  ng.module('app.TweetCtrl', []).controller 'TweetCtrl', ['$scope', 'socket', 'TweetService', '$log', '$timeout', ($scope, socket, TweetService, $log, $timeout) ->
    Enumerable.Utils.extendTo Array
    $scope.streamTwoLength = 0
    $scope.streamOneLength = 0
    $scope.tweets = []
    $scope.vips = []
    $scope.message = 'jquery'

    $scope.exampleData = [
      {
        "key": "Series 1"
        "values": [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371] , [ 1030766400000 , -5.9507873460847] , [ 1033358400000 , -11.569146943813] , [ 1036040400000 , -5.4767332317425] , [ 1038632400000 , 0.50794682203014] , [ 1041310800000 , -5.5310285460542] , [ 1043989200000 , -5.7838296963382] , [ 1046408400000 , -7.3249341615649] , [ 1049086800000 , -6.7078630712489] , [ 1051675200000 , 0.44227126150934] , [ 1054353600000 , 7.2481659343222] , [ 1056945600000 , 9.2512381306992] , [ 1059624000000 , 11.341210982529] , [ 1062302400000 , 14.734820409020] , [ 1064894400000 , 12.387148007542] , [ 1067576400000 , 18.436471461827] , [ 1070168400000 , 19.830742266977] , [ 1072846800000 , 22.643205829887] , [ 1075525200000 , 26.743156781239] , [ 1078030800000 , 29.597478802228] , [ 1080709200000 , 30.831697585341] , [ 1083297600000 , 28.054068024708] , [ 1085976000000 , 29.294079423832] , [ 1088568000000 , 30.269264061274] , [ 1091246400000 , 24.934526898906] , [ 1093924800000 , 24.265982759406] , [ 1096516800000 , 27.217794897473] , [ 1099195200000 , 30.802601992077] , [ 1101790800000 , 36.331003758254] , [ 1104469200000 , 43.142498700060] , [ 1107147600000 , 40.558263931958] , [ 1109566800000 , 42.543622385800] , [ 1112245200000 , 41.683584710331] , [ 1114833600000 , 36.375367302328] , [ 1117512000000 , 40.719688980730] , [ 1120104000000 , 43.897963036919] , [ 1122782400000 , 49.797033975368] , [ 1125460800000 , 47.085993935989] , [ 1128052800000 , 46.601972859745] , [ 1130734800000 , 41.567784572762] , [ 1133326800000 , 47.296923737245] , [ 1136005200000 , 47.642969612080] , [ 1138683600000 , 50.781515820954] , [ 1141102800000 , 52.600229204305] , [ 1143781200000 , 55.599684490628] , [ 1146369600000 , 57.920388436633] , [ 1149048000000 , 53.503593218971] , [ 1151640000000 , 53.522973979964] , [ 1154318400000 , 49.846822298548] , [ 1156996800000 , 54.721341614650] , [ 1159588800000 , 58.186236223191] , [ 1162270800000 , 63.908065540997] , [ 1164862800000 , 69.767285129367] , [ 1167541200000 , 72.534013373592] , [ 1170219600000 , 77.991819436573] , [ 1172638800000 , 78.143584404990] , [ 1175313600000 , 83.702398665233] , [ 1177905600000 , 91.140859312418] , [ 1180584000000 , 98.590960607028] , [ 1183176000000 , 96.245634754228] , [ 1185854400000 , 92.326364432615] , [ 1188532800000 , 97.068765332230] , [ 1191124800000 , 105.81025556260] , [ 1193803200000 , 114.38348777791] , [ 1196398800000 , 103.59604949810] , [ 1199077200000 , 101.72488429307] , [ 1201755600000 , 89.840147735028] , [ 1204261200000 , 86.963597532664] , [ 1206936000000 , 84.075505208491] , [ 1209528000000 , 93.170105645831] , [ 1212206400000 , 103.62838083121] , [ 1214798400000 , 87.458241365091] , [ 1217476800000 , 85.808374141319] , [ 1220155200000 , 93.158054469193] , [ 1222747200000 , 65.973252382360] , [ 1225425600000 , 44.580686638224] , [ 1228021200000 , 36.418977140128] , [ 1230699600000 , 38.727678144761] , [ 1233378000000 , 36.692674173387] , [ 1235797200000 , 30.033022809480] , [ 1238472000000 , 36.707532162718] , [ 1241064000000 , 52.191457688389] , [ 1243742400000 , 56.357883979735] , [ 1246334400000 , 57.629002180305] , [ 1249012800000 , 66.650985790166] , [ 1251691200000 , 70.839243432186] , [ 1254283200000 , 78.731998491499] , [ 1256961600000 , 72.375528540349] , [ 1259557200000 , 81.738387881630] , [ 1262235600000 , 87.539792394232] , [ 1264914000000 , 84.320762662273] , [ 1267333200000 , 90.621278391889] , [ 1270008000000 , 102.47144881651] , [ 1272600000000 , 102.79320353429] , [ 1275278400000 , 90.529736050479] , [ 1277870400000 , 76.580859994531] , [ 1280548800000 , 86.548979376972] , [ 1283227200000 , 81.879653334089] , [ 1285819200000 , 101.72550015956] , [ 1288497600000 , 107.97964852260] , [ 1291093200000 , 106.16240630785] , [ 1293771600000 , 114.84268599533] , [ 1296450000000 , 121.60793322282] , [ 1298869200000 , 133.41437346605] , [ 1301544000000 , 125.46646042904] , [ 1304136000000 , 129.76784954301] , [ 1306814400000 , 128.15798861044] , [ 1309406400000 , 121.92388706072] , [ 1312084800000 , 116.70036100870] , [ 1314763200000 , 88.367701837033] , [ 1317355200000 , 59.159665765725] , [ 1320033600000 , 79.793568139753] , [ 1322629200000 , 75.903834028417] , [ 1325307600000 , 72.704218209157] , [ 1327986000000 , 84.936990804097] , [ 1330491600000 , 93.388148670744]]
      }
    ]

    TweetService.getTweets {hashtag: $scope.message}, (data) ->
      $scope.tweets = data.tweets
      $scope.streamOneLength = $scope.tweets.length
      $scope.vips = $scope.tweets.where((n) -> n.followers > 20).toArray()
      return
    $scope.$watchCollection 'vips', (oldValue, newValue) ->
      $scope.groupVips = $scope.vips.groupBy(
        (vip) -> vip.id
        (vip) -> vip
        (id, enumObj) ->
          {
            count: enumObj.count()
            vip: enumObj.first()
          }
      ).orderByDescending((item) -> item.count).thenByDescending((item) -> item.vip.followers).toArray()
      $scope.streamTwoLength = $scope.groupVips.length
      return
    angular.extend $scope, {
      center: {
        latitude: 32,
        longitude: 49
      },
      markers: [],
      zoom: 8,
    }
    $scope.$watch 'message', (oldVal, newVal) ->
#      $timeout init, 1000
      $scope.tweets = []
      $scope.vips = []
      $scope.markers = []
      $scope.groupVips = []
      $scope.streamTwoLength = 0
      $scope.streamOneLength = 0
      socket.emit 'get:tweet', {message: $scope.message}
      return
    socket.on 'send:vip', (data) ->
      $scope.vips.push {
        id: data.tweet.user.id
        screen_name: data.tweet.user.screen_name
        text: data.tweet.text,
        image: data.tweet.user.profile_image_url,
        followers: parseInt data.tweet.user.followers_count
      }
#      $scope.vips = $scope.vips.orderByDescending((vip) -> vip.followers).toArray()
      return
    socket.on 'send:tweet', (data) ->
      $scope.tweets.push {
        id: data.tweet.user.id
        screen_name: data.tweet.user.screen_name
        text: data.tweet.text,
        image: data.tweet.user.profile_image_url
        followers: parseInt data.tweet.user.followers_count
        static: false
      }
      $scope.streamOneLength = $scope.tweets.length;
      $scope.markers.push({
        latitude: getRandomArbitary(40, 60),
        longitude: getRandomArbitary(40, 60),
        infoWindow: data.tweet.text
      });
      return
    return
  ]
  ng.module('app.TweetAnimation', []).animation '.tweet-animation', () ->
    {
      enter: (element, done) ->
        $(element).fadeTo('slow', 0.5).delay(1500).fadeTo('slow', 1)
        return
    }
  ng.module('app.TweetDirective', []).directive('tab', () ->
    {
    restrict: 'A'
    link: (scope, element, attrs) ->
      $(element).tab()
      return
    }).directive('setText', () ->
      {
        restrict: 'A'
        priority: 100
        link: (scope, element, attrs) ->
          element.get(0).innerText = scope.$eval attrs.setText
          return
      }).directive('setSrc', () ->
        {
          restrict: 'A'
          priority: 100
          link: (scope, element, attrs) ->
            element.get(0).src = scope.$eval attrs.setSrc
            return
        }
    )
  return
) angular, jQuery