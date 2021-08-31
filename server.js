// server/index.js
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'build')));

mongoose.connect('mongodb://localhost:27017/jxtrackDB', {useNewUrlParser: true, useUnifiedTopology: true});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// API ENDPOINT
app.get("/api", (req, res) => {
    res.json({ message: "JXT copyright 2021" });
  });

// Test - post to the database 
app.post("/create", (req, res) => {
  
  console.log(req); 
  // const userSchema = new mongoose.Schema ({
  //   username: String, 
  //   password: String
  // }); 

  // const User = mongoose.model('User', userSchema);

});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});