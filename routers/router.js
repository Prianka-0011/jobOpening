const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller")
const locationController = require("../controllers/location.controller");
const userController = require("../controllers/user.controller")
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


//login
router.route("/login")
.post(userController.login)

module.exports= router;
