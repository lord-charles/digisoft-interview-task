const Employee = require("../models/Employee");

// Create a new employee
exports.createEmployee = async (req, res) => {
  const { employee_id, name } = req.body;

  try {
    const newEmployee = new Employee({ employee_id, name });
    await newEmployee.save();
    res.status(201).json({
      message: "Employee created successfully",
      employee: newEmployee,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get an employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ error: "Employee not found" });
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update employee by ID
exports.updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEmployee)
      return res.status(404).json({ error: "Employee not found" });
    res.status(200).json({
      message: "Employee updated successfully",
      employee: updatedEmployee,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete employee by ID
exports.deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!deletedEmployee)
      return res.status(404).json({ error: "Employee not found" });
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
