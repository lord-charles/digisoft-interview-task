const mongoose = require("mongoose");

const employeeShiftAssignmentSchema = new mongoose.Schema({
  employee_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  shift_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "WorkShift",
    required: true,
  },
  assigned_date: { type: Date, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const EmployeeShiftAssignment = mongoose.model(
  "EmployeeShiftAssignment",
  employeeShiftAssignmentSchema
);
module.exports = EmployeeShiftAssignment;
