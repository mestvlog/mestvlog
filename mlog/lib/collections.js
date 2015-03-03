Videos = new Mongo.Collection("videos");

Videos.attachSchema(new SimpleSchema({
  caption: {
    type: String,
    label: "Add a caption"
  },
 /* owner: {
    type: String,
    autoform: {
      omit: true
    },
    autoValue: function() {
      if(this.isInsert) {
        return this.userId;
      }
    }
  },*/
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