Meteor.startup(function(){
  Meteor.call('fetchTwitterApi'); 
  Meteor.call('fetchInstaApi');  
});
