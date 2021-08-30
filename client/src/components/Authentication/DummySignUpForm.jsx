import React, { useState } from "react";
import Input from "../UI/input";
import SubmitButton from "../UI/submitButton";

function DummySignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleChange(event) {
        setUsername(event.target.value);
        setPassword(event.target.value);
    }

    function handleClick(event){
        event.preventDefault();
        console.log("This is clicked!");
        console.log(username, password);
    }

    return (
        <div className = "d-flex flex-column justify-content-center">
            {/* <form action="/create" method="POST"> */}
                <div className = "row mb-3 d-flex justify-content-center">
                    <label className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-2">
                        <Input 
                            name = "username"
                            type = "text" 
                            onChange = {handleChange}
                            placeholder = "username"
                            value = {username}
                        /> 
                    </div>
                </div>
                <div className = "row mb-3 d-flex justify-content-center">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-2">
                    <Input 
                        name = "password"
                        type = "password"
                        onChange = {handleChange}
                        placeholder = "password"
                        value = {password}
                    />   
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <SubmitButton
                        name = "submit"
                        type = "submit"
                        text = "Submit"
                        onClick = {handleClick}
                        className = "btn btn-primary"
                    />      
                </div>        
            {/* </form> */}
        </div>
    );
}

export default DummySignUpForm;