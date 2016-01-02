var express=require("express");
var path = require("path");
var multer  = require('multer')
var upload = multer();

var app = express();

app.use(express.static(path.join(__dirname,"/public")))

app.get("/", function(req, res){
	res.sendFile("index.html");
})

app.post("/api/fileanalyse",upload.single("file"), function(req, res){
	res.send({fileSize: req.file.size + " bytes"});
})






var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log("Listening at port " + port);
})