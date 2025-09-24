const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    StudentName: {
      type: String,
    },
    role: {
      type: String,
      enum: ["teacher", "student"],
      required: true,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
