import './Topbar.css';


function TopBar() {
    return (
      <div className="topbar_container">
        <div className = "topbarleft_placer">
            <div className="topbarleft_item"></div>
        </div>
        <nav class="topbarright_placer">
        <a class="topbarright_item" href="#">Home</a>
        <a class="topbarright_item" href="#about_mutter">About</a>
        <a class="topbarright_item" href="#">Projects</a>
        <a class="topbarright_item" href="#">Contact</a>
        </nav>
            
        
      </div>
    );
  }
  
  export default TopBar;