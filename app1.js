var express = require("express");
var app1 = express()
app1.get("/",function(req,resp){
    resp.send("how u doing ");
})
app1.get("/login",function(req,resp){
    resp.send("jai jinendra ");
})
app1.listen(1111);
console.log("server is running at portno 1111");