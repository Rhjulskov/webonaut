Meteor.startup(function(){
  Meteor.call('fetchTwitterApi'); 
  Meteor.call('fetchInstaApi');
  return SEO.config({
    title: 'Webonaut | Personal portfolio of Rasmus Hjulskov',
    meta: {
      'description': 'Rasmus Hjulskov develops webapps in Meteor.js for fun and profit'
    },
    og: {
      'image': '/webonaut_profile_blue.png' 
    }
  }); 
});


