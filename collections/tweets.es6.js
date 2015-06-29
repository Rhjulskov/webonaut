tweets = new Mongo.Collection('tweets');

tweets.attachSchema(
  new SimpleSchema({
    text: {
      type: String
    },
    hashtag: {
      type: Object,
      optional: true
    },
    id_str: {
      type: String
    },
    published_date: {
      type: String
    },
    link_href: {
      type: String
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  tweets.allow({
    insert : () => true,
    update : () => true,
    remove : () => true
  });
}

// Collections behaviours 
tweets.timestampable();
tweets.softRemovable();
tweets.trackable('tweets');
