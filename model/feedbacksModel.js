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

module.exports = {
  getFeedbacks,
  create,
};
