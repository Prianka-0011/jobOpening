const mongoose = require("mongoose");
require("dotenv").config();

let status=200;
let response={
    message:null,
    data:null
}
const Job = mongoose.model(process.env.MODEL_NAME)
// const _setResponse = function(job) {
//     if (jobs && jobs.length > 0) {
//         response.status = 200;
//         response.data = jobs;
//         response.message = jobs.length + " job(s) found!";  
//       } else {
//         response.status = 404;
//         response.data = null;
//         response.message = "No jobs found!";  
//       }
// }

const _setError = function(error) {
    status = error;
    response.message = "an error occure while featching data."
} 
const  getAll = function(req,res) {
    console.log("getAll called");
    let query = {};
    let offset = 0;
    let count = 10;
    if (req.query.search) {
      query = { "skills": { $regex: new RegExp(req.query.search, "i") } };
    }
    if (req.query.offset) {
      offset = req.query.offset;
    }
    if (req.query.count) {
        count = req.query.count;
    }

    Job.find(query)
    .skip(offset)
    .limit(count)
    .exec()
    .then((jobs) => {
      if (jobs && jobs.length > 0) {
        response.status = 200;
        response.data = jobs;
        response.message = jobs.length + " job(s) found!";  
      } else {
        response.status = 404;
        response.data = null;
        response.message = "No jobs found!";  
      }
    })
    .catch((error) => {
      response.status = 500;
      response.message = error;
      response.data = null;
    })
    .finally(() => {
      res.status(response.status).json(response);
    });
}


const save = function(req ,res) {
    console.log("Job Save");
    const _setResponse = function(job){
        console.log("Job Save",job);
        status = 200;
        response.data = job;
        response.message = "New job create successfully"
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
            response.data = job;
            response.message="One record found";

        }else{
            status=404;
            response.message="Not found";
        }
        }
        const _setError = function(error) {
            status = error;
            response.message = "an error occure while featching data.";
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
            response.data = job;
            response.message= "Data update successfully"

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
            response.data = job;
            response.message="partial update successfully"

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
            response.data = job;

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
const getTotalJob = function(req, res) {
    let query = {};
    if (req.query.search) {
      query = { "skills": { $regex: new RegExp(req.query.search, "i") } };
    }
    Job.find(query)
      .count()
      .then((count) => {
        response.status = 200;
        response.data = count;
        response.message = count;
      })
      .catch((error) => {
        response.status = 500;
        response.data = null;
        response.message = error;
      })
      .finally(() => {
        res.status(response.status).json(response);
      });
  }
module.exports = {
    getAll,
    save,
    getOne,
    fullUpdate,
    partialUpdate,
    deleteData,
    getTotalJob
}