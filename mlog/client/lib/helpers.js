Template.registerHelper("video", function(){
    return Videos.find();
});

Template.registerHelper("showComments", function(id){
    return Comments.find({videoId: id});
});