const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller")
const locationController = require("../controllers/location.controller");
const { get } = require("mongoose");

router.route("/totalJobCount")
      
      .get(jobController.getTotalJob)
      

router.route("/jobs")
      .get(jobController.getAll)
      
      .post(jobController.save)


router.route("/jobs/:jobId")
    .get(jobController.getOne)
    .delete(jobController.deleteData)
    .put(jobController.fullUpdate)
    .patch(jobController.partialUpdate)

router.route("/jobs/:jobId/location").get(locationController.getAll);
router.route("/jobs/:jobId/location").post(locationController.save);
router.route("/jobs/:jobId/location/:locationId").get(locationController.getOne);



module.exports= router;