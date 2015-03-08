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

