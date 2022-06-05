import React, {useState, useEffect} from "react";
import {
    Switch,
    Route,
  } from "react-router-dom";
import JobCard from "../../pages/TrackPage/JobCard/JobCard";

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

        loadAllJobs();

        fetch("/findAll/status/new")
        .then((res) => res.json())  
        .then((data) => {
            setNewJobs((data.foundNewJobs).length);
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
    }, []);

    const loadAllJobs = async () => {
        const response = await fetch("/findAll");
        const data = await response.json();
        setTotalJobs({
            count: data.foundAllJobs.length,
            data: data.foundAllJobs
        });
    }

    return (
        <div className="container">
             <div className="row d-flex justify-content-center mb-5 mt-4">
             {/* TODO: create link to each of these sections so users can access to different views */}
                <div className="col-2 text-center">Total Jobs <br/><p>{totalJobs.count ? totalJobs.count : "0"}</p></div>
                <div className="col-2 text-center">New<br/><p>{newJobs ? newJobs : "0"}</p></div>
                <div className="col-2 text-center">Applied <br/><p>{appliedJobs ? appliedJobs : "0"}</p></div>  
                <div className="col-2 text-center">Phone Calls <br/><p>{phoneCalledJobs ? phoneCalledJobs : "0"}</p></div>  
                <div className="col-2 text-center">Interviews <br/><p>{interviewedJobs ? interviewedJobs : "0"}</p></div>   
                {/*TODO: <div className="col-2 text-center">Inactive <br/><p>{inactiveJobs ? inactiveJobs : "0"}</p></div>    */}
            </div>    
            <div className="row d-flex justify-content-center">
                {/* Sample Job Card */}
                <Switch>
                    <Route>
                        <div className="col">
                            {totalJobs.data.sort((a, b) => {
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
                    </Route>
                </Switch>   
            </div>      
        </div>
    );
};

export default TrackPage;