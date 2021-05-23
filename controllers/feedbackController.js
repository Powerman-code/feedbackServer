const Feedbacks = require("../model/feedbacksModel");
const { HttpCode } = require("../helpers/constants");

const getAll = async (req, res, next) => {
  try {
    const allFeedbacks = await Feedbacks.getFeedbacks();

    return res.status(HttpCode.OK).json({
      status: "success",
      code: HttpCode.OK,
      data: { ...allFeedbacks },
    });
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  try {
    const feedback = await Feedbacks.create(req.body);
    // const userId = req.user.id;
    // const contact = await Contacts.addContact({ ...req.body, owner: userId });
    return res.status(HttpCode.CREATED).json({
      status: "success",
      code: HttpCode.CREATED,
      data: {
        feedback,
      },
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  const record = db.g;
  try {
  } catch (error) {
    next(error);
  }
};

// const remove = async (req, res, next) => {
//   try {
//     const userId = req.user.id;
//     const contact = await Contacts.removeContact(req.params.contactId, userId);
//     if (contact) {
//       return res.status(201).json({
//         status: "success",
//         code: 201,
//         data: {
//           contact,
//           message: "contact deleted",
//         },
//       });
//     } else {
//       return res.status(404).json({
//         status: "error",
//         code: 404,
//         data: { message: "Data not found" },
//       });
//     }
//   } catch (e) {
//     next(e);
//   }
// };

module.exports = {
  getAll,
  //   remove,
  create,
};
