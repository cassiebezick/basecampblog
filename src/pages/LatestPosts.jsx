import { postsData } from "../data/posts";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";

function LatestPosts() {
  const latestPosts = postsData.filter((post) => !post.featured).slice(0, 3);

  return (
    <section className="latest-posts">
      <div className="latest-posts__header">
        <h2 className="latest-posts__title">Latest Mile Markers</h2>

        <Link className="latest-posts__view-all" to="/blog">
          View All Articles →
        </Link>
      </div>

      <div className="latest-posts__grid">
        {latestPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default LatestPosts;
