import React from 'react';
import './Projects.css';
import Projekt from './undercomponents/Projekt.jsx';

function Projects() {
  return (
    <section className="projects_mutter_container">
      <div className="projects_container">
        <div className='projects_scrollview_container'>
            <div className='projects_scrollview_background'>
                <Projekt imageUrl={require ("./resourcen/DSC09594.JPG")}/>
                <Projekt imageUrl={require ("./resourcen/DSC09594.JPG")}/>
                <Projekt imageUrl={require ("./resourcen/DSC09594.JPG")}/>
                </div>
            </div>
        </div>
       
    </section>
  );
}

export default Projects;
