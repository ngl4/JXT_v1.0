// server/index.js
require('dotenv').config();
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const uri = process.env.MONGODB_URI; //heroku config variable

app.use(express.static(path.join(__dirname, 'build')));
app.use(require("body-parser").json());

//console.log(`mongodb+srv://admin-cindy:${process.env.DB_MONGOSH_PW}@clustertestjxt.wthnh.mongodb.net/jobAppsDB`);

//LIVE AWS CLOUD STORAGE - mongoosh + mongoAtlas 
// mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}); 

// LOCAL STORAGE
mongoose.connect('mongodb://localhost:27017/jxtrackDB', {useNewUrlParser: true, useUnifiedTopology: true}) 

const jobAppSchema = new mongoose.Schema ({
  companyName: String,
  jobURL: String,
  status: String,
  statusVerbiage: String,
  statusDate: String,
  levelOfImp: String
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
    statusVerbiage: req.body.statusVerbiage,
    statusDate: req.body.statusDate  
  });

  jobApp.save();

  res.json({message: "Successfully Saved To Your Job Track World!"});
});

//GET - FindAll - Total Inserted Job Apps 
app.get("/findAll", (req, res) => {
  JobApp.find((err, foundAllJobs) => {
    if (err) {
      res.send(err);
    }else {
      res.json({
        foundAllJobs: foundAllJobs
      });
    }
  });
});

//Get - Find - Specific Status Job Apps 
app.get("/findAll/status/new", (req, res) => {
  JobApp.find({status: "New"},(err, foundNewJobs) => {
    if (err) {
      res.send(err);
    }else {
      res.json({
        foundNewJobs: foundNewJobs
      });
    }
  });
});
app.get("/findAll/status/applied", (req, res) => {
  JobApp.find({status: "Applied"},(err, foundAppliedJobs) => {
    if (err) {
      res.send(err);
    }else {
      res.json({
        foundAppliedJobs: foundAppliedJobs
      });
    }
  });
});
app.get("/findAll/status/phoneCalled", (req, res) => {
  JobApp.find({status: "Phone Call"},(err, foundPhoneCalledJobs) => {
    if (err) {
      res.send(err);
    }else {
      res.json({
        foundPhoneCalledJobs: foundPhoneCalledJobs
      });
    }
  });
});
app.get("/findAll/status/interviewed", (req, res) => {
  JobApp.find({status: "Interview"},(err, foundInterviewedJobs) => {
    if (err) {
      res.send(err);
    }else {
      res.json({
        foundInterviewedJobs: foundInterviewedJobs
      });
    }
  });
});

//PUT - Update the entire document since LevelOfImp is a new field 
app.put("/updateJobImp", (req, res) => {
  //console.log(req.params);
  JobApp.findByIdAndUpdate(
    req.body._id, 
    req.body, 
    {new: true},
    (err, updatedJobApp) => {
      if (!err){
        res.json({
          updatedJobApp: updatedJobApp
        });
      }else {
        res.send(err);
      }
    })
});

//PATCH - Update the specific fields in a field 
app.patch("/updateJobStatus", (req, res) => {
  JobApp.findByIdAndUpdate(
    req.body._id, 
    req.body,
    (err, updatedJobAppStatus) => {
      if (!err){
        res.json({
          updatedJobAppStatus: updatedJobAppStatus
        });
      }else {
        res.send(err);
      }
    })
});

// app.route("/articles/:articleTitle")
// .patch(function(req, res){
//       Article.update(
//         {title: req.params.articleTitle}, 
//         {$set: req.body},
//         function(err){
//             if (!err){
//                 res.send("Successfully updated article.");
//             }else {
//                 res.send(err); 
//             }
//     })  
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});