Template.registerHelper("video", function(){
    return Videos.find({}, {sort: {createdAt: -1}});
});

Template.registerHelper("showComments", function(id){
    return Comments.find({videoId: id});
});
Template.registerHelper("commentsCount", function(id){
    return Comments.find({videoId: id}).count();
});

Template.userProfile.helpers({
    username: function() {
        var userId = Meteor.userId();
       return Meteor.users.findOne(userId).profile.name;
    }
});

Template.navStuff.helpers({
username: function() {
     var userId = Meteor.userId();
    return Meteor.users.findOne(userId).profile.name;
}
})