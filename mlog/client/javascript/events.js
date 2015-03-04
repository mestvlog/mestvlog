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

Template.loginTemplate.events({
    "click [data-action='email-auth']": function() {
        $("#loginModal").modal("show");
    }
});