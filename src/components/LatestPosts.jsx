import { postsData } from "../data/posts";
import PostCard from "./PostCard";

function LatestPosts() {
  const latestPosts = postsData.filter((post) => !post.featured).slice(0, 3);

  return (
    <section className="latest-posts">
      <div className="latest-posts__header">
        <h2 className="latest-posts__title">Latest Mile Markers</h2>

        <a className="latest-posts__view-all" href="/articles">
          View All Articles →
        </a>
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
