import {React, useState} from "react";
import Input from "../UI/input";
import Modal from "react-bootstrap/Modal";

function JobCard({jobAppId, companyName, jobURL, levelOfImportance, currentStatus, currentStatusSetDate, currentStatusVerbiage}) {
    const cardWidthMargin = {
        "width": "800px",
        "margin-left": "3rem",
        "margin-right": "3rem"
      };

    const [levelOfImpColor, setLevelOfImpColor] = useState(""); 
    const [levelOfImp, setLevelOfImp] = useState("");    
    const [isLevelUpdated, SetIsLevelUpdated] = useState(false);
    // const [newStatus, setNewStatus] = useState("");
    // const [newStatusVerbiage, setNewStatusVerbiage] = useState("");
    // const [newStatusSetDate, setNewStatusSetDate] = useState("");
    
    const handleChange = (event) => {  
        const value = event.target.value; 

        if (value === "High") {
            setLevelOfImp("High");
            setLevelOfImpColor("btn-danger");
            SetIsLevelUpdated(true);
        }else if (value === "Normal") {
            setLevelOfImp("Normal")
            setLevelOfImpColor("btn-primary");
            SetIsLevelUpdated(true);
        }else {
            setLevelOfImpColor("btn-success");
        }

        // if (name === "newStatus") {
        //     setNewStatus(value);
        // }else if (name === "newStatusSetDate") {
        //     setNewStatusSetDate(value);
        // }

        // if (value === "ScheduleOn") {
        //     setNewStatusVerbiage(value); 
        // }else if (value === "SubmitBy") {
        //     setNewStatusVerbiage(value); 
        // }else if (value === "Applied") {
        //     setNewStatusVerbiage(value); 
        // }else if (value === "Completed") {
        //     setNewStatusVerbiage(value); 
        // }
    }

    // const handleSubmit = (event) => { 
    //     event.preventDefault();
    //     updateJobStatus();
    // }

    const updateJobImp = () => {
            fetch ("/updateJobImp", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },    
                body: JSON.stringify({ 
                    _id: jobAppId,
                    companyName: companyName,
                    jobURL: jobURL,
                    status: currentStatus,
                    statusVerbiage: currentStatusVerbiage,
                    statusDate: currentStatusSetDate,
                    levelOfImp: levelOfImp
                }) 
            }).then((res) => res.json())
            // .then((data) => { //uncomment if additional customization needed 
            // }); 
    }

//     const updateJobStatus = () => {
//         fetch ("/updateJobStatus", {
//             method: "PATCH",
//             headers: {
//                 'Content-Type': 'application/json',
//             },    
//             body: JSON.stringify({ 
//                 _id: jobAppId,
//                 status: newStatus,
//                 statusVerbiage: newStatusVerbiage,
//                 statusDate: newStatusSetDate
//             }) 
//         }).then((res) => res.json())
//         // .then((data) => { //uncomment if additional customization needed 
//         // }); 
// }

    const [isOpen, setIsOpen] = useState(false);

    const showModal = (event) => {
        event.preventDefault();
        console.log("click!");
        setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };

    return (
        <div className="d-flex justify-content-left">
            <div className="card border-success mb-3" style={cardWidthMargin}>
                <div className="card-body text-success">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{companyName}</h5>
                        <div className="btn-group">
                            <select className={"form-select btn " + 
                            (levelOfImpColor ? levelOfImpColor 
                            :levelOfImportance === "High" ? "btn-danger"
                            :levelOfImportance === "Normal" ? "btn-primary"
                            : "btn-success")} 
                            aria-label="Default select example" onChange={handleChange}>
                                <option selected={levelOfImportance ? false : true}>Level of Importance</option>
                                <option className="dropdown-item" value="High" selected={levelOfImportance === "High" ? true : false}>High</option>
                                <option className="dropdown-item" value="Normal" selected={levelOfImportance === "Normal" ? true : false}>Normal</option>
                                {isLevelUpdated ? updateJobImp() : null}
                            </select>
                        </div>
                    </div>
                    <div className="card-text">
                        <a href={jobURL} target="_blank" rel="noopener noreferrer">{jobURL ? "Job Site Here" : null}</a>
                        <br />
                        <br />
                        <p>{currentStatus} <span className="text-black-50 fw-light font-monospace">- {currentStatusVerbiage}: {currentStatusSetDate}</span></p>
                    </div>
                </div>
                <div className="card-footer bg-transparent border-success m-0 p-1">
                    <div className="container">
                        <div className="d-flex row justify-content-between">
                            <div className="col-10">
                                <div className="row g-3">
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" placeholder="New Status" aria-label="New Status" name="newStatus" onChange={handleChange} />
                                    </div>
                                    <div className="col-sm-3">
                                        <select className="form-select" onChange={handleChange}>
                                            <option selected value="ScheduleOn">Schedule On</option>
                                            <option className="dropdown-item" value="SubmitBy">Submit By</option>
                                            <option className="dropdown-item" value="Applied">Applied</option>
                                            <option className="dropdown-item" value="Completed">Completed</option>
                                        </select>
                                    </div>  
                                    <div className="col-sm-3">
                                        <input type="date" className="form-control" placeholder="Date" aria-label="Date" name="newStatusSetDate" onChange={handleChange} />
                                    </div>
                                    <div className="col-sm">
                                        <Input
                                            className="btn btn-outline-secondary border-0"
                                            type = "submit"
                                            value = "Update Status" 
                                        />       
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 d-flex flex-row-reverse">
                                <button className="btn" onClick={showModal}>Details</button>
                                <Modal show={isOpen} size="xl" onHide={hideModal} scrollable="true" centered>
                                    <Modal.Header>
                                        <Modal.Title>{companyName}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>        
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                        dcvntras mssdattis ertgconsectetur drcvbpurus sitwef aw3famet fermentumdrtf. Qefxras justo eeodio,
                                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros.
                                        </p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button onClick={hideModal}>Cancel</button>
                                        <button>Save</button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobCard;