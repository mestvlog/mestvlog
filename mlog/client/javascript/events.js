Template.videobox.events({
  "click [data-action='showVideo']": function(e,t) {
    var videoId = e.currentTarget.id;
    Session.set("videoId", videoId);
    $("#videoOverlay").show();
  }
})
Template.home.events({
  "click [data-action='showVideo']": function(e,t) {
    var videoId = e.currentTarget.id;
    Session.set("videoId", videoId);
    $("#videoOverlay").show();
  }
})
/*
Template.videobox.rendered = function() {
  var $check = $("#check");
  if($check.text() == "") {
  $("#no-videos").show();
}
else {
  $check.text("");
  $("#show-vids").show();
}

}*/

Template.sidebar.events({
  "mouseenter .tags": function(e,t) {
    var info = e.currentTarget.children[0].title;
    $("#tagInfo").html("<center>" + info + "</center>");
  },
  "click [data-action='mestfun']": function(event) {
    window.document.location = "/mestfun";
  },
  "click [data-action='mestlove']": function(event) {
    window.document.location = "/mestlove";
  },
  "click [data-action='mestgoodbyes']": function(event) {
    window.document.location = "/mestgoodbyes";
  },
  "click [data-action='mestevents']": function(event) {
    window.document.location = "/mestevents";
  },
  "click [data-action='mestpitches']": function(event) {
    window.document.location = "/mestpitches";
  },
  "click [data-action='mestintros']": function(event) {
    window.document.location = "/mestintros";
  },
  "click [data-action='mestwinners']": function(event) {
    window.document.location = "/mestwinners";
  },
  "click [data-action='mestrandom']": function(event) {
    window.document.location = "/mestrandom";
  },
   "click [data-action='mesttravels']": function(event) {
    window.document.location = "/mesttravels";
  },
})

Template.videoOverlayTemplate.events({
  "click [data-action='overlay-close']": function() {
        $("#videoOverlay").hide();
        $("#videoPlayer").attr('src','');
    },
  "click [data-action='comment-btn']": function(e,t) {
     var videoId = e.currentTarget.id;
    Session.set("target", videoId);
    if(!Meteor.user()) {
      swal("sorry! you need to signin to comment")
    }
    else {
      $("#comments-box").show();
  }
  },
 /* "click [ data-action='show-comments']": function(e,t) {
    var videoId = e.currentTarget.id;
    Session.set("target", videoId);
    $("#comments-box").show();
    $(".comments-div").slideToggle();
    $("#show-comments").toggleClass("show");
    var txt =  $("#show-comments").hasClass('show') ? 'Hide Comments' : 'Show Comments'
    $("#show-comments").html("<p>" + txt + "</p>");  
  },*/
  "mouseenter [data-action='add-comment']": function(e,t) {
    var videoId = e.currentTarget.id;
    Session.set("target", videoId);
  }
})


Template.userProfile.events({
"click .new-vid": function() {
    $("#formModal").modal("show");
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

Template.signInTemplate.events({
  "submit form#at-pwd-form": function() {
    $("#loginModal").modal("hide");
    $("#overlay").hide();
  }
})

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

  "click [data-action='google-auth']": function() {
    return Meteor.loginWithGoogle(function(error) {
      if (error) {
        return console.log(error.reason);
      }
    });
  },

  "click [data-action='email-auth']": function() {
        $("#loginModal").modal("show");
    }
});

Accounts.onLogin(function() {
  $("#overlay").hide();
  Router.go("videos");
});

Accounts.onLogout(function() {
  Router.go("videos");
});


Template.navStuff.events({
  "click [data-action='signout-btn']": function() {
    Meteor.logout(function() {
      // Redirect to login
      Router.go('home');
    });
  },
   "click [data-action='signin-btn']": function() {
        $("#overlay").show();
    },

  "click [data-action='new-vid']": function() {
    $("#formModal").modal("show");
  }
})