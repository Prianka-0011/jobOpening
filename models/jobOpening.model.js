
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
    description:String,
    exprience:Number,
    skills:[String],
    postDate:Date,
    location:location
})

mongoose.model("JobOpening", jobSchema,"jobOpenings");