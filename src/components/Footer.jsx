import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faChevronRight,
  faMountain,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__column footer__about">
          <h2 className="footer__heading">
            About Basecamp ♡
          </h2>

          <p className="footer__description">
            I’m Cassie—a front-end developer in training,
            coffee enthusiast, and Alaska adventurer. This is
            where I write about code, projects, lessons learned,
            and life along the way.
          </p>

          <div className="footer__socials">
            <a
              href="https://github.com/your-username"
              aria-label="Visit Cassie's GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="https://linkedin.com/in/your-username"
              aria-label="Visit Cassie's LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="https://instagram.com/your-username"
              aria-label="Visit Cassie's Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="mailto:you@example.com"
              aria-label="Email Cassie"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>

        <div className="footer__column footer__newsletter">
          <h2 className="footer__heading">
            Supply Drop
          </h2>

          <p className="footer__description">
            Get new posts, coding tips, and Alaska adventures
            delivered to your inbox.
          </p>

          <form className="footer__form">
            <label
              className="sr-only"
              htmlFor="subscriber-email"
            >
              Email address
            </label>

            <input
              id="subscriber-email"
              name="email"
              type="email"
              placeholder="you@example.com"
            />

            <button type="button">
              Subscribe
            </button>
          </form>
        </div>

        <nav
          className="footer__column footer__navigation"
          aria-label="Footer navigation"
        >
          <h2 className="footer__heading">
            Trail Map
          </h2>

          <ul className="footer__links">
            <li>
              <a href="/articles">
                <FontAwesomeIcon icon={faChevronRight} />
                Articles
              </a>
            </li>

            <li>
              <a href="/projects">
                <FontAwesomeIcon icon={faChevronRight} />
                Projects
              </a>
            </li>

            <li>
              <a href="/about">
                <FontAwesomeIcon icon={faChevronRight} />
                About
              </a>
            </li>

            <li>
              <a href="/contact">
                <FontAwesomeIcon icon={faChevronRight} />
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Cassie Codes. All rights reserved.
        </p>

        <p className="footer__built-with">
          Built with
          <FontAwesomeIcon icon={faMugHot} />
          &amp; curiosity
          <FontAwesomeIcon icon={faMountain} />
        </p>
      </div>
    </footer>
  );
}

export default Footer;