import React, {useState} from "react";
import Input from "../UI/input";
// import SubmitButton from "../UI/submitButton";

function DummySignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [submit, setSubmit] = useState(false);

    function handleChange(event) {
        const {value, name} = event.target; 

        if (name === "username"){
            setUsername(value);
        }else {
            setPassword(value);
        }  
    }

    function handleSubmit(event){
        event.preventDefault();  
        console.log(username, password);
        fetch ("/create", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },    
              body: JSON.stringify({ 
                  username: username,
                  password: password
              }) 
        }).then((res) => res.json())
        .then((status) => console.log(status.message));               
        alert(`Submitting Username: ${username}, password: ${password}`);
        // setSubmit(true);
        setUsername("");
        setPassword(""); 
    }

    // React.useEffect(() => {
    //     if (submit === true) {
    //         console.log("fetch");
    //         fetch ("/create", {
    //             "method": "POST",
    //             "params": {
    //                 userName: username,
    //                 passWord: password
    //             }
    //         }).then((response) => console.log(response.json()));
    //     }
    // }); 
  

    // function handleClick(event){
    //     event.preventDefault();
    //     console.log("This is clicked!");
    //     console.log("username: " + username, "password: " + password);
    // }

    return (
        <div className = "d-flex flex-column justify-content-center">
            <form onSubmit={handleSubmit}>
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
                <div className="d-flex justify-content-center mt-3 mb-5">
                    <Input
                        type = "submit"
                        value = "Let's Start!" 
                    />
                </div>        
            </form>
        </div>
    );
}

export default DummySignUpForm;