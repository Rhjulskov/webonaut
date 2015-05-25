Meteor.methods({
  addTweet: function(tweet){
    if(tweets.find({id_str: tweet.id_str}).count() == 0 ){
      var currentTweet = tweet.text;
      currentTweet = currentTweet.replace('#webonaut', '');
      tweets.insert({
        text: currentTweet,
        hashtags: tweet.entities.hashtags,
        id_str: tweet.id_str,
        published_date: tweet.unixTime,
        link_href: "https://twitter.com/RasmusHjulskov/status/"+tweet.id_str        
      });
    }
  },
  addInsta : function(ig){
    if(insta.find({id_str: ig.id}).count() == 0){
      var currentText = ig.caption.text
      currentText = currentText.replace('#webonaut', '');
      console.log(ig);
      insta.insert({
        type: ig.type,
        video: ig.type == "video" ? ig.videos.low_bandwidth.url : null,
        image: ig.images.low_resolution.url,
        text: currentText,
        link_href: ig.link,
        published_date: ig.created_time,
        id_str: ig.id,
        hashtags: ig.tags
      }) 
    }
  }
});
