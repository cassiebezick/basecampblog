import { useParams, Link } from "react-router-dom";
import { postsData } from "../data/posts.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import BlogContent from "../components/BlogContent";
import ArticleTrailNav from "../components/ArticleTrailNav";
import authorImage from "../assets/me.jpg";
import "./BlogPostPage.css";

function BlogPostPage() {
  const { slug } = useParams();
  const index = postsData.findIndex((post) => post.slug === slug);
  const post = postsData[index];

  if (!post) {
    return <main className="blog-post__not-found"><h1>Trail Not Found</h1><p>Looks like this trail hasn't been mapped yet.</p><Link to="/blog">← Return to Basecamp</Link></main>;
  }

  const content = post.content ?? [];
  const previous = postsData[index - 1];
  const next = postsData[index + 1];

  return (
    <main className="blog-post">
      <div className="blog-post__layout">
        <ArticleTrailNav key={post.slug} content={content} />
        <article className="blog-post__article">
          <nav className="blog-post__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Basecamp</Link>
            <span aria-hidden="true">/</span>
            <Link to="/blog">Articles</Link>
            <span aria-hidden="true">/</span>
            <span>Mile Marker {post.mileMarker}</span>
          </nav>

          <header className="blog-post__header">
            <p className="blog-post__eyebrow">Mile Marker {post.mileMarker} · {post.category}</p>
            <h1>{post.title}</h1>
            <p className="blog-post__excerpt">{post.excerpt}</p>
            <div className="blog-post__meta">

            <div className="blog-post__author-container">
              <img className="blog-post__author-image" src={authorImage} alt="Cassie" />
              <span>
                By <strong>{post.author || "Cassie"}</strong>
              {post.date && <> · {post.date}</>}
              </span>
            </div>

            
            <div className="blog-post__details-container">
              <div className="blog-post__elevationcontainer">
              <FontAwesomeIcon className="blog-post__icon" icon={faMountain} />
              <span>Elevation Gain: + {post.elevation}
              </span>
              </div>
              |
              <div className="blog-post__readtimecontainer">
                <FontAwesomeIcon className="blog-post__icon" icon={faBook} />
              <span>{post.readTime}</span>
              </div>
            </div>
            
            </div>
          </header>
          {post.image && <img className="blog-post__cover" src={post.image} alt={post.imageAlt || post.title} />}
          <BlogContent content={content} />
          {!content.length && <p className="blog-post__empty">This mile marker is still being written. Check back for notes from the trail.</p>}
          
          <footer className="blog-post__author">
          </footer>


          <nav className="blog-post__neighbors" aria-label="Previous and next articles">
        
            {previous ? <Link to={`/blog/${previous.slug}`}>
            <div className="previous__container">
            <div className="previous__image"><img src={previous.image} className="previous__imgthumb"></img></div>
            <div className="previous__text">
            <span>← Previous mile marker</span>
            <strong>{previous.title}</strong>
            </div>
            </div>
            </Link> : <div />}

            {next && <Link to={`/blog/${next.slug}`}>
            <div className="next__container">
            <div className="next__text">
            <span>Next mile marker →</span>
            <strong>{next.title}</strong>
            </div>
            <div className="previous__image"><img src={next.image} alt="" className="next__imgthumb" /></div>
            </div>
            </Link>}
          </nav>

          <Link className="blog-post__return" to="/blog">Continue down the trail →</Link>
        </article>
      </div>
    </main>
  );
}
export default BlogPostPage;
