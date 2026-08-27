import { postsData } from "../data/posts";

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

          <a
            className="featured-post__link"
            href={`/articles/${featuredPost.slug}`}
          >
            Continue Hiking →
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPost;