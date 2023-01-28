const mongoose = require("mongoose");
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://bmicalci:bmicalci@cluster0.foxshlp.mongodb.net/?retryWrites=true&w=majority"
  );
};
module.exports = connect;
