Meteor.startup(function(){
  Meteor.call('fetchTwitterApi');
  Meteor.call('fetchInstaApi');
  return SEO.config({
    title: "Webonaut | Personal portfolio of a fullstack Meteor.js developer",
    meta: {
      'description': "Fullstack delevoper based in Aarhus, Denmark focusing on web apps development in Meteor.js.  I'm blogging and organizing a meetup group about Meteor.js.""
    },
    og: {
      'image': '/webonaut_profile_blue.png'
    }
  });
});
