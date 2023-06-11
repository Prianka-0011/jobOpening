require("./data/jobOpeningDataConnection")
const express = require("express");
const app = express();
const router = require("./routers/router")
require("dotenv").config();
app.use(express.json())


app.use("/api",router);
const server = app.listen(process.env.PORT, "localhost", ()=>{
    console.log("server is running on this : " + server.address().port);
})