// Grid callback loaded in gridEnd template
Template['grid'].helpers({
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



