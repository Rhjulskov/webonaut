Router.route("/", {
  name: "frontpage",
  loadingTemplate: "loading",
  controller: RoutesController,
  data: function(){
    return [Meteor.subscribe('tweets'), Meteor.subscribe('insta')];
  },
  waitOn: function(){
    return [IRLibLoader.load('//cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js'), IRLibLoader.load('/parallax.min.js'), IRLibLoader.load('//cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.5/waypoints.min.js')];
  },
  // onAfterAction: function(){
  //   SEO.set({
  //     title: post.title,
  // rel_author: 'https://www.google.com/+ManuelSchoebel'
  //     meta: {
  //       'description': post.description
  //     },
  //     og: {
  //       'title': post.title,
  //       'description': post.description
  //     }

  //   });
  // }
});
