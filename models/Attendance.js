const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema(
  {
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
    attendance_date: {
      type: Date,
      required: true,
    },
    clock_in: {
      type: String,
      required: true,
    },
    clock_out: {
      type: String,
      default: null,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attendance", AttendanceSchema);
