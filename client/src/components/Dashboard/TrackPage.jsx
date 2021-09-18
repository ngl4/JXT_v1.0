import React from "react";
import JobCard from "./JobCard";

function TrackPage() {
    const [totalJobs, setTotalJobs] = React.useState(0);
    const [newJobs, setNewJobs] = React.useState(0);
    const [appliedJobs, setAppliedJobs] = React.useState(0);
    const [phoneCalledJobs, setPhoneCalledJobs] = React.useState(0);
    const [interviewedJobs, setInterviewedJobs] = React.useState(0);

    React.useEffect(() => {
      fetch("/findAll")
        .then((res) => res.json())  
        .then((data) => setTotalJobs((data.foundAllJobs).length));  

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
                <div className="col-2 text-center">Total Jobs <br/><p>{totalJobs ? totalJobs : "0"}</p></div>
                <div className="col-2 text-center">New <br/><p>{newJobs ? newJobs : "0"}</p></div>   
                <div className="col-2 text-center">Applied <br/><p>{appliedJobs ? appliedJobs : "0"}</p></div>  
                <div className="col-2 text-center">Phone Calls <br/><p>{phoneCalledJobs ? phoneCalledJobs : "0"}</p></div>  
                <div className="col-2 text-center">Interviews <br/><p>{interviewedJobs ? interviewedJobs : "0"}</p></div>   
            </div>    
            <div className="row d-flex justify-content-center">
                {/* JobBar -- TODO: using map() method to display all jobs */}
                <JobCard />
                <JobCard />
            </div>      
        </div>
    );
};

export default TrackPage;