var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("landing")
});
var campgrounds = [
        {name:"Night Stars", image:"https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144394f7c378aeeab0_340.jpg"},
        {name:"Northern Lights", image:"https://pixabay.com/get/eb37b9082df3003ed1584d05fb1d4e97e07ee3d21cac104497f1c67ba0eab2bf_340.jpg"},
        {name:"Vermilion", image:"https://farm8.staticflickr.com/7296/28070862692_32f82c02ba.jpg"}
]

app.get("/campgrounds", function(req,res){
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req,res){
    //get data from form and add to campgrounds array
    var name= req.body.name;
    var image= req.body.image;
    var newCampground= {name:name, image:image};
    campgrounds.push(newCampground);
    //redirect to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("YelpCamp has started!");
});