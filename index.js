var express = require("express");
var app = express();
var mustache = require("mustache-express");
var port = 3000;

var angryController = require("./controllers/angry_controller");

app.engine("html", mustache());
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use("/angry_birds", angryController);

app.get("/", function(req, res){
    res.render("./index.html");
})


app.listen(3000, function(){
    console.log("listening on port: " + port);
})