import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="hero-container">
            <image src= "images/home.jpg" />
            <h1>ADVERTISING THE GREAT HOTEL</h1>
            <p>WE OFFER BEST AND QUALITY ROOMS ,,,PLEASE VISIT US!!!!!!!</p>
            <div className="hero-btn">
                {/* <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    GET STARTED
                </Button> */}
                <Button
                    className="btn"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    onClick={console.log('hey')}
                >
                    {/* WATCH TRAILER <i className="far fa-play-circle" /> */}
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;