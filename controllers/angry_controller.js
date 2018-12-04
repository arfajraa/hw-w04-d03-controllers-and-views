var express = require("express");
var router = express.Router();

var birdData = require("../modules/angry_birds");

router.get("/", function(req, res){
    var mustacheVariables = {
        theBirds: birdData.birds
    }
    res.render("./angry_index", mustacheVariables);
})

router.get("/:id", function(req, res){
    var birdID = req.params.id;
    var mustacheVariables = {
        name: birdData.birds[birdID].name,
        ability: birdData.birds[birdID].abilities,
        image: birdData.birds[birdID].image,
        group: birdData.birds[birdID].group
    }
    res.render("./show", mustacheVariables);
})


module.exports = router;