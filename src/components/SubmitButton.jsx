// Code SubmitButton Component Here

function SubmitButton (){
    function handleEnter(){
        console.log("Mouse entering")
    }
    function handleLeave(){
        console.log("Mouse Exiting")
    }

    return(
        < button 
        onMouseEnter={handleEnter} 
        onMouseLeave={handleLeave}
        >
            Submit password
        </button>

    )
}

export default SubmitButton;