Template['hero'].helpers({
});

Template['hero'].events({

});

Template['hero'].rendered = function () {
  var scene = document.getElementById('scene');
  var parallax = new Parallax(scene);
  $('.header').midnight();

  var tmax_opts = {
    delay: 0.5,
    repeat: 0,
    repeatDelay: 0.5,
    yoyo: true
  };

  var tmax_tl           = new TimelineMax(tmax_opts),
      planets           = $('.planet--animation'),
      planets_stagger   = 0.25,
      main_planet       = $('.planet-1'),
      main_planet_bg       = $('.planet-1 > div'),
      polylion_shapes   = $('.logo--animation polygon'),
      polylion_stagger  = 0.04,
      polylion_duration = 1.25,
      hero_header = $('.hero-header, .hero-subheader');

  CSSPlugin.useSVGTransformAttr = true;

  var polylion_staggerFrom = {
    scale: 0,
    opacity: 0,
    transformOrigin: 'center center',
    force3D: true
  };

  var polylion_staggerTo = {
    opacity: 1,
    scale: 1,
    ease: Back.easeInOut.config(2),
    force3D: true
  };


  tmax_tl
    .to(main_planet, 0.5, {scale:1, ease:Back.easeOut}, 0)
    .to(main_planet_bg, 2, {opacity:1, ease:Back.easeOut}, 1)
    .staggerFromTo(planets, polylion_duration, polylion_staggerFrom, polylion_staggerTo, planets_stagger, 1)
    .staggerFromTo(polylion_shapes, polylion_duration, polylion_staggerFrom, polylion_staggerTo, polylion_stagger, 0)
    .staggerFrom(hero_header, 0.5, { top: 200, opacity: 0, immediateRender:true, ease: Back.easeInOut}, 0.1);
};