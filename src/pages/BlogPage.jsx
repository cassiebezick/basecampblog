import { useState } from "react";
import FeaturedPost from "../components/FeaturedPost";
import PostCard from "../components/PostCard";
import { postsData } from "../data/posts.jsx";

function BlogPage() {
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(postsData.map((post) => post.category))];
  const posts = postsData.filter((post) => category === "All" || post.category === category);

  return (
    <main className="articles-page">
      <header>
        <h1>Notes from the Trail</h1>
        <p>One concept, one project, and one mile marker at a time.</p>
      </header>

      {category === "All" && (
        <div className="articles-page__featuredpost">
          <FeaturedPost />
        </div>
      )}

      <section aria-labelledby="all-articles-title">
        <h2 id="all-articles-title">All Articles</h2>
        <div className="headerbutton__container" role="group" aria-label="Filter articles by category">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`headerbutton${category === item ? " headerbutton--active" : ""}`}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="articles-page__grid">
          {posts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </section>
    </main>
  );
}

export default BlogPage;
