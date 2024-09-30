const express = require("express");
const router = express.Router();
const {
  createAttendance,
  getAllAttendance,
} = require("../controllers/attendanceController");

// Create attendance (clock-in/clock-out)
router.post("/", createAttendance);

// Get all attendance records
router.get("/", getAllAttendance);

module.exports = router;
