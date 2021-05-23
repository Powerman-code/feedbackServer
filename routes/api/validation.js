const Joi = require("joi");

const schemaCreateFeedback = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  text: Joi.string().min(1).max(300).required(),
});

// const schemaUpdateFeedback = Joi.object({
//   name: Joi.string().alphanum().min(1).max(30).optional(),
//   text: Joi.string().min(1).max(300).optional(),
// });

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

module.exports.createFeedback = (req, _res, next) => {
  return validate(schemaCreateFeedback, req.body, next);
};

// module.exports.updateContact = (req, _res, next) => {
//   return validate(schemaUpdateFeedback, req.body, next);
// };
