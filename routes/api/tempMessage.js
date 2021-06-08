const express = require("express");
const router = express.Router();
const tempMessageController = require("../../controllers/tempMessageController");

router
  .get("/", tempMessageController.getMessage)

  .patch("/", tempMessageController.updateMessage);
module.exports = router;
