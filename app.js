const express = require("express");
const app = express();
const router = require("./public/Routes/router");
const connectDB = require("./public/db/connect");
require("dotenv").config();

app.use("/api/v1/tasks", router);

const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is Listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
// app.get("/", (req, res) => {
//   res.send("hello express");
// });
