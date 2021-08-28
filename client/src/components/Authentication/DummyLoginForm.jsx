import React, { useState } from "react";
import Input from "../UI/input";
import SubmitButton from "../UI/submitButton";

function DummyLoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <form action="/login" method="POST">

            </form>
        </div>
    );
}

export default DummyLoginForm;