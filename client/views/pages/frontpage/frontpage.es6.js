Template['frontpage'].helpers({
  hero_title: (x = "Long bold headline") => x,
  

});

Template['frontpage'].events({
  
});


Template.frontpage.rendered = function () {
  //$('.imageSection').css('height', '0px').find('img').css({height: '0px', opacity: 0});
  

  var imageAnimation = {width:"50%", ease:Linear.easeNone}
  // var waypoints = $('.imageSection').waypoint({
  //   handler: function(direction) {
  //     if (direction === 'down') {
  //       TweenMax.from(this, 0.6, { height: 0});
  //       TweenMax.from($(this).find('.imageSection__image img'), 0.4, { height: 0, delay: 0.6});
  //       TweenMax.from($(this).find('.imageSection__image img'), 0.4, { opacity: 0, delay: 1.2});
  //       TweenMax.staggerFrom($(this).find('h2, p, .button'), 2, { marginTop: -20, opacity: 0, immediateRender:true, ease: Back.easeInOut}, 1);
  //     } else {
  //       //TweenMax.to(this, 0.5, { marginTop: 200, opacity: 0, immediateRender:true, ease: Back.easeInOut}, 0.1);
  //     }
  //   },
  //   offset: '80%'
  // })
};