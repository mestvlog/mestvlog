Router.configure({  
  layoutTemplate: 'masterLayout'
});

Router.route("/", function() {
    this.render("home");
},
{   name: "home",
    waitOn: function(){
      return [
        Meteor.subscribe("topVideos")
      ]
    },
    data: function() {
      return {
        videos: Videos.find().fetch()
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
    waitOn: function() {
      return [
        Meteor.subscribe("allVideos")
      ]
    },
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
    waitOn: function() {
      return Meteor.subscribe("mestFunVids");
    },
    data: function() {
      return {
        videos: myPagination.find({}, {itemsPerPage:6}),
        header: "MEST FUN VIDEOS"
    }
    } 
})

Router.route("/mestpitches", function() {
  this.render("videobox");
},
{   name: "mestPitches",
    waitOn: function() {
      return Meteor.subscribe("mestPitches");
  },
    data: function() {
      return {
        videos:  myPagination.find({}, {itemsPerPage:6}),
        header: "MEST PITCH VIDEOS"
    };
    } 
})

Router.route("/mestevents", function() {
  this.render("videobox");
},
{   name: "mestEvents",
    waitOn: function() {
      return Meteor.subscribe("mestEvents");
    },
    data: function() {
      return {
        videos: myPagination.find({}, {itemsPerPage:6}),
        header: "MEST EVENT VIDEOS"
    };
    } 
})

Router.route("/mestrandom", function() {
  this.render("videobox");
},
{   name: "mestRandom",
    waitOn: function() {
      return Meteor.subscribe("mestRandom");
    },
    data: function() {
      return {
        videos: myPagination.find({}, {itemsPerPage:6}),
        header: "MEST RANDOM VIDEOS"
    };
    } 
})

Router.route("/mesttravels", function() {
  this.render("videobox");
},
{   name: "mestTravels",
    waitOn: function() {
      return Meteor.subscribe("mestTravels");
    },
    data: function() {
      return {
        videos: myPagination.find({}, {itemsPerPage:6}),
        header: "MEST TRAVEL VIDEOS"
    };
    } 
})

Router.route("/mestwinners", function() {
  this.render("videobox");
},
{   name: "mestWinners",
    waitOn: function() {
      return Meteor.subscribe("mestWinners")
    },
    data: function() {
      return {
        videos:  myPagination.find({}, {itemsPerPage:6}),
        header: "MEST WINNERS VIDEOS"
    }
    } 
})

Router.route("/mestgoodbyes", function() {
  this.render("videobox");
},
{   name: "mestGoodbyes",
    waitOn: function() {
      return Meteor.subscribe("mestGoodbyes")
    },
    data: function() {
      return {
        videos: myPagination.find({}, {itemsPerPage:6}),
        header: "MEST GOODBYE VIDEOS"
    }
    } 

})

Router.route("/mestintros", function() {
  this.render("videobox");
},
{   name: "mestIntros",
    waitOn: function() {
      return Meteor.subscribe("mestIntros")
    },
    data: function() {
      return {
        videos: myPagination.find({}, {itemsPerPage:6}),
        header: "MEST NEW INTRODUCTION VIDEOS"
    }
    } 

})

Router.route("/mestlove", function() {
  this.render("videobox");
},
{   name: "mestLove",
    waitOn: function() {
      return Meteor.subscribe("mestLove")
    },
    data: function() {
      return {
        videos:  myPagination.find({}, {itemsPerPage:6}),
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
