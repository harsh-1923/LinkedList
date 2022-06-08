const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    required: false,
  },
  categories: {
    type: JSON,
    default: {
      Misc: ["Link 1"],
    },
  },
});

module.exports = mongoose.model("User", UserSchema);
