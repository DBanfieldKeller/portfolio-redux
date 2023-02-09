import React from "react";

// Individual Card build-out using props
function Card(props) {
    return (
      <div className="card container"> 
        <div className="container">
          <img className="img-fluid" alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <h3 className="project-title" id="card-title">{props.name}</h3>
              <p>
              <a href={props.github}><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a> 
              <a href={props.deploy}><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/></a> 
              </p>
              <p id="topics">
                    ({props.topics})
                </p>
        </div>
      </div>
    );
}
  
  export default Card;