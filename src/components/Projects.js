import React from "react";
import source from "../projects.json";
import Card from "./Card";

function Projects() {
    const cards = source.map(projectInfo => {
        return(
            <Card
                {...projectInfo}
            />
        )
    })
    return(
        <div>
            {cards}
        </div>
    )
};

export default Projects;