const tempMessage = require("../model/tempMessageModel");
const { HttpCode } = require("../helpers/constants");

const getMessage = async (req, res, next) => {
  try {
    const message = await tempMessage.getTempMessage();

    return res.status(HttpCode.OK).json({
      status: "success",
      code: HttpCode.OK,
      data: message,
    });
  } catch (e) {
    next(e);
  }
};

const updateMessage = async (req, res, next) => {
  try {
    if (req.body) {
      const message = await tempMessage.update(req.body);
      console.log(
        "🚀 ~ file: tempMessageController.js ~ line 24 ~ updateMessage ~ req.body",
        req.body
      );
      return res.status(200).json({
        status: "success",
        code: 200,
        data: message,
      });
    } else {
      return res.status(404).json({
        status: "error",
        code: 404,
        data: { message: "Data not found" },
      });
    }
  } catch (e) {
    next(e);
  }
};

// const create = async (req, res, next) => {
//   try {
//     const feedback = await Feedbacks.create(req.body);
//     // const userId = req.user.id;
//     // const contact = await Contacts.addContact({ ...req.body, owner: userId });
//     return res.status(HttpCode.CREATED).json({
//       status: "success",
//       code: HttpCode.CREATED,
//       data: {
//         feedback,
//       },
//     });
//   } catch (e) {
//     next(e);
//   }
// };

// const createTemporraryMessage = async (req, res, next) => {
//   const tempRecord = db.g;
//   try {
//   } catch (error) {
//     next(error);
//   }
// };

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
  getMessage,
  updateMessage,
  //   remove,
  //   create,
};
