var express = require("express");
var burger = require("../models/burger");

var router = express.Router();


router.get("/", function (req, res){
    burger.selectAll(function (data) {
        //console.log(data);
        res.render("index", {burgers: data});
    });
});

router.post("/burgers/insert", function (req, res){
    console.log(req.body);

    burger.insertOne(req.body, function (data) {
        res.redirect("/")  
    });
});

router.put("/burgers:id", function (req, res){
    burger.updateOne({ devoured: 1 }, req.params.id, function (data){
        res.sendStatus(200);
    });
});

module.exports = router;