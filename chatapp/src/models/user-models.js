const mongoose = require("mongoose");
const empSchema = new mongoose.Schema({
  empName: {
    type: String,
    required: true,
  },
  empEmail: {
    type: String,
    required: true,
    unique: true,
  },
  empPassword: {
    type: String,
    required: true,
  },
});

const Emp = mongoose.model("Emp", empSchema);

module.exports = Emp;
