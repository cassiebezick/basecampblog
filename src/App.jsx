import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Hero from "./components/Hero"

function App() {
  return (
    <div className="page__wrapper">
        <Header />
      <main>
        <div className='hero__wrapper'>
         <Hero />
         </div>
       {/* <FeaturedPost />
        <LatestPosts /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;