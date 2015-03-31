Template['styleguide'].helpers({
  atoms: () => ["gradient", "imageoverlay", "logo", "logoRed", "logoBlue", "logoRedSmall","logoBlueSmall", "button", "headerSection", "instagram", "twitter", "codepen", "textarea"],
  escaped: (data = "hero") => Blaze.toHTML(Blaze.With({}, () => Template[data] )),
  colors: () => [
    {
      "name": "Blue",
      "var": "$color-primary",
      "color": "#5A6BA0",
      "variation": [
        {
          "var": "tint",
          "color": "#6A79A9"
        },
        {
          "var": "shade",
          "color": "#2F3549"
        }
      ]
    },
    {
      "name": "Red",
      "var": "$color-secondary",
      "color": "#E64675"
    },
    {
      "name": "primary-color",
      "var": "$color-yellow",
      "color": "#FFF05E"
    },
    {
      "name": "primary-color",
      "var": "$color-blue-dark",
      "color": "#2F3549"
    },
    {
      "name": "demo-red",
      "color": "#f95657"
    },
    {
      "name": "demo-blue",
      "color": "#3b3f4b"
    },
    {
      "name": "demo-lightblue",
      "color": "#01b9ff"
    },
    {
      "name": "demo-yellow",
      "color": "#fddd18"
    },
    {
      "name": "primary-color",
      "var": "primary-color",
      "color": "#6D6E71"
    },
    {
      "name": "primary-color",
      "var": "primary-color",
      "color": "#58595B"
    },
    {
      "name": "primary-color",
      "var": "primary-color",
      "color": "#414042"
    }
  ]
});

Template['styleguide'].events({
});



Template.styleguide.rendered = function(){
  


  // expand trigger
  $('.expander-trigger').click(function(){
    $(this).toggleClass("expander-hidden");
  });


  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });

};


    



// http://stackoverflow.com/questions/19369824/iterate-through-directory-with-assets-gettext
// if(Meteor.isServer) {
//   var done, files;

//   var fs = NPM.Require('fs');

//   files = fs.readdirSync("/", function(e, r) {});

//   done = Meteor.bindEnvironment(function(files) {
//     return _.each(files, function(filename) {
//       var myjson;
//       myjson = JSON.parse(Assets.getText("lib/" + filename));
//       /* do Something */

//     });
//   }, function(e) {
//     throw e;
//   });

//   done(files);
// }