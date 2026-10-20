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
        <h3>FIELD NOTES FROM THE TRAIL</h3>
        <h1>Articles from Basecamp</h1>
        <p className="blogheader__para">Lessons, discoveries, and real experiences from my journey learning frontend development.  Each post is a mile marker on the trail - a step forward, a new view, and a reminder that progress happens one small climb at a time.</p>
      </header>

      <section aria-labelledby="all-articles-title">
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


        <div className="articles-page__featuredpost">
          <FeaturedPost />
        </div>


        <div className="articles-page__grid">
          {posts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </section>
    </main>
  );
}

export default BlogPage;
