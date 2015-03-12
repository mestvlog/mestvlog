Slingshot.createDirective("mestvids", Slingshot.S3Storage, {
 bucket: Meteor.settings.AWS.awsBucket,
 AWSAccessKeyId: Meteor.settings.AWS.awsAccessKeyId,
 AWSSecretAccessKey: Meteor.settings.AWS.awsSecretKey,
 
  acl: "public-read",

  authorize: function () {
    //Deny uploads if user is not logged in.
    if (!this.userId) {
      var message = "Please login before posting files";
      throw new Meteor.Error("Login Required", message);
    }

    return true;
  },

  key: function (file) {
    //Store file into a directory by the user's username.
    var user = Meteor.users.findOne(this.userId);
    return user.username + "/" + file.name;
  }


  
});