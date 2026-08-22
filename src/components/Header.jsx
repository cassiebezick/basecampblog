function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">
        <span className="logo__symbol">&lt;/&gt;</span>

        <div>
          <p className="logo__name">CASSIE CODES</p>
          <p className="logo__tagline">
            BASECAMP: FRONT-END DEV 🌲
          </p>
        </div>
      </a>

      <nav className="nav">
        <a href="/">Home</a>
        <a href="/articles">Articles</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>

        <button className="theme-toggle">
          ☾
        </button>
      </nav>
    </header>
  );
}

export default Header;