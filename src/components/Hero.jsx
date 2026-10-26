import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">
          FRONT-END
        </p>

        <h1>
          Code. Explore. Grow.
        </h1>

        <p className="hero__description">
          Hey, I'm Cassie! Welcome to basecamp!  I'm documenting my journey into front-end development, one project, wrong turn, breakthrough and new concept at a time.
        </p>

        <Link to="/blog">
          HIT THE TRAIL
          <span aria-hidden="true">→</span>
         </Link>
      </div>
    </section>
  );
}

export default Hero;