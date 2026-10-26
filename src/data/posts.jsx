import blogPostImage1 from "../assets/blogimage1.png";
import blogPostImage2 from "../assets/blogimage2.png";
import blogPostImage3 from "../assets/blogimage3.png";
import flexBoxGuide from "../assets/FlexBoxGuide.png";
import gridGuide from "../assets/GridGuide.png";
import blogimagehtmlsemantic from "../assets/blogimagehtmlsemantic.png";
import blogimagecss from "../assets/blogimagecss.png";
import blogimageflexbox from "../assets/blogimageflexbox.png";
import blogimagehtml from "../assets/blogimagehtml.png";
import blogimagejavascript from "../assets/blogimagejavascript.png";
import blogimageresponsive from "../assets/blogimageresponsive.png";
import blogimagegrid from "../assets/blogimagegrid.png";
import blogimagereact2 from "../assets/blogimagereact2.png"

export const postsData = [
  {
    id: 1,
    mileMarker: 0,
    category: "INTRODUCTORY",
    title: "Learning to Code: Welcome to Basecamp",
    excerpt:
      "A record of what I learn, what I build, and how I solve problems along the way.",
    image: blogPostImage1,
    imageAlt: "laptop and notebook with mountain backdrop",
    elevation: "0 FT",
    readTime: "3 MIN READ",
    comments: 0,
    featured: true,
    date: "October 1, 2026",
    slug: "learning-to-code",
    content: [
      {
        type: "paragraph",
        text: "I can follow a lesson and understand the code on the screen. Then I open my own project and find new questions.",
      },
      {
        type: "paragraph",
        text: "Where should this component go? Why does the layout change? How do I get the data onto the page?",
      },
      {
        type: "paragraph",
        text: "Those questions are part of why I started this blog.",
      },
      {
        type: "paragraph",
        text: "I’m Cassie, a front-end development student based in Alaska. I’m learning to build websites with HTML, CSS, JavaScript, and React.",
      },
      {
        type: "paragraph",
        text: "Cassie Codes Basecamp is where I will document that work.",
      },
      {
        type: "heading",
        text: "Why I started this blog",
        id: "why-blog",
      },
      {
        type: "paragraph",
        text: "A working page shows the result. It does not always show the decisions, errors, and changes that produced it.",
      },
      {
        type: "paragraph",
        text: "I want to record those steps while they are still clear in my mind.",
      },
      {
        type: "paragraph",
        text: "Writing gives me a way to check my understanding. If I cannot explain a concept clearly, I know I need more practice.",
      },
      {
        type: "paragraph",
        text: "It also gives me a record I can use when I meet the same problem again.",
      },
      {
        type: "callout",
        title: "ABOUT THIS BLOG",
        text: "Topics: HTML, CSS, JavaScript, React, and website design. Format: Project notes, code examples, and explanations. Perspective: A student working toward a front-end development career. Purpose: To explain what I learn through practice.",
      },
      {
        type: "heading",
        text: "What you will find here",
        id: "what-you-will-find",
      },
      {
        type: "paragraph",
        text: "Some posts will focus on one concept, such as how to pass data between React components.",
      },
      {
        type: "paragraph",
        text: "Others will describe a problem from one of my projects. I will explain what happened, what I checked, and what changed.",
      },
      {
        type: "paragraph",
        text: "I also plan to write about design decisions. These include page structure, text size, color, and layouts for different screen sizes.",
      },
      {
        type: "paragraph",
        text: "When I share a solution, I will include enough context to explain why I used it.",
      },
      {
        type: "heading",
        text: "Why “Basecamp”?",
        id: "why-basecamp",
      },
      {
        type: "paragraph",
        text: "I chose the name because I wanted a place to collect my notes and prepare for the next step.",
      },
      {
        type: "paragraph",
        text: "The outdoor theme also connects this blog to my life in Alaska.",
      },
      {
        type: "paragraph",
        text: "Each post will record a specific part of my progress. Over time, those posts will show how my understanding changes.",
      },
      {
        type: "heading",
        text: "This website is part of the work",
        id: "building-the-blog",
      },
      {
        type: "paragraph",
        text: "The blog itself gives me a project to build as I learn.",
      },
      {
        type: "paragraph",
        text: "It gives me practical questions about components, navigation, article layouts, and data.",
      },
      {
        type: "paragraph",
        text: "Each change asks me to connect a lesson with a real task. Sometimes that connection is clear. Sometimes I need to stop and review the basics.",
      },
      {
        type: "paragraph",
        text: "Both experiences belong here.",
      },
      {
        type: "callout",
        title: "WHAT EACH TECHNICAL POST WILL EXPLAIN",
        text: "The problem, the approach I tried, the result, and any limits I found.",
      },
      {
        type: "heading",
        text: "Where I am now",
        id: "where-i-am-now",
      },
      {
        type: "paragraph",
        text: "I am still developing my skills and working toward my first front-end role.",
      },
      {
        type: "paragraph",
        text: "I want to build websites that are clear, accessible, and easy to use. I also want to understand the code well enough to explain my decisions.",
      },
      {
        type: "paragraph",
        text: "This first post gives that work a starting point.",
      },
      {
        type: "paragraph",
        text: "Welcome to Cassie Codes Basecamp.",
      },
    ],
  },
  {
    id: 2,
    mileMarker: 1,
    category: "HTML",
    title: "HTML Recap: Building a Clear Page Structure",
    excerpt:
      "A practical review of HTML elements, page structure, text, links, images, lists, and accessible form basics.",
    image: blogimagehtml,
    elevation: "50 ft",
    readTime: "8 min read",
    comments: 0,
    featured: false,
    slug: "html-recap",
    content: [
      {
        type: "paragraph",
        text: "Notes and takeaways from my HTML module.  Before a page has a color palette or a responsive layout, it needs a clear structure. HTML gives the content that structure.",
      },
      {
        type: "paragraph",
        text: "This recap brings together the elements in my Frontend Simplified HTML cheat sheet. It covers document structure, text, links, images, lists, and forms.",
      },
      {
        type: "callout",
        title: "THE MAIN IDEA",
        text: "HTML describes the role of content. A heading introduces a topic, a link leads somewhere, and a label identifies a form control. CSS controls how these elements look.",
      },
      {
        type: "heading",
        text: "Understanding elements and attributes",
        id: "html-elements",
      },
      {
        type: "paragraph",
        text: "HTML stands for HyperText Markup Language. Most elements have an opening tag, content, and a closing tag.",
      },
      {
        type: "code",
        code: "<p>This is a paragraph.</p>",
      },
      {
        type: "paragraph",
        text: "The tags identify the paragraph. Together with the content, they form the element. Closing tags use a forward slash before the tag name.",
      },
      {
        type: "subheading",
        text: "Some elements have no closing tag",
      },
      {
        type: "paragraph",
        text: "Elements such as img, input, br, and hr cannot contain child content. These are called void elements. The meta and link elements are also void elements.",
      },
      {
        type: "code",
        code: '<img src="images/profile.jpg" alt="Cassie beside a mountain lake">\n<br>\n<input type="text" name="name">',
      },
      {
        type: "callout",
        title: "HTML AND JSX",
        text: "In HTML, void elements do not need a trailing slash. In React JSX, write them with a closing slash, such as <img />. The examples in this article show HTML.",
      },
      {
        type: "subheading",
        text: "Attributes add information",
      },
      {
        type: "paragraph",
        text: "Attributes go inside the opening tag. They can identify a destination, specify an image source, or set the type of a form input.",
      },
      {
        type: "code",
        code: '<a href="https://www.nasa.gov/" target="_blank" rel="noopener">\n  Visit NASA\n</a>',
      },
      {
        type: "paragraph",
        text: "The href attribute supplies the destination. The target value requests a new browsing context, usually a tab. The rel value prevents opener access.",
      },
      {
        type: "heading",
        text: "Nesting elements in a clear order",
        id: "html-nesting",
      },
      {
        type: "paragraph",
        text: "Nesting places one element inside another. Proper nesting closes the inner element before its parent.",
      },
      {
        type: "code",
        code: "<div>\n  <h2>About this blog</h2>\n  <p>I am learning <strong>front-end development</strong>.</p>\n</div>",
      },
      {
        type: "paragraph",
        text: "Indentation makes this relationship easier to read. It helps reveal which elements belong together and where a closing tag is missing.",
      },
      {
        type: "paragraph",
        text: "Not every element can contain every other element. For example, a paragraph cannot contain a section heading. Valid nesting depends on the elements involved.",
      },
      {
        type: "heading",
        text: "Starting with the document structure",
        id: "html-document",
      },
      {
        type: "paragraph",
        text: "A complete HTML document has a shared starting structure. The head contains document information. The body contains the page content.",
      },
      {
        type: "code",
        code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Cassie Codes Basecamp</title>\n  </head>\n  <body>\n    <h1>Welcome to Basecamp</h1>\n    <p>Notes from my front-end development studies.</p>\n  </body>\n</html>',
      },
      {
        type: "list",
        items: [
          "The doctype requests standards mode in the browser.",
          "The lang attribute identifies the document language.",
          "The charset declaration sets the character encoding.",
          "The viewport setting supports layouts that adapt to device width.",
          "The title supplies the document title, commonly shown in the browser tab.",
        ],
      },
      {
        type: "paragraph",
        text: "The head and header elements serve different purposes. The head holds document information. A header introduces a page or a section inside the body.",
      },
      {
        type: "heading",
        text: "Giving text a useful hierarchy",
        id: "html-text",
      },
      {
        type: "paragraph",
        text: "Headings describe the organization of the content. A clear page can use one h1 for its main title, h2 for major sections, and h3 for subsections.",
      },
      {
        type: "paragraph",
        text: "Heading levels should follow the content structure. CSS can change their visual size without changing their meaning.",
      },
      {
        type: "code",
        code: "<h1>My HTML Recap</h1>\n<h2>Text elements</h2>\n<h3>Paragraphs and emphasis</h3>\n<p>Each paragraph develops one idea.</p>\n<p>This is <strong>important</strong>. This has <em>emphasis</em>.</p>",
      },
      {
        type: "paragraph",
        text: "The strong element marks importance. The em element adds stress emphasis. Browsers commonly display them with bold and italic text.",
      },
      {
        type: "paragraph",
        text: "The b and i elements have other text-level meanings. Their default appearance does not make them interchangeable with strong and em.",
      },
      {
        type: "paragraph",
        text: "The br element creates a line break within text, such as an address. Separate paragraphs belong in separate p elements.",
      },
      {
        type: "callout",
        title: "COMMENTS ARE VISIBLE IN THE SOURCE",
        text: "An HTML comment does not appear as page content, but visitors can inspect it. Comments are useful for development notes and must not contain private information.",
      },
      {
        type: "heading",
        text: "Connecting pages and displaying images",
        id: "html-links-images",
      },
      {
        type: "subheading",
        text: "Links need meaningful destinations",
      },
      {
        type: "paragraph",
        text: "An anchor element creates a hyperlink when it has an href attribute. Descriptive link text helps readers understand where it leads.",
      },
      {
        type: "code",
        code: '<a href="about.html">About Cassie</a>\n<a href="#contact">Jump to the contact section</a>\n\n<section id="contact">\n  <h2>Contact</h2>\n  <p>Ways to get in touch.</p>\n</section>',
      },
      {
        type: "paragraph",
        text: "A fragment such as #contact points to an element with that ID. A bare # is not an inactive placeholder; it can move the page to the top.",
      },
      {
        type: "subheading",
        text: "Images need context",
      },
      {
        type: "paragraph",
        text: "The src attribute identifies the image resource. Alternative text communicates the purpose or relevant content when the image cannot be seen.",
      },
      {
        type: "paragraph",
        text: "Informative images need useful descriptions. Decorative images generally use an empty alt attribute so assistive technology can skip them.",
      },
      {
        type: "code",
        code: '<a href="about.html">\n  <img src="images/profile.jpg" alt="About Cassie">\n</a>',
      },
      {
        type: "paragraph",
        text: "An image inside a link can act as its clickable content. If the image is the only link content, its alternative text should identify the destination.",
      },
      {
        type: "heading",
        text: "Organizing a page with semantic elements",
        id: "html-semantic-layout",
      },
      {
        type: "paragraph",
        text: "Semantic elements describe the role of page regions. They add structure that browsers and assistive technology can use.",
      },
      {
        type: "list",
        items: [
          "header introduces a page or section.",
          "nav groups a major set of navigation links.",
          "main identifies the primary page content.",
          "section groups content around a theme, usually with a heading.",
          "footer holds closing or supporting information.",
          "div groups content when a more meaningful element does not fit.",
        ],
      },
      {
        type: "code",
        code: '<header>\n  <nav aria-label="Main navigation">\n    <a href="index.html">Home</a>\n    <a href="blog.html">Articles</a>\n  </nav>\n</header>\n<main>\n  <h1>HTML Recap</h1>\n  <section>\n    <h2>What I covered</h2>\n    <p>Document structure, content, and forms.</p>\n  </section>\n</main>\n<footer>\n  <p>Cassie Codes Basecamp</p>\n</footer>',
      },
      {
        type: "paragraph",
        text: "These elements do not create a finished layout on their own. CSS still controls spacing, alignment, and presentation.",
      },
      {
        type: "heading",
        text: "Choosing the right kind of list",
        id: "html-lists",
      },
      {
        type: "paragraph",
        text: "An unordered list uses ul when sequence is not important. An ordered list uses ol when the sequence matters. Both contain li elements.",
      },
      {
        type: "code",
        code: "<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>\n\n<ol>\n  <li>Create the document.</li>\n  <li>Add the content.</li>\n  <li>Check the page in a browser.</li>\n</ol>",
      },
      {
        type: "paragraph",
        text: "A nested list belongs inside its parent list item. Navigation links can also appear inside list items when they form a related collection.",
      },
      {
        type: "heading",
        text: "Building forms with clear labels",
        id: "html-forms",
      },
      {
        type: "paragraph",
        text: "Forms collect information. The form element groups controls, labels identify them, and input types specify the kind of data or choice expected.",
      },
      {
        type: "subheading",
        text: "Matching controls to the task",
      },
      {
        type: "list",
        items: [
          "text accepts short text.",
          "email provides basic email-format validation for nonempty values.",
          "password masks entered text on screen.",
          "radio supports one selected option in a group with a shared name.",
          "checkbox supports independent choices.",
          "textarea accepts longer text.",
          "select and option provide a menu of choices.",
          "A submit input or submit button starts form submission.",
        ],
      },
      {
        type: "code",
        code: '<form action="/contact" method="post">\n  <label for="name">Name</label>\n  <input id="name" name="name" type="text" required>\n\n  <label for="email">Email</label>\n  <input id="email" name="email" type="email" required>\n\n  <label for="topic">Topic</label>\n  <select id="topic" name="topic">\n    <option value="project">Project question</option>\n    <option value="hello">Just saying hello</option>\n  </select>\n\n  <label for="message">Message</label>\n  <textarea id="message" name="message" rows="4" required></textarea>\n\n  <input type="submit" value="Send message">\n</form>',
      },
      {
        type: "paragraph",
        text: "Each label’s for value matches its control’s id. The name attributes identify submitted values. The required attribute marks controls that need a value.",
      },
      {
        type: "paragraph",
        text: "A placeholder can provide an example, but it does not replace a visible label. It disappears when the user enters text.",
      },
      {
        type: "callout",
        title: "A FORM NEEDS A WORKING DESTINATION",
        text: "The /contact address above is an example endpoint. HTML alone does not deliver the message. The form needs a server or service that processes submissions. Browser validation does not replace server validation, and a password field does not encrypt data.",
      },
      {
        type: "heading",
        text: "My HTML review checklist",
        id: "html-review",
      },
      {
        type: "paragraph",
        text: "The cheat sheet gives me a practical set of checks before adding more styles or behavior.",
      },
      {
        type: "list",
        items: [
          "Check closing tags and valid nesting.",
          "Choose heading levels by content hierarchy.",
          "Use meaningful page regions where they fit.",
          "Check link destinations and image paths.",
          "Provide appropriate image alternatives.",
          "Keep list items inside their lists.",
          "Give form controls labels, IDs, and submission names.",
          "Test the page in a browser and inspect unexpected results.",
        ],
      },
      {
        type: "paragraph",
        text: "These foundations carry into larger projects. Clear HTML gives each piece of content a purpose and makes the next layer of development easier to explain.",
      },
    ],
  },
    {
    id: 3,
    mileMarker: 2,
    category: "HTML",
    title: "Semantic HTML: Giving Page Content Meaning",
    excerpt:
      "A concise guide to choosing meaningful HTML elements for blog articles, navigation, page sections, and supporting content.",
    image: blogimagehtmlsemantic,
    elevation: "100 ft",
    readTime: "4 min read",
    comments: 0,
    featured: false,
    slug: "semantic-html",
        "content": [
      {
        "type": "paragraph",
        "text": "HTML does more than group content into boxes. The elements I choose can explain what each part of a page means."
      },
      {
        "type": "paragraph",
        "text": "Semantic HTML gives those parts clear roles. For a blog, that includes navigation, the main article, and supporting information."
      },
      {
        "type": "heading",
        "text": "Choose elements by purpose",
        "id": "semantic-purpose"
      },
      {
        "type": "paragraph",
        "text": "A div is a general container. Semantic elements describe the content they contain. CSS still controls their appearance."
      },
      {
        "type": "list",
        "items": [
          "header introduces a page or section.",
          "nav groups major navigation links.",
          "main contains the page’s primary content.",
          "article contains a self-contained piece, such as a blog post.",
          "section groups content around a theme, usually with a heading.",
          "aside contains related information that is separate from the main discussion.",
          "footer contains information about its page or nearest section, such as authorship."
        ]
      },
      {
        "type": "heading",
        "text": "Article or section",
        "id": "article-or-section"
      },
      {
        "type": "paragraph",
        "text": "A blog post fits inside an article because it makes sense as an independent piece. Its main topics can use sections."
      },
      {
        "type": "callout",
        "title": "A USEFUL CHECK",
        "text": "Could this content stand on its own? Consider article. Does it group one topic within a larger piece? Consider section. For a styling wrapper without a specific meaning, div remains useful."
      },
      {
        "type": "heading",
        "text": "A simple blog structure",
        "id": "semantic-example"
      },
      {
        "type": "code",
        "code": "<header>\n  <nav aria-label=\"Main navigation\">\n    <a href=\"index.html\">Home</a>\n    <a href=\"blog.html\">Articles</a>\n  </nav>\n</header>\n\n<main>\n  <article>\n    <header>\n      <h1>Understanding Semantic HTML</h1>\n      <p>By Cassie</p>\n    </header>\n    <section>\n      <h2>Give content a clear role</h2>\n      <p>Choose elements that describe their content.</p>\n    </section>\n    <footer>\n      <p>Filed under HTML</p>\n    </footer>\n  </article>\n</main>"
      },
      {
        "type": "paragraph",
        "text": "A page can have a site header and an article header. Their meaning depends on context. The same applies to footers."
      },
      {
        "type": "heading",
        "text": "Small details matter too",
        "id": "semantic-details"
      },
      {
        "type": "paragraph",
        "text": "The figure element groups self-contained content, such as an illustration. Its figcaption provides a caption."
      },
      {
        "type": "paragraph",
        "text": "The details element creates a disclosure control. Its summary supplies the visible label that opens or closes the additional content."
      },
      {
        "type": "heading",
        "text": "My takeaway",
        "id": "semantic-takeaway"
      },
      {
        "type": "paragraph",
        "text": "I want to choose tags by content purpose before adding styles. Meaningful structure makes the markup easier to understand and supports navigation with assistive technology."
      },
      {
        "type": "paragraph",
        "text": "Semantic tags are one part of accessibility. Clear headings, useful link text, image alternatives, and keyboard access still matter."
      },
      {
        "type": "heading",
        "text": "Reference",
        "id": "semantic-reference"
      },
      {
        "type": "paragraph",
        "text": "W3Schools: HTML Semantic Elements — https://www.w3schools.com/html/html5_semantic_elements.asp"
      }
    ]
  },

  {
    id: 4,
    mileMarker: 3,
    category: "CSS",
    title: "CSS Foundations: From Spacing to Responsive Layouts",
    excerpt:
      "A review of the CSS concepts from Module 2, including the box model, Flexbox, positioning, and responsive design.",
    image: blogPostImage3,
    elevation: "200 ft",
    readTime: "6 min read",
    comments: 0,
    featured: false,
    slug: "css-recap",
    content: [
      {
        type: "paragraph",
        text: "Notes from my CSS Module.  A page can contain all the right information and still be difficult to read. Text needs space. Related elements need clear groups. Navigation needs a layout that works at different screen sizes.",
      },
      {
        type: "paragraph",
        text: "Module 2 of Front End Simplified covered the CSS tools that help solve these problems. This post collects the main concepts from my notes.",
      },
      {
        type: "callout",
        title: "MODULE AT A GLANCE",
        text: "CSS rules and stylesheets; spacing and sizing; typography and color; selectors and BEM; Flexbox; positioning and interaction states; responsive layouts and animation.",
      },
      {
        type: "heading",
        text: "Starting with CSS rules",
        id: "css-rules",
      },
      {
        type: "paragraph",
        text: "CSS stands for Cascading Style Sheets. It controls how HTML content appears, including its colors, spacing, and layout.",
      },
      {
        type: "paragraph",
        text: "A rule contains a selector and declarations. In h1 { color: green; }, h1 selects the heading. The color property receives the value green.",
      },
      {
        type: "paragraph",
        text: "Inline CSS goes inside an HTML element’s style attribute. An external stylesheet stores rules in a separate file linked to the page.",
      },
      {
        type: "paragraph",
        text: "A shared stylesheet makes repeated styles easier to maintain. A change to one class can update every element that uses it.",
      },
      {
        type: "heading",
        text: "Understanding the space around an element",
        id: "box-model",
      },
      {
        type: "paragraph",
        text: "The box model describes four layers: content, padding, border, and margin. These layers explain much of the space we see on a page.",
      },
      {
        type: "paragraph",
        text: "Padding separates the content from its border. Margin creates space outside the border. These properties solve different spacing problems.",
      },
      {
        type: "paragraph",
        text: "If text sits too close to a card’s edge, padding can help. If two cards sit too close together, the layout needs external spacing.",
      },
      {
        type: "paragraph",
        text: "The box-sizing property also affects dimensions. With content-box, padding and borders add to the declared width. With border-box, they fit inside it.",
      },
      {
        type: "callout",
        title: "SIZE CHECK",
        text: "A content-box card with width: 300px, 20px padding on each side, and 2px borders has a total border-box width of 344px. With box-sizing: border-box, its total width is 300px. Margin is outside both measurements.",
      },
      {
        type: "paragraph",
        text: "Centering depends on what needs to move. text-align: center centers inline content inside a container. Automatic side margins can center a constrained block.",
      },
      {
        type: "paragraph",
        text: "Browser developer tools make these differences visible. Inspecting the box model provides a better starting point than changing spacing values at random.",
      },
      {
        type: "heading",
        text: "Making text easier to read",
        id: "typography-color",
      },
      {
        type: "paragraph",
        text: "Typography gives content a clear order. Font size and weight can separate a heading from supporting text. Line height gives each line space.",
      },
      {
        type: "paragraph",
        text: "Color supports that order. The color property changes text color, while background-color changes the background of an element’s box.",
      },
      {
        type: "paragraph",
        text: "The module introduced named colors, hexadecimal values, and RGB values. These are different ways to specify a color.",
      },
      {
        type: "paragraph",
        text: "Readability still depends on the combination of foreground and background. A chosen palette needs enough contrast, and important information needs cues beyond color.",
      },
      {
        type: "heading",
        text: "Keeping styles organized",
        id: "selectors-bem",
      },
      {
        type: "paragraph",
        text: "Selectors determine which elements receive a rule. Type selectors target tags such as p. Class selectors target reusable names such as .card.",
      },
      {
        type: "paragraph",
        text: "An ID selector targets a name such as #introduction. IDs should be unique within the document.",
      },
      {
        type: "paragraph",
        text: "Specificity helps resolve competing declarations. For simple selectors, an ID has greater specificity than a class. A class has greater specificity than a type.",
      },
      {
        type: "paragraph",
        text: "Source order breaks a tie when the other cascade conditions are equal. This is why checking the active rules matters when a style seems ignored.",
      },
      {
        type: "paragraph",
        text: "BEM provides a naming pattern for components. The name stands for Block, Element, Modifier.",
      },
      {
        type: "paragraph",
        text: "For a card, .card names the block. The class .card__title names an element inside it. The class .card--featured names a variation.",
      },
      {
        type: "paragraph",
        text: "This pattern lets a featured card share the base styles. Only the differences need additional rules.",
      },
      {
        type: "heading",
        text: "Arranging content with Flexbox",
        id: "flexbox",
      },
      {
        type: "paragraph",
        text: "Flexbox lets a container arrange its direct children. It starts with display: flex on the parent.",
      },
      {
        type: "paragraph",
        text: "The flex-direction property sets the main axis. A row follows the inline axis. A column follows the block axis.",
      },
      {
        type: "paragraph",
        text: "The justify-content property distributes items along the main axis. The align-items property aligns them along the cross axis.",
      },
      {
        type: "callout",
        title: "FLEXBOX CHECK",
        text: "The alignment properties follow the axes. In a typical horizontal writing mode, changing flex-direction from row to column makes the main axis vertical. justify-content then controls vertical distribution.",
      },
      {
        type: "paragraph",
        text: "The gap property adds consistent space between items. The flex-wrap property lets items move onto additional lines when necessary.",
      },
      {
        type: "paragraph",
        text: "Nested layouts need their own containers. A navigation bar can use Flexbox to separate its logo and links. The link group can use Flexbox too.",
      },
      {
        type: "paragraph",
        text: "The order property changes visual order. It does not change the document order, so visual changes need to preserve a sensible reading and keyboard sequence.",
      },
      {
        type: "heading",
        text: "Positioning and layering elements",
        id: "positioning",
      },
      {
        type: "paragraph",
        text: "Normal flow determines the usual arrangement of content. Relative positioning keeps an element’s original space while allowing a visual offset.",
      },
      {
        type: "paragraph",
        text: "Absolute positioning removes an element from normal flow. A card badge is one example of where this can be useful.",
      },
      {
        type: "paragraph",
        text: "A common pattern gives the card position: relative and the badge position: absolute. The badge can then sit near a card corner.",
      },
      {
        type: "paragraph",
        text: "Overflow controls content that extends beyond a box. The hidden value clips it. The auto value allows scrolling when needed.",
      },
      {
        type: "paragraph",
        text: "The z-index property helps control overlapping layers. Its effect depends on stacking contexts, so a larger number does not always solve a layering problem.",
      },
      {
        type: "heading",
        text: "Showing interaction states",
        id: "interaction-states",
      },
      {
        type: "paragraph",
        text: "Pseudo-classes describe states or conditions. Examples include :hover, :focus, :active, and :nth-child().",
      },
      {
        type: "paragraph",
        text: "A visible focus indicator shows keyboard users which control has focus. Hover feedback alone does not provide the same information.",
      },
      {
        type: "paragraph",
        text: "Pseudo-elements target a generated or selected part of an element. The module used ::before and ::after for details such as arrows and underlines.",
      },
      {
        type: "paragraph",
        text: "Tooltips and modals combine several of these ideas. Their behavior also needs keyboard access, appropriate focus handling, and usable controls.",
      },
      {
        type: "heading",
        text: "Adapting the layout and adding motion",
        id: "responsive-motion",
      },
      {
        type: "paragraph",
        text: "Responsive design allows the same content to fit different viewport sizes. Fluid measurements and media queries help the layout adapt.",
      },
      {
        type: "paragraph",
        text: "A max-width media query applies at or below its specified width. It can change a card row into a column when space becomes limited.",
      },
      {
        type: "paragraph",
        text: "Breakpoints should follow the content. Resizing the browser helps reveal where the layout needs a change.",
      },
      {
        type: "paragraph",
        text: "The module also covered transitions, keyframes, transforms, and opacity. These tools can add feedback or introduce content with a small visual change.",
      },
      {
        type: "paragraph",
        text: "Transforms can move, resize, or rotate an element without rearranging surrounding content. Keyframes define stages of an animation.",
      },
      {
        type: "paragraph",
        text: "When combining transform functions, they belong in the same declaration. Separate competing declarations can replace each other.",
      },
      {
        type: "heading",
        text: "Bringing the concepts together",
        id: "next-practice",
      },
      {
        type: "paragraph",
        text: "The final review brings these topics into one practice challenge: a responsive hero section with a button, a wrapping gallery, and a positioned badge.",
      },
      {
        type: "paragraph",
        text: "That challenge gives each property a purpose. Spacing supports readability. Flexbox arranges the cards. Positioning anchors the badge. Media queries adapt the layout.",
      },
      {
        type: "callout",
        title: "TRAIL NOTE",
        text: "The useful question is: which CSS tool fits this problem? Understanding that choice gives me a clearer direction for the next change.",
      },
      {
        type: "paragraph",
        text: "These notes give me a reference for future projects. My next step is to practice combining the concepts and explaining why each rule belongs.",
      },
    ],
  },
      {
    id: 5,
    mileMarker: 4,
    category: "CSS",
    title: "Flexbox Guide: Direction, Alignment, and Flexible Layouts",
    excerpt:
      "A visual Flexbox reference with practical examples for direction, alignment, wrapping, spacing, and item growth.",
    image: blogimageflexbox,
    elevation: "300 ft",
    readTime: "6 min read",
    comments: 0,
    featured: false,
    slug: "css-flex-box",
    content: [
      {
        "type": "paragraph",
        "text": "A navigation bar, a row of article cards, and a centered button group have something in common. Each needs a way to arrange related elements."
      },
      {
        "type": "paragraph",
        "text": "Flexbox provides that control. This guide brings eight useful properties together so I can check their roles while building a layout."
      },
      {
        "type": "image",
        "src": flexBoxGuide,
        "alt": "Basecamp Blog Flexbox reference showing display, direction, alignment, wrapping, spacing, and item growth.",
        "caption": "My Basecamp Blog Flexbox guide. The examples below explain how the properties work together."
      },
      {
        "type": "callout",
        "title": "START WITH THE AXES",
        "text": "justify-content works along the main axis. align-items works along the cross axis. flex-direction sets the main axis, so alignment does not always mean horizontal or vertical."
      },
      {
        "type": "heading",
        "text": "Create the flex container",
        "id": "flex-container"
      },
      {
        "type": "paragraph",
        "text": "Set display: flex on the parent. Its direct children become flex items. Nested elements need their own flex container if they also need a Flexbox layout."
      },
      {
        "type": "code",
        "code": ".container {\n  display: flex;\n}"
      },
      {
        "type": "paragraph",
        "text": "Container properties arrange the group. Item properties, such as align-self and flex-grow, control individual children."
      },
      {
        "type": "heading",
        "text": "Choose a direction",
        "id": "flex-direction"
      },
      {
        "type": "paragraph",
        "text": "The default flex-direction is row. In a typical English page, row places items from left to right. The column value stacks them vertically."
      },
      {
        "type": "code",
        "code": ".container {\n  display: flex;\n  flex-direction: column;\n}"
      },
      {
        "type": "paragraph",
        "text": "The row-reverse and column-reverse values reverse the visual direction. They do not rearrange the HTML, so the reading and keyboard sequence still need care."
      },
      {
        "type": "heading",
        "text": "Distribute space along the main axis",
        "id": "justify-content"
      },
      {
        "type": "paragraph",
        "text": "The justify-content property controls distribution along the main axis when space is available. The center value groups items in the middle."
      },
      {
        "type": "list",
        "items": [
          "flex-start places the group at the start.",
          "center places the group in the center.",
          "flex-end places the group at the end.",
          "space-between distributes space between items, with the outer items at the edges.",
          "space-around gives each item space on both sides; interior spaces are twice the outer spaces.",
          "space-evenly makes the spaces between items and at the edges equal."
        ]
      },
      {
        "type": "code",
        "code": ".container {\n  display: flex;\n  justify-content: space-between;\n}"
      },
      {
        "type": "paragraph",
        "text": "With a column direction, the main axis runs vertically in a typical horizontal writing mode. Visible vertical distribution needs available height in the container."
      },
      {
        "type": "heading",
        "text": "Align items across the main axis",
        "id": "align-items"
      },
      {
        "type": "paragraph",
        "text": "The align-items property controls cross-axis alignment. Common values include stretch, flex-start, center, flex-end, and baseline."
      },
      {
        "type": "code",
        "code": ".container {\n  display: flex;\n  min-height: 12rem;\n  align-items: center;\n}"
      },
      {
        "type": "paragraph",
        "text": "In a row layout, this example centers items vertically. In a column layout, the cross axis runs horizontally in a typical English page."
      },
      {
        "type": "callout",
        "title": "READING THE ALIGNMENT DIAGRAM",
        "text": "The guide shows the common alignment values. baseline aligns text baselines, so it is easiest to test with visible text at different sizes. stretch generally stretches items with an automatic cross size, subject to size constraints."
      },
      {
        "type": "heading",
        "text": "Allow the layout to wrap",
        "id": "flex-wrap"
      },
      {
        "type": "paragraph",
        "text": "Flex items stay on one line by default. They can shrink, or overflow when their constraints prevent them from fitting."
      },
      {
        "type": "paragraph",
        "text": "The wrap value lets the container place items on additional lines. Item sizes still affect when wrapping happens."
      },
      {
        "type": "code",
        "code": ".gallery {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.gallery__card {\n  flex: 1 1 16rem;\n  min-width: 0;\n}"
      },
      {
        "type": "paragraph",
        "text": "This example gives each card a starting size of 16rem. Cards can grow or shrink, and they wrap when another card cannot fit on the line."
      },
      {
        "type": "heading",
        "text": "Set consistent space with gap",
        "id": "flex-gap"
      },
      {
        "type": "paragraph",
        "text": "The gap property creates gutters between items and flex lines. It does not add space around the container’s outer edges. Padding can provide that outer space."
      },
      {
        "type": "code",
        "code": ".gallery {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  padding: 1rem;\n}"
      },
      {
        "type": "paragraph",
        "text": "Gap keeps repeated spacing in one place. Content distribution can add further space, so combining gap with space-between can produce larger visible separations."
      },
      {
        "type": "heading",
        "text": "Adjust one item with align-self",
        "id": "align-self"
      },
      {
        "type": "paragraph",
        "text": "The align-self property lets one flex item use a different cross-axis alignment from the group."
      },
      {
        "type": "code",
        "code": ".container {\n  display: flex;\n  min-height: 12rem;\n  align-items: flex-start;\n}\n\n.container__featured {\n  align-self: center;\n}"
      },
      {
        "type": "paragraph",
        "text": "The featured item sits in the cross-axis center while the others remain at the start. This changes alignment without changing the group’s main-axis distribution."
      },
      {
        "type": "heading",
        "text": "Share extra space with flex-grow",
        "id": "flex-grow"
      },
      {
        "type": "paragraph",
        "text": "The flex-grow property controls how items share positive free space along the main axis. Its default value is zero."
      },
      {
        "type": "code",
        "code": ".item {\n  flex-basis: 0;\n  flex-grow: 1;\n  min-width: 0;\n}\n\n.item--featured {\n  flex-grow: 2;\n}"
      },
      {
        "type": "paragraph",
        "text": "With equal zero bases, the featured item receives two shares while each other item receives one. Padding, borders, and constraints can affect final dimensions."
      },
      {
        "type": "callout",
        "title": "GROWTH IS NOT ALWAYS FINAL WIDTH",
        "text": "flex-grow: 2 does not automatically make an item twice as wide as another item. Growth factors distribute extra space after the starting sizes are considered. The guide’s proportions are an illustration."
      },
      {
        "type": "heading",
        "text": "Put the properties to work",
        "id": "flexbox-example"
      },
      {
        "type": "paragraph",
        "text": "A blog card row combines several of these properties. The parent controls wrapping and spacing. Each card controls its flexible size."
      },
      {
        "type": "code",
        "code": "<div class=\"post-grid\">\n  <article class=\"post-grid__card\">HTML recap</article>\n  <article class=\"post-grid__card\">CSS foundations</article>\n  <article class=\"post-grid__card\">JavaScript foundations</article>\n</div>\n\n<style>\n  .post-grid {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1.5rem;\n    align-items: stretch;\n  }\n\n  .post-grid__card {\n    flex: 1 1 16rem;\n    min-width: 0;\n    padding: 1.5rem;\n    border: 1px solid #c6cfc4;\n    border-radius: 0.75rem;\n    overflow-wrap: anywhere;\n  }\n</style>"
      },
      {
        "type": "paragraph",
        "text": "This is a standalone HTML example. In React JSX, class becomes className, and the CSS can go in a separate stylesheet."
      },
      {
        "type": "heading",
        "text": "My Flexbox check before changing values",
        "id": "flexbox-checklist"
      },
      {
        "type": "list",
        "items": [
          "Check that display: flex is on the intended parent.",
          "Identify the main axis from flex-direction.",
          "Choose main-axis distribution with justify-content.",
          "Choose cross-axis alignment with align-items.",
          "Inspect item sizes and available space.",
          "Allow wrapping when the layout needs multiple lines.",
          "Use gap for consistent gutters.",
          "Check narrow widths and the logical reading order."
        ]
      },
      {
        "type": "paragraph",
        "text": "The guide gives me a quick reference. Testing one property at a time helps me connect each diagram to the behavior on the page."
      },
     ],
  },
      {
    id: 6,
    mileMarker: 5,
    category: "CSS",
    title: "CSS Grid Guide: Rows, Columns, and Responsive Layouts",
    excerpt:
      "A practical companion to my Grid cheat sheet, covering tracks, placement, alignment, named areas, and responsive article cards.",
    image: blogimagegrid,
    elevation: "400 ft",
    readTime: "7 min read",
    comments: 0,
    featured: false,
    slug: "css-grid-guide",
        "content": [
      {
        "type": "paragraph",
        "text": "A collection of article cards needs consistent columns. A page with a sidebar also needs control over rows and larger content regions. CSS Grid provides tools for both tasks."
      },
      {
        "type": "paragraph",
        "text": "My Grid cheat sheet collects the main properties in one place. This post explains the examples and shows how I can apply them to a blog layout."
      },
      {
        "type": "image",
        "src": gridGuide,
        "alt": "Basecamp Blog CSS Grid cheat sheet covering containers, tracks, spacing, item placement, alignment, named areas, and responsive layouts.",
        "caption": "My CSS Grid cheat sheet, with examples for building two-dimensional layouts."
      },
      {
        "type": "heading",
        "text": "Start with a grid container",
        "id": "grid-container"
      },
      {
        "type": "paragraph",
        "text": "Grid controls rows and columns together. Set display: grid on the parent, then define the tracks that its direct children will occupy."
      },
      {
        "type": "code",
        "code": ".container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}"
      },
      {
        "type": "paragraph",
        "text": "This creates three flexible columns. Additional items can create new rows automatically. The gap property separates adjacent tracks."
      },
      {
        "type": "heading",
        "text": "Learn the layout vocabulary",
        "id": "grid-terms"
      },
      {
        "type": "list",
        "items": [
          "Container: the parent that establishes the grid.",
          "Item: a direct child participating in the grid layout.",
          "Line: a boundary used to define placement.",
          "Track: the space between two adjacent lines, forming a row or column.",
          "Cell: the intersection of one row and one column.",
          "Area: a rectangular region containing one or more cells."
        ]
      },
      {
        "type": "callout",
        "title": "COUNT LINES, NOT BOXES",
        "text": "Three columns have four column lines. The placement grid-column: 1 / 3 starts at line 1 and ends at line 3. It covers two columns."
      },
      {
        "type": "heading",
        "text": "Define columns and rows",
        "id": "grid-tracks"
      },
      {
        "type": "paragraph",
        "text": "The grid-template-columns property defines explicit column sizes. The grid-template-rows property does the same for rows."
      },
      {
        "type": "code",
        "code": ".container {\n  display: grid;\n  grid-template-columns: 200px 1fr 1fr;\n  grid-template-rows: auto auto;\n  gap: 20px;\n}"
      },
      {
        "type": "paragraph",
        "text": "The first column has a fixed width. The other columns share the remaining space. Automatic rows can accommodate different amounts of content."
      },
      {
        "type": "paragraph",
        "text": "The fr unit represents a share of available space. Track minimum sizes and content can affect the final result, so 1fr is not simply a percentage."
      },
      {
        "type": "paragraph",
        "text": "The repeat function makes repeated sizes easier to read. The minmax function gives a track a minimum and maximum sizing limit."
      },
      {
        "type": "code",
        "code": ".container {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  grid-auto-rows: minmax(100px, auto);\n}"
      },
      {
        "type": "paragraph",
        "text": "Here, implicit rows have a minimum height of 100px and can expand. This helps avoid fixed-height rows that cannot accommodate longer content."
      },
      {
        "type": "heading",
        "text": "Set space between tracks",
        "id": "grid-gap"
      },
      {
        "type": "paragraph",
        "text": "One gap value sets both row and column gutters. Two values set the row gap first and the column gap second."
      },
      {
        "type": "code",
        "code": ".container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px 40px;\n  padding: 20px;\n}"
      },
      {
        "type": "paragraph",
        "text": "Gap separates tracks inside the grid. Padding provides space between the grid and its container edges."
      },
      {
        "type": "heading",
        "text": "Place items using grid lines",
        "id": "grid-placement"
      },
      {
        "type": "paragraph",
        "text": "The grid-column and grid-row properties accept start and end lines. They belong on the item being placed."
      },
      {
        "type": "code",
        "code": "/* First column, spanning the first two rows */\n.item--tall {\n  grid-column: 1 / 2;\n  grid-row: 1 / 3;\n}\n\n/* First two columns and first two rows */\n.item--large {\n  grid-column: 1 / span 2;\n  grid-row: 1 / span 2;\n}"
      },
      {
        "type": "paragraph",
        "text": "These examples are alternative placements. Applying both to different items in the same grid would make their assigned areas overlap."
      },
      {
        "type": "callout",
        "title": "VISUAL ORDER AND READING ORDER",
        "text": "Grid placement can change where content appears without changing the document order. The reading and keyboard sequence should remain logical at every screen size."
      },
      {
        "type": "heading",
        "text": "Align items or align the tracks",
        "id": "grid-alignment"
      },
      {
        "type": "paragraph",
        "text": "Item alignment and track alignment solve different problems. The items properties position content within its assigned grid area."
      },
      {
        "type": "list",
        "items": [
          "justify-items controls item alignment along the inline axis, usually horizontal on an English page.",
          "align-items controls item alignment along the block axis, usually vertical on an English page.",
          "place-items combines align-items and justify-items.",
          "justify-content and align-content distribute the tracks within the container.",
          "place-content combines align-content and justify-content."
        ]
      },
      {
        "type": "code",
        "code": ".container {\n  display: grid;\n  grid-template-columns: repeat(2, 100px);\n  grid-template-rows: repeat(2, 80px);\n  min-height: 300px;\n  gap: 16px;\n  place-items: center;\n  place-content: center;\n}"
      },
      {
        "type": "paragraph",
        "text": "The items sit in the centers of their areas. The group of fixed-size tracks also sits in the container’s center when there is spare space."
      },
      {
        "type": "heading",
        "text": "Describe larger regions with named areas",
        "id": "grid-areas"
      },
      {
        "type": "paragraph",
        "text": "Named areas make a page layout easier to read. Each quoted string describes one row, and repeated names connect cells into a rectangular area."
      },
      {
        "type": "code",
        "code": ".layout {\n  display: grid;\n  grid-template-columns: 200px minmax(0, 1fr);\n  grid-template-areas:\n    \"header header\"\n    \"sidebar content\"\n    \"footer footer\";\n  gap: 24px;\n}\n\n.layout__header { grid-area: header; }\n.layout__sidebar { grid-area: sidebar; }\n.layout__content { grid-area: content; min-width: 0; }\n.layout__footer { grid-area: footer; }\n\n@media (max-width: 700px) {\n  .layout {\n    grid-template-columns: minmax(0, 1fr);\n    grid-template-areas:\n      \"header\"\n      \"sidebar\"\n      \"content\"\n      \"footer\";\n  }\n}"
      },
      {
        "type": "paragraph",
        "text": "Each named component must be a direct child of the layout container. The media query changes the two-column arrangement to a single column."
      },
      {
        "type": "heading",
        "text": "Build an adaptable article grid",
        "id": "responsive-grid"
      },
      {
        "type": "paragraph",
        "text": "A card collection can adapt its column count with repeat, auto-fit, and minmax. The browser fits as many columns as the available width permits."
      },
      {
        "type": "code",
        "code": ".articles {\n  display: grid;\n  grid-template-columns:\n    repeat(auto-fit, minmax(min(100%, 250px), 1fr));\n  gap: 24px;\n}\n\n.articles__card {\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n\n.articles__card img {\n  display: block;\n  width: 100%;\n  height: auto;\n}"
      },
      {
        "type": "paragraph",
        "text": "The inner min function allows the minimum track size to fit a container narrower than 250px. Cards can expand when more space is available."
      },
      {
        "type": "callout",
        "title": "AUTO-FIT AND AUTO-FILL",
        "text": "Both values calculate how many repeated tracks can fit. auto-fill retains empty tracks. auto-fit collapses empty tracks after placement, allowing occupied flexible tracks to use more space."
      },
      {
        "type": "heading",
        "text": "My Grid review checklist",
        "id": "grid-checklist"
      },
      {
        "type": "list",
        "items": [
          "Identify the container and its direct children.",
          "Decide which columns and rows need explicit sizes.",
          "Use gap for gutters and padding for outer spacing.",
          "Count start and end lines when placing an item.",
          "Check whether alignment should affect items or the tracks.",
          "Test long content and narrow containers.",
          "Confirm that visual placement preserves a sensible reading order."
        ]
      },
      {
        "type": "paragraph",
        "text": "The cheat sheet gives me a visual reference. Building a small layout and changing one rule at a time helps me understand what each property controls."
      },
      {
        "type": "heading",
        "text": "Further reading",
        "id": "grid-reference"
      },
      {
        "type": "paragraph",
        "text": "Reference: CSS-Tricks, A Complete Guide to CSS Grid Layout. https://css-tricks.com/complete-guide-css-grid-layout/"
      },
      {
        "type": "paragraph",
        "text": "Technical reference: W3C CSS Grid Layout Module. https://www.w3.org/TR/css-grid/"
      }
    ]
  },

      {
    id: 7,
    mileMarker: 6,
    category: "CSS",
    title: "CSS Units: What to Use and When",
    excerpt:
      "A concise reference for CSS sizing units, their best applications, and practical examples for responsive layouts",
    image: blogimageresponsive,
    elevation: "500 ft",
    readTime: "6 min read",
    comments: 0,
    featured: false,
    slug: "responsive-css-units",
"content": [
      {
        "type": "paragraph",
        "text": "A responsive layout needs sizes that follow the right reference: text, a container, or the viewport. Choosing a unit starts with deciding what should control the size."
      },
      {
        "type": "callout",
        "title": "MY STARTING POINT",
        "text": "Use rem for text and consistent spacing, em for component padding, % for fluid widths, fr for Grid, and px for fine borders."
      },
      {
        "type": "heading",
        "text": "CSS sizing units at a glance",
        "id": "css-unit-table"
      },
      {
        "type": "paragraph",
        "text": "This table covers sizing units and families, including less common options for reference. CSS also has units for time, angles, and resolution; those serve different tasks."
      },
      {
        "type": "table",
        "caption": "CSS sizing units: reference, practical use, and example",
        "headers": [
          "Unit",
          "Relative to",
          "Best applications",
          "How to use"
        ],
        "rows": [
          [
            "px",
            "CSS reference pixel",
            "Borders and precise details",
            "border: 1px solid;"
          ],
          [
            "rem",
            "Root font size",
            "Consistent text and spacing",
            "font-size: 1.125rem;"
          ],
          [
            "em",
            "Element font size; parent size for font-size",
            "Spacing tied to component text",
            "padding: 0.75em 1.25em;"
          ],
          [
            "%",
            "Property-dependent reference; width usually uses the containing block",
            "Fluid widths and images",
            "width: 100%;"
          ],
          [
            "fr",
            "Share of available grid space",
            "Flexible grid tracks",
            "grid-template-columns: 1fr 2fr;"
          ],
          [
            "ch",
            "Advance width of the font’s 0 glyph",
            "Approximate reading measure",
            "max-width: 65ch;"
          ],
          [
            "lh / rlh",
            "Element / root line height",
            "Spacing aligned with text rhythm",
            "margin-block-end: 1lh;"
          ],
          [
            "vw / vh",
            "1% of large viewport width / height",
            "Viewport-based dimensions",
            "width: 50vw;"
          ],
          [
            "vi / vb",
            "1% of large viewport inline / block size",
            "Layouts that follow writing mode",
            "padding-inline: 3vi;"
          ],
          [
            "vmin / vmax",
            "1% of smaller / larger viewport dimension",
            "Shapes scaled to the viewport",
            "width: 30vmin;"
          ],
          [
            "svw / svh",
            "1% of small viewport width / height",
            "Sections that fit with browser controls visible",
            "min-height: 100svh;"
          ],
          [
            "lvw / lvh",
            "1% of large viewport width / height",
            "Sections sized with browser controls retracted",
            "min-height: 100lvh;"
          ],
          [
            "dvw / dvh",
            "1% of dynamic viewport width / height",
            "Sections tracking changing browser controls",
            "min-height: 100dvh;"
          ],
          [
            "svi, svb, svmin, svmax",
            "Small viewport logical axes or smaller/larger dimension",
            "Writing-mode-aware or proportional sizing",
            "min-block-size: 100svb;"
          ],
          [
            "lvi, lvb, lvmin, lvmax",
            "Large viewport logical axes or smaller/larger dimension",
            "Sizing against the large viewport",
            "min-block-size: 100lvb;"
          ],
          [
            "dvi, dvb, dvmin, dvmax",
            "Dynamic viewport logical axes or smaller/larger dimension",
            "Sizing that follows viewport changes",
            "min-block-size: 100dvb;"
          ],
          [
            "cqw / cqh",
            "1% of eligible query container width / height",
            "Component dimensions",
            "padding: 2cqw;"
          ],
          [
            "cqi / cqb",
            "1% of eligible query container inline / block size",
            "Component sizing that follows writing mode",
            "padding-inline: 3cqi;"
          ],
          [
            "cqmin / cqmax",
            "Smaller / larger of cqi and cqb",
            "Proportional component details",
            "border-radius: 2cqmin;"
          ],
          [
            "ex / cap / ic",
            "Font x-height / cap height / ideographic advance",
            "Specialized typography",
            "height: 1cap;"
          ],
          [
            "rex / rcap / rch / ric",
            "Corresponding metric of the root font",
            "Root-based typographic alignment",
            "max-width: 60rch;"
          ],
          [
            "in / cm / mm / Q / pt / pc",
            "Absolute lengths; 1in = 96px = 72pt",
            "Print dimensions and typography",
            "@media print { body { font-size: 11pt; } }"
          ]
        ]
      },
      {
        "type": "heading",
        "text": "Combine units for fluid sizing",
        "id": "fluid-unit-example"
      },
      {
        "type": "paragraph",
        "text": "clamp(), min(), max(), and calc() are functions, not units. They combine or constrain values. A fluid heading can use rem bounds with a viewport-based preferred size."
      },
      {
        "type": "code",
        "code": "html { font-size: 100%; }\n\nh1 {\n  font-size: clamp(2rem, 1.5rem + 2vw, 3.5rem);\n}\n\n.article {\n  width: min(100% - 2rem, 65ch);\n  margin-inline: auto;\n}\n\n.cards {\n  display: grid;\n  grid-template-columns:\n    repeat(auto-fit, minmax(min(100%, 16rem), 1fr));\n  gap: 1.5rem;\n}"
      },
      {
        "type": "heading",
        "text": "Three details worth checking",
        "id": "unit-checks"
      },
      {
        "type": "list",
        "items": [
          "rem follows the root font size, not the viewport. Keeping the root at 100% lets it follow the browser’s default text size.",
          "A CSS pixel is not necessarily a device pixel. Pixel-sized content still responds to page zoom. Test text resizing and zoom with every unit choice.",
          "Container units need an eligible query container for the relevant axis. Use container-type: inline-size for cqi-based sizing; cqh needs a container eligible for height queries."
        ]
      },
      {
        "type": "code",
        "code": ".card-wrapper {\n  container-type: inline-size;\n}\n\n.card__title {\n  font-size: clamp(1.25rem, 1rem + 2cqi, 2rem);\n}"
      },
      {
        "type": "callout",
        "title": "TEST THE RESULT",
        "text": "ch is an approximate measure, not an exact character count. Viewport height changes can move content. Check narrow layouts, long text, browser controls, and zoom before settling on a value."
      },
      {
        "type": "heading",
        "text": "Reading references",
        "id": "units-references"
      },
      {
        "type": "paragraph",
        "text": "Full Scale — The Best CSS Unit for Responsive Web Design — https://fullscale.io/blog/best-css-unit-for-responsive-web-design/"
      },
      {
        "type": "paragraph",
        "text": "Joan Ayebola — Responsive Units in CSS — https://dev.to/joanayebola/responsive-units-in-css-4fmk"
      },
      {
        "type": "paragraph",
        "text": "Frontend tools — CSS Units for Responsive Design in 2025 — https://dev.to/frontendtoolstech/the-ultimate-guide-to-css-units-for-responsive-design-in-2025-3k36"
      }
    ]
  },
  {
    id: 8,
    mileMarker: 7,
    category: "JAVASCRIPT",
    title: "JavaScript Foundations: From Variables to Interactive Pages",
    excerpt:
      "A review of Module 4: variables, functions, arrays, the DOM, promises, and a practical approach to solving problems.",
    image: blogPostImage2,
    elevation: "600 ft",
    readTime: "6 min read",
    comments: 0,
    featured: false,
    slug: "javascript-recap",
    content: [
      {
        type: "paragraph",
        text: "A search field needs to do more than appear on a page. It needs to read a value, find matching records, and show the results.",
      },
      {
        type: "paragraph",
        text: "Module 4 of Front End Simplified covered the JavaScript concepts behind this kind of interaction. These notes connect the individual tools to a larger task.",
      },
      {
        type: "paragraph",
        text: "The module moved from values and variables to functions, collections, page updates, and asynchronous data. It also covered how to approach unfamiliar problems.",
      },
      {
        type: "callout",
        title: "MODULE AT A GLANCE",
        text: "Values and variables; conditionals and loops; functions; arrays and objects; the DOM and events; promises; and problem solving through small, testable steps.",
      },
      {
        type: "heading",
        text: "Giving values useful names",
        id: "values-variables",
      },
      {
        type: "paragraph",
        text: "JavaScript works with different types of values. This module introduced strings, numbers, booleans, null, and undefined.",
      },
      {
        type: "paragraph",
        text: "A string holds text. A number supports calculations. A boolean represents true or false. Variables give these values names that other code can use.",
      },
      {
        type: "paragraph",
        text: "I can use const when a variable will not be reassigned. When reassignment is necessary, let allows the variable to receive another value.",
      },
      {
        type: "paragraph",
        text: "This distinction concerns reassignment. An array or object stored in a const variable can still have its contents changed.",
      },
      {
        type: "paragraph",
        text: 'Comparisons also need care. The strict equality operator, ===, compares without converting the operands to another type. The string "1" and the number 1 are not strictly equal.',
      },
      {
        type: "heading",
        text: "Choosing a path and repeating work",
        id: "conditionals-loops",
      },
      {
        type: "paragraph",
        text: "Conditionals let a program choose what happens next. An if statement checks a condition, and an else branch handles the alternative.",
      },
      {
        type: "paragraph",
        text: "An if / else if chain runs the first matching branch. The order matters when more than one condition could be true.",
      },
      {
        type: "paragraph",
        text: "Logical operators combine checks. For boolean conditions, && requires both checks to pass. The || operator requires at least one to pass.",
      },
      {
        type: "paragraph",
        text: "Loops handle repeated work. A typical for loop sets an initial value, checks a condition, and updates the value after each pass.",
      },
      {
        type: "paragraph",
        text: "Using an array’s length helps a loop adapt to the collection. It also avoids a fixed limit that becomes incorrect when the data changes.",
      },
      {
        type: "paragraph",
        text: "The FizzBuzz exercise combines these ideas. It uses repetition, remainder calculations, and conditions that check shared multiples before individual multiples.",
      },
      {
        type: "heading",
        text: "Making functions return useful results",
        id: "functions",
      },
      {
        type: "paragraph",
        text: "Functions group reusable behavior. Parameters name the inputs in the definition. Arguments are the values supplied when the function is called.",
      },
      {
        type: "paragraph",
        text: "For example, a temperature conversion function can accept Celsius and return Fahrenheit. The same function can handle different inputs.",
      },
      {
        type: "paragraph",
        text: "The return statement sends a result back to the calling code. It also ends that execution of the function.",
      },
      {
        type: "callout",
        title: "RETURN OR LOG?",
        text: "console.log displays information for inspection. return gives a value back to the caller. If another calculation needs the result, displaying it in the console is not enough.",
      },
      {
        type: "paragraph",
        text: "Defining a function does not run its body. The function needs a call. Both function declarations and arrow functions can provide reusable behavior.",
      },
      {
        type: "heading",
        text: "Working with arrays and objects",
        id: "arrays-objects",
      },
      {
        type: "paragraph",
        text: "Arrays store ordered collections. Their indexes start at zero, so the final item is at array.length - 1.",
      },
      {
        type: "paragraph",
        text: "Objects group related values under property names. A blog post can have a title, category, slug, and image. An array can hold multiple post objects.",
      },
      {
        type: "paragraph",
        text: "The push method adds an item to an array and changes that array. The filter and map methods create new arrays for different purposes.",
      },
      {
        type: "paragraph",
        text: "A filter callback decides which items to keep. A map callback determines the value that each item becomes.",
      },
      {
        type: "callout",
        title: "FILTER AND MAP",
        text: "For a blog category view, filter can select posts in the CSS category. Then map can turn the selected posts into titles for display. Selection and transformation are separate steps.",
      },
      {
        type: "paragraph",
        text: "Reading the data structure comes first. In users[0].email, users[0] selects the first array item. The .email access reads a property from that item.",
      },
      {
        type: "heading",
        text: "Connecting JavaScript to the page",
        id: "dom-events",
      },
      {
        type: "paragraph",
        text: "The Document Object Model, or DOM, represents the page as objects that JavaScript can access. A selector gives code a reference to an element.",
      },
      {
        type: "paragraph",
        text: "The getElementById method accepts an ID without a # prefix. The querySelector method accepts CSS selector syntax, such as .title or #introduction.",
      },
      {
        type: "paragraph",
        text: "A selector can return null when no matching element exists. Script timing matters too: the element must exist when the selection runs.",
      },
      {
        type: "paragraph",
        text: "A deferred script can wait until the HTML has been parsed. This helps code access the elements it needs.",
      },
      {
        type: "paragraph",
        text: "Events connect user actions to functions. A button can call a function that toggles a theme class through classList.toggle.",
      },
      {
        type: "paragraph",
        text: "Keeping the visual rules in CSS makes that change easier to manage. JavaScript changes the class, and CSS defines its appearance.",
      },
      {
        type: "heading",
        text: "Waiting for data with promises",
        id: "promises",
      },
      {
        type: "paragraph",
        text: "Data from a server does not arrive immediately. A promise represents an operation that may complete later or fail.",
      },
      {
        type: "paragraph",
        text: "The fetch function returns a promise. Reading a response as JSON also returns a promise, which explains the two awaits in the module’s example.",
      },
      {
        type: "paragraph",
        text: "Inside an async function, await pauses that function until the awaited promise settles. Other work can continue while it waits.",
      },
      {
        type: "paragraph",
        text: "The .then method provides another way to handle fulfillment. With async and await, try/catch can handle errors thrown during the operation.",
      },
      {
        type: "callout",
        title: "DATA HAS MORE THAN ONE STATE",
        text: "A user directory needs a loading message while data is requested, results after success, and an error message after failure. A successful search can also have no matches.",
      },
      {
        type: "heading",
        text: "Breaking a problem into smaller steps",
        id: "problem-solving",
      },
      {
        type: "paragraph",
        text: "The challenge sections moved from simple calculations to nested collections. The same preparation applies at each level: identify the input and required output.",
      },
      {
        type: "paragraph",
        text: "Tracing one example by hand makes the intermediate steps visible. Pseudocode can describe those steps before JavaScript syntax becomes a distraction.",
      },
      {
        type: "paragraph",
        text: "A useful test includes ordinary inputs and boundary cases. For arrays, these can include an empty collection, duplicate values, or no matching item.",
      },
      {
        type: "paragraph",
        text: "Helper functions and early returns can reduce complexity. A readable solution is easier to inspect when each step has a clear purpose.",
      },
      {
        type: "paragraph",
        text: "The module also emphasized active practice. Predicting a result, running the code, and explaining the output provide more feedback than watching alone.",
      },
      {
        type: "heading",
        text: "Bringing it together in a user directory",
        id: "user-directory",
      },
      {
        type: "paragraph",
        text: "The final challenge combines these concepts in a small user directory. It requests records, stores them as objects, and displays the results.",
      },
      {
        type: "paragraph",
        text: "A search input filters the collection by name. A rendering step turns the selected records into content on the page.",
      },
      {
        type: "paragraph",
        text: "A theme button adds another interaction. Loading, error, and empty states make the interface respond clearly to different outcomes.",
      },
      {
        type: "callout",
        title: "TRAIL NOTE",
        text: "The data flow gives the project a clear structure: request the records, select the matches, prepare the display, and update the page.",
      },
      {
        type: "paragraph",
        text: "This module gives me a reference for those steps. My next practice goal is to explain what each function receives, changes, and returns.",
      },
    ],
  },
  {
    id: 9,
    mileMarker: 8,
    category: "JAVASCRIPT",
    title: "5 JavaScript Concepts I Struggled With",
    excerpt:
      "The JavaScript concepts that tripped me up—and the explanations and practice exercises that finally helped them make sense.",
    image: blogPostImage1,
    elevation: "700 ft",
    readTime: "6 min read",
    comments: 0,
    featured: false,
    slug: "javascript-concepts-i-struggled-with",
  },
  {
  id: 10,
  mileMarker: 9,
  category: "REACT",
  title: "Building a Search Engine Clone with React",
  excerpt:
    "How a search engine clone helped me connect React components, state, routing, API requests, and styling in one project.",
  image: blogimagereact2,
  imageAlt: "React search results on a desktop monitor in a cozy cabin overlooking Alaskan mountains.",
  elevation: "800 ft",
  readTime: "5 MIN READ",
  comments: 0,
  featured: false,
  date: "October 25, 2026",
  slug: "building-a-search-engine-clone-with-react",
  content: [
    {
      type: "paragraph",
      text: "Learning individual React concepts is one thing. Connecting them in a working project is another.",
    },
    {
      type: "paragraph",
      text: "For this project, I followed a tutorial to build a search engine clone with React. Then I worked through the styling, behavior, and deployment needed to make it my own portfolio project.",
    },
    {
      type: "paragraph",
      text: "The goal was to practice building a familiar interface while learning how a React app requests and displays information.",
    },
    {
      type: "heading",
      text: "Breaking the Interface into Components",
      id: "breaking-the-interface-into-components",
    },
    {
      type: "paragraph",
      text: "One of my first lessons was how to divide the interface into smaller pieces.",
    },
    {
      type: "paragraph",
      text: "A search input has a different job from a results page. Keeping these pieces in separate components makes the code easier to read and update.",
    },
    {
      type: "paragraph",
      text: "This helped me understand why React uses components: each piece can focus on one part of the interface.",
    },
    {
      type: "heading",
      text: "Connecting the Search Input to State",
      id: "connecting-the-search-input-to-state",
    },
    {
      type: "paragraph",
      text: "The search field gave me practice with state and events.",
    },
    {
      type: "paragraph",
      text: "With a controlled input, React state stores the text in the field. An onChange handler updates that state as the user types.",
    },
    {
      type: "paragraph",
      text: "The basic pattern looks like this:",
    },
    {
      type: "code",
      code: `const [searchTerm, setSearchTerm] = useState("");

<input
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
/>`,
    },
    {
      type: "paragraph",
      text: "The input displays searchTerm. When the user types, setSearchTerm updates it, and React renders the new value.",
    },
    {
      type: "heading",
      text: "Using the URL to Represent a Search",
      id: "using-the-url-to-represent-a-search",
    },
    {
      type: "paragraph",
      text: "Submitting a search also helped me understand routing and URL query parameters.",
    },
    {
      type: "paragraph",
      text: "A URL can hold information about what the user wants to see. For example:",
    },
    {
      type: "code",
      code: "/search?q=react",
    },
    {
      type: "paragraph",
      text: "Here, q holds the search term.",
    },
    {
      type: "paragraph",
      text: "The results page can read that value and use it to request results. This also makes a search URL useful when someone refreshes the page or shares the link.",
    },
    {
      type: "heading",
      text: "Requesting and Displaying Results",
      id: "requesting-and-displaying-results",
    },
    {
      type: "paragraph",
      text: "The project connected the interface to a search API.",
    },
    {
      type: "paragraph",
      text: "An API lets an application request information from another service. My app handles the interface, while the search service supplies the result data.",
    },
    {
      type: "paragraph",
      text: "The flow is:",
    },
    {
      type: "list",
      items: [
        "1. The user submits a query.",
        "2. The app requests results.",
        "3. The service returns data.",
        "4. React displays that data.",
      ],
    },
    {
      type: "paragraph",
      text: "Because the request takes time, the interface also needs to account for loading, errors, and searches with no results.",
    },
    {
      type: "paragraph",
      text: "This helped me think beyond the successful response. A useful interface should explain what is happening when the data is still loading or something goes wrong.",
    },
    {
      type: "heading",
      text: "Learning Material UI and Emotion",
      id: "learning-material-ui-and-emotion",
    },
    {
      type: "paragraph",
      text: "This project introduced me to Material UI and a different approach to styling.",
    },
    {
      type: "paragraph",
      text: "I was used to writing styles in separate CSS files. In this project, I used MUI’s styled() utility to customize components inside JavaScript.",
    },
    {
      type: "paragraph",
      text: "At first, I confused this with the separate styled-components library because the syntax looked similar. I learned that MUI’s default styling engine is Emotion.",
    },
    {
      type: "paragraph",
      text: "I also learned that a component’s API means the interface it provides to developers. That includes props for its behavior and appearance—not just styling.",
    },
    {
      type: "heading",
      text: "Understanding When to Use an Effect",
      id: "understanding-when-to-use-an-effect",
    },
    {
      type: "paragraph",
      text: "One challenge involved keeping the search input connected to the query in the URL.",
    },
    {
      type: "paragraph",
      text: "I encountered an ESLint warning about calling a state setter directly inside an effect. That pushed me to think more carefully about where a value should come from.",
    },
    {
      type: "paragraph",
      text: "If information already exists in the URL, storing another copy in state can create extra synchronization work.",
    },
    {
      type: "paragraph",
      text: "My takeaway was to ask two questions:",
    },
    {
      type: "list",
      items: [
        "Does this value need its own state?",
        "Am I using an effect to synchronize with something outside React?",
      ],
    },
    {
      type: "paragraph",
      text: "I am still building my understanding of effects, but this gave me a clearer reason to use them.",
    },
    {
      type: "heading",
      text: "Preparing the Project for My Portfolio",
      id: "preparing-the-project-for-my-portfolio",
    },
    {
      type: "paragraph",
      text: "Getting the app online was another part of the learning process. I used GitHub for the code and Vercel for the live deployment.",
    },
    {
      type: "paragraph",
      text: "I also worked on the details around the application, including replacing the default Vite README with information about the project.",
    },
    {
      type: "paragraph",
      text: "A portfolio project needs more than a working screen. Someone visiting the repository should be able to understand what it does, how to run it, and what its limitations are.",
    },
    {
      type: "heading",
      text: "What I’m Taking Forward",
      id: "what-im-taking-forward",
    },
    {
      type: "paragraph",
      text: "This project helped me connect components, state, routing, API requests, and styling in one application.",
    },
    {
      type: "paragraph",
      text: "It also reminded me that following a tutorial is a starting point. Working through warnings, asking why the code works, and reviewing the finished behavior are where I build a stronger understanding.",
    },
    {
      type: "paragraph",
      text: "My next goal is to keep practicing these patterns until I can make more of those decisions independently.",
    },
    {
      type: "paragraph",
      text: (
        <>
          <a href="https://my-search-engine-clone.vercel.app/">
            Try the live project
          </a>
          {" · "}
          <a href="https://github.com/cassiebezick/my-search-engine-clone">
            View the code on GitHub
          </a>
        </>
      ),
    },
  ],
},
];
