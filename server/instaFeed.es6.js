Meteor.methods({
  fetchInstaApi: function(){
    var instaDebounce = _.debounce(Meteor.bindEnvironment(function(){
      var ig = Meteor.npmRequire('instagram-node').instagram();

      ig.use({ access_token: Meteor.settings.instagram.access_token });
      ig.user_self_media_recent(Meteor.bindEnvironment(function(err, medias, pagination, remaining, limit) {
        if(!err){
          medias.forEach(function(entry){
            if(entry.tags.indexOf("webonaut") > -1 ||  entry.tags.indexOf("Webonaut") > -1){
              Meteor.call('addInsta', entry) ;
            }
          })
        }
      }, 60 * 1000));
    }));
    instaDebounce();
  }
});
