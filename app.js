var express    = require("express");
var app        = express();
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");
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
    image: String,
    description: String
});

var newCampground = mongoose.model("newCampground", campgroundSchema);

// newCampground.create({
//     name: "Kioko Camping",
//     image: "/images/camp5.jpeg",
//     description: "Best Otaku campsite on the globe"
// })


//Landing page
app.get("/", function (req, res) {
    res.render("landing");
});

//Shows image/basic info of each campground in a grid
app.get("/campgrounds", function (req, res) {
    newCampground.find({}, function(err, allCampgrounds) {
        if(err) {
            console.log("there error");
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    })
});

//Sends a post request to create a new campground from user input
app.post("/campgrounds", function (req, res) {
    var name = req.body.firstname;
    var image = req.body.image;
    var description = req.body.description;
    var newCampgroundy = {
        name: name,
        image: image,
        description: description
    };
    newCampground.create(newCampgroundy, function(err, newly) {
        if(err) {
            console.log("error");
        } else {
            res.redirect("/campgrounds");
        }});
});

//Directs to new campground form
app.get("/campgrounds/new", function (req, res) {
    res.render("new.ejs");
});

//Show more info about a single campground
app.get("/campgrounds/:id", function(req,res) {
    newCampground.findById(req.params.id, function(err, foundCampground) {
        if(err) {
            console.log("error");
        } else {
            res.render("show", {campground: foundCampground});
        }
    });
});