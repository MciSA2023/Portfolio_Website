import './Header.css';
import TipStyleName from './undercomponents/tippeffekt';


function Header() {
  
  const highlightedLetters = ['D', 'e', 'i'];

    return (
    <header>
      <section className='header_container'>
        <div className='name_container'>
          <TipStyleName name="<Willkommen>auf meiner Website/>" highlightedLetters={highlightedLetters} />
        </div>  
        
            
        
      </section>
    </header>
    );
  }
  
  export default Header;