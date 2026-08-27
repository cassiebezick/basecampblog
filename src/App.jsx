import { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProgressTrail from "./components/ProgressTrail";
import FeaturedPost from "./components/FeaturedPost";

function App() {
  return (
    <div className="page__wrapper">
        <Header />
        
        <main>

        <div className='hero__wrapper'>
          <Hero />
        </div>
          <ProgressTrail />
          <FeaturedPost />
         {/*<LatestPosts /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;