
const mongoose = require("mongoose");
const skill = mongoose.Schema ({
    name : String
})
const location = mongoose.Schema({
 cordinators: {
     type:[Number],
     index:"2"    
    }
 
})

const jobSchema = mongoose.Schema({
    tittle:{
        type:String,
        required: [true, "Job title is required!"]
    },
    salary:Number,
    description:String,
    exprience:Number,
    skills:[String],
    postDate:Date,
    location:location
})

mongoose.model("JobOpening", jobSchema,"jobOpenings");