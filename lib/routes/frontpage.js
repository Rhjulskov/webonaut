Router.route("/", {
  name: "frontpage", 
  loadingTemplate: "loading", 
  controller: RoutesController,
  data: function(){
    return [Meteor.subscribe('tweets'), Meteor.subscribe('insta')];
  },
  waitOn: function(){
    return [IRLibLoader.load('http://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js'), IRLibLoader.load('/parallax.min.js'), IRLibLoader.load('https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.5/waypoints.min.js')];
  }
});