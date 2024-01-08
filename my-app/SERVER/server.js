

const express = require("express");
  const mongoose = require("mongoose");
  const app = express();
  const port = process.env.PORT || 5000;
  
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
    
    DATA: String,
    name: String,
    
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
      res.json(" hello");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while fetching users." });
    }
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });



























// const express = require('express')
// const mongoose = require('mongoose')
// const app = express()
// mongoose.connect('mongodb://localhost:27017//NYAAYSAHAAYAK')

// const UserSchema = new mongoose.Schema({
//     name: String,
//     age: String
// })
// const UserModel = mongoose.model("users",UserSchema)
// app.get("/getUsers", (req,res) =>{
//     UserModel.find({}).then(function(users){
//         res.json(users)
//     }).catch(function(err){
//         console.log(err)
//     })
// })
// app.listen(3001, () => {
//     console.log(`Server running on port http://localhost:3001/`);
// });



// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017//NYAAYSAHAAYAK', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const Item = require("./models/Item"); // Create the Item model

// app.get("/api/items", async (req, res) => {
//   try {
//     const items = await Item.find();
//     res.json(items);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// });

