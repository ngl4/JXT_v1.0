// server/index.js
require('dotenv').config();
const path = require("path");
const express = require("express");
const app = express();
//-------------------------------------------------
const session = require("express-session"); 
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');
//-------------------------------------------------
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const uri = process.env.MONGODB_URI; //heroku config variable

app.use(express.static(path.join(__dirname, 'build')));
app.use(require("body-parser").json());

// Today Date
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
console.log(today, mm, dd, yyyy);
let todayWithDash = yyyy + "-" + mm + "-" + dd; 
console.log(todayWithDash);
let todayDate = new Date(todayWithDash);
console.log(todayDate);

const inactiveStatus = "Inactive"; 

//-------------------------------------------------
app.use(session({ //initialize the session
  secret: process.env.SESSION_SECRET, 
  resave: false,
  saveUninitialized: false
})); 

//initialize passport 
app.use(passport.initialize());
//using passport to deal with/manage the session 
app.use(passport.session()); 
//-------------------------------------------------


//console.log(`mongodb+srv://admin-cindy:${process.env.DB_MONGOSH_PW}@clustertestjxt.wthnh.mongodb.net/jobAppsDB`);

//LIVE AWS CLOUD STORAGE - mongoosh + mongoAtlas 
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}); 

// LOCAL STORAGE
// mongoose.connect('mongodb://localhost:27017/jxtrackDB', {useNewUrlParser: true, useUnifiedTopology: true});

const jobAppSchema = new mongoose.Schema ({
  companyName: String,
  jobURL: String,
  status: String,
  statusVerbiage: String,
  statusDate: String,
  levelOfImp: String,
  levelOfImpOrderNum: Number, //order number
  savedNotes: String
}); 

const userSchema = new mongoose.Schema({
  email: String,
  password: String, 
  googleId: String 
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model ("User", userSchema);
const JobApp = mongoose.model('JobApp', jobAppSchema);

//-------------------------------------------------
// Passport Configuration
passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//-------------------------------------------------

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID, 
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://jxt-app-v1.herokuapp.com/auth/google/jxt", //local callbackURL: http://localhost:3000/auth/google/jxt
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get("/auth/google", 
  passport.authenticate("google", { scope : ["profile", "email"] })); 

app.get("/auth/google/jxt", 
  passport.authenticate("google", { failureRedirect: "/" }),
  function(req, res) {
    // Successful authentication, redirect jxt.
    res.redirect("/track-page");
  });

app.get("/secret", function(req, res){
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
  }
  // console.log(req.isAuthenticated());
  // if (req.isAuthenticated()){
  //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
  //   // res.send("successful auth");
  //   // res.json({ message: "true" });
  //   // res.render("/secret");
  // }else {
  //   res.send("FAILED AUTHENTICATION");
  //   // res.json({ message: "failed auth" });
  //   // res.render("/");
  // }
});

  app.get("/auth/logout", function(req, res){
    if (req.user) {
      req.session = null;
      req.logout();
      res.redirect('/');
    }
    // if (req.user) {
      // req.logout(); //logout using passport 
      // res.send("Successfully logout!"); //root page
    // }
});
  //-------------------------------------------------

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/enter-page', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/track-page', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// API ENDPOINT
app.get("/api", (req, res) => {
    res.json({ message: "JXT 2021" });
  });

app.post("/create", (req, res) => {
  console.log(req.body);

  const jobApp = new JobApp ({ //TODO: Create status history - make sure to change the data types of status to savedNotes to Array []!!
    companyName: req.body.companyName,
    jobURL: req.body.jobURL,
    status: req.body.status,
    statusVerbiage: req.body.statusVerbiage,
    statusDate: req.body.statusDate,
    levelOfImp: "",
    levelOfImpOrderNum: 0,
    savedNotes: ""
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

//GET - Find - Specific Status Job Apps 
app.get("/findAll/status/new", (req, res) => {
  JobApp.find({status: "New"},(err, foundNewJobs) => {
    if (err) {
      res.send(err);
    }else {

      for (let i = 0; i < foundNewJobs.length; i++) { //TODO: Refactor this code into a function - so it is reusable
        console.log(foundNewJobs[i].statusDate);      //foundNewJobs, setActivePeriod, setActivePeriodText, newStatus, newLevelOfImp, newLevelOfImpOrderNum
        let enteredDate = new Date(foundNewJobs[i].statusDate); 
        let diffTime = Math.abs(todayDate - enteredDate);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        console.log(diffDays); 
        if (diffDays > 7) { 
          console.log(`${"Not yet applied"} more than ${7} days - set status to inactive`);

          JobApp.findByIdAndUpdate(
            foundNewJobs[i]._id, 
            {
              status: inactiveStatus,
              levelOfImp: "Inactive",
              levelOfImpOrderNum: 3
            }, 
            {new: true},
            (err, updatedJobStatus) => {
              if (!err){
                console.log("Successfully updated job status to: " + updatedJobStatus);
              }else {
                res.send(err);
              }
            })

        }else {
          console.log("Not yet applied less than 7 days - no changes needed");
        }   
      }

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
app.get("/findAll/status/inactive", (req, res) => {
  JobApp.find({status: "Inactive"},(err, foundInactiveJobs) => {
    if (err) {
      res.send(err);
    }else {
      res.json({
        foundInactiveJobs: foundInactiveJobs
      });
    }
  });
});

//PUT - Update the entire document since LevelOfImp is a new field 
app.patch("/updateJobImp", (req, res) => {
  //console.log(req.params);
  JobApp.findByIdAndUpdate(
    req.body._id, 
    {
      levelOfImp: req.body.levelOfImp,
      levelOfImpOrderNum: req.body.levelOfImpOrderNum
    }, 
    {new: true},
    (err, updatedJobImpApp) => {
      if (!err){
        res.json({
          updatedJobImpApp: updatedJobImpApp
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
    {
      status: req.body.status,
      statusVerbiage: req.body.statusVerbiage,
      statusDate: req.body.statusDate
    },
    {new: true},
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

//PATCH - Update the specific fields in a field 
app.patch("/saveNotes", (req, res) => {
  JobApp.findByIdAndUpdate(
    req.body._id, 
    {
      savedNotes: req.body.savedNotes
    },
    {new: true},
    (err, foundSavedNotes) => {
      if (!err){
        res.json({
          foundSavedNotes: foundSavedNotes
        });
      }else {
        res.send(err);
      }
    })
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});