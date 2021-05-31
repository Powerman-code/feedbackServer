const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./model/feedbacks.json");
const db = low(adapter);

db.defaults({ tempMessage: [], feedbacks: [] }).write();

module.exports = db;

// const path = require("path");
// const { Low, JSONFile } = require("lowdb");

// const file = path.join(__dirname, "./model/feedbacks.json");
// const adapter = new JSONFile(file);
// const db = new Low(adapter);
// const { feedbacks } = db.data;
// // db.data ||= { feedbacks: [] };

// module.exports = db;
