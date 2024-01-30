import React, { useRef, useEffect } from 'react';
import './About.css';
import './undercomponents/IconsItem';
import IconsItem from './undercomponents/IconsItem';





function About() {

const imagePaths = [require ("./resourcen/DSC09594.JPG"),require ("./resourcen/DSC09594.JPG")]
  
return(
    <div class="about_mutter_container" id="about_mutter">
      <div class="about_grid_container">
        <div class="about_grid">
            <div class="grid_item item1">
              <div class="about_bild_container">
              <img class="profil_bild"src={require ("./resourcen/DSC09594.JPG")} alt="Profilbild" /> 
              </div>
            </div>
            <div class="grid_item item2">
              <IconsItem images={imagePaths} />
            </div>
            <div class="grid_item item3">
            <div class="location_icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50"><path d="M480-301q99-80 149.5-154T680-594q0-56-20.5-95.5t-50.5-64Q579-778 544-789t-64-11q-29 0-64 11t-65 35.5q-30 24.5-50.5 64T280-594q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-514Z"fill="var(--orange)"/></svg>
            </div>
            <p class="location_schrift">
                <span class="location_schrift_1">Based <br></br></span>
                <span class="location_schrift_2">in <br></br></span>
                <span class="location_schrift_3">Austria <br></br>  </span>
                <span class="location_schrift_4">Innsbruck</span>
              </p>
            </div>

            <div class="grid_item item4">
              <p class="current_schrift_1">Currently I am studying <span class="current_schrift_2">Digital Business and Software Engenieering.</span> <br></br>
              I enjoy doing <span class="current_schrift_3">Front-End developing.</span> </p>
              
            </div>
            <div class="grid_item item5">Instagram</div>
            <div class="grid_item item6">LinkedIn</div>
            <div class="grid_item item7">GitHub</div>
            <div class="grid_item item8">Contact Me!</div>
        </div>
      </div>

    </div>

);

}


export default About;