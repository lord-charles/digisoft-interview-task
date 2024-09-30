const app = require("express")();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const { notFound, errorHandler } = require("./middlewares/error-handler");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8000;
const workShiftRoutes = require("./routes/workShiftRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const employeeShiftAssignmentRoutes = require("./routes/employeeShiftAssignmentRoutes");
const employeeAttendanceRoutes = require("./routes/employeeAttendanceRoutes");
const dbConnect = require("./config/dbConnect");

dbConnect();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/workshifts", workShiftRoutes);
app.use("/employees", employeeRoutes);
app.use("/shiftassignments", employeeShiftAssignmentRoutes);
app.use("/attendance", employeeAttendanceRoutes);

//error handlers
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
