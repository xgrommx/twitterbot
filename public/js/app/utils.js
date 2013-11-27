function filterNewUsers(data) {
    return data.distinct(function (n) {
        return n.user_id;
    }).where(function (n) {
            return moment().diff(moment.unix(n.user_created_at), 'months') < 1;
        }).orderBy(function (n) {
            return n.followers_count;
        }).toArray();
}

function getTweetFromSocket(socket, cb) {
    socket.on('send:tweet', function(data) {
        if(data.tweet.coordinates != null) {
            console.log(data.tweet, 'Tweet from socket.');
        }
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
            follower: data.tweet.follower
        };

        cb(tweet);
    });
}