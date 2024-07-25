// const mongoose = require("mongoose");
// // const Emp = require("./models/user-models");
// // Connect to MongoDB
// mongoose.connect(process.env.Mongo_URL, {
//   tls: true,
// });

// // Handle connection events
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// //   const employee = await Emp.create({
// //     empName: "Ankur Goyal",
// //     empEmail: "test@yopmail.com",
// //   });

// //   console.log(employee)
// });

const mongoose = require('mongoose');

const dbURI = process.env.Mongo_URL

mongoose.connect(dbURI, { 
  useNewUrlParser: false, // No need for this as it's deprecated
  useUnifiedTopology: false, // No need for this as it's deprecated
  tls: true,  // Enable TLS/SSL if required by your MongoDB server
  tlsAllowInvalidCertificates: false // Adjust this based on your certificate settings
})
.then(() => console.log('Database connected successfully'))
.catch((err) => console.log('Database connection error:', err));

