Meteor.startup(function(){
  var ig = Meteor.npmRequire('instagram-node').instagram();

  ig.use({ access_token: '37537792.83170d2.5be7c5d4897241b6849195cb2501b1f6' });
  // ig.use({ client_id: '83170d2915c7497b9eb14e9990109288', client_secret: '40ec40477ec64324a05d5b15fdfd4270' });
  ig.user_self_media_recent(Meteor.bindEnvironment(function(err, medias, pagination, remaining, limit) {
    if(!err){
      medias.forEach(function(entry){
        console.log(entry)
        if(entry.tags.indexOf("webonaut") > -1 ||  entry.tags.indexOf("Webonaut") > -1){
          Meteor.call('addInsta', entry) ;
        }
      }) 
    }
    
  }));

});
