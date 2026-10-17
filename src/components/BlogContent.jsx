function BlogContent({ content }) {
  return (
    <div className="blog-post__content">

      {content.map((block, index) => {
        switch (block.type) {

        case "heading":
            return (
                <h2
                    key={index}
                    id={block.id}
                    className="blog-content__heading"
                >
            {block.text}
            </h2>
        );
        
          case "subheading":
            return <h3 key={index}>{block.text}</h3>;

          case "paragraph":
            return <p key={index}>{block.text}</p>;

          case "quote":
            return (
              <blockquote key={index}>
                {block.text}
              </blockquote>
            );

          case "list":
            return (
              <ul key={index}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            );

          case "image":
            return (
              <figure key={index}>
                <img
                  src={block.src}
                  alt={block.alt}
                />
                {block.caption && (
                  <figcaption>{block.caption}</figcaption>
                )}
              </figure>
            );

          case "code":
            return (
              <pre key={index}>
                <code>{block.code}</code>
              </pre>
            );

          case "callout":
            return (
              <aside
                key={index}
                className="blog-post__callout"
              >
                <strong>{block.title}</strong>
                <p>{block.text}</p>
              </aside>
            );

          default:
            return null;
        }
      })}

    </div>
  );
}

export default BlogContent;