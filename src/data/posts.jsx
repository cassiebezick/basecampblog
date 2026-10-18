import blogPostImage1 from "../assets/blogimage1.png";
import blogPostImage2 from "../assets/blogimage2.png";
import blogPostImage3 from "../assets/blogimage3.png";

export const postsData = [
  {
    id: 1,
    mileMarker: 0,
    category: "INTRODUCTORY",
    title: "Join Me on My Coding Journey",
    excerpt:
      "I'll be using this blog to document the concepts I'm learning as I make my way through the world of front-end development.",
    image: blogPostImage1,
    imageAlt: "laptop and notebook with mountain backdrop",
    elevation: "180 FT",
    readTime: "3 MIN READ",
    comments: 0,
    featured: true,
    date: "October 1, 2026",
    slug: "learning-to-code",
    content: [
  {
    type: "heading",
    text: "Starting at Basecamp",
    id: "introduction",
  },
  {
    type: "paragraph",
    text: "Hi, I'm Cassie! I'm an aspiring front-end developer...",
  },
  {
    type: "heading",
    text: "The Beginning of the Trail",
    id: "beginning",
  },
  {
    type: "paragraph",
    text: "You're meeting me pretty close to the beginning of my coding journey...",
  },
  {
    type: "heading",
    text: "Why I'm Documenting My Journey",
    id: "why-blog",
  },
  {
    type: "paragraph",
    text: "This is really the reason I'm here...",
  },
  {
    type: "callout",
    title: "TRAIL NOTE",
    text: "There's a difference between understanding something well enough to use it and understanding it well enough to explain it.",
  },
  {
    type: "heading",
    text: "What Lies Ahead",
    id: "whats-next",
  },
  {
    type: "paragraph",
    text: "I don't know exactly where this journey will take me yet...",
  },
]
  },
  {
    id: 2,
    mileMarker: 1,
    category: "HTML",
    title: "HTML Recap",
    excerpt:
      "HTML RECAP",
    image: blogPostImage3,
    elevation: "2,800 ft",
    readTime: "5 min read",
    comments: 1,
    featured: false,
    slug: "html-recap",
    content: [],
  },
  {
    id: 3,
    mileMarker: 3,
    category: "CSS",
    title: "CSS Recap",
    excerpt:
      "CSS RECAP",
    image: blogPostImage3,
    elevation: "2,800 ft",
    readTime: "5 min read",
    comments: 1,
    featured: false,
    slug: "css-recap",
  },
  {
    id: 4,
    mileMarker: 3,
    category: "JAVASCRIPT",
    title: "JavaScript Recap",
    excerpt:
      "JavaScript RECAP",
    image: blogPostImage3,
    elevation: "2,800 ft",
    readTime: "5 min read",
    comments: 1,
    featured: false,
    slug: "javascript-recap",
  },
  {
    id: 5,
    mileMarker: 8,
    category: "JAVASCRIPT",
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
];