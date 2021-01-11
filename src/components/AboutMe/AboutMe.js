import React from "react";
import "../AboutMe/AboutMe.css";

function AboutMe() {
    return (
<div className="container-fluid" id="AboutMeCont">
    <div className="container padding" id="jumbo">
        <div className="jumbotron">
            <h1 className="display-4" id="About">About Me </h1>
            <hr className="light" color="black"/>

            <div className="row">
                <div className="col-lg-3">
                    <img className="img img-thumbnail" alt="myPicture" src="https://ca.slack-edge.com/TU50P9CUR-UUEEP8T1R-442635098166-512"/>  
                </div>
                <div className="col-lg-9" id="aboutmep">
                    <p>Hello, my name is Fernando Soto, I´m studying to become a Full Stack Web Developer.</p>
                    <p>I´m currently studying TEC´s de Monterrey Coding BootCamp. I have gained experience in HTML5, CSS, JavaScript, NodeJS, Express, MySQL, Mongo DB and React.</p>                
                    <p>Thank you for exploring my portfolio.</p>
                    <p>I've included some of my favorite projects as well as my contact information. I look forward to hearing from you soon!</p>
                    
                </div>    
            </div>
        </div>
    </div> 
</div>      

    )
}

export default AboutMe;