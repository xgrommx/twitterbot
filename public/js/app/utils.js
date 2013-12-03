function filterNewUsers(data) {
    return data.distinct(function (n) {
        return n.user_id;
    }).where(function (n) {
            return moment().diff(moment.unix(n.user_created_at), 'months') < 1;
        }).orderBy(function (n) {
            return n.followers_count;
        }).toArray();
}

function getTweetFromSocket(socket, hashtag, cb) {
    socket.on('send:tweet', function(data) {
        var tweet = {
            id: data.tweet.id,
            screen_name: data.tweet.user.screen_name,
            text: data.tweet.text,
            image: data.tweet.user.profile_image_url,
            followers_count: data.tweet.user.followers_count,
            created_at: data.tweet.created_at,
            user_created_at: data.tweet.user.created_at,
            user_id: data.tweet.user.id,
            hashtag: data.tweet.hashtag,
            longitude: data.tweet.longitude,
            latitude: data.tweet.latitude,
            follower: data.tweet.follower,
            lang: data.tweet.user.lang
        };

        if(tweet.hashtag === hashtag) {
            cb(tweet);
        }
    });
}

function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}