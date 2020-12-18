var express = require("express");

let server = express();

server.get("/",(req,res,next)=>{

    res.send("Hello, I am here to serve you");
});

server.listen("process.env.PORT" ||3000,()=>{

    console.log("server is running on port 3000");
});
