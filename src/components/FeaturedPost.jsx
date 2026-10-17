import { postsData } from "../data/posts";
import { Link } from "react-router-dom";


function FeaturedPost() {
  const featuredPost = postsData.find((post) => post.featured);

  if (!featuredPost) {
    return null;
  }

  return (
    <section className="featured-post">
      <div className="featured-post__image-wrapper">
        <span className="featured-post__label">
          Featured Mile Marker
        </span>

        <img
          className="featured-post__image"
          src={featuredPost.image}
          alt="Notebook and coffee overlooking the mountains"
        />
      </div>

      <div className="featured-post__content">
        <p className="featured-post__eyebrow">
          Mile Marker {featuredPost.mileMarker} • {featuredPost.category}
        </p>

        <h2>{featuredPost.title}</h2>

        <p className="featured-post__excerpt">
          {featuredPost.excerpt}
        </p>

        <div className="featured-post__footer">
          <div className="featured-post__details">
            <span>△ {featuredPost.elevation}</span>
            <span>◷ {featuredPost.readTime}</span>
            <span>▢ {featuredPost.comments} comments</span>
          </div>
        
        <Link
          className="featured-post__link"
          to={`/blog/${featuredPost.slug}`}
        >
          Continue Hiking →
        </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPost;