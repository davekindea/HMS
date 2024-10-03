// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const UserModel = require("./models/Users");

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb://127.0.0.1:27017/product");

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// // Define route to get users
// app.get("/getUsers", (req, res) => {
//   UserModel.find()
//     .then(users => res.json(users))
//     .catch(error => res.status(500).json({ error: error.message }));
// });

// const PORT = 3080;
// const server = app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// // Close MongoDB connection when Node.js process terminates
// process.on("SIGINT", () => {
//   mongoose.connection.close(() => {
//     console.log("MongoDB connection closed due to app termination");
//     process.exit(0);
//   });
// });
