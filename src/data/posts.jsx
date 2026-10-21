import blogPostImage1 from "../assets/blogimage1.png";
import blogPostImage2 from "../assets/blogimage2.png";
import blogPostImage3 from "../assets/blogimage3.png";

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
    elevation: "180 FT",
    readTime: "3 MIN READ",
    comments: 0,
    featured: true,
    date: "October 1, 2026",
    slug: "learning-to-code",
    content: [
      {
        "type": "paragraph",
        "text": "I can follow a lesson and understand the code on the screen. Then I open my own project and find new questions."
      },
      {
        "type": "paragraph",
        "text": "Where should this component go? Why does the layout change? How do I get the data onto the page?"
      },
      {
        "type": "paragraph",
        "text": "Those questions are part of why I started this blog."
      },
      {
        "type": "paragraph",
        "text": "I’m Cassie, a front-end development student based in Alaska. I’m learning to build websites with HTML, CSS, JavaScript, and React."
      },
      {
        "type": "paragraph",
        "text": "Cassie Codes Basecamp is where I will document that work."
      },
      {
        "type": "heading",
        "text": "Why I started this blog",
        "id": "why-blog"
      },
      {
        "type": "paragraph",
        "text": "A working page shows the result. It does not always show the decisions, errors, and changes that produced it."
      },
      {
        "type": "paragraph",
        "text": "I want to record those steps while they are still clear in my mind."
      },
      {
        "type": "paragraph",
        "text": "Writing gives me a way to check my understanding. If I cannot explain a concept clearly, I know I need more practice."
      },
      {
        "type": "paragraph",
        "text": "It also gives me a record I can use when I meet the same problem again."
      },
      {
        "type": "callout",
        "title": "ABOUT THIS BLOG",
        "text": "Topics: HTML, CSS, JavaScript, React, and website design. Format: Project notes, code examples, and explanations. Perspective: A student working toward a front-end development career. Purpose: To explain what I learn through practice."
      },
      {
        "type": "heading",
        "text": "What you will find here",
        "id": "what-you-will-find"
      },
      {
        "type": "paragraph",
        "text": "Some posts will focus on one concept, such as how to pass data between React components."
      },
      {
        "type": "paragraph",
        "text": "Others will describe a problem from one of my projects. I will explain what happened, what I checked, and what changed."
      },
      {
        "type": "paragraph",
        "text": "I also plan to write about design decisions. These include page structure, text size, color, and layouts for different screen sizes."
      },
      {
        "type": "paragraph",
        "text": "When I share a solution, I will include enough context to explain why I used it."
      },
      {
        "type": "heading",
        "text": "Why “Basecamp”?",
        "id": "why-basecamp"
      },
      {
        "type": "paragraph",
        "text": "I chose the name because I wanted a place to collect my notes and prepare for the next step."
      },
      {
        "type": "paragraph",
        "text": "The outdoor theme also connects this blog to my life in Alaska."
      },
      {
        "type": "paragraph",
        "text": "Each post will record a specific part of my progress. Over time, those posts will show how my understanding changes."
      },
      {
        "type": "heading",
        "text": "This website is part of the work",
        "id": "building-the-blog"
      },
      {
        "type": "paragraph",
        "text": "The blog itself gives me a project to build as I learn."
      },
      {
        "type": "paragraph",
        "text": "It gives me practical questions about components, navigation, article layouts, and data."
      },
      {
        "type": "paragraph",
        "text": "Each change asks me to connect a lesson with a real task. Sometimes that connection is clear. Sometimes I need to stop and review the basics."
      },
      {
        "type": "paragraph",
        "text": "Both experiences belong here."
      },
      {
        "type": "callout",
        "title": "WHAT EACH TECHNICAL POST WILL EXPLAIN",
        "text": "The problem, the approach I tried, the result, and any limits I found."
      },
      {
        "type": "heading",
        "text": "Where I am now",
        "id": "where-i-am-now"
      },
      {
        "type": "paragraph",
        "text": "I am still developing my skills and working toward my first front-end role."
      },
      {
        "type": "paragraph",
        "text": "I want to build websites that are clear, accessible, and easy to use. I also want to understand the code well enough to explain my decisions."
      },
      {
        "type": "paragraph",
        "text": "This first post gives that work a starting point."
      },
      {
        "type": "paragraph",
        "text": "Welcome to Cassie Codes Basecamp."
      }
    ],
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
    title: "CSS Foundations: From Spacing to Responsive Layouts",
    excerpt:
      "A review of the CSS concepts from Module 2, including the box model, Flexbox, positioning, and responsive design.",
    image: blogPostImage3,
    elevation: "2,800 ft",
    readTime: "6 min read",
    comments: 1,
    featured: false,
    slug: "css-recap",
    content: [
      {
        "type": "paragraph",
        "text": "A page can contain all the right information and still be difficult to read. Text needs space. Related elements need clear groups. Navigation needs a layout that works at different screen sizes."
      },
      {
        "type": "paragraph",
        "text": "Module 2 of Front End Simplified covered the CSS tools that help solve these problems. This post collects the main concepts from my notes."
      },
      {
        "type": "callout",
        "title": "MODULE AT A GLANCE",
        "text": "CSS rules and stylesheets; spacing and sizing; typography and color; selectors and BEM; Flexbox; positioning and interaction states; responsive layouts and animation."
      },
      {
        "type": "heading",
        "text": "Starting with CSS rules",
        "id": "css-rules"
      },
      {
        "type": "paragraph",
        "text": "CSS stands for Cascading Style Sheets. It controls how HTML content appears, including its colors, spacing, and layout."
      },
      {
        "type": "paragraph",
        "text": "A rule contains a selector and declarations. In h1 { color: green; }, h1 selects the heading. The color property receives the value green."
      },
      {
        "type": "paragraph",
        "text": "Inline CSS goes inside an HTML element’s style attribute. An external stylesheet stores rules in a separate file linked to the page."
      },
      {
        "type": "paragraph",
        "text": "A shared stylesheet makes repeated styles easier to maintain. A change to one class can update every element that uses it."
      },
      {
        "type": "heading",
        "text": "Understanding the space around an element",
        "id": "box-model"
      },
      {
        "type": "paragraph",
        "text": "The box model describes four layers: content, padding, border, and margin. These layers explain much of the space we see on a page."
      },
      {
        "type": "paragraph",
        "text": "Padding separates the content from its border. Margin creates space outside the border. These properties solve different spacing problems."
      },
      {
        "type": "paragraph",
        "text": "If text sits too close to a card’s edge, padding can help. If two cards sit too close together, the layout needs external spacing."
      },
      {
        "type": "paragraph",
        "text": "The box-sizing property also affects dimensions. With content-box, padding and borders add to the declared width. With border-box, they fit inside it."
      },
      {
        "type": "callout",
        "title": "SIZE CHECK",
        "text": "A content-box card with width: 300px, 20px padding on each side, and 2px borders has a total border-box width of 344px. With box-sizing: border-box, its total width is 300px. Margin is outside both measurements."
      },
      {
        "type": "paragraph",
        "text": "Centering depends on what needs to move. text-align: center centers inline content inside a container. Automatic side margins can center a constrained block."
      },
      {
        "type": "paragraph",
        "text": "Browser developer tools make these differences visible. Inspecting the box model provides a better starting point than changing spacing values at random."
      },
      {
        "type": "heading",
        "text": "Making text easier to read",
        "id": "typography-color"
      },
      {
        "type": "paragraph",
        "text": "Typography gives content a clear order. Font size and weight can separate a heading from supporting text. Line height gives each line space."
      },
      {
        "type": "paragraph",
        "text": "Color supports that order. The color property changes text color, while background-color changes the background of an element’s box."
      },
      {
        "type": "paragraph",
        "text": "The module introduced named colors, hexadecimal values, and RGB values. These are different ways to specify a color."
      },
      {
        "type": "paragraph",
        "text": "Readability still depends on the combination of foreground and background. A chosen palette needs enough contrast, and important information needs cues beyond color."
      },
      {
        "type": "heading",
        "text": "Keeping styles organized",
        "id": "selectors-bem"
      },
      {
        "type": "paragraph",
        "text": "Selectors determine which elements receive a rule. Type selectors target tags such as p. Class selectors target reusable names such as .card."
      },
      {
        "type": "paragraph",
        "text": "An ID selector targets a name such as #introduction. IDs should be unique within the document."
      },
      {
        "type": "paragraph",
        "text": "Specificity helps resolve competing declarations. For simple selectors, an ID has greater specificity than a class. A class has greater specificity than a type."
      },
      {
        "type": "paragraph",
        "text": "Source order breaks a tie when the other cascade conditions are equal. This is why checking the active rules matters when a style seems ignored."
      },
      {
        "type": "paragraph",
        "text": "BEM provides a naming pattern for components. The name stands for Block, Element, Modifier."
      },
      {
        "type": "paragraph",
        "text": "For a card, .card names the block. The class .card__title names an element inside it. The class .card--featured names a variation."
      },
      {
        "type": "paragraph",
        "text": "This pattern lets a featured card share the base styles. Only the differences need additional rules."
      },
      {
        "type": "heading",
        "text": "Arranging content with Flexbox",
        "id": "flexbox"
      },
      {
        "type": "paragraph",
        "text": "Flexbox lets a container arrange its direct children. It starts with display: flex on the parent."
      },
      {
        "type": "paragraph",
        "text": "The flex-direction property sets the main axis. A row follows the inline axis. A column follows the block axis."
      },
      {
        "type": "paragraph",
        "text": "The justify-content property distributes items along the main axis. The align-items property aligns them along the cross axis."
      },
      {
        "type": "callout",
        "title": "FLEXBOX CHECK",
        "text": "The alignment properties follow the axes. In a typical horizontal writing mode, changing flex-direction from row to column makes the main axis vertical. justify-content then controls vertical distribution."
      },
      {
        "type": "paragraph",
        "text": "The gap property adds consistent space between items. The flex-wrap property lets items move onto additional lines when necessary."
      },
      {
        "type": "paragraph",
        "text": "Nested layouts need their own containers. A navigation bar can use Flexbox to separate its logo and links. The link group can use Flexbox too."
      },
      {
        "type": "paragraph",
        "text": "The order property changes visual order. It does not change the document order, so visual changes need to preserve a sensible reading and keyboard sequence."
      },
      {
        "type": "heading",
        "text": "Positioning and layering elements",
        "id": "positioning"
      },
      {
        "type": "paragraph",
        "text": "Normal flow determines the usual arrangement of content. Relative positioning keeps an element’s original space while allowing a visual offset."
      },
      {
        "type": "paragraph",
        "text": "Absolute positioning removes an element from normal flow. A card badge is one example of where this can be useful."
      },
      {
        "type": "paragraph",
        "text": "A common pattern gives the card position: relative and the badge position: absolute. The badge can then sit near a card corner."
      },
      {
        "type": "paragraph",
        "text": "Overflow controls content that extends beyond a box. The hidden value clips it. The auto value allows scrolling when needed."
      },
      {
        "type": "paragraph",
        "text": "The z-index property helps control overlapping layers. Its effect depends on stacking contexts, so a larger number does not always solve a layering problem."
      },
      {
        "type": "heading",
        "text": "Showing interaction states",
        "id": "interaction-states"
      },
      {
        "type": "paragraph",
        "text": "Pseudo-classes describe states or conditions. Examples include :hover, :focus, :active, and :nth-child()."
      },
      {
        "type": "paragraph",
        "text": "A visible focus indicator shows keyboard users which control has focus. Hover feedback alone does not provide the same information."
      },
      {
        "type": "paragraph",
        "text": "Pseudo-elements target a generated or selected part of an element. The module used ::before and ::after for details such as arrows and underlines."
      },
      {
        "type": "paragraph",
        "text": "Tooltips and modals combine several of these ideas. Their behavior also needs keyboard access, appropriate focus handling, and usable controls."
      },
      {
        "type": "heading",
        "text": "Adapting the layout and adding motion",
        "id": "responsive-motion"
      },
      {
        "type": "paragraph",
        "text": "Responsive design allows the same content to fit different viewport sizes. Fluid measurements and media queries help the layout adapt."
      },
      {
        "type": "paragraph",
        "text": "A max-width media query applies at or below its specified width. It can change a card row into a column when space becomes limited."
      },
      {
        "type": "paragraph",
        "text": "Breakpoints should follow the content. Resizing the browser helps reveal where the layout needs a change."
      },
      {
        "type": "paragraph",
        "text": "The module also covered transitions, keyframes, transforms, and opacity. These tools can add feedback or introduce content with a small visual change."
      },
      {
        "type": "paragraph",
        "text": "Transforms can move, resize, or rotate an element without rearranging surrounding content. Keyframes define stages of an animation."
      },
      {
        "type": "paragraph",
        "text": "When combining transform functions, they belong in the same declaration. Separate competing declarations can replace each other."
      },
      {
        "type": "heading",
        "text": "Bringing the concepts together",
        "id": "next-practice"
      },
      {
        "type": "paragraph",
        "text": "The final review brings these topics into one practice challenge: a responsive hero section with a button, a wrapping gallery, and a positioned badge."
      },
      {
        "type": "paragraph",
        "text": "That challenge gives each property a purpose. Spacing supports readability. Flexbox arranges the cards. Positioning anchors the badge. Media queries adapt the layout."
      },
      {
        "type": "callout",
        "title": "TRAIL NOTE",
        "text": "The useful question is: which CSS tool fits this problem? Understanding that choice gives me a clearer direction for the next change."
      },
      {
        "type": "paragraph",
        "text": "These notes give me a reference for future projects. My next step is to practice combining the concepts and explaining why each rule belongs."
      }
    ],
  },
  {
    id: 4,
    mileMarker: 3,
    category: "JAVASCRIPT",
    title: "JavaScript Foundations: From Variables to Interactive Pages",
    excerpt:
      "A review of Module 4: variables, functions, arrays, the DOM, promises, and a practical approach to solving problems.",
    image: blogPostImage3,
    elevation: "2,800 ft",
    readTime: "6 min read",
    comments: 1,
    featured: false,
    slug: "javascript-recap",
    content: [
      {
        "type": "paragraph",
        "text": "A search field needs to do more than appear on a page. It needs to read a value, find matching records, and show the results."
      },
      {
        "type": "paragraph",
        "text": "Module 4 of Front End Simplified covered the JavaScript concepts behind this kind of interaction. These notes connect the individual tools to a larger task."
      },
      {
        "type": "paragraph",
        "text": "The module moved from values and variables to functions, collections, page updates, and asynchronous data. It also covered how to approach unfamiliar problems."
      },
      {
        "type": "callout",
        "title": "MODULE AT A GLANCE",
        "text": "Values and variables; conditionals and loops; functions; arrays and objects; the DOM and events; promises; and problem solving through small, testable steps."
      },
      {
        "type": "heading",
        "text": "Giving values useful names",
        "id": "values-variables"
      },
      {
        "type": "paragraph",
        "text": "JavaScript works with different types of values. This module introduced strings, numbers, booleans, null, and undefined."
      },
      {
        "type": "paragraph",
        "text": "A string holds text. A number supports calculations. A boolean represents true or false. Variables give these values names that other code can use."
      },
      {
        "type": "paragraph",
        "text": "I can use const when a variable will not be reassigned. When reassignment is necessary, let allows the variable to receive another value."
      },
      {
        "type": "paragraph",
        "text": "This distinction concerns reassignment. An array or object stored in a const variable can still have its contents changed."
      },
      {
        "type": "paragraph",
        "text": "Comparisons also need care. The strict equality operator, ===, compares without converting the operands to another type. The string \"1\" and the number 1 are not strictly equal."
      },
      {
        "type": "heading",
        "text": "Choosing a path and repeating work",
        "id": "conditionals-loops"
      },
      {
        "type": "paragraph",
        "text": "Conditionals let a program choose what happens next. An if statement checks a condition, and an else branch handles the alternative."
      },
      {
        "type": "paragraph",
        "text": "An if / else if chain runs the first matching branch. The order matters when more than one condition could be true."
      },
      {
        "type": "paragraph",
        "text": "Logical operators combine checks. For boolean conditions, && requires both checks to pass. The || operator requires at least one to pass."
      },
      {
        "type": "paragraph",
        "text": "Loops handle repeated work. A typical for loop sets an initial value, checks a condition, and updates the value after each pass."
      },
      {
        "type": "paragraph",
        "text": "Using an array’s length helps a loop adapt to the collection. It also avoids a fixed limit that becomes incorrect when the data changes."
      },
      {
        "type": "paragraph",
        "text": "The FizzBuzz exercise combines these ideas. It uses repetition, remainder calculations, and conditions that check shared multiples before individual multiples."
      },
      {
        "type": "heading",
        "text": "Making functions return useful results",
        "id": "functions"
      },
      {
        "type": "paragraph",
        "text": "Functions group reusable behavior. Parameters name the inputs in the definition. Arguments are the values supplied when the function is called."
      },
      {
        "type": "paragraph",
        "text": "For example, a temperature conversion function can accept Celsius and return Fahrenheit. The same function can handle different inputs."
      },
      {
        "type": "paragraph",
        "text": "The return statement sends a result back to the calling code. It also ends that execution of the function."
      },
      {
        "type": "callout",
        "title": "RETURN OR LOG?",
        "text": "console.log displays information for inspection. return gives a value back to the caller. If another calculation needs the result, displaying it in the console is not enough."
      },
      {
        "type": "paragraph",
        "text": "Defining a function does not run its body. The function needs a call. Both function declarations and arrow functions can provide reusable behavior."
      },
      {
        "type": "heading",
        "text": "Working with arrays and objects",
        "id": "arrays-objects"
      },
      {
        "type": "paragraph",
        "text": "Arrays store ordered collections. Their indexes start at zero, so the final item is at array.length - 1."
      },
      {
        "type": "paragraph",
        "text": "Objects group related values under property names. A blog post can have a title, category, slug, and image. An array can hold multiple post objects."
      },
      {
        "type": "paragraph",
        "text": "The push method adds an item to an array and changes that array. The filter and map methods create new arrays for different purposes."
      },
      {
        "type": "paragraph",
        "text": "A filter callback decides which items to keep. A map callback determines the value that each item becomes."
      },
      {
        "type": "callout",
        "title": "FILTER AND MAP",
        "text": "For a blog category view, filter can select posts in the CSS category. Then map can turn the selected posts into titles for display. Selection and transformation are separate steps."
      },
      {
        "type": "paragraph",
        "text": "Reading the data structure comes first. In users[0].email, users[0] selects the first array item. The .email access reads a property from that item."
      },
      {
        "type": "heading",
        "text": "Connecting JavaScript to the page",
        "id": "dom-events"
      },
      {
        "type": "paragraph",
        "text": "The Document Object Model, or DOM, represents the page as objects that JavaScript can access. A selector gives code a reference to an element."
      },
      {
        "type": "paragraph",
        "text": "The getElementById method accepts an ID without a # prefix. The querySelector method accepts CSS selector syntax, such as .title or #introduction."
      },
      {
        "type": "paragraph",
        "text": "A selector can return null when no matching element exists. Script timing matters too: the element must exist when the selection runs."
      },
      {
        "type": "paragraph",
        "text": "A deferred script can wait until the HTML has been parsed. This helps code access the elements it needs."
      },
      {
        "type": "paragraph",
        "text": "Events connect user actions to functions. A button can call a function that toggles a theme class through classList.toggle."
      },
      {
        "type": "paragraph",
        "text": "Keeping the visual rules in CSS makes that change easier to manage. JavaScript changes the class, and CSS defines its appearance."
      },
      {
        "type": "heading",
        "text": "Waiting for data with promises",
        "id": "promises"
      },
      {
        "type": "paragraph",
        "text": "Data from a server does not arrive immediately. A promise represents an operation that may complete later or fail."
      },
      {
        "type": "paragraph",
        "text": "The fetch function returns a promise. Reading a response as JSON also returns a promise, which explains the two awaits in the module’s example."
      },
      {
        "type": "paragraph",
        "text": "Inside an async function, await pauses that function until the awaited promise settles. Other work can continue while it waits."
      },
      {
        "type": "paragraph",
        "text": "The .then method provides another way to handle fulfillment. With async and await, try/catch can handle errors thrown during the operation."
      },
      {
        "type": "callout",
        "title": "DATA HAS MORE THAN ONE STATE",
        "text": "A user directory needs a loading message while data is requested, results after success, and an error message after failure. A successful search can also have no matches."
      },
      {
        "type": "heading",
        "text": "Breaking a problem into smaller steps",
        "id": "problem-solving"
      },
      {
        "type": "paragraph",
        "text": "The challenge sections moved from simple calculations to nested collections. The same preparation applies at each level: identify the input and required output."
      },
      {
        "type": "paragraph",
        "text": "Tracing one example by hand makes the intermediate steps visible. Pseudocode can describe those steps before JavaScript syntax becomes a distraction."
      },
      {
        "type": "paragraph",
        "text": "A useful test includes ordinary inputs and boundary cases. For arrays, these can include an empty collection, duplicate values, or no matching item."
      },
      {
        "type": "paragraph",
        "text": "Helper functions and early returns can reduce complexity. A readable solution is easier to inspect when each step has a clear purpose."
      },
      {
        "type": "paragraph",
        "text": "The module also emphasized active practice. Predicting a result, running the code, and explaining the output provide more feedback than watching alone."
      },
      {
        "type": "heading",
        "text": "Bringing it together in a user directory",
        "id": "user-directory"
      },
      {
        "type": "paragraph",
        "text": "The final challenge combines these concepts in a small user directory. It requests records, stores them as objects, and displays the results."
      },
      {
        "type": "paragraph",
        "text": "A search input filters the collection by name. A rendering step turns the selected records into content on the page."
      },
      {
        "type": "paragraph",
        "text": "A theme button adds another interaction. Loading, error, and empty states make the interface respond clearly to different outcomes."
      },
      {
        "type": "callout",
        "title": "TRAIL NOTE",
        "text": "The data flow gives the project a clear structure: request the records, select the matches, prepare the display, and update the page."
      },
      {
        "type": "paragraph",
        "text": "This module gives me a reference for those steps. My next practice goal is to explain what each function receives, changes, and returns."
      }
    ],
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