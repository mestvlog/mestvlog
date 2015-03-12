Template.registerHelper("isUploading", function() {
    if(Session.get("uploading")) {
        return true;
    }
})

Template.registerHelper("isVideos", function(object) {
    if(object.fetch().length !== 0) {
        return true;
    }
    else {
        return false;
    }
})

Template.registerHelper("tagList", function(id) {
    var videoTags = Videos.findOne(id).tags;
    return videoTags.slice(0, videoTags.length - 1).join(', ').concat(' and ' + videoTags[videoTags.length - 1]);
})
Template.videoOverlayTemplate.helpers({
    userVideo: function() {
    var video = Videos.findOne(Session.get("videoId"));
    return video;
    },
    isComments: function(id) {
        var check = Comments.find({videoId: id}).count();
        if(check > 0) {
            return true
        }
    },
    videoComments: function(id) {
        var comments = Comments.find({videoId: id});
        return comments
    }
})

Template.registerHelper("mestOptions", function() {
    return [
        {label: 'Mest Fun', value: 'Mest Fun'},
        {label: "Mest New Intros", value: 'Mest Intros'},
        {label: "Mest Travels", value: 'Mest Travels'},
        {label: "Mest Love", value: 'Mest Love'},
        {label: "Mest Random", value: 'Mest Random'},
        {label: "Mest Pitches", value: 'Mest Pitches'},
        {label: "Mest Winners", value: 'Mest Winners'},
        {label: "Mest Goodbyes", value: 'Mest Goodbyes'},
        {label: "Mest Events", value: 'Mest Events'}
      
    ]
})
Template.commentsTemplate.helpers({
    username: function(id) {
        return Meteor.users.findOne(id).profile.name;
    }
})

Template.registerHelper("username", function(id) {
    var videoOwnerId = Videos.findOne(id).owner;
    var owner = Meteor.users.findOne(videoOwnerId).profile.name;
    return owner;
})


/*Template.registerHelper("videos", function(){
    return Videos.find({}, {sort: {createdAt: -1}});
});*/

Template.registerHelper("showComments", function(id){
    return Comments.find({videoId: id});
});
Template.registerHelper("commentsCount", function(id){
    return Comments.find({videoId: id}).count();
});

/*Template.progressBar.helpers({
  progress: function () {
    return Math.round(this.uploader.progress() * 100);
  }
});*/



Template.myVideo.helpers({
  url: function () {
    //if we are uploading an image, pass true to download the image into cache
    //this will preload the image before using the remote image url.
    return this.uploader.url(true);
  }
});
/*
Template.userProfile.helpers({
    username: function() {
        var userId = Meteor.userId();
       return Meteor.users.findOne(userId).profile.name;
    }
});*/
/*
Template.navStuff.helpers({
username: function() {
     var userId = Meteor.userId();
     var user = Meteor.findOne(userId);
    if (user.profile.name == "undefined"){
        // return user.emails[0].address;
        return "meee";
    }
    else {
        return user.profile.name;
    }
}
})*/

/*Template.registerHelper("timeStamp", function(id) {
    var videoTime = Videos.findOne(id).getTime();
    var dateNow = new Date();
    var timeNow = dateNow.getTime();
    var check = "here";
    return check;
    // var timeBetween = timeNow - videoTime;
})
*/
Template.registerHelper("timeStamp", function(id){
    var videoDate = Videos.findOne(id).createdAt;
    var videoTime = videoDate.getTime();
    var dateNow = new Date();
    var timeNow = dateNow.getTime();
    var timeDiff = timeNow - videoTime
    var minutes = parseInt((timeDiff/(1000*60))%60);
    var hours = parseInt((timeDiff/(1000*60*60))%24);
 
    switch(hours) {
    case 0:
        return minutes + " " + "minutes ago";
        break;
   /* case 12:
        return hours + " " + "hours ago";
        break;*/
    default:
        return hours + " " + "hours ago";
}
});
