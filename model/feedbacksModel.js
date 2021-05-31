const db = require("./db");
const { v4: uuidv4 } = require("uuid");

const getFeedbacks = async () => {
  return await db.get("feedbacks").value();
};

const create = async (body) => {
  const id = uuidv4();
  const record = {
    id,
    ...body,
  };
  db.get("feedbacks").push(record).write();
  return record;
};

// const update = async (id, body) => {
//   const record = await db.get("feedbacks").find({ id }).assign(body).value();
//   db.write();
//   return record.id ? record : null;
// };

module.exports = {
  getFeedbacks,
  create,
  // update,
};
