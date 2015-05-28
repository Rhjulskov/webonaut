UI.registerHelper("Posts", function() {
  return Posts.find({}, { sort: { createDate: -1 }});
});

UI.registerHelper("fromNow", function(date) {
  var newDate = Number(date);
  return moment.unix(newDate).fromNow(); 
  
});