import './About.css';

function About() {

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
             <p class="begrueßung_schrift" >
                <span class="begrueßung_schrift_1">Hello <br></br> </span>
                <span class="begrueßung_schrift_2">I am <br></br></span>
                <span class="begrueßung_schrift_3"> Adhar</span>
            </p>  
            </div>
            <div class="grid_item item3">Item 3</div>
            <div class="grid_item item4"></div>
            <div class="grid_item">Item 5</div>
            <div class="grid_item">Item 6</div>
            <div class="grid_item">Item 7</div>
            <div class="grid_item">Item 8</div>
        </div>
      </div>

    </div>

);

}


export default About;