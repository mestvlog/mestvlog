AutoForm.hooks({
  insertCommentForm: {
    formToDoc: function(doc, ss, formId) {
        var itemId = Session.get("target");
        doc.videoId = itemId;
        return doc;
    }

   /*  onSuccess: function(operation, result, template) {
       $("#commentModal").modal("hide");
       swal("Thanks! your comment has been recorded");
    }*/
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

