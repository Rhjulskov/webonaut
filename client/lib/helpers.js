UI.registerHelper("Posts", function() {
  return Posts.find({}, { sort: { createDate: -1 }});
});

UI.registerHelper("fromNow", function(date) {
  return moment(date, "YYYYMMDD").fromNow(); 
});