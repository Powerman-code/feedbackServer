const express = require("express");
const router = express.Router();
const tempMessageController = require("../../controllers/tempMessageController");
// const validate = require("./validation");

router
  .get("/", tempMessageController.getMessage)

  // .post("/",
  //     // validate.createTempMessage,
  //     tempMessageController.create)

  .patch("/", tempMessageController.updateMessage);
module.exports = router;
