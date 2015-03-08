Videos = new Mongo.Collection("videos");

Videos.attachSchema(new SimpleSchema({
  videoUrl: {
    type: String,
    label: "choose files",
    autoform: {
       afFieldInput: {
        type: "file",
        multiple: true,
        id: "video"
      }
    }
  },

  tags: {
    type: [String],
    autoform: {
      type: "selectize",
      afFieldInput: {
        multiple: true,
        firstOption: "(Select tags)"
      }
    }
  },

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
    type: String
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