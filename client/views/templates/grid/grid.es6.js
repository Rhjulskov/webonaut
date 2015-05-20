Template['grid'].helpers({
  codepens: () => [
    {
      "src": "//codepen.io/Rhjulskov/embed/ravzGw/?height=400&theme-id=13167"
    }, 
    {
      "src": "//codepen.io/bugarin/embed/BNjZZP/?height=400&theme-id=13100&default-tab=result"
    },
    {
      "src": "//codepen.io/Yakudoo/embed/eNmjEv/?height=400&theme-id=13100&default-tab=result"
    }
  ],
  tweets: () => tweets.find(),
  insta: () => insta.find()
});

Template['grid'].events({
});


