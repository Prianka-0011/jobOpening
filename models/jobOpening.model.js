
const mongoose = require("mongoose");
const skill = mongoose.Schema ({
    name : String
})
const location = mongoose.Schema({
 latitude:Number,
 logitude:Number
})

const jobSchema = mongoose.Schema({
    tittle:String,
    salary:Number,
    descriotion:String,
    ecprience:Number,
    skills:[String],
    postDate:Date,
    location:location
})

mongoose.model("JobOpening",jobSchema,"jobOpenings");