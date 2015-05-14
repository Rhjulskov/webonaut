Template['frontpage'].helpers({
  hero_title: (x = "Long bold headline") => x,
  

});

Template['frontpage'].events({
  
});


Template.frontpage.rendered = function () {
  var waypoints = $('.tweet, .instagram').waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        $(this).addClass("visible")
      } else {
        $(this).removeClass("visible")
      }
    },
    offset: '80%'
  })

  var imageAnimation = {width:"50%", ease:Linear.easeNone}
  var waypoints = $('.imageSection').waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        TweenMax.from(this, 0.5, { marginTop: 200, opacity: 0, immediateRender:true, ease: Back.easeInOut}, 0.1);
      } else {
        TweenMax.to(this, 0.5, { marginTop: 200, opacity: 0, immediateRender:true, ease: Back.easeInOut}, 0.1);
      }
    },
    offset: '80%'
  })
};