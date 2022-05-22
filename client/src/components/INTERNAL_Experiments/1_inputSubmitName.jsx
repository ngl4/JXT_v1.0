import React, { useState } from "react";
import Input from "../UI/input";
import SubmitButton from "../UI/submitButton";

function GreetingName() {
    const [name, setName] = useState(""); 
    const [headingText, setHeadingText] = useState(""); //initial state is ""
    
    function handleChange(event) {
        // event.preventDefault();
        setName(event.target.value);  
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(name);
        setHeadingText(name);
    }

    function handleKeyPress(event) {
        if(event.key === 'Enter'){
            console.log('enter press here! ');
            setHeadingText(name);
          }
    }
 
    return (
        <div>
            <h1>Hello {headingText}</h1>
            <Input  
                name = "fullName"
                onChange = {handleChange}
                type = "text"
                placeholder = "What is your name?"
                value = {name}
                onKeyPress={handleKeyPress} //actually need to be in input haha
            />
            <br /><br />
            <SubmitButton onClick={handleClick} text="Submit"/>
        </div>
    );
}

export default GreetingName;