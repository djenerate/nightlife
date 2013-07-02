var Twit = require('twit');

exports.index = function(req, res){
  var T = new Twit({
      consumer_key:         'lVbpbPlWpDeyPii6SBig'
    , consumer_secret:      '1VMnLaPw2RStKhb3R5aa9IonwVj0FBUKwDXyw2jK1E'
    , access_token:         '257551666-S3ZYD4dyu5u0mKNqCMpP5tTHC4uIaLo5wKSkfst4'
    , access_token_secret:  'UAC3F9BsOpMrmNTsZDCwCf42YrWlXn6P5E3lhLFE'
  });

  var query = req.query.q;
  var time24hoursAgo = new Date().getTime() - (24 * 60 * 60 * 1000);
  
  T.get('search/tweets', { q: query + ' lang:en', count: 100 }, function(err, reply) {
      var count = 0;
      for (i in reply.statuses) {
          var createdAt =  new Date(reply.statuses[i].created_at).getTime();
          if (time24hoursAgo <= createdAt) {
            count++;
          }
      }
      res.render('index', { count: count });
  });
};