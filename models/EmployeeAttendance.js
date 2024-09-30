const mongoose = require("mongoose");

const employeeAttendanceSchema = new mongoose.Schema({
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
  clock_in: { type: Date, required: true },
  clock_out: { type: Date },
  time_worked: { type: Number, default: 0 }, // In minutes
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const EmployeeAttendance = mongoose.model(
  "EmployeeAttendance",
  employeeAttendanceSchema
);
module.exports = EmployeeAttendance;
