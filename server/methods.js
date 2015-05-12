Meteor.methods({
  addTweet: function(tweet){
    if(tweets.find({id_str: tweet.id_str}).count() == 0 ){
      var currentTweet = tweet.text;
      currentTweet = currentTweet.replace('#webonaut', '');
      tweets.insert({
        text: currentTweet,
        hashtags: tweet.entities.hashtags,
        id_str: tweet.id_str,
        published_date: tweet.created_at,
        link_href: "https://twitter.com/RasmusHjulskov/status/"+tweet.id_str        
      });
    }
  }
});
