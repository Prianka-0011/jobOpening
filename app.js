require("./data/jobOpeningDataConnection")
const express = require("express");
const app = express();
const router = require("./routers/router")
require("dotenv").config();
app.use(express.json())
// app.use("/api", function(req, res, next) {
//     res.header('Access-Control-Allow-Origin',
//     'http://localhost:4200');
//     res.header('Access-Control-Allow-Headers', 'Origin, XRequested-With, Content-Type, Accept');
//     next();
//     })
app.use("/", function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
  
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  
    res.header(
  
      "Access-Control-Allow-Headers",
  
      "Origin, X-Requested-With, Content-Type, Accept"
  
    );
  
    next();
  
  });

app.use("/api",router);
const server = app.listen(process.env.PORT, "localhost", ()=>{
    console.log("server is running on this : " + server.address().port);
})