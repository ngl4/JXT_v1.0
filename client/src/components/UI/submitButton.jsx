import React from "react"; 

function SubmitButton(props) {
    return <button onClick={props.onClick} onKeyPress={props.onKeyPress}>{props.text}</button>
}

export default SubmitButton;