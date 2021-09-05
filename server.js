// server/index.js
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'build')));
app.use(require("body-parser").json());

mongoose.connect('mongodb://localhost:27017/jxtrackDB', {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema ({
  username: String, 
  password: String
}); 

const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// API ENDPOINT
app.get("/api", (req, res) => {
    res.json({ message: "JXT copyright 2021" });
  });

// Test - SEND DATA TO DB - post to the database 
app.post("/create", (req, res) => {
  console.log("here");
  console.log(req.body); 

  const user = new User ({
    username: req.body.username,
    password: req.body.password
  });
  
  user.save(); 

  res.json({message: "Saved to DB"});

});

//Test - RETRIEVE DATA FROM DB - check if the user exist and then send info from backend storage to frontend display
app.get("/users", (req, res) => {
  //access the users model to retrieve information regarding All Users - username and password 
  User.find({}, (err, foundAllUsers) => {
    if (!err) {
      res.send({
        allUsers: foundAllUsers,
        message: "success"
      });
    }else {
      res.send(err); 
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});