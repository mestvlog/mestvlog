AutoForm.hooks({
  insertCommentForm: {
    formToDoc: function(doc, ss, formId) {
      var _id = Router.current().params._id;

      if(typeof _id === 'undefined'){
        var itemId = Session.get("target");
        doc.videoId = itemId;
      }
      else {
        doc.videoId = Router.current().params._id;
      }
      return doc;
    },

     onSuccess: function(operation, result, template) {
       $("#commentModal").modal("hide");
       swal("Thanks! your comment has been recorded");
    }
  }
});



  AutoForm.hooks({
  insertVideoForm: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
    Videos.insert({
      caption: insertDoc.caption,
      tags: insertDoc.tags,
      videoUrl: Session.get("videoUrl")
    }, function(err, id) {
       if (err) {
          this.done();
        }
        else {
          $("#formModal").modal("hide");
          swal("Thanks! your video has been posted");
        }
    })
       return false;  
    }
  }
});

