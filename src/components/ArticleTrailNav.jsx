function ArticleTrailNav({ content }) {
  const sections = content.filter(
    (block) => block.type === "heading"
  );

  return (
    <nav
      className="article-trail-nav"
      aria-label="Article sections"
    >
      <div className="article-trail-nav__inner">

        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="article-trail-nav__item"
          >
            <span className="article-trail-nav__marker" />

            <span className="article-trail-nav__label">
              {section.text}
            </span>
          </a>
        ))}

      </div>
    </nav>
  );
}

export default ArticleTrailNav;