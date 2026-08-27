import bootImage from "../assets/boot.png"


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
          one <span>step</span> at a time.
        </h1>

        <p className="hero__description">
          Front-end development, projects, lessons learned,
          and occasional adventures from Alaska.
        </p>

        <a href="/articles" className="button">
          <img src={bootImage} alt="" height="30px" className="boot__img"/>
          START HIKING →
        </a>
      </div> {/* END hero__content div*/}

      <div className="hero__image"></div>
    </section>
  );
}

export default Hero;