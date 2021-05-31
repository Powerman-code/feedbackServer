const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const { HttpCode } = require("./helpers/constants");
const feedbackRouter = require("./routes/api/feedback");
const tempMessageRouter = require("./routes/api/tempMessage");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/feedback", feedbackRouter);
app.use("/api/tempMessage", tempMessageRouter);

app.use((req, res) => {
  res.status(HttpCode.NOT_FOUND).json({
    status: "error",
    code: HttpCode.NOT_FOUND,
    message: "Not found",
  });
});

app.use((err, req, res, next) => {
  const status = err.status || HttpCode.INTERNAL_SERVER_ERROR;
  res.status(status).json({
    status: status === HttpCode.INTERNAL_SERVER_ERROR ? "fail" : "error",
    code: status,
    message: err.message,
  });
});

module.exports = app;
