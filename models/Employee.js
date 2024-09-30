const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employee_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
