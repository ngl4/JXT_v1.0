import React from "react";

function Error401Page() {
    return(
        <div className="container">
            <div className="mt-5 pt-3">

                <strong>Error 401 MISSING PERMISSION UNAUTHORIZED ACCESS</strong>  
                <br />
                AUTHORIZATION REQUIRED: USER AUTHENTICATION IS REQUIRED! 
            </div>
        </div>
    )
}

export default Error401Page;