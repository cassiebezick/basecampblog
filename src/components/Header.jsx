import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logoheader__wrapper">
        <div className="logosymbol__wrapper">
          <span className="logo__symbol">&lt;/&gt;</span>
        </div>{/*-- end logosymbol__wrapper div */}
        <div className="logoname__wrapper">
          <p className="logo__name">CASSIE CODES</p>
          <p className="logo__tagline">BASECAMP: LEARNING TO CODE</p>
        </div>{/*-- end logoname__wrapper */}
      </div>{/* -- end logoheader__wrapper -- */}

      <nav className="nav">
        <NavLink to="/" className="navlink">
          HOME
        </NavLink>

        <NavLink to="/blog" className="navlink">
          ARTICLES
        </NavLink>

        <a href="https://cassiebezick.github.io/modernized-e-portfolio/" className="navlink" target='_blank'>PORTFOLIO</a>
        
        <NavLink to="/about" className="navlink">
          ABOUT
        </NavLink>

        <NavLink to="/contact" className="navlink">
          CONTACT
        </NavLink>

       <div className="toggle__wrapper">
          <FontAwesomeIcon 
          icon={faSun} 
          className='brighticon'
          />

          <button 
          className="theme-toggle"
          aria-label="Change color theme">
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;