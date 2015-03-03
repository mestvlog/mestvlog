Router.route("/", function() {
    this.render("home");
},
{   name: "home"
})

Router.route("user/profile", function() {
    this.render("userProfile");
 },
 {  name: "userProfile"
})