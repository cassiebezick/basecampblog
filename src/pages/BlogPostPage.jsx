import { useParams, Link } from "react-router-dom";
import { postsData } from "../data/posts.jsx";
import BlogContent from "../components/BlogContent";
import "./BlogPostPage.css";

function BlogPostPage() {
  const { slug } = useParams();

  const post = postsData.find((post) => post.slug === slug);

  if (!post) {
    return (
      <main className="blog-post__not-found">
        <h1>Trail Not Found</h1>
        <p>Looks like this trail hasn't been mapped yet.</p>
        <Link to="/blog">← Return to Basecamp</Link>
      </main>
    );
  }

  return (
    <main className="blog-post">

      {/* ARTICLE HEADER */}
      <header className="blog-post__header">
        <div className="blog-post__header-inner">

          <Link to="/blog" className="blog-post__back">
            ← Back to the Trail
          </Link>

          <div className="blog-post__eyebrow">
            <span className="blog-post__mile-marker">
              MILE MARKER {String(post.mileMarker).padStart(3, "0")}
            </span>

            <span className="blog-post__category">
              {post.category}
            </span>
          </div>

          <h1>{post.title}</h1>

          <p className="blog-post__excerpt">
            {post.excerpt}
          </p>

          <div className="blog-post__meta">
            {post.date && <span>{post.date}</span>}
            <span>{post.readTime}</span>
            <span>⛰ {post.elevation}</span>
          </div>

        </div>
      </header>

      {/* FEATURED IMAGE */}
      {post.image && (
        <div className="blog-post__featured-image">
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
          />
        </div>
      )}

      {/* ARTICLE BODY */}
      <div className="blog-post__layout">

        <article className="blog-post__article">
          <BlogContent content={post.content ?? []} />

          <div className="blog-post__ending">
            <span>✦ END OF THE TRAIL ✦</span>

            <h2>Thanks for hiking along!</h2>

            <p>
              One concept, one project, and one mile marker
              at a time.
            </p>

            <Link to="/blog">
              Explore More Posts →
            </Link>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="blog-post__sidebar">

          <div className="blog-post__sidebar-card">
            <span className="sidebar-eyebrow">
              THE FIELD GUIDE
            </span>

            <h3>Trail Details</h3>

            <div className="sidebar-detail">
              <span>Mile Marker</span>
              <strong>
                {String(post.mileMarker).padStart(3, "0")}
              </strong>
            </div>

            <div className="sidebar-detail">
              <span>Trail Category</span>
              <strong>{post.category}</strong>
            </div>

            <div className="sidebar-detail">
              <span>Elevation</span>
              <strong>{post.elevation}</strong>
            </div>

            <div className="sidebar-detail">
              <span>Reading Time</span>
              <strong>{post.readTime}</strong>
            </div>

          </div>

          <div className="blog-post__sidebar-note">
            <span>🌲 BASECAMP JOURNAL</span>

            <p>
              Documenting the journey from beginner
              to front-end developer, one trail at a time.
            </p>
          </div>

        </aside>

      </div>

    </main>
  );
}

export default BlogPostPage;