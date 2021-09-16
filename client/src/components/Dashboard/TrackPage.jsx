import React from "react";

function TrackPage() {
    //TODO: fetch GET information (find all, find those with a specific status)
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
        <div className="text-center">
            <br />
            <p>Total Jobs (All): {totalJobs ? totalJobs : "0"}</p>
            <p>New: {newJobs ? newJobs : "0"}</p>   
            <p>Applied: {appliedJobs ? appliedJobs : "0"}</p>  
            <p>Phone Calls: {phoneCalledJobs ? phoneCalledJobs : "0"}</p>  
            <p>Interviews: {interviewedJobs ? interviewedJobs : "0"}</p>   
        </div>
    );
};

export default TrackPage;