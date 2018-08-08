var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.listen(3000, function () {
    console.log("yelp camp has started");
});

var campgroundSchema = new mongoose.Schema( {
    name: String,
    image: String
});

var newCampground = mongoose.model("newCampground", campgroundSchema);



app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    newCampground.find({}, function(err, allCampgrounds) {
        if(err) {
            console.log("there error");
        } else {
            res.render("campgrounds", {campgrounds: allCampgrounds});
        }
    })
});

app.post("/campgrounds", function (req, res) {
    var name = req.body.firstname;
    var image = req.body.image;
    var newCampgroundy = {
        name: name,
        image: image
    };
    newCampground.create(newCampgroundy, function(err, newly) {
        if(err) {
            console.log("error");
        } else {
            res.redirect("/campgrounds");
        }});
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new.ejs");
});
