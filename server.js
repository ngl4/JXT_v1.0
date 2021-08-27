// server/index.js
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'build')));

mongoose.connect('mongodb://localhost:27017/testDB', {useNewUrlParser: true, useUnifiedTopology: true});

const User = mongoose.model('User', { _id: Number, name: String, age: Number });

const user = new User ({ //create a new user specific data 
  _id: 2,
  name: "Victor",
  age: 59
});

user.save(); //TODO: THIS IS NOT WORKING YET AND THE TESTDB USER MODEL IS NOT UPDATED?? 
//-- maybe consider inserting a new user instead of creating a new user 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// API ENDPOINT
app.get("/api", (req, res) => {
    res.json({ message: "JXT copyright 2021" });
  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});