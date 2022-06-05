// import React, {useState, useEffect} from "react";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
// import JobCard from "./JobCard";

// function SubTrackPage1() {
//     const [newJobs, setNewJobs] = useState({
//         count: 0,
//         data: []
//     }); 
//     useEffect(() => {


//         fetch("/findAll/status/new")
//         .then((res) => res.json())  
//         .then((data) => {
//             setNewJobs({
//                 count: data.foundNewJobs.length,
//                 data: data.foundNewJobs
//             });
//         });  
 
//     });


//     // const lineBreakStyle = {
//     //     height:"2px",
//     //     "border-width": 0,
//     //     color: "gray",
//     //     "background-color": "green"
//     // }

//     return (

//         <div className="col">
//         {newJobs.data.sort((a, b) => {
//             return a.levelOfImpOrderNum - b.levelOfImpOrderNum;
//         }).map((job) => (
//                 <JobCard 
//                     key = {job._id}
//                     companyName = {job.companyName}
//                     jobURL = {job.jobURL}
//                     currentStatus = {job.status}
//                     currentStatusVerbiage = {job.statusVerbiage}
//                     currentStatusSetDate = {job.statusDate}
//                     jobAppId = {job._id}
//                     levelOfImportance = {job.levelOfImp}
//                     savedNotes = {job.savedNotes}
//                 />
//             ))}
//         </div> 

//     );
// };

// export default SubTrackPage1;