import React from "react"; 

function SubmitButton(props) {
    return <button 
    type={props.type} 
    name={props.name} 
    style={props.style}
    className={props.className}
    value = {props.value}
    onClick={props.onClick}>{props.text}</button>
}

export default SubmitButton;