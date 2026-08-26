

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">
          Welcome to basecamp ♡
        </p>

        <h1>
          Learning to code,
          <br />
          one <span>trail</span> at a time.
        </h1>

        <p className="hero__description">
          Front-end development, projects, lessons learned,
          and occasional adventures from Alaska.
        </p>

        <a href="/articles" className="button">
          🥾 Start Hiking →
        </a>
      </div>

      <div className="hero__image"></div>
    </section>
  );
}

export default Hero;