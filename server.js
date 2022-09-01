const { response } = require("express");
const express = require("express");
const app = express();

app.get("/about", function(request, response){
    response.send("Hello Pundreek !");
});

app.get("/contact", function(req, res){
    res.send("pundreeksaurabh@gmail.com");
});

app.get("/", function(req, res){
    res.send("<h1>home page</h1>");
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});