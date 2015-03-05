Videos = new Mongo.Collection("videos");

Videos.attachSchema(new SimpleSchema({
  caption: {
    type: String,
    label: "Add a caption"
  },
  owner: {
    type: String,
    autoform: {
      omit: true
    },
    autoValue: function() {
      if(this.isInsert) {
        return Meteor.userId();
      }
    }
  },
  createdAt: {
    type: Date,
    autoform: {
      omit: true
    },
    autoValue: function() {
      if(this.isInsert) {
        return new Date();
      }
    }
  }
}))

Comments = new Mongo.Collection("comments");

Comments.attachSchema(new SimpleSchema({
  comment: {
    type: String,
    label: "Comment",
    autoform: {
      rows: 5
    }
  },
  videoId: {
    type: String,
    autoform: {
      omit: true
    }
  },
   owner: {
    type: String,
    autoform: {
      omit: true
    },
      autoValue: function(){
      if (this.isInsert){
        return Meteor.userId();
      }
    }
  },
   createdAt: {
    type: Date,
    autoform: {
      omit: true
    },
    autoValue: function(){
      if (this.isInsert){
        return new Date();
      }
    }
  }
}))