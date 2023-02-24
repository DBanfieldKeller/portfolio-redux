import React from "react";
import Hero from "../Hero/Hero";
import "./style.css";


function AboutMe() {
    return (
        <div>
            <Hero />
            <div className="about--me">
                <h2>About Me</h2>
                <p>I am a full stack web developer with experience in MERN, Javascript, HTML, and CSS. Examples of my work are on display in the projects section of this website. I graduated from UC Berkeley in 2016 with a BA in Japanese and Linguistics. Since that time I have worked for Japanese companies and became proficient working cross Japanese and American business cultures. </p>
            </div>
        </div>
    )
};

export default AboutMe;