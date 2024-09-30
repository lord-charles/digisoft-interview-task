const { default: mongoose } = require("mongoose");
const dbConnect = () => {
  //connection to db
  mongoose.set("strictQuery", true);
  mongoose
    .connect(
      "mongodb+srv://charles:0000@cluster0.k7dvt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("connection to db sucessfull...");
    })
    .catch((err) => {
      console.log("connection failed", err);
    });
};
module.exports = dbConnect;
