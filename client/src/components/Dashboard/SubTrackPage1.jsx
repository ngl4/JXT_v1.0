import React, {useState, useEffect} from "react";
import JobCard from "../JobCard/JobCard";

function SubTrackPage1() {
    const [newJobs, setNewJobs] = useState([]); 
    useEffect(() => {
        fetch("/findAll/status/new")
        .then((res) => res.json())  
        .then((data) => {
            setNewJobs(data.foundNewJobs);
        });  
    }, []);

    return (

        <div className="col">
        {newJobs.sort((a, b) => {
            return a.levelOfImpOrderNum - b.levelOfImpOrderNum;
        }).map((job) => (
                <JobCard 
                    key = {job._id}
                    companyName = {job.companyName}
                    jobURL = {job.jobURL}
                    currentStatus = {job.status}
                    currentStatusVerbiage = {job.statusVerbiage}
                    currentStatusSetDate = {job.statusDate}
                    jobAppId = {job._id}
                    levelOfImportance = {job.levelOfImp}
                    savedNotes = {job.savedNotes}
                />
            ))}
        </div> 

    );
};

export default SubTrackPage1;