import './Projekt.css';

function Projekt({ imageUrl }) {

return (

    <div className="projekt_mutter_container">
        <div className="projekt_container">
            <div className='projekt_taskleiste_wrapper'>
                <div className='projekt_taskleiste_container'>
                    <div className='kgb_button_wrapper'>
                        <div className='kgb_button_container'>
                        <div className='projekt_taskleiste_button'id='beenden_button'></div>
                        <div className='projekt_taskleiste_button'id='minimieren_button'></div>
                        <div className='projekt_taskleiste_button'id='maximieren_button'></div>
                        </div>
                    </div>
                    <div className='projekt_suchleiste_wrapper'>
                        <div className='projekt_suchleiste_container'>
                            <div className='projekt_suchleiste_icon_container'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"fill="grey"/></svg>
                            <p className='projekt_suchleiste_text'>www.Adhar-Singh.com</p>       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='projekt_bild_container'>
                <img className='projekt_bild' src={imageUrl} alt="Projektbild" />

            </div>
        </div>
    </div>
 
    
);
    
} 
export default Projekt;