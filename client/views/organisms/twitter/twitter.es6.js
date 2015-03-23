Template['twitter'].helpers({
});

Template['twitter'].events({
  'mouseover .twitter': function(event) {
    TweenMax.to(event.target, 1, {top: 0, marginTop: -10})
  }
});