import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage.jsx";
import BlogPostPage from "./pages/BlogPostPage.jsx";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="page__wrapper">
      <Header />

      <Routes>
         {/* REMEMBER: Only Route components belong here */}
        <Route 
          path="/" 
          element={<HomePage />} />
        <Route 
          path="/blog" 
          element={<BlogPage />} />
        <Route
          path="/blog/:slug"
          element={<BlogPostPage />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;