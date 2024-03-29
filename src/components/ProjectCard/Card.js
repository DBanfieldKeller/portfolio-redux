import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css"

// Individual Card build-out using props
function ProjectCard(props) {
  return (
    <Card style={{ width: '22rem' }}>
      <Card.Img className="cardImg" variant="top" alt={props.name} src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.topics}
        </Card.Text>
        <a href={props.github} rel="noreferrer" target="_blank"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon" /></a>
        <a href={props.deploy} rel="noreferrer" target="_blank"><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon" /></a>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;