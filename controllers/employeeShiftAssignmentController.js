const EmployeeShiftAssignment = require("../models/EmployeeShiftAssignment");

// Assign a shift to an employee
exports.assignShiftToEmployee = async (req, res) => {
  const { employee_id, shift_id, assigned_date } = req.body;

  try {
    const newAssignment = new EmployeeShiftAssignment({
      employee_id,
      shift_id,
      assigned_date,
    });
    await newAssignment.save();
    res.status(201).json({
      message: "Shift assigned to employee successfully",
      assignment: newAssignment,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all shift assignments
exports.getAllShiftAssignments = async (req, res) => {
  try {
    const assignments = await EmployeeShiftAssignment.find()
      .populate("employee_id")
      .populate("shift_id");
    res.status(200).json(assignments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a shift assignment by ID
exports.getShiftAssignmentById = async (req, res) => {
  try {
    const assignment = await EmployeeShiftAssignment.findById(req.params.id)
      .populate("employee_id")
      .populate("shift_id");
    if (!assignment)
      return res.status(404).json({ error: "Shift assignment not found" });
    res.status(200).json(assignment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a shift assignment by ID
exports.deleteShiftAssignment = async (req, res) => {
  try {
    const deletedAssignment = await EmployeeShiftAssignment.findByIdAndDelete(
      req.params.id
    );
    if (!deletedAssignment)
      return res.status(404).json({ error: "Shift assignment not found" });
    res.status(200).json({ message: "Shift assignment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
