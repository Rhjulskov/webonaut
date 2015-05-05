Meteor.methods({
  addTweet: function(tweet){
    if(tweets.find({id_str: tweet.id_str}).count() == 0 ){
      tweets.insert({
        text: tweet.text,
        id_str: tweet.id_str,
        published_date: tweet.created_at
      });
    }
  }
});