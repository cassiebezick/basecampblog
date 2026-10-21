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

          case "table":
            return (
              <div key={index} role="region" aria-label={block.caption || "Reference table"}
                tabIndex={0} style={{ overflowX: "auto", marginBlock: "1.5rem" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                  {block.caption && <caption style={{ textAlign: "left", marginBottom: "0.75rem" }}>{block.caption}</caption>}
                  <thead>
                    <tr>{block.headers.map((header, cellIndex) => (
                      <th key={cellIndex} scope="col" style={{ padding: "0.75rem", borderBottom: "2px solid currentColor", verticalAlign: "top" }}>{header}</th>
                    ))}</tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => cellIndex === 0 ? (
                          <th key={cellIndex} scope="row" style={{ padding: "0.75rem", borderBottom: "1px solid currentColor", verticalAlign: "top" }}><code>{cell}</code></th>
                        ) : (
                          <td key={cellIndex} style={{ padding: "0.75rem", borderBottom: "1px solid currentColor", verticalAlign: "top" }}>{cellIndex === row.length - 1 ? <code>{cell}</code> : cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}

    </div>
  );
}

export default BlogContent;