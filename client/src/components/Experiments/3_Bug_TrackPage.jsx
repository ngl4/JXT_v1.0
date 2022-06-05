import React, {useState, useEffect} from "react";
import JobCard from "./JobCard";

function TrackPage() {
    const [totalJobs, setTotalJobs] = useState({
        count: 0,
        data: []
    });
    const [newJobs, setNewJobs] = useState({
        count: 0,
        data: []
    });
    const [appliedJobs, setAppliedJobs] = useState({
        count: 0,
        data: []
    });

    const [phoneCalledJobs, setPhoneCalledJobs] = useState({
        count: 0,
        data: []
    });
    const [interviewedJobs, setInterviewedJobs] = useState({
        count: 0,
        data: []
    });
    const [inactiveJobs, setInactiveJobs] = useState({
        count: 0,
        data: []
    });
    const [chosenList, setChosenList] = useState("TotalJobs");
    // const [newJobs, setNewJobs] = useState(0);
    // const [appliedJobs, setAppliedJobs] = useState(0);
    // const [phoneCalledJobs, setPhoneCalledJobs] = useState(0);
    // const [interviewedJobs, setInterviewedJobs] = useState(0);
    // const [inactiveJobs, setInactiveJobs] = useState(0);

    useEffect(() => {
    //   let mounted = true;
      fetch("/findAll")
        .then((res) => res.json())  
        .then((data) => {
            // if(mounted){
                const allJobs = data.foundAllJobs;
                const allJobsTemp = [];

                allJobs.forEach((job) => {
                allJobsTemp.push(job);  
                });

                setTotalJobs({
                    count: allJobs.length,
                    data: allJobsTemp
                });
            // }
        });  
        fetch("/findAll/status/new")
        .then((res) => res.json())  
        .then((data) => {
            // setNewJobs((data.foundNewJobs).length)
            const newJobs = data.foundNewJobs;
            const newJobsTemp = [];

            newJobs.forEach((job) => {
               newJobsTemp.push(job);  
            });

            setNewJobs({
                count: newJobs.length,
                data: newJobsTemp
            });
        });  
        // fetch("/findAll/status/applied")
        // .then((res) => res.json())  
        // .then((data) => {
        //     // setAppliedJobs((data.foundAppliedJobs).length)
        //     const appliedJobs = data.foundAppliedJobs;
        //     const appliedJobsTemp = [];

        //     appliedJobs.forEach((job) => {
        //        appliedJobsTemp.push(job);  
        //     });

        //     setAppliedJobs({
        //         count: appliedJobs.length,
        //         data: appliedJobsTemp
        //     });
        // });   
        // fetch("/findAll/status/phoneCalled")
        // .then((res) => res.json())  
        // .then((data) => {
        //     // setPhoneCalledJobs((data.foundPhoneCalledJobs).length)
        //     const pcJobs = data.foundPhoneCalledJobs;
        //     const pcJobsTemp = [];

        //     pcJobs.forEach((job) => {
        //        pcJobsTemp.push(job);  
        //     });

        //     setPhoneCalledJobs({
        //         count: pcJobs.length,
        //         data: pcJobsTemp
        //     });
        // });
        // fetch("/findAll/status/interviewed")
        // .then((res) => res.json())  
        // .then((data) => {
        //     // setInterviewedJobs((data.foundInterviewedJobs).length)
        //     const interviewedJobs = data.foundInterviewedJobs;
        //     const interviewedJobsTemp = [];

        //     interviewedJobs.forEach((job) => {
        //        interviewedJobsTemp.push(job);  
        //     });

        //     setInterviewedJobs({
        //         count: interviewedJobs.length,
        //         data: interviewedJobsTemp
        //     });
        // });      
        // fetch("/findAll/status/inactive")
        // .then((res) => res.json())  
        // .then((data) => {
        //     // setInactiveJobs((data.foundInactiveJobs).length)
        //     const inactiveJobs = data.foundInactiveJobs;
        //     const inactiveJobsTemp = [];

        //     inactiveJobs.forEach((job) => {
        //        inactiveJobsTemp.push(job);  
        //     });

        //     setInactiveJobs({
        //         count: inactiveJobs.length,
        //         data: inactiveJobsTemp
        //     });
        // });  
        // return () => mounted = false;  
    }, []);

    const handleClick = (event) => {
        event.preventDefault();
        const value = event.target.value;
        setChosenList(value);
    }

    // const lineBreakStyle = {
    //     height:"2px",
    //     "border-width": 0,
    //     color: "gray",
    //     "background-color": "green"
    // }

    return (
        <div className="container">
             <div className="row d-flex justify-content-center mb-5 mt-4">
             {/* TODO: create link to each of these sections so users can access to different views - create a switch change based on what is selected - default should be TotalJobs */}
                <div className="col-2 text-center"><button type="button" className="btn btn-link link-success" onClick={handleClick} value="TotalJobs">Total Jobs</button> <br/><p>{totalJobs.count ? totalJobs.count : "0"}</p></div>
                <div className="col-2 text-center"><button type="button" className="btn btn-link link-success" onClick={handleClick} value="New">New</button> <br/><p>{newJobs.count ? newJobs.count : "0"}</p></div>   
                <div className="col-2 text-center"><button type="button" className="btn btn-link link-success" onClick={handleClick} value="Applied">Applied</button> <br/><p>{appliedJobs.count ? appliedJobs.count : "0"}</p></div>  
                <div className="col-2 text-center"><button type="button" className="btn btn-link link-success" onClick={handleClick} value="PhoneCalls">Phone Calls</button> <br/><p>{phoneCalledJobs.count ? phoneCalledJobs.count : "0"}</p></div>  
                <div className="col-2 text-center"><button type="button" className="btn btn-link link-success" onClick={handleClick} value="Interviews">Interviews</button> <br/><p>{interviewedJobs.count ? interviewedJobs.count : "0"}</p></div>   
                <div className="col-2 text-center"><button type="button" className="btn btn-link link-success" onClick={handleClick} value="Inactive">Inactive</button> <br/><p>{inactiveJobs.count ? inactiveJobs.count : "0"}</p></div>   
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
                {chosenList === "TotalJobs" ? 
                totalJobs.data.sort((a, b) => {
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
                    )): 
                    chosenList === "New" ? 
                    newJobs.data.sort((a, b) => {
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
                    ))
                    :null}
                </div>
            </div>      
        </div>
    );
};

export default TrackPage;