const express = require("express");
const router = express.Router();
const tempMessageController = require("../../controllers/tempMessageController");
const validate = require("./validationTempMessage");

router
  .get("/", tempMessageController.getMessage)

  // .post("/",
  //     // validate.createTempMessage,
  //     tempMessageController.create)

  .patch("/", validate.updateTempMessage, tempMessageController.updateMessage);
module.exports = router;
