const mongoose = require("mongoose");
require("../models/jobOpening.model")
require("dotenv").config();

const _mongooshConnectionResponse = function(res) {
    console.log("database connection success");
}
const _mongoConnectionErrorHandling = function(err) {
    console.log(err);
}
mongoose.connect(process.env.DATABASE_URL).then((res)=>_mongooshConnectionResponse(res))
.catch((err)=>_mongoConnectionErrorHandling(err));

