import React from "react";
import source from "../projects.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./Card";

function Projects() {
    const cards = source.map(projectInfo => {
        return(
            <ProjectCard
                {...projectInfo}
            />
        )
    })
    console.log(cards)
    return(
        <Container fluid="sm">
            <Row xs={1}>
            {cards}
            </Row>
        </Container>
    )
};

export default Projects;