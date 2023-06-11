const mongoose = require("mongoose");
require("dotenv").config();

let status=200;
let response={
    message:null,
    data:null
}
const Job = mongoose.model(process.env.MODEL_NAME)
const _setResponse = function(job) {
status=200;
response = job;
}

const _setError = function(error) {
    status = error;
    response.message = "an error occure while featching data."
} 
const getAll = function(req,res) {
const offset=parseInt(req.query.offset);
const pageSize=parseInt(req.query.count);

    
 Job.find().skip(offset).limit(pageSize).exec().then((jobs) => _setResponse(jobs, offset, pageSize))
 .catch((error)=> _setError(error))
 .finally(()=> {
 res.status(status).json(response);

 })
} 

const save = function(req ,res) {
    console.log("Job Save");
    const _setResponse = function(job){
        console.log("Job Save",job);
        status = 200;
        response = job;
    }
    const _setError = function(error) {
        status = error;
        response.message = "an error occure while featching data."
    } 
    
    Job.create(req.body)
    .then((job) =>_setResponse(job))
    .catch((error) => _setError(error))
    .finally(() => {
        res.status(status).json(response)
    })
}

const getOne= function(req, res) {
    const _setResponse = function(job) {
        console.log("ggg")
        if (job)
        { 
            status=200;
            response = job;

        }else{
            status=404;
            response.message="Not found";
        }
        }
        const _setError = function(error) {
            status = error;
            response.message = "an error occure while featching data."
        } 
    Job.findById(req.params.jobId).exec()
    .then((job) =>_setResponse(job))
    .catch((error)=>_setError(error))
    .finally(()=> {
        res.status(status).json(response);
    })
}
const fullUpdate= function(req, res) {
    const _setResponse = function(job) {
        if (job)
        { 
            status=200;
            response = job;

        }else{
            status=404;
            response.message="Not found";
        }
       
        }
        const _setError = function(error) {
            status = error;
            response.message = "an error occure while featching data."
        } 
    Job.findOneAndReplace({_id:req.params.jobId},req.body,{new:true}).exec()
    .then((job) =>_setResponse(job))
    .catch((error)=>_setError(error))
    .finally(()=> {
        res.status(status).json(response);
    })
}
const partialUpdate= function(req, res) {
    const _setResponse = function(job) {
        if (job)
        { 
            status=200;
            response = job;

        }else{
            status=404;
            response.message="Not found";
        }
        }
        const _setError = function(error) {
            status = error;
            response.message = "an error occure while featching data."
        } 
    Job.findByIdAndUpdate(req.params.jobId,req.body,{new:true}).exec()
    .then((job) =>_setResponse(job))
    .catch((error)=>_setError(error))
    .finally(()=> {
        res.status(status).json(response);
    })
}
const deleteData= function(req, res) {
    const _setResponse = function(job) {
        if (job)
        { 
            status=200;
            response = job;

        }else{
            status=404;
            response.message="Not found";
        }
        }
        const _setError = function(error) {
            status = error;
            response.message = "an error occure while featching data."
        } 
    Job.findByIdAndDelete(req.params.jobId).exec()
    .then((job) =>_setResponse(job))
    .catch((error)=>_setError(error))
    .finally(()=> {
        res.status(status).json(response);
    })
}
module.exports = {
    getAll,
    save,
    getOne,
    fullUpdate,
    partialUpdate,
    deleteData
}