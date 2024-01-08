// //   const express = require("express");
// //   const mongoose = require("mongoose");
// //   const app = express();
// // //   const port = process.env.PORT || 3002;
  
// //   mongoose.connect("mongodb://localhost:27017/NYAAYSAHAAYAK", {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   },(err)=>{
// //     if (err){
// //         console.log(err);
// //     }else{
// //         console.log("successfully conected");
// //     }
// //   })
  
// //   app.listen(3002,()=>{
// //     console.log('listening on port 3002');
// //   })




// //   const db = mongoose.connection;
  
// //   db.on("error", console.error.bind(console, "MongoDB connection error:"));
// //   db.once("open", () => {
// //     console.log("Connected to MongoDB");
// //   });
  
// //   const userSchema = new mongoose.Schema({
    
// //     Data: String,
// //     name: String,
    
// //   });
  
// //   const User = mongoose.model("User", userSchema);
  
// //   app.get("/users", async (req, res) => {
// //     try {
// //       const users = await User.find();
// //       res.json(users);
// //     } catch (error) {
// //       console.error(error);
// //       res.status(500).json({ error: "An error occurred while fetching users." });
// //     }
// //   });
  
// //   app.listen(port, () => {
// //     console.log(`Server is running on port ${port}`);
// //   });


// const { MongoClient } = require('mongodb');

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'myDatabase';

// // Create a new MongoClient
// const client = new MongoClient(url, { useUnifiedTopology: true });

// // Connect to MongoDB
// async function run() {
//     try {
//         await client.connect();
//         console.log('Connected correctly to MongoDB server');
//     } catch (err) {
//         console.log(err.stack);
//     }

//     // Close connection
//     client.close();
// }

// run().catch(console.dir);


  const express = require("express");
  const mongoose = require("mongoose");
  const app = express();
  const port = process.env.PORT || 4000;
  
  mongoose.connect("mongodb://localhost:27017/NYAAYSAHAAYAK", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;
  
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
  });
  
  const userSchema = new mongoose.Schema({
    
    name: String,
    DATA: String,
    
  });
  
  const User = mongoose.model("User", userSchema);

  const legalSchema = new mongoose.Schema({
    
    name: String,
    DATA: String,
    
  });
  
  const Legalinfo = mongoose.model("Legalinfo", legalSchema);
  
  app.get("/Legalinfo", async (req, res) => {
    try {
      const legals = await Legalinfo.find();
      res.json(legals);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while fetching users." });
    }
  });
  app.get("/api/data", async (req, res) => {
    try {
      // const users = await User.find();
      res.json(" hello Welcome to Backend Server");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while fetching users." });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });