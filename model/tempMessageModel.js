const db = require("./db");
const { v4: uuidv4 } = require("uuid");
const { object } = require("joi");

const getTempMessage = async () => {
  return await db.get("tempMessage").value();
};

// const create = async (body) => {
//   const id = uuidv4();
//   const record = {
//     id,
//     ...body,
//   };
//   db.get("feedbacks").push(record).write();
//   return record;
// };

const update = async (body) => {
  const id = "1";
  const record = await db.get("tempMessage").find({ id }).assign(body).value();
  db.write();
  return record;
};

module.exports = {
  getTempMessage,
  // create,
  update,
};
