Router.configure({  
  layoutTemplate: 'masterLayout'
});

Router.route("/", function() {
    this.render("home");
},
{   name: "home",
    data: function() {
      return {
        videos: Videos.find({}, {sort: {createdAt: -1}, limit: 3})
      }
    }
})

Router.route("user/profile", function() {
    this.render("userProfile");
 },
 {  name: "userProfile"
});

Router.route("/videos", function() {
  this.render("videobox");
},
{   name: "videos",
    data: function() {
      return {
        // videos: Videos.find({}, {sort: {createdAt: -1}}),
        videos: myPagination.find({}, {itemsPerPage:6}),
        header: "ALL VIDEOS"
    }
    } 
})

Router.route("/mestfun", function() {
  this.render("videobox");
},
{   name: "mestFun",
    data: function() {
      return {
        videos: Videos.find({tags: "Mest Fun"}, {sort: {createdAt: -1}}),
        header: "MEST FUN VIDEOS"
    }
    } 
})

Router.route("/mestpitches", function() {
  this.render("videobox");
},
{   name: "mestPitches",
    data: function() {
      return {
        videos: Videos.find({tags: "Mest Pitches"}, {sort: {createdAt: -1}}),
        header: "MEST PITCH VIDEOS"
    }
    } 
})

Router.route("/mestevents", function() {
  this.render("videobox");
},
{   name: "mestEvents",
    data: function() {
      return {
        videos: Videos.find({tags: "Mest Events"}, {sort: {createdAt: -1}}),
        header: "MEST EVENT VIDEOS"
    }
    } 
})

Router.route("/mestrandom", function() {
  this.render("videobox");
},
{   name: "mestRandom",
    data: function() {
      return {
        videos: Videos.find({tags: "Mest Random"}, {sort: {createdAt: -1}}),
        header: "MEST RANDOM VIDEOS"
    }
    } 
})

Router.route("/mesttravels", function() {
  this.render("videobox");
},
{   name: "mestTravels",
    data: function() {
      return {
        videos: Videos.find({tags: "Mest Travels"}, {sort: {createdAt: -1}}),
        header: "MEST TRAVEL VIDEOS"
    }
    } 
})

Router.route("/mestwinners", function() {
  this.render("videobox");
},
{   name: "mestWinners",
    data: function() {
      return {
        videos: Videos.find({tags: "Mest Winners"}, {sort: {createdAt: -1}}),
        header: "MEST WINNERS VIDEOS"
    }
    } 
})

Router.route("/mestgoodbyes", function() {
  this.render("videobox");
},
{   name: "mestGoodbyes",
    data: function() {
      return {
        videos: Videos.find({tags: "Mest Goodbyes"}, {sort: {createdAt: -1}}),
        header: "MEST GOODBYE VIDEOS"
    }
    } 

})

Router.route("/mestintros", function() {
  this.render("videobox");
},
{   name: "mestIntros",
    data: function() {
      return {
        videos: Videos.find({tags: "Mest Intros"}, {sort: {createdAt: -1}}),
        header: "MEST NEW INTRODUCTION VIDEOS"
    }
    } 

})

Router.route("/mestlove", function() {
  this.render("videobox");
},
{   name: "mestLove",
    data: function() {
      return {
        videos: Videos.find({tags: "Mest Love"}, {sort: {createdAt: -1}}),
        header: "MEST LOVE VIDEOS"
    }
    } 

})


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
