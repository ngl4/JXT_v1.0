import React from "react";
import JobCard from "./JobCard";

function TrackPage() {
    const [totalJobs, setTotalJobs] = React.useState({
        count: 0,
        data: []
    });
    const [newJobs, setNewJobs] = React.useState(0);
    const [appliedJobs, setAppliedJobs] = React.useState(0);
    const [phoneCalledJobs, setPhoneCalledJobs] = React.useState(0);
    const [interviewedJobs, setInterviewedJobs] = React.useState(0);

    React.useEffect(() => {
      fetch("/findAll")
        .then((res) => res.json())  
        .then((data) => {
            const allJobs = data.foundAllJobs;
            const allJobsCopy = []
            allJobs.forEach((job) => {
               allJobsCopy.push(job); 
            });
            setTotalJobs({
                count: allJobs.length,
                data: allJobsCopy
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
                {/* JobBar -- TODO: using map() method to display all jobs */}
                <div className="col">
                    {/* Sample Job Card */}
                    {/* <JobCard 
                        companyName="Facebook" 
                        jobURL = "https://www.facebook.com/careers/v2/jobs/2948019165525651/" 
                        currentStatus = "New"
                        currentStatusVerbiage = "Date to Apply"
                        currentStatusSetDate = "09/18/21"
                        />                     */}   
                </div>
                <div className="col">
                    {totalJobs.data.map((job) => (
                        <JobCard 
                            companyName = {job.companyName}
                            jobURL = {job.jobURL}
                            currentStatus = {job.status}
                            currentStatusVerbiage = {job.statusVerbiage}
                            currentStatusSetDate = {
                                job.applyDate ? job.applyDate : 
                                job.appliedDate ? job.appliedDate : 
                                job.phoneCallDate ? job.phoneCallDate : 
                                job.interviewDate ? job.interviewDate : null}
                        />
                    ))}
                </div>
                <div className="col">
                
                </div>
            </div>      
        </div>
    );
};

export default TrackPage;