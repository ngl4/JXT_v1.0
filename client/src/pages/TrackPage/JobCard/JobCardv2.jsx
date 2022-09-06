import { React } from "react";
import { SampleData } from "./sampleData";
import "./JobCardv2.css";

function JobCardv2() {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {SampleData.map((jobApp) => {
          return (
            <div className="col">
              <div className="card h-100 border-success">
                {/* <img src="/" className="card-img-top" alt="job-card" /> */}
                <div className="card-body">
                  <h5 className="card-title">{jobApp.jobTitle}</h5>
                  <div className="card-text">
                    <small>Company: {jobApp.companyName}</small>
                    <div className="card-notes-box border-success">
                      <h6 className="text-success">Notes:</h6>
                      {jobApp.savedNotes.map((saved) => {
                        return (
                          <>
                            <span>Date: {saved.date}</span>
                            <p>{saved.note}</p>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <small class="text-muted">
                    Applied {jobApp.lastUpdated} mins ago
                  </small>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default JobCardv2;
