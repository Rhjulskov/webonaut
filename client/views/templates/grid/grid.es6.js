// Grid callback loaded in gridEnd template
Template['grid'].helpers({
  socialFeeds: function(){
    var staticLinks =  [
        {
            "type": "codepen",
            "src":  "//codepen.io/Rhjulskov/embed/vOMoaG/",
            "published_date": 1439596800
        },
        {
          "type": "medium",
          "image": "/velocity_test.png",
          "text": "How to test you Meteor app with Velocity and Cucumber",
          "link_href": "//medium.com/@rasmushjulskov/how-to-test-your-meteor-app-with-velocity-and-cucumber-3c9290660258",
          "published_date": 1441670400
        }
    ]

    var tweetsFeed = tweets.find().fetch();
    var instaFeed = insta.find().fetch();

    var docs = tweetsFeed.concat(instaFeed).concat(staticLinks);
    var array = _.sortBy(docs, function(doc) {return doc.published_date});
    array.unshift({"grid__end":true});
    return array.reverse();
  }
});

Template['grid'].events({
});
