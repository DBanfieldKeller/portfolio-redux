import React from 'react';

function Navigation(props) {   


    return (
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link" onClick={(e)=>{
                  props.setPage('AboutMe');
                }}>About Me</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={(e)=>{
                  props.setPage('Projects')
                }}>Projects</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={(e)=>{
                  props.setPage('ContactMe')
                }}>Contact Me</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={(e)=>{
                  props.setPage('Resume')
                }}>Resume</div>
              </li>
            </ul>
          </div>
      </nav>
  );
}

export default Navigation;