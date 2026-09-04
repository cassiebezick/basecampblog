import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <article className="post-card">
      <img
        className="post-card__image"
        src={post.image}
        alt=""
      />

      <div className="post-card__content">
        <p className="post-card__eyebrow">
          Mile Marker {post.mileMarker} • {post.category}
        </p>

        <h3 className="post-card__title">
          {post.title}
        </h3>

        <p className="post-card__excerpt">
          {post.excerpt}
        </p>

        <div className="post-card__details">
          <span>△ {post.elevation}</span>
          <span>◷ {post.readTime}</span>
          <span>{post.comments} comments</span>
        </div>

        <Link to="/blog/:slug">
          Read the trail notes
        </Link>


        {/* <a
          className="post-card__link"
          href={`/articles/${post.slug}`}
        >
          Continue Hiking →
        </a> */}
      </div>
    </article>
  );
}

export default PostCard;