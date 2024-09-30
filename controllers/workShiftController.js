const WorkShift = require("../models/WorkShift");

// Create a new work shift
exports.createWorkShift = async (req, res) => {
  const {
    shift_start_time,
    shift_end_time,
    break_duration,
    shift_type,
    allowed_extension,
  } = req.body;

  try {
    const newShift = new WorkShift({
      shift_start_time,
      shift_end_time,
      break_duration,
      shift_type,
      allowed_extension,
    });
    await newShift.save();
    res
      .status(201)
      .json({ message: "Work shift created successfully", shift: newShift });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all work shifts
exports.getAllWorkShifts = async (req, res) => {
  try {
    const shifts = await WorkShift.find();
    res.status(200).json(shifts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single work shift by ID
exports.getWorkShiftById = async (req, res) => {
  try {
    const shift = await WorkShift.findById(req.params.id);
    if (!shift) return res.status(404).json({ error: "Work shift not found" });
    res.status(200).json(shift);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a work shift by ID
exports.updateWorkShift = async (req, res) => {
  try {
    const updatedShift = await WorkShift.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedShift)
      return res.status(404).json({ error: "Work shift not found" });
    res.status(200).json({
      message: "Work shift updated successfully",
      shift: updatedShift,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a work shift by ID
exports.deleteWorkShift = async (req, res) => {
  try {
    const deletedShift = await WorkShift.findByIdAndDelete(req.params.id);
    if (!deletedShift)
      return res.status(404).json({ error: "Work shift not found" });
    res.status(200).json({ message: "Work shift deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
