Meteor.methods({
  addTweet: function(tweet){
    console.log(tweet);
    if(tweets.find({id_str: tweet.id_str}).count() == 0 ){
      var currentTweet = tweet.text;
      currentTweet = currentTweet.replace('#webonaut', '');
      tweets.insert({
        text: currentTweet,
        id_str: tweet.id_str,
        published_date: tweet.created_at,
        link_href: "http://twitter.com" // NOT WORKING
      });
    }
  }
});