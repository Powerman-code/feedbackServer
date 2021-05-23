const express = require("express");
const router = express.Router();
const feedbackController = require("../../controllers/feedbackController");
const validate = require("./validation");

router
  .get("/", feedbackController.getAll)

  .post("/", validate.createFeedback, feedbackController.create);

// router.delete("/:contactId", guard, contactsController.remove);

// router
//   .get(
//     "/:contactId",
//     guard,
//     validate.queryMongoIdValid("contactId"),
//     contactsController.getById
//   )

//   .delete("/:contactId", guard, contactsController.remove)

//   .patch(
//     "/:contactId",
//     guard,
//     validate.queryMongoIdValid("contactId"),
//     validate.updateContact,
//     contactsController.update
//   );

module.exports = router;
