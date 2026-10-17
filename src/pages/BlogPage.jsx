import { useParams, Link } from "react-router-dom";
import { postsData } from "../data/posts.jsx";

import BlogContent from "../components/BlogContent";
import ArticleTrailNav from "../components/ArticleTrailNav";

import "./BlogPostPage.css";

function BlogPostPage() {
  const { slug } = useParams();

  const post = postsData.find(
    (post) => post.slug === slug
  );

  if (!post) {
    return (
      <main className="blog-post__not-found">
        <h1>Trail Not Found</h1>
        <Link to="/blog">Return to Basecamp</Link>
      </main>
    );
  }

  const content = post.content ?? [];

  return (
    <main className="blog-post">

      {/* ARTICLE HEADER */}

      <header className="blog-post__header">

        <div className="blog-post__header-inner">

          <div className="blog-post__breadcrumb">
            <Link to="/">BASECAMP</Link>
            <span>/</span>
            <Link to="/blog">ARTICLES</Link>
            <span>/</span>
            <span>
              MILE MARKER {post.mileMarker}
            </span>
          </div>

          <div className="blog-post__eyebrow">
            MILE MARKER {post.mileMarker}
            <span> • </span>
            {post.category}
          </div>

          <h1>{post.title}</h1>

          <p className="blog-post__excerpt">
            {post.excerpt}
          </p>

          <div className="blog-post__meta">

            <div className="blog-post__author">
              <span>By Cassie</span>
              {post.date && <span>• {post.date}</span>}
            </div>

            <div className="blog-post__stats">
              <span>⛰ {post.elevation}</span>
              <span>◷ {post.readTime}</span>
            </div>

          </div>

        </div>

      </header>

      {/* ARTICLE LAYOUT */}

      <div className="blog-post__layout">

        {/* LEFT TRAIL NAVIGATION */}

        <ArticleTrailNav content={content} />

        {/* MAIN ARTICLE */}

        <article className="blog-post__article">

          {post.image && (
            <div className="blog-post__featured-image">
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
              />
            </div>
          )}

          <BlogContent content={content} />

        </article>

      </div>

    </main>
  );
}

export default BlogPostPage;