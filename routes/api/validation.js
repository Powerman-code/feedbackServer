const Joi = require("joi");

const schemaCreateFeedback = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  text: Joi.string().min(1).max(300).required(),
});

const validate = (schema, obj, next) => {
  const { error } = schema.validate(obj);
  if (error) {
    const [{ message }] = error.details;
    return next({
      status: 400,
      message: `Field: ${message.replace(/"/g, "")} `,
    });
  }
  next();
};

module.exports.createFeedback = async (req, _res, next) => {
  return await validate(schemaCreateFeedback, req.body, next);
};
