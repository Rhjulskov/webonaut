Meteor.startup(function(){

    $(window).scroll(function(){
        var windowPosition = $(window).scrollTop() + $(window).height();
        var perc = windowPosition / $(document).height() * 100;

        if (perc > 25 && perc < 50) {
          Session.set("scrollPercentage", 0.25)
        }

        if (perc > 50 && perc < 75) {
          Session.set("scrollPercentage", .50)
        }

        if (perc > 75 && perc < 99) {
          Session.set("scrollPercentage", 0.75)
        }

        if (perc > 99) {
          Session.set("scrollPercentage", 1)
        }
    });

    Tracker.autorun(function(){
        var perc = Session.get("scrollPercentage");
        Meteor.tracking.event("scroll", perc);
    });

});