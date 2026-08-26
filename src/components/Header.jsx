import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';


function Header() {
  return (
    <header className="header">
      <div className="logoheader__wrapper">
        <div className="logosymbol__wrapper">
          <span className="logo__symbol">&lt;/&gt;</span>
        </div>{/*-- end logosymbol__wrapper div */}
        <div className="logoname__wrapper">
          <p className="logo__name">CASSIE CODES</p>
          <p className="logo__tagline">
            BASECAMP: LEARNING TO CODE
          </p>
        </div>{/*-- end logoname__wrapper */}
      </div>{/* -- end logoheader__wrapper -- */}

      <nav className="nav">
        <a href="/" className="navlink">HOME</a>
        <a href="/articles" className="navlink">ARTICLES</a>
        <a href="/projects" className="navlink">PROJECTS</a>
        <a href="/about" className="navlink">ABOUT</a>
        <a href="/contact" className="navlink">CONTACT</a>
       <div className="toggle__wrapper">
          <FontAwesomeIcon icon={faSun} className='brighticon'/>
          <button className="theme-toggle">
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;