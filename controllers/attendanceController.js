const Attendance = require("../models/Attendance");
const ShiftAssignment = require("../models/EmployeeShiftAssignment");
const Employee = require("../models/Employee");

// Create new attendance (clock-in/clock-out)
const createAttendance = async (req, res) => {
  try {
    const { employee_id, clock_in, clock_out, attendance_date } = req.body;

    // Validate if employee exists
    const employee = await Employee.findById(employee_id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Find the shift assignment for the employee on the given date
    const shiftAssignment = await ShiftAssignment.findOne({
      employee_id,
      assigned_date: attendance_date,
    });

    if (!shiftAssignment) {
      return res.status(404).json({
        message: "Shift assignment not found for the employee on this date",
      });
    }

    // Create the attendance record
    const attendance = new Attendance({
      employee_id,
      shift_id: shiftAssignment.shift_id,
      clock_in,
      clock_out,
      attendance_date,
    });

    await attendance.save();

    res.status(201).json({
      message: "Attendance recorded successfully",
      attendance,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to record attendance", error: error.message });
  }
};

// Get all attendance records
const getAllAttendance = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find().populate(
      "employee_id shift_id"
    );
    res.status(200).json(attendanceRecords);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch attendance records",
      error: error.message,
    });
  }
};

module.exports = {
  createAttendance,
  getAllAttendance,
};
