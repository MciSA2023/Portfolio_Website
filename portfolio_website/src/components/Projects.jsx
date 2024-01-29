import React from 'react';
import './Projects.css';
import Projekt from './undercomponents/Projekt.jsx';

function Projects() {
  return (
    <section className="projects_mutter_container">
      <div className="projects_container">
        <div className='projects_project_container'>
                <Projekt preViewurl={require ("./resourcen/App_Bild_preview.png")}
                imageUrl={require ("./resourcen/App_Bild_Image.png")}/>
                <Projekt preViewurl={require ("./resourcen/DSC09594.JPG")}/>
                <Projekt preViewurl={require ("./resourcen/DSC09594.JPG")}/>
            </div>
        </div>
       
    </section>
  );
}

export default Projects;
