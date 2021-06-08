const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./model/feedbacks.json");
const db = low(adapter);

db.defaults({ tempMessage: [], feedbacks: [] }).write();

module.exports = db;
