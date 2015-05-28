Router.route('styleguide',   {
  template: 'styleguide',
  path: '/styleguide/',
  onBeforeAction: function() {
    var data = Session.get("sg-data");
    var firstKey = _.keys(data)[0];
    Session.set("sg-template", firstKey);
    this.next();
  }
});

Router.route('styleguideTemplates',   {
  template: 'styleguide',
  path: '/styleguide/:_value',
  onBeforeAction: function() {
    Session.set("sg-template", this.params._value);
    this.next();
  }
  // data: function(){
  //   if(Meteor.isServer) {
  //     return JSON.parse( Assets.getText('styleguide-config.json'));
  //   }
  // }
});

