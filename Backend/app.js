const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/market";
const app = express();
const cors = require("cors");

mongoose.connect(url);

const conn = mongoose.connection;

conn.on("open", () => {
  console.log("connected");
});
app.use(cors());
app.use(express.json());

const partnerrouter = require("./routers/partners");
const registerrouter = require("./routers/registers");
app.use("/registers", registerrouter);
app.use("/partners", partnerrouter);
app.listen(9000, () => {
  console.log("server started");
});
