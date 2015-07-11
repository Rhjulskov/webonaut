
Meteor.methods({
  fetchTwitterApi: function(){
    var tweetDebounce = _.debounce(Meteor.bindEnvironment(function(){
      var Twit = Meteor.npmRequire('twit');
      T = new Twit({
        consumer_key: Meteor.settings.twitter.consumer_key,
        consumer_secret: Meteor.settings.twitter.consumer_secret,
        access_token: Meteor.settings.twitter.access_token,
        access_token_secret: Meteor.settings.twitter.access_token_secret
      })
      T.get('search/tweets', { q: 'from:RasmusHjulskov #webonaut', count: 100 }, Meteor.bindEnvironment(function(err, data, response) {
         if(!err){
          data.statuses.forEach(function(entry) {
            console.log(entry)
            entry.unixTime = moment(entry.created_at).unix();
            Meteor.call('addTweet', entry);
          });
         }
      }));
    }, 60 * 1000));

    tweetDebounce();
  }
});
