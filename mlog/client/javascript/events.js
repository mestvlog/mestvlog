Template.userProfile.events({
"click .new-vid": function() {
    $("#formModal").modal("show");
}
});

Template.home.events({
    "click .comment-btn": function(e,t) {
        var videoId = e.currentTarget.id;
        Session.set("target", videoId);
        $("#commentModal").modal("show");
    },

    "click [data-action='signin-btn']": function() {
        $("#overlay").show();
    },

    "click #signout-btn": function(event){
      Meteor.logout(function() {
      // Redirect to login
      Router.go('home');
    });
  }
});

AutoForm.addHooks(null, {
    onError: function (operation, error, template) {
      console.log('Error: ' + error);
    }
  });

Template.overlayTemplate.events({
    "click [data-action='overlay-close']": function() {
        $("#overlay").hide();
    }
});

Template.loginButtonsTemplate.events({
  'click .button-facebook': function() {
    return Meteor.loginWithFacebook({
      requestPermissions: ['email']
    }, function(error) {
      if (error) {
        return console.log(error.reason);
      }
    });
  },
  'click .button-twitter': function() {
    return Meteor.loginWithTwitter(function(error) {
      if (error) {
        return console.log(error.reason);
      }
    });
  },

  "click [data-action='email-auth']": function() {
        $("#loginModal").modal("show");
    }
});




