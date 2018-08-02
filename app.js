var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.listen(3000, function () {
    console.log("yelp camp has started");
});

var campground = [{
        name: "michaelcreek",
        image: "images/camp1.jpeg"
    },
    {
        name: "michaeltango",
        image: "images/camp2.jpeg"
    },
    {
        name: "michaeldfdsf",
        image: "images/camp3.jpeg"
    },
    {
        name: "michael",
        image: "images/camp4.jpeg"
    },
    {
        name: "ironman",
        image: "images/camp5.jpeg"
    }
];

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    res.render("campgrounds", {campgrounds: campground});
});

app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campground.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res) {
    res.render("new.ejs");
});