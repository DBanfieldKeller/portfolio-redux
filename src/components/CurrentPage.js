import React from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import Resume from "./Resume";

export default function CurrentPage(props) {
    let display
    if (props.currentPageState === "AboutMe") {
        display = <AboutMe />
    } else if (props.currentPageState === "ContactMe") {
        display = <ContactMe />
    } else if (props.currentPageState === "Projects") {
        display = <Projects />
    } else if (props.currentPageState === "Resume") {
        display = <Resume />
    }
    return (
        <div>
            {display}
        </div>
    )
} 