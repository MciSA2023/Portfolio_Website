import './Header.css';


function Header() {
  

    return (
  <header>
    <section className='mutter_container'>
      <div className="header_container">
        <div className='headbild_container'>
          <img className="bild"src={require ("./resourcen/DSC08772.jpeg")} alt="Header" />
        </div>  
        <div className='headtext_container'>
          <h1 className="headertext">Welcome to my Space <br></br>Adhars Space</h1>
        </div>  
      </div>    
    </section>
</header>
    );
  }
  
  export default Header;