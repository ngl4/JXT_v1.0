import React, {useState, useEffect} from "react";
import JobCard from "./JobCard";

function TrackPage() {
    const [totalJobs, setTotalJobs] = useState({
        count: 0,
        data: []
    });
    const [newJobs, setNewJobs] = useState(0);
    const [appliedJobs, setAppliedJobs] = useState(0);
    const [phoneCalledJobs, setPhoneCalledJobs] = useState(0);
    const [interviewedJobs, setInterviewedJobs] = useState(0);

    useEffect(() => {
      fetch("/findAll")
        .then((res) => res.json())  
        .then((data) => {
            const allJobs = data.foundAllJobs;
            const allJobsTemp = [];

            allJobs.forEach((job) => {
               allJobsTemp.push(job);  
            });

            setTotalJobs({
                count: allJobs.length,
                data: allJobsTemp
            });
        });  

        fetch("/findAll/status/new")
        .then((res) => res.json())  
        .then((data) => {
            setNewJobs((data.foundNewJobs).length)
        });  
        fetch("/findAll/status/applied")
        .then((res) => res.json())  
        .then((data) => {
            setAppliedJobs((data.foundAppliedJobs).length)
        });   
        fetch("/findAll/status/phoneCalled")
        .then((res) => res.json())  
        .then((data) => {
            setPhoneCalledJobs((data.foundPhoneCalledJobs).length)
        });
        fetch("/findAll/status/interviewed")
        .then((res) => res.json())  
        .then((data) => {
            setInterviewedJobs((data.foundInterviewedJobs).length)
        });        
    });

    // const lineBreakStyle = {
    //     height:"2px",
    //     "border-width": 0,
    //     color: "gray",
    //     "background-color": "green"
    // }

    return (
        <div className="container">
             <div className="row d-flex justify-content-center mb-5 mt-4">
                <div className="col-2 text-center">Total Jobs <br/><p>{totalJobs.count ? totalJobs.count : "0"}</p></div>
                <div className="col-2 text-center">New <br/><p>{newJobs ? newJobs : "0"}</p></div>   
                <div className="col-2 text-center">Applied <br/><p>{appliedJobs ? appliedJobs : "0"}</p></div>  
                <div className="col-2 text-center">Phone Calls <br/><p>{phoneCalledJobs ? phoneCalledJobs : "0"}</p></div>  
                <div className="col-2 text-center">Interviews <br/><p>{interviewedJobs ? interviewedJobs : "0"}</p></div>   
            </div>    
            <div className="row d-flex justify-content-center">
                {/* Sample Job Card */}
                {/* <JobCard 
                    companyName="Facebook" 
                    jobURL = "https://www.facebook.com/careers/v2/jobs/2948019165525651/" 
                    currentStatus = "New"
                    currentStatusVerbiage = "Date to Apply"
                    currentStatusSetDate = "09/18/21"
                    />                     */}   
                <div className="col">
                {totalJobs.data.sort((a, b) => {
                    return a.levelOfImpOrderNum - b.levelOfImpOrderNum;
                }).map((job) => (
                        <JobCard 
                            companyName = {job.companyName}
                            jobURL = {job.jobURL}
                            currentStatus = {job.status}
                            currentStatusVerbiage = {job.statusVerbiage}
                            currentStatusSetDate = {job.statusDate}
                            jobAppId = {job._id}
                            levelOfImportance = {job.levelOfImp}
                        />
                    ))}
                </div>
            </div>      
        </div>
    );
};

export default TrackPage;