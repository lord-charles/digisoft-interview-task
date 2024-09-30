const express = require("express");
const {
  assignShiftToEmployee,
  getAllShiftAssignments,
  getShiftAssignmentById,
  deleteShiftAssignment,
} = require("../controllers/employeeShiftAssignmentController");
const router = express.Router();

router.post("/", assignShiftToEmployee);
router.get("/", getAllShiftAssignments);
router.get("/:id", getShiftAssignmentById);
router.delete("/:id", deleteShiftAssignment);

module.exports = router;
