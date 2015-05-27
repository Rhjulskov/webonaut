Meteor.methods({
  addTweet: function(tweet){
    var currentTweet = tweet.text;
      currentTweet = currentTweet.replace('#webonaut', '');

    var tweetDoc = {
      text: currentTweet,
      hashtags: tweet.entities.hashtags,
      id_str: tweet.id_str,
      published_date: tweet.unixTime,
      link_href: "https://twitter.com/RasmusHjulskov/status/"+tweet.id_str        
    }

    if(tweets.find({id_str: tweet.id_str}).count() == 0 ){
      tweets.insert(tweetDoc);
    } else {
      tweets.update({id_str: tweet.id_str}, {$set: tweetDoc});
    }
  },
  addInsta : function(ig){
      var currentText = ig.caption.text,
        currentText = currentText.replace('#webonaut', '');

      var instaDoc = {
        type: ig.type,
        video: ig.type == "video" ? ig.videos.low_bandwidth.url : null,
        image: ig.images.low_resolution.url,
        text: currentText,
        link_href: ig.link,
        published_date: ig.created_time,
        id_str: ig.id,
        hashtags: ig.tags
      }
    if(insta.find({id_str: ig.id}).count() == 0){
      insta.insert(instaDoc) 
    } else {
      insta.update({id_str: ig.id}, {$set: instaDoc});
    }
  }
});
