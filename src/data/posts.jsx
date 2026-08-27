import blogPostImage1 from "../assets/blogimage1.png";
import blogPostImage2 from "../assets/blogimage2.png";
import blogPostImage3 from "../assets/blogimage3.png";

export const postsData = [
  {
    id: 1,
    mileMarker: 12,
    category: "React",
    title: "What I’ve Learned About React So Far",
    excerpt:
      "A look at the core React concepts that finally clicked for me—components, props, state, and the Virtual DOM. Plus, mistakes I made along the way.",
    image: blogPostImage1,
    elevation: "5,280 ft",
    readTime: "7 min read",
    comments: 3,
    featured: true,
    slug: "what-ive-learned-about-react",
  },
  {
    id: 2,
    mileMarker: 8,
    category: "JavaScript",
    title: "5 JavaScript Concepts I Struggled With",
    excerpt:
      "The JavaScript concepts that tripped me up—and the explanations and practice exercises that finally helped them make sense.",
    image: blogPostImage2,
    elevation: "3,450 ft",
    readTime: "6 min read",
    comments: 2,
    featured: false,
    slug: "javascript-concepts-i-struggled-with",
  },
  {
    id: 3,
    mileMarker: 5,
    category: "CSS",
    title: "Finally Understanding CSS Positioning",
    excerpt:
      "CSS positioning used to feel like guesswork. Here’s what helped me understand static, relative, absolute, fixed, and sticky positioning.",
    image: blogPostImage3,
    elevation: "2,800 ft",
    readTime: "5 min read",
    comments: 1,
    featured: false,
    slug: "finally-understanding-css-positioning",
  },
];