const mongoose= require("mongoose");
require("dotenv").config();
const Job = mongoose.model(process.env.MODEL_NAME)

const getAll = function(req,res) {
   // console.log("fbbn")
Job.findById(req.params.jobId).exec().then((jobs) => {
   // console.log(jobs.skills)
})
.catch((error)=> {
    console.log(error)
})


}
// const save =function(req,res){
//     console.log(req.body);
//     const name = req.body.hh;
//     Job.findById(req.params.jobId)
//     .exec()
//     .then(job => {
//       if (job) {
//         job.location.push("poiiio"); // Add the new skill to the skills array
//         return job.save(); // Save the modified job document
//       } else {
//         throw new Error("Job not found");
//       }
//     })
// }
//const skillToUpdate = job.skills.id(skillId);

const save =function(req,res){
    console.log(req.body);
    const name = req.body.hh;
    Job.findById(req.params.jobId)
    .exec()
    .then(job => {
      if (job) {
        console.log(job.location)
        job.location=req.body; // Add the new skill to the skills array
        return job.save(); // Save the modified job document
      } else {
        throw new Error("Job not found");
      }
    })
}
const getOne = function(req, res) {
  //console.log("jf" + req.params.locationId);
  Job.findById(req.params.jobId)
    .exec()
    .then((job) => {
   
      console.log("fdhdsfkhfsfh" + job);
      const location = job.location;
      console.log("jf" +location)
    })
    .catch((error) => {
      // Handle the error here
    });
};


module.exports = {
    getAll,
    save,
    getOne
}