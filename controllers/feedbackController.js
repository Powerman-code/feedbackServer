const Feedbacks = require("../model/feedbacksModel");
const { HttpCode } = require("../helpers/constants");

const getAll = async (req, res, next) => {
  try {
    const allFeedbacks = await Feedbacks.getFeedbacks();

    return res.status(HttpCode.OK).json({
      status: "success",
      code: HttpCode.OK,
      data: [...allFeedbacks],
    });
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  try {
    const feedback = await Feedbacks.create(req.body);
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

module.exports = {
  getAll,
  create,
};
