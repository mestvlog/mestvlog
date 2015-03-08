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


Template.myVideo.helpers({
  url: function() {
    return Session.get("videoUrl");
  }
})
