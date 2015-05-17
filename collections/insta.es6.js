insta = new Mongo.Collection('insta');

insta.attachSchema(
  new SimpleSchema({
    image: {
      type: String
    },
    text: {
      type: String
    },
    link_href: {
      type: String
    },
    published_date: {
      type: String
    },
    id_str: {
      type: String
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  insta.allow({
    insert : () => true,
    update : () => true,
    remove : () => true
  });
}

// Collections behaviours 
insta.timestampable();
insta.softRemovable();
insta.trackable('insta');
