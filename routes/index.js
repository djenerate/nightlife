var Twit = require('twit');

exports.index = function(req, res){
  var T = new Twit({
      consumer_key:         'lVbpbPlWpDeyPii6SBig'
    , consumer_secret:      '1VMnLaPw2RStKhb3R5aa9IonwVj0FBUKwDXyw2jK1E'
    , access_token:         '257551666-S3ZYD4dyu5u0mKNqCMpP5tTHC4uIaLo5wKSkfst4'
    , access_token_secret:  'UAC3F9BsOpMrmNTsZDCwCf42YrWlXn6P5E3lhLFE'
  });

  T.get('search/tweets', { q: 'camden since:2011-11-11 lang:en', count: 100 }, function(err, reply) {
      var statuses = '';
      for (i in reply.statuses) {
          statuses += reply.statuses[i].text + ' ';
      }
      var content = JSON.stringify(statuses);
      res.render('index', { title: 'Search', content: content });
  });
};