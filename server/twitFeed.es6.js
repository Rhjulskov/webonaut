
Meteor.methods({
  fetchTwitterApi: function(){
    var tweetDebounce = _.debounce(Meteor.bindEnvironment(function(){
      var Twit = Meteor.npmRequire('twit');
      T = new Twit({
        consumer_key: '1wjMb4fLRbMEEWKfukDd2lxml',
        consumer_secret: 'xwmwVYGj0aGLPw44tfhvc2SKzvJPuFEH3oaJUq0RI48Y8jg2hb',
        access_token: '837964716-R4DgWcmdviJHuOS1jxeA729PW8WSIfGMi5VTdpQX',
        access_token_secret: 'BucLqGNlXZGMdpH4YyoRUprkFkiYUkTfNVuCeh6e7LDgF'
      })
      // fetchTweets = function(){
        T.get('search/tweets', { q: 'from:RasmusHjulskov #webonaut', count: 20 }, Meteor.bindEnvironment(function(err, data, response) {
          if(!err){
            data.statuses.forEach(function(entry) {
              entry.unixTime = moment(entry.created_at).unix();
              Meteor.call('addTweet', entry);
            });
          }
        }));
      // };
      // fetchTweets();
    }, 60 * 1000));

    tweetDebounce();
  }
});

