var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.listen(3000, function () {
    console.log("yelp camp has started");
});

var campground = [{
        name: "michaelcreek",
        image: "/images/fire.jpg",
    },
    {
        name: "michaeltango",
        image: "https://www.flickr.com/photos/10010757@N06/13779584724/in/photolist-mZDYsY-8npYpY-r9aTwZ-foqRDR-VH2ojk-9QuTmx-SgwKnX-bLqqgr-bqvCrq-8yjkuf-4qTPYw-8MwTGB-2ZeTE-3ZCh6m-8MwTyF-2972tdJ-28Bh3Bo-qwMD9Z-mZCkZF-22PpXgg-a6neK8-75Wxi1-28nbThC-23ntSku-ruJ1oP-rdWw8N-eqyC6z-6iAsnu-aAqSow-a6eNya-nXH76z-FB4mx6-mwXKf2-ufNRb-72FS36-p3WGD-hpV8aU-qzyoDd-5QYoME-7dL8s9-aAo7wZ-aZv7va-9L6C2t-Z2JGYx-VbEW5U-UN2eCJ-UTLGfz-dH156b-Tkw8j9-SWzUMu"
    },
    {
        name: "michaeldfdsf",
        image: "https://www.flickr.com/photos/118237276@N08/16100962341/in/photolist-qwMD9Z-mZCkZF-22PpXgg-a6neK8-75Wxi1-28nbThC-23ntSku-ruJ1oP-rdWw8N-eqyC6z-6iAsnu-aAqSow-a6eNya-nXH76z-FB4mx6-mwXKf2-ufNRb-72FS36-p3WGD-hpV8aU-qzyoDd-5QYoME-7dL8s9-aAo7wZ-aZv7va-9L6C2t-Z2JGYx-VbEW5U-UN2eCJ-UTLGfz-dH156b-Tkw8j9-SWzUMu-5ZgNvF-253cRGQ-8PyJY-q1r75N-aAqhGL-aZv3PK-8VBrhX-cfThTU-9GDDGo-9R77yE-9SdL7S-mGCYhT-UTu8Ae-vrxu-9Uq1Q9-6qZZBz-9R4ev6"
    },
    {
        name: "michael",
        image: "https://www.flickr.com/photos/141325578@N06/25994645731/in/photolist-FB4mx6-mwXKf2-ufNRb-72FS36-p3WGD-hpV8aU-qzyoDd-5QYoME-7dL8s9-aAo7wZ-aZv7va-9L6C2t-Z2JGYx-VbEW5U-UN2eCJ-UTLGfz-dH156b-Tkw8j9-SWzUMu-5ZgNvF-253cRGQ-8PyJY-q1r75N-aAqhGL-aZv3PK-8VBrhX-cfThTU-9GDDGo-9R77yE-9SdL7S-mGCYhT-UTu8Ae-vrxu-9Uq1Q9-6qZZBz-9R4ev6-95ZA5C-6pWDfc-fjUeQs-UtXWeA-MYoQ3-8k7tba-23ntPrJ-WTj6Z6-Wy56mE-28op9wA-4JMjEf-od9ot9-icYSU6-UVDhvd"
    },
    {
        name: "ironman",
        image: "https://www.flickr.com/photos/141159174@N07/39624480120/in/photolist-23ntPrJ-WTj6Z6-Wy56mE-28op9wA-4JMjEf-od9ot9-icYSU6-UVDhvd-5J9JxH-3w8wZ-7pRM3t-9R7xWy-7nfRaL-aZv8or-afpngd-LYJAvu-23ntUZh-8hGMoE-aQNUYi-XU2Tn6-5x7gzG-28gERNA-bgudDn-29DrZSp-9fhKNX-7Rc7xd-e1TgEC-MYoQo-8LLCKW-9R3UGV-4JH4Hx-6t34cf-86Q4sm-afmzVx-b2X6EB-yByPi-4WtHTR-afmzFB-5jqPsE-2pZc8-icZgqN-8KcifX-9R6VW7-WT6cJP-ng5zXB-9R49Ke-5athP3-afmmkR-7euFus-4FWFsX"
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