// var mysql = require('mysql');
 const express = require("express");
// const bodyparser= require("body-parser");

 const app = express();
 app.use(express.json());
// app.use(bodyparser.urlencoded({extended: true}));
// var source ;
// var destination;



// app.get("/",function(req,res)
// {
//   res.sendFile(__dirname+"/index.html");
// })


// app.post("/", function(req,res)
// {  
//      source =req.body.source;
//    destination = req.body.destination;
//    console.log(source);
//    console.log(destination);

// });




// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Timmavaidya@123",
//   database: "timma"
// });














app.listen(64110, function(){

    console.log("Server is running");
  
  }
  );
  
