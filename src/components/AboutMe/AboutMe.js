import React from "react";
import Hero from "../Hero/Hero";
import "./style.css";


function AboutMe() {
    return (
        <div>
            <Hero />
            <div className="about--me">
                <h2>About Me</h2>
                <p>I am a full stack web developer with experience in the MERN stack, Javascript, and AWS cloud services. Examples of my work are on display in the projects section of this website. I graduated from UC Berkeley in 2016 with a BA in Japanese and Linguistics. I am profiecient across American and Japanese business cultures, owing to my experience working for Japanese companies across myriad industries. I look forward to new challenges as I continue to hone my programming skills. </p>
            </div>
        </div>
    )
};

export default AboutMe;