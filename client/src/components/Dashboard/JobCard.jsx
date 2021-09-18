import {React, useState} from "react";

function JobCard() {
    //TODO: Each Job Card Component for each Job item
    const cardWidthMargin = {
        "max-width": "60rem",
        "margin-left": "20rem",
        "margin-right": "20rem"
      };
    const [levelOfImpColor, setLevelOfImpColor] = useState(""); 
    const [levelOfImpText, setLevelOfImpText] = useState(""); 

    const handleChange = (event) => {
        event.preventDefault();  
        const value = event.target.value; 
        
        console.log(event.target.value);

        if (value === "High") {
            setLevelOfImpColor("btn-danger");
        }else if (value === "Normal") {
            setLevelOfImpColor("btn-primary");
        }else {
            setLevelOfImpColor("btn-success");
        }

        setLevelOfImpText(value);
    }

    return (
        <div className="d-flex justify-content-left">
            <div className="card border-success mb-3" style={cardWidthMargin}>
                <div className="card-body text-success">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">Success card title</h5>
                        {/* <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option className="dropdown-item" value="1" onChange={handleChange}>One</option>
                            <option className="dropdown-item" value="2" onChange={handleChange}>Two</option>
                            <option className="dropdown-item" value="3" onChange={handleChange}>Three</option>
                        </select> */}
                        <div className="btn-group">
                        <button type="button" className={"btn " + levelOfImpColor}>{levelOfImpText ? levelOfImpText : "Level of Importance"}</button>
                        <button type="button" className={"btn dropdown-toggle dropdown-toggle-split " + levelOfImpColor} data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul className="dropdown-menu ">
                            <li><button type="button" className="dropdown-item" name="High" value="High" onClick={handleChange}>High</button></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button type="button" className="dropdown-item" name="Normal" value="Normal" onClick={handleChange}>Normal</button></li>
                        </ul>
                        </div>
                    </div>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. kdsfnladnsf asdfoaisdf asdfianisdnf asdjfoiansidf</p>
                </div>
                <div className="card-footer bg-transparent border-success">Footer</div>
            </div>
        </div>
    );
}

export default JobCard;