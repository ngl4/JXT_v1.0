import React from "react";
import Input from "../UI/input";
import SubmitButton from "../UI/submitButton";

function Form(props) {
  return (
    <div>
      <form action={props.action} method={props.method}></form>
    </div>
  );
}

export default Form;
