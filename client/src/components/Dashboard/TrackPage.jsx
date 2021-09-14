import React from "react";

function TrackPage() {
    //TODO: fetch GET information (find all, find those with a specific status)
    const [totalJobs, setTotalJobs] = React.useState(0);

    React.useEffect(() => {
      fetch("/findAll")
        .then((res) => res.json())  
        .then((data) => setTotalJobs((data.foundAllJobs).length));  
    });

    return (
        <div className="text-center">
            <br />
            <p>Total Jobs (All): {totalJobs ? totalJobs : "..."}</p>
        </div>
    );
};

export default TrackPage;