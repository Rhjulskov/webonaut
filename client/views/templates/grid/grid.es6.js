// Grid callback loaded in gridEnd template
Template['grid'].helpers({
  socialFeeds: function(){
    var codepenFeed =  [
        {
            "type": "codepen",
            "src":  "//codepen.io/Rhjulskov/embed/vOMoaG/",
            "published_date": 1439596800
        }
    ]

    var tweetsFeed = tweets.find().fetch();
    var instaFeed = insta.find().fetch();

    var docs = tweetsFeed.concat(instaFeed).concat(codepenFeed);
    var array = _.sortBy(docs, function(doc) {return doc.published_date});
    array.unshift({"grid__end":true});
    return array.reverse();
  }
});

Template['grid'].events({
});



