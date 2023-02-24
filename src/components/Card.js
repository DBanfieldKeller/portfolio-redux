import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Individual Card build-out using props
function ProjectCard(props) {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" alt={props.name} src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.topics}
        </Card.Text>
        <a href={props.github}><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon" /></a>
        <a href={props.deploy}><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon" /></a>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;