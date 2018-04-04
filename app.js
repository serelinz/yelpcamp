var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("landing")
});
var campgrounds = [
        {name:"Snow Moutain", image:"https://images.unsplash.com/photo-1437382944886-45a9f73d4158?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3895efc1fd5d2fb67acdaee4b5d9c463&auto=format&fit=crop&w=500&q=60"},
        {name:"Lake View", image:"https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ffdbb5e90a2c129258d4540ef0f29d06&auto=format&fit=crop&w=500&q=60"},
        {name:"Vermilion", image:"https://farm8.staticflickr.com/7296/28070862692_32f82c02ba.jpg"},
        {name:"Snow Moutain", image:"https://images.unsplash.com/photo-1437382944886-45a9f73d4158?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3895efc1fd5d2fb67acdaee4b5d9c463&auto=format&fit=crop&w=500&q=60"},
        {name:"Lake View", image:"https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ffdbb5e90a2c129258d4540ef0f29d06&auto=format&fit=crop&w=500&q=60"},
        {name:"Vermilion", image:"https://farm8.staticflickr.com/7296/28070862692_32f82c02ba.jpg"},
        {name:"Snow Moutain", image:"https://images.unsplash.com/photo-1437382944886-45a9f73d4158?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3895efc1fd5d2fb67acdaee4b5d9c463&auto=format&fit=crop&w=500&q=60"},
        {name:"Lake View", image:"https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ffdbb5e90a2c129258d4540ef0f29d06&auto=format&fit=crop&w=500&q=60"},
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