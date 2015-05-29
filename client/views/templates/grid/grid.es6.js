// Grid callback loaded in gridEnd template
Template['grid'].helpers({
  codepens: () => [
    {
      "src": "//codepen.io/Rhjulskov/embed/ravzGw/?height=400&theme-id=13167"
    }, 
    {
      "src": "//codepen.io/bugarin/embed/BNjZZP/?height=400&theme-id=13100&default-tab=result"
    },
    {
      "src": "//codepen.io/Yakudoo/embed/eNmjEv/?height=400&theme-id=13100&default-tab=result"
    }
  ],
  socialFeeds: function(){
    var tweetsFeed = tweets.find().fetch();
    var instaFeed = insta.find().fetch();
    var docs = tweetsFeed.concat(instaFeed);
    var array = _.sortBy(docs, function(doc) {return doc.published_date});
    array.unshift({"grid__end":true});
    return array.reverse();
  }
});

Template['grid'].events({
});



