Template.gridEnd.rendered = function () {
  // setTimeout(function(){
    var initialize = _.once(function(){
      var gridwaypoint = $('.tweet, .instagram, .imageSection').waypoint({
        handler: function(direction) {
          if (direction === 'down') {
            $(this).addClass("visible")
          } else {
            $(this).removeClass("visible")
          }
        },
        offset: '80%'
      });

      var waypoints = $('.slide-up').waypoint({
        handler: function(direction) {
          if (direction === 'down') {
            $(this).addClass("visible")
          } else {
            $(this).removeClass("visible")
          }
        },
        //TweenMax.from($(this), 0.5, {scale:0.6, marginTop: 200, opacity: 0});
        offset: '100%'
      });
    });
    initialize()
  // },23000)
}