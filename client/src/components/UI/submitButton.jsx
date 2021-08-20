import React from "react"; 

function SubmitButton(props) {
    return <button onClick={props.onClick}>{props.text}</button>
}

export default SubmitButton;