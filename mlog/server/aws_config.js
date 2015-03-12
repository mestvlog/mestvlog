// AWS.config.loadFromPath('settings.json');

Meteor.startup(function() {
  if (Meteor.settings.AWS) {
    return AWS.config.update({
      accessKeyId: Meteor.settings.AWS.accessKeyId,
      secretAccessKey: Meteor.settings.AWS.secretAccessKey
    }, console.log("AWS settings loaded"));
  } else {
    return console.warn("AWS settings missing");
  }
  s3 = new AWS.S3();
  list = s3.listObjectsSync({
  Bucket: 'mestvids'
  // Prefix: 'subdirectory/'
})
});