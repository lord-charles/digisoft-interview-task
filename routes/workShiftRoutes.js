const express = require("express");
const {
  createWorkShift,
  getAllWorkShifts,
  getWorkShiftById,
  updateWorkShift,
  deleteWorkShift,
} = require("../controllers/workShiftController");

const router = express.Router();

router.post("/", createWorkShift);
router.get("/", getAllWorkShifts);
router.get("/:id", getWorkShiftById);
router.put("/:id", updateWorkShift);
router.delete("/:id", deleteWorkShift);

module.exports = router;
