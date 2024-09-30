const mongoose = require("mongoose");

const workShiftSchema = new mongoose.Schema({
  //   shift_id: { type: Number, required: true, unique: true }, // mongodb will create automatically
  shift_start_time: { type: String, required: true },
  shift_end_time: { type: String, required: true },
  break_duration: { type: Number, required: true },
  shift_type: {
    type: String,
    enum: ["morning", "afternoon", "night"],
    required: true,
  },
  allowed_extension: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const WorkShift = mongoose.model("WorkShift", workShiftSchema);
module.exports = WorkShift;
