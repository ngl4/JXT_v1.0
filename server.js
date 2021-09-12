// server/index.js
require('dotenv').config();
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'build')));
app.use(require("body-parser").json());

//console.log(`mongodb+srv://admin-cindy:${process.env.DB_MONGOSH_PW}@clustertestjxt.wthnh.mongodb.net/jobAppsDB`);

//LIVE AWS CLOUD STORAGE - mongoosh + mongoAtlas 
mongoose.connect(`mongodb+srv://admin-cindy:${process.env.DB_MONGOSH_PW}@clustertestjxt.wthnh.mongodb.net/jxtrackDB`, {useNewUrlParser: true, useUnifiedTopology: true}); 

// LOCAL STORAGE
//mongoose.connect('mongodb://localhost:27017/jxtrackDB', {useNewUrlParser: true, useUnifiedTopology: true}) 

const jobAppSchema = new mongoose.Schema ({
  companyName: String,
  jobURL: String,
  status: String,
  applyDate: String,
  appliedDate: String,
  phoneCallDate: String,
  interviewDate: String
}); 

const JobApp = mongoose.model('JobApp', jobAppSchema);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// API ENDPOINT
app.get("/api", (req, res) => {
    res.json({ message: "JXT 2021" });
  });

app.post("/create", (req, res) => {
  console.log(req.body);

  const jobApp = new JobApp ({
    companyName: req.body.companyName,
    jobURL: req.body.jobURL,
    status: req.body.status,
    applyDate: req.body.applyDate,
    appliedDate: req.body.appliedDate,
    phoneCallDate: req.body.phoneCallDate,
    interviewDate: req.body.interviewDate   
  });

  jobApp.save();

  res.json({message: "Successfully Saved To Your Job Track World!"});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});