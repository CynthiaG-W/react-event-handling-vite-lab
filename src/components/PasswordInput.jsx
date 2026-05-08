import React from "react";  
// Code PasswordInput Component Here

function PasswordInput (){
    function handleChange(event){
        console.log("Enter password...")
}
    return(
        <input
            type="password"
            onChange={handleChange}
            placeholder="Submit password"
        />
    )
}

export default PasswordInput;