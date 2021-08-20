import React from "react"; 

function Input(props) {
    return <input 
    onChange = {props.onChange}
    onKeyPress={props.onKeyPress}
    name = {props.name}    
    type = {props.type} 
    placeholder = {props.placeholder} 
    value = {props.value}></input>
}

export default Input;