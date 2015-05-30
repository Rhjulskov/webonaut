Template.gridEnd.rendered = function () {
  // setTimeout(function(){
    var initialize = _.once(function(){
      var waypoints = $('.tweet, .instagram, .imageSection').waypoint({
        handler: function(direction) {
          if (direction === 'down') {
            $(this).addClass("visible")
          } else {
            $(this).removeClass("visible")
          }
        },
        offset: '80%'
      })
    });
    initialize()
  // },23000)
}