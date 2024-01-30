const express = require("express");
const bodyparser = require("body-parser")
const app = express()

app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req, res){
  res.sendFile(__dirname+"/index.html")

});
console.log(__dirname+"/index.html");



app.listen(3000,function()
{

})

function submit(){
  window.location.href = "success.html"
}