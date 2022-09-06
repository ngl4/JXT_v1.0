import React from "react";
import JobCardv2 from "../JobCard/JobCardv2";

function SecretTrackPage() {
  return (
    <div className="container">
      <div className="mt-5 pt-3">
        YOU ARE LOG IN NOW! CLICK ON SIGN ON AND YOU SHOULD SEE A LOGOUT BUTTON
        TO LOG OUT! THE SITE IS CURRENTLY UNDER DEVELOPMENT [TESTING ONLY]
        <br />
        <br />
        <JobCardv2 />
      </div>
    </div>
  );
}

export default SecretTrackPage;
