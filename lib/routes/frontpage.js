Router.route("/", {
  name: "frontpage", 
  loadingTemplate: "loading", 
  controller: RoutesController,
  waitOn: function(){
    return [IRLibLoader.load('http://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js'), IRLibLoader.load('/parallax.min.js')];
  }
});