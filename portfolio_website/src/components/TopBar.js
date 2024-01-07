import './Topbar.css';


function TopBar() {
    return (
      <div className="topbar_container">
        <div className = "topbarleft_placer">
            <div className="topbarleft_item">Logo</div>
        </div>
        <div className="topbarright_placer">
            <div className="topbarright_item">Home</div>
            <div className="topbarright_item">About</div>
            <div className="topbarright_item">Projects</div>
            <div className="topbarright_item">Contact</div>
        </div>
            
        
      </div>
    );
  }
  
  export default TopBar;