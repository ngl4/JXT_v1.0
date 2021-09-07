import React, { useState } from "react";
import Input from "../UI/input";

function InsertPage() {
    const [companyName, setCompanyName] = useState("");
    const [jobURL, setJobURL] = useState("");

    function handleChange(event) {
        const {value, name} = event.target; 
        
        switch (name){
            case 'companyName':
                setCompanyName(value);
            break;
            case 'jobURL':
                setJobURL(value);
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
                {/* TODO : Checkbox - New, Applied, Phone-Called, Interviewed */}
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