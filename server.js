// server/index.js
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'build')));
app.use(require("body-parser").json());

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
  console.log("here");
  console.log(req.body); 
 
  const userSchema = new mongoose.Schema ({
    username: String, 
    password: String
  }); 

  const User = mongoose.model('User', userSchema);

  const user = new User ({
    username: req.body.username,
    password: req.body.password
  });
  
  user.save(); //TODO: Issue why is it not saving in the User folder, but inside Collections folder?? 

  res.json({message: "Saved to DB"});

});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});