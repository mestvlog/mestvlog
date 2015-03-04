AutoForm.hooks({
  insertCommentForm: {
    formToDoc: function(doc, ss, formId) {
      console.log(doc);
      var _id = Router.current().params._id;

      if(typeof _id === 'undefined'){
        var itemId = Session.get("target");
        doc.videoId = itemId;
      }
      else {
        doc.videoId = Router.current().params._id;
      }
      console.log(doc);
      return doc;
    },

     onSuccess: function(operation, result, template) {
       $("#commentModal").modal("hide");
       swal("Thanks! your comment has been recorded");
    }
  }
});