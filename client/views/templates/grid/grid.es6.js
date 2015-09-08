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
          "image": "https://cdn-images-1.medium.com/proxy/gradv/20/81/55/darken/10/1*lhY4xybDL_6FfB1BBrz7lA.jpeg",
          "text": "How to test you Meteor app with Velocity and Cucumber",
          "link_href": "//medium.com/twenty-years-in-the-valley/one-of-the-biggest-mistakes-i-ve-made-in-my-career-72bf27c538b4",
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
