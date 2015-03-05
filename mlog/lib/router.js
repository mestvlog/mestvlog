Router.configure({  
  layoutTemplate: 'masterLayout'
});

Router.route("/", function() {
    this.render("home");
},
{   name: "home"
})

Router.route("user/profile", function() {
    this.render("userProfile");
 },
 {  name: "userProfile"
});


// Router.route('/video/details/:_id', {
//   name: 'videoDetails',
//   template: 'videoDetails',
//   data: function() {
//     var _id = this.params._id;
//     return {
//       meee:  Videos.findOne(_id).fetch
//     }
//   }
// })

Router.route('/video/details/:_id', {
  name: 'videoDetails',
  template: 'videoDetails',
  data: function() {
    var _id = this.params._id;
    return {
      job: Videos.findOne(_id),
      path: "Post",
      action: "View"
    }
  }
});
