const mongoose = require("mongodb");

const connectDB = (url) => {
  return mongoose.connect(url, {
    useUnifiedTopology: true,
  });
  // .then(() => {
  //   console.log("Connected to DB...");
  // })
  // .catch((err) => console.log(err));
};
module.exports = connectDB;
