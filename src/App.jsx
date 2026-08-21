import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedPost from "./components/FeaturedPost";
import LatestPosts from "./components/LatestPosts";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Hero />
        <FeaturedPost />
        <LatestPosts />
      </main>

      <Footer />
    </div>
  );
}

export default App;