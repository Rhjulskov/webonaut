Template.gridEnd.rendered = function () {
  // setTimeout(function(){
    console.log("frontpage rendered Working");
    var waypoints = $('.tweet, .instagram, .imageSection').waypoint({
      handler: function(direction) {
        console.log("adding")
        if (direction === 'down') {
          $(this).addClass("visible")
        } else {
          $(this).removeClass("visible")
        }
      },
      offset: '80%'
    })
  // },23000)
}