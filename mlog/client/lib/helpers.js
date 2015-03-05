Template.registerHelper("video", function(){
    return Videos.find({}, {sort: {createdAt: -1}});
});

Template.registerHelper("showComments", function(id){
    return Comments.find({videoId: id});
});
Template.registerHelper("commentsCount", function(id){
    return Comments.find({videoId: id}).count();
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
    /*if(hours > 1) {
    return hours + " " + "hours ago";
    }
    else if(minutes < 60) {
        return minutes + " " + "minutes ago";
    }*/
   /* switch(hours){
    case 12:
    return hours + " " + "hours ago";
    break;
    case 14:
    return minutes + " " + "minutes ago";
    break;
    }*/
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
