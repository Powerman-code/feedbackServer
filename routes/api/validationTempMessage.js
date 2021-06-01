const Joi = require("joi");

const schemaUpdateTempMessage = Joi.object({
  message: Joi.string().min(1).max(300).required(),
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

module.exports.updateTempMessage = async (req, _res, next) => {
  return await validate(schemaUpdateTempMessage, req.body, next);
};
