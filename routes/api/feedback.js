const express = require("express");
const router = express.Router();
const feedbackController = require("../../controllers/feedbackController");
const validate = require("./validation");

router
  .get("/", feedbackController.getAll)

  .post("/", validate.createFeedback, feedbackController.create);

module.exports = router;
