Router.route('styleguide',   {
  template: 'styleguide',
  path: '/styleguide/'
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

