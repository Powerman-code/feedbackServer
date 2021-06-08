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

module.exports = {
  getMessage,
  updateMessage,
};
