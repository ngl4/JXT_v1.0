import React from "react"; 
import PropTypes from "prop-types";

function Input({onChange, onKeyPress, 
    name, type, style, placeholder, value}) {
    return <input 
    onChange = {onChange}
    onKeyPress={onKeyPress}
    name = {name}    
    type = {type} 
    style = {style}
    placeholder = {placeholder} 
    value = {value}></input>
}; 

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    style: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired
}

export default Input;