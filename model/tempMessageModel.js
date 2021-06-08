const db = require("./db");

const getTempMessage = async () => {
  return await db.get("tempMessage").value();
};

const update = async (body) => {
  const id = "1";
  const record = await db.get("tempMessage").find({ id }).assign(body).value();
  db.write();
  return record;
};

module.exports = {
  getTempMessage,
  update,
};
