import React, { useState } from "react";
import Input from "../UI/input";
import SubmitButton from "../UI/submitButton";

function DummySignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <form action="/create" method="POST">

            </form>
        </div>
    );
}

export default DummySignUpForm;