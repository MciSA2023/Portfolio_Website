import React from 'react';
import './Topbar.css';

function TopBar() {
  return (
    <div className="topbar_container">
      <div className="topbarleft_placer">
        <div className="topbarleft_item"></div>
      </div>
      <nav className="topbarright_placer">
        <ul className="topbarright_list">
          <li className="topbarright_item">
            <a className='topbarright_item_link' href="#header_container">Home</a>
          </li>
          <li className="topbarright_item">
            <a className='topbarright_item_link' href="#about_mutter">About</a>
          </li>
          <li className="topbarright_item">
            <a className='topbarright_item_link' href="#project_mutter_container">Projects</a>
          </li>
          <li className="topbarright_item">
            <a className='topbarright_item_link' href="#about_mutter">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TopBar;
