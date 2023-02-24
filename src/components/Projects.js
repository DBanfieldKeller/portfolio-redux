import React from "react";
import source from "../projects.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./Card";

function Projects() {
    const cards = source.map(projectInfo => {
        return (
            <Col>
                <ProjectCard
                    {...projectInfo}
                />
            </Col>
        )
    })
    console.log(cards)
    return (
        <Container>
            <Row>
                {cards}
            </Row>
        </Container>
    )
};

export default Projects;