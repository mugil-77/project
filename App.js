import React, { Component } from 'react'


class Page extends Component {
    render()
    {
        return (
            <div class="container">
            <button type="submit" class="btn" onclick="openPopup()">Submit </button>
            <div class="popup" id="popup">
                <img src="tick2.png" />
                <h2>Thank You!</h2>
                <p>Your details has been successfully submitted. Thanks! </p>
                <button type="button" onclick="closePopup()">OK</button> 
            </div>
        
        
    <script>
    let popup = document.getElementById("popup"); 
    
    function openPopup(){
        popup.classList.add("open-popup"); 
    }
    function closePopup(){
        popup.classList.remove("open -popup");
    }
    
    </script>
    </div>
        )   
    }
    
}

export default App
