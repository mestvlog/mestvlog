Template.videobox.events({
  "click [data-action='showVideo']": function(e,t) {
    var videoId = e.currentTarget.id;
    Session.set("videoId", videoId);
    $("#videoOverlay").show();
  }
})

Template.videoOverlayTemplate.events({
  "click [data-action='overlay-close']": function() {
        $("#videoOverlay").hide();
        $("#videoPlayer").attr('src','');
    },
  "click [data-action='comment-btn']": function(e,t) {
    var videoId = e.currentTarget.id;
    Session.set("target", videoId);
    $("#comments-box").show();
  },
  "click [ data-action='show-comments']": function(e,t) {
    var videoId = e.currentTarget.id;
    Session.set("target", videoId);
    $("#comments-box").show();
    $(".comments-div").slideToggle();
    $("#show-comments").toggleClass("show");
    var txt =  $("#show-comments").hasClass('show') ? 'Hide Comments' : 'Show Comments'
    $("#show-comments").html("<p>" + txt + "</p>");

  
   
}
})


var uploader = new ReactiveVar();

Template.videoModal.events({
    "change #video": function (event, template) {
        var upload = new Slingshot.Upload("mestvids"),
              file = template.find("#video").files[0];
        if (file) {
            upload.send(file, function (error, downloadUrl) {
                uploader.set();

                if (error) {
                    alert(error.message);
                }
                else {
                    //TODO Call your method here
                    Session.set("videoUrl", downloadUrl);
                    Meteor.users.update(Meteor.userId(), {$push: {"profile.files": downloadUrl}});
                }
            });
        }

        uploader.set(upload);
    }
});

Template.progressBar.helpers({

    isUploading: function () {
        return Boolean(uploader.get());
    },

    progress: function () {
        var upload = uploader.get();
        if (upload)
            return Math.round(upload.progress() * 100);
    }
});

  AutoForm.hooks({
  insertVideoForm: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
        // Meteor.call("updatePost", currentDoc._id, updateDoc)
      /*Videos.insert(insertDoc,
       function(err, id) {
        if (err) {
          this.done();
        }
  
       }
       );*/
    Videos.insert({
      caption: insertDoc.caption,
      videoUrl: Session.get("videoUrl")
    }, function(err, id) {
       if (err) {
          this.done();
        }
    })
       return false;  
    },

     onSuccess: function(operation, result, template) {
       $("#formModal").modal("hide");
       swal("Thanks! your video has been posted");
    }
  }
});



















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
  Router.go("userProfile");
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

// Videos.findOne("WszTcgqB2x3aLNGRm").createdAt