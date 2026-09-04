import Hero from "../components/Hero";
import ProgressTrail from "../components/ProgressTrail";
import FeaturedPost from "../components/FeaturedPost";
import LatestPosts from "../components/LatestPosts";

function HomePage() {
  return (
    <main>
      <div className="hero-trail__wrapper">
        <Hero />
        <ProgressTrail />
      </div>

      <FeaturedPost />
      <LatestPosts />
    </main>
  );
}

export default HomePage;