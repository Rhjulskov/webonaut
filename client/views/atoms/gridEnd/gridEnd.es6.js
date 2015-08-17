Template.gridEnd.rendered = function () {
  // setTimeout(function(){
    var initialize = _.once(function(){
      var gridwaypoint = $('.tweet, .instagram, .imageSection, .codepen').waypoint({
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

      var waypoints = $('.footer').waypoint({
        handler: function(direction) {
          if (direction === 'down') {
            $(".border-ele").addClass("border--sec")
          } else {
            $(".border-ele").removeClass("border--sec")
          }
        },
        //TweenMax.from($(this), 0.5, {scale:0.6, marginTop: 200, opacity: 0});
        offset: '110%'
      });

    });
    initialize()
  // },23000)
}