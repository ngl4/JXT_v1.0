import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";

function JobCard({
  jobAppId,
  companyName,
  jobURL,
  levelOfImportance,
  currentStatus,
  currentStatusSetDate,
  currentStatusVerbiage,
  savedNotes,
}) {
  const cardWidthMargin = {
    width: "50rem",
    "margin-left": "1rem",
    "margin-right": "1rem",
  };

  const [levelOfImpColor, setLevelOfImpColor] = useState("");
  const [levelOfImp, setLevelOfImp] = useState("");
  const [levelOfImpOrderNum, setlevelOfImpOrderNum] = useState(0);
  const [isLevelUpdated, SetIsLevelUpdated] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [newStatusVerbiage, setNewStatusVerbiage] = useState("");
  const [newStatusSetDate, setNewStatusSetDate] = useState("");
  const [notesOnChange, setNotesOnChange] = useState("");
  const [isNotesUpdated, setIsNotesUpdated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (value === "High") {
      setLevelOfImp("High");
      setlevelOfImpOrderNum(1);
      setLevelOfImpColor("btn-danger");
      SetIsLevelUpdated(true);
    } else if (value === "Normal") {
      setLevelOfImp("Normal");
      setlevelOfImpOrderNum(2);
      setLevelOfImpColor("btn-primary");
      SetIsLevelUpdated(true);
    }

    if (name === "newStatus") {
      setNewStatus(value);
    } else if (name === "newStatusSetDate") {
      setNewStatusSetDate(value);
    } else if (name === "newStatusVerbiage") {
      setNewStatusVerbiage(value);
    }
  };

  const handleNotesChange = (event) => {
    const value = event.target.value;
    setNotesOnChange(value);
    setIsNotesUpdated(true);
  };

  const handleUpdateStatusClicked = (event) => {
    event.preventDefault();
    updateJobStatus();

    //clear fields
    setNewStatus("");
    setNewStatusSetDate("");
    setNewStatusVerbiage("");
  };

  const updateJobImp = () => {
    fetch("/updateJobImp", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: jobAppId,
        levelOfImp: levelOfImp,
        levelOfImpOrderNum: levelOfImpOrderNum,
      }),
    }).then((res) => res.json());
    // .then((data) => { //uncomment this when needed - data returned from the API endpoint
    // });
  };

  const updateJobStatus = () => {
    fetch("/updateJobStatus", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: jobAppId,
        status: newStatus,
        statusVerbiage: newStatusVerbiage,
        statusDate: newStatusSetDate,
      }),
    }).then((res) => res.json());
    // .then((data) => { //uncomment if additional customization needed
    // });
  };

  const handleSaveNotes = () => {
    fetch("/saveNotes", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: jobAppId,
        savedNotes: notesOnChange,
      }),
    }).then((res) => res.json());
    // .then((data) => { //uncomment if additional customization needed
    // });
  };

  const [isOpen, setIsOpen] = useState(false);

  const showModal = (event) => {
    event.preventDefault();
    setIsOpen(true);
    if (savedNotes) {
      setNotesOnChange(savedNotes);
    }
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card border-success mb-3" style={cardWidthMargin}>
        <div className="card-body text-success">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">
              <a href={jobURL} target="_blank" rel="noopener noreferrer">
                {companyName}
              </a>
            </h5>
            <div className="btn-group">
              <select
                className={
                  "form-select btn " +
                  (levelOfImpColor
                    ? levelOfImpColor
                    : levelOfImportance === "High"
                    ? "btn-danger"
                    : levelOfImportance === "Normal"
                    ? "btn-primary"
                    : levelOfImportance === "Inactive"
                    ? "btn-secondary"
                    : "btn-success")
                }
                aria-label="Default select example"
                onChange={handleChange}
              >
                <option selected={levelOfImportance ? false : true}>
                  {levelOfImportance === "Inactive"
                    ? "Inactive"
                    : "Level of Importance"}
                </option>
                <option
                  className="dropdown-item"
                  value="High"
                  selected={levelOfImportance === "High" ? true : false}
                >
                  High
                </option>
                <option
                  className="dropdown-item"
                  value="Normal"
                  selected={levelOfImportance === "Normal" ? true : false}
                >
                  Normal
                </option>
              </select>
            </div>
          </div>
          <div className="card-text">
            <h6>Notes:</h6>
            {savedNotes ? (
              <p className="text-black-50 fw-light font-monospace">
                {" "}
                {savedNotes.slice(0, 140)}
                {savedNotes.slice(0, 140).length === 140 ? (
                  <em>...see Details</em>
                ) : null}{" "}
              </p>
            ) : null}
            <p>
              {currentStatus}{" "}
              <span className="text-black-50 fw-light font-monospace">
                - {currentStatusVerbiage}: {currentStatusSetDate}
              </span>
            </p>
          </div>
        </div>
        <div className="card-footer bg-transparent border-success m-0 p-1">
          <div className="container">
            <div className="d-flex row justify-content-between">
              <div className="col-11">
                <div className="row g-3">
                  <div className="col-sm-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="New Status"
                      aria-label="New Status"
                      name="newStatus"
                      value={newStatus}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-3">
                    <select
                      className="form-select"
                      name="newStatusVerbiage"
                      value={newStatusVerbiage}
                      onChange={handleChange}
                    >
                      <option selected>...</option>
                      <option className="dropdown-item" value="Schedule on">
                        Schedule on
                      </option>
                      <option className="dropdown-item" value="Submit by">
                        Submit by
                      </option>
                      <option className="dropdown-item" value="applied on">
                        applied on
                      </option>
                      <option className="dropdown-item" value="Completed on">
                        Completed on
                      </option>
                    </select>
                  </div>
                  <div className="col-sm-3">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Date"
                      aria-label="Date"
                      name="newStatusSetDate"
                      value={newStatusSetDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm">
                    <button
                      className="btn btn-outline-secondary border-0"
                      type="submit"
                      value="Update Status"
                      onClick={handleUpdateStatusClicked}
                    >
                      Update Status
                    </button>
                  </div>
                  <div className="col-sm">
                    <button className="btn" onClick={showModal}>
                      Details
                    </button>
                  </div>
                </div>
              </div>
              {isLevelUpdated ? updateJobImp() : null}
              <Modal
                show={isOpen}
                size="xl"
                onHide={hideModal}
                scrollable="true"
                centered
              >
                <Modal.Header>
                  <Modal.Title>{companyName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p></p>
                  <div className="mb-3">
                    <label for="noteTakingTextArea" className="form-label">
                      <h3>Notes</h3>
                    </label>
                    <textarea
                      className="form-control"
                      id="noteTakingTextArea"
                      rows="10"
                      value={notesOnChange}
                      onChange={handleNotesChange}
                    ></textarea>
                  </div>
                  {isNotesUpdated ? handleSaveNotes() : null}
                </Modal.Body>
                <Modal.Footer>
                  <button onClick={hideModal}>Save</button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
