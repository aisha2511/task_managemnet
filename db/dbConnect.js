const mongoose = require("mongoose");

module.exports.connectDB = () => {
  mongoose
    .connect("mongodb+srv://aishadavra:aishadavra@cluster0.ldzpm.mongodb.net/task-management")
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log(err, "err");
    });
};

