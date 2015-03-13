Meteor.publish("topVideos", function() {
    return Videos.find({}, {sort: {createdAt: -1}, limit: 3});
})

Meteor.publish("allVideos", function() {
    return Videos.find({}, {sort: {createdAt: -1}});
})

Meteor.publish("mestFunVids", function() {
    return Videos.find({tags: "Mest Fun"}, {sort: {createdAt: -1}});
})

Meteor.publish("mestPitches", function() {
    return Videos.find({tags: "Mest Pitches"}, {sort: {createdAt: -1}});
})

Meteor.publish("mestEvents", function() {
    return Videos.find({tags: "Mest Events"}, {sort: {createdAt: -1}});
})

Meteor.publish("mestRandom", function() {
    return Videos.find({tags: "Mest Random"}, {sort: {createdAt: -1}});
})

Meteor.publish("mestTravels", function() {
    return Videos.find({tags: "Mest Travels"}, {sort: {createdAt: -1}});
})

Meteor.publish("mestWinners", function() {
    return Videos.find({tags: "Mest Winners"}, {sort: {createdAt: -1}});
})

Meteor.publish("mestGoodbyes", function() {
    return Videos.find({tags: "Mest Goodbyes"}, {sort: {createdAt: -1}});
})

Meteor.publish("mestIntros", function() {
    return Videos.find({tags: "Mest Intros"}, {sort: {createdAt: -1}});
})

Meteor.publish("mestLove", function() {
    return Videos.find({tags: "Mest Love"}, {sort: {createdAt: -1}});
})





