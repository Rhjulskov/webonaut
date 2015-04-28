Meteor.startup(function(){
  var Twit = Meteor.npmRequire('twit');

  var T = new Twit({
    consumer_key: '1wjMb4fLRbMEEWKfukDd2lxml',
    consumer_secret: 'xwmwVYGj0aGLPw44tfhvc2SKzvJPuFEH3oaJUq0RI48Y8jg2hb',
    access_token: '837964716-R4DgWcmdviJHuOS1jxeA729PW8WSIfGMi5VTdpQX',
    access_token_secret: 'BucLqGNlXZGMdpH4YyoRUprkFkiYUkTfNVuCeh6e7LDgF'
  })
  var stream = T.stream('statuses/filter', { track: '#apple', language: 'en' })
 Meteor.wrapAsync(function(){
   T.get('search/tweets', { q: 'from:RasmusHjulskov', count: 5 }, function(err, data, response) {
      // if(Employee.find({id: person.id}).count() == 0 ){
      // Tweets.insert({
      //   "text": _.first(data.statuses).text,
      //   "id": _.first(data.statuses).id_str,
      //   "published_date": _.first(data.statuses).created_at
      // })
      data.statuses.forEach(function(entry) {
        if(tweets.find({id_str: entry.id_str}).count() == 0 ){
          tweets.insert({
            text: _.first(data.statuses).text,
            id_str: _.first(data.statuses).id_str,
            published_date: _.first(data.statuses).created_at
          });
        }
      });
    })
 });
});