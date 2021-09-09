import React, { useState } from "react";
import Input from "../UI/input";

function InsertPage() {
    const [companyName, setCompanyName] = useState("");
    const [jobURL, setJobURL] = useState("");
    const [checkNew, setCheckNew] = useState(false);
    const [applyDate, setApplyDate] = useState("");
    const [checkApplied, setCheckApplied] = useState(false);
    const [appliedDate, setAppliedDate] = useState("");
    const [checkPhoneCalled, setCheckPhoneCalled] = useState(false);
    const [phoneCallDate, setPhoneCallDate] = useState("");
    const [checkInterviewed, setCheckInterviewed] = useState(false);
    const [interviewDate, setInterviewDate] = useState("");
    const [enabledValue, setEnabledValue] = useState("");  
    const [disable, setDisable] = useState(false);

    function handleChange(event) {
        const {value, name} = event.target; 
        
        switch (name){
            case 'companyName':
                setCompanyName(value);
            break;
            case 'jobURL':
                setJobURL(value);
            break;   
            case 'new':
                if (checkNew) {
                    setCheckNew(false);
                    //console.log("not checked");
                    setDisable(false);
                }else {
                    setCheckNew(true);
                    //console.log("checked");
                    setEnabledValue(value);
                    setDisable(true);
                }
            break;  
            case 'applied':
                if (checkApplied) {
                    setCheckApplied(false);
                    setDisable(false);
                }else {
                    setCheckApplied(true);  
                    setEnabledValue(value);
                    setDisable(true);
                }
            break; 
            case 'phoneCalled':
                if (checkPhoneCalled) {
                    setCheckPhoneCalled(false);
                    setDisable(false);
                }else {
                    setCheckPhoneCalled(true);  
                    setEnabledValue(value);
                    setDisable(true);
                }
            break; 
            case 'interviewed':
                if (checkInterviewed) {
                    setCheckInterviewed(false);
                    setDisable(false);
                }else {
                    setCheckInterviewed(true);  
                    setEnabledValue(value);
                    setDisable(true);
                }
            break;                             
            case 'applyDate':
                setApplyDate(value);
            break;  
            case 'appliedDate':
                setAppliedDate(value);
            break; 
            case 'phoneCallDate':
                setPhoneCallDate(value);
            break;      
            case 'interviewDate':
                setInterviewDate(value);
            break;                                   
            default:
                console.log("Unidentified input field found in the insertPage form");
        }
    }    

    function handleSubmit(event){
        event.preventDefault();  
        fetch ("/create", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },    
              body: JSON.stringify({ 
                  //name: name 
              }) 
        }).then((res) => res.json())
        .then((data) => console.log(data.message));               
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            {/* Input Company Name */}
            <div className = "row mb-3 d-flex justify-content-center">
                    <label className="col-sm-2 col-form-label">Company Name</label>
                    <div className="col-sm-2">
                        <Input 
                            name = "companyName"
                            type = "text" 
                            onChange = {handleChange}
                            placeholder = "Enter Company Name"
                            value = {companyName}
                        /> 
                    </div>
                </div>
                {/* Input Job Post URL */}
                <div className = "row mb-3 d-flex justify-content-center">
                    <label className="col-sm-2 col-form-label">Job Post URL</label>
                    <div className="col-sm-2">
                    <Input 
                        name = "jobURL"
                        type = "url"
                        onChange = {handleChange}
                        placeholder = "Enter URL"
                        value = {jobURL}
                    />   
                    </div>
                </div>
                {/*Checkbox - New, Applied, Phone-Called, Interviewed */}
                <div className = "column mt-4 mb-4 d-flex justify-content-center">
                    <div className="form-check form-check-inline">
                        <Input className="form-check-input" type="checkbox" id="inlineCheckbox1" name="new" value="new" onChange = {handleChange} disabled={enabledValue === "new" ? null : disable} />
                        <label className="form-check-label" for="inlineCheckbox1">New</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <Input className="form-check-input" type="checkbox" id="inlineCheckbox2" name="applied" value="applied" onChange = {handleChange} disabled={enabledValue === "applied" ? null : disable} />
                        <label className="form-check-label" for="inlineCheckbox2">Applied</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <Input className="form-check-input" type="checkbox" id="inlineCheckbox3" name="phoneCalled" value="phoneCalled" onChange = {handleChange} disabled={enabledValue === "phoneCalled" ? null : disable} />
                        <label className="form-check-label" for="inlineCheckbox3">Phone-Called</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <Input className="form-check-input" type="checkbox" id="inlineCheckbox4" name="interviewed" value="interviewed" onChange = {handleChange} disabled={enabledValue === "interviewed" ? null : disable} />
                        <label className="form-check-label" for="inlineCheckbox4">Interviewed</label>
                    </div>   
                </div> 
                <div className="d-flex justify-content-center mt-3 mb-5">
                {/* Checkbox Specific - New */}
                    {checkNew ?                 
                    <div className = "row mb-3 d-flex justify-content-center">
                        <label className="col-sm-5 col-form-label">Date to Apply:</label>
                        <div className="col-sm-5">
                            <Input 
                                name = "applyDate"
                                type = "date"
                                onChange = {handleChange}
                                placeholder = "Enter Date"
                                value = {applyDate}
                            />   
                        </div>
                    </div> 
                    : null}
                {/* Checkbox Specific - Applied */}
                    {checkApplied ?                 
                        <div className = "row mb-3 d-flex justify-content-center">
                            <label className="col-sm-5 col-form-label">Applied Date:</label>
                            <div className="col-sm-5">
                                <Input 
                                    name = "appliedDate"
                                    type = "date"
                                    onChange = {handleChange}
                                    placeholder = "Enter Date"
                                    value = {appliedDate}
                                />   
                            </div>
                        </div> 
                    : null}                
                {/* Checkbox Specific - Phone Called */}
                    {checkPhoneCalled ?                 
                            <div className = "row mb-3 d-flex justify-content-center">
                                <label className="col-sm-6 col-form-label">Phone Call(ed) Date:</label>
                                <div className="col-sm-6">
                                    <Input 
                                        name = "phoneCallDate"
                                        type = "date"
                                        onChange = {handleChange}
                                        placeholder = "Enter Date"
                                        value = {phoneCallDate}
                                    />   
                                </div>
                            </div> 
                    : null}                    
                {/* Checkbox Specific - Interviewed */}    
                    {checkInterviewed ?                 
                            <div className = "row mb-3 d-flex justify-content-center">
                                <label className="col-sm-6 col-form-label">Interview(ed) Date:</label>
                                <div className="col-sm-6">
                                    <Input 
                                        name = "interviewDate"
                                        type = "date"
                                        onChange = {handleChange}
                                        placeholder = "Enter Date"
                                        value = {interviewDate}
                                    />   
                                </div>
                            </div> 
                    : null}                    
                </div>
                {/* Submit Button - Add Job to Database */}
                <div className="d-flex justify-content-center mt-3 mb-5">
                    <Input
                        type = "submit"
                        value = "Add Job" 
                    />
                </div>        
            </form>
        </div>
    );
}

export default InsertPage;