import reactPortfolio from "./assets/reactPortfolio.jpeg";
import github_finder from "./assets/github_finder.jpeg";
import cartRedux from "./assets/cart-redux.jpeg";
import expenseTracker from "./assets/expenseTracker.jpeg";
import recipeFinder from "./assets/recipeFinder.jpeg";
import imgGenerator from "./assets/img-generator.jpeg";
import fullStackPort from "./assets/full-stack-portfolio.jpeg";

export const projects = [
  {
    name: "Bootcamp Portfolio",
    image: reactPortfolio,
    description:
      "Frontend project completed during edX bootcamp programm",
    stack: ["HTML5","CSS3", "Tailwind CSS", "React", "Vite"],
    sourceCode: "https://github.com/AnaraB/portfolio",
    livePreview: "https://anara-berdalieva.co.uk/",
  },
  {
    name: "GitHub Profile Finder",
    image: github_finder,
    description:
      "Allows users to search for and view GitHub profiles and their repositories",
    stack: ["HTML5","React", "Tailwind CSS", "REST API", "Context API", "Node.js", "Vite"],
    sourceCode: "https://github.com/AnaraB/GitHub-profile-finder",
    livePreview: "https://github-profile-search-ashen.vercel.app/",
  },
  {
    name: "GQL Expense Tracker",
    image: expenseTracker,
    description:
      "Mobile-friendly full-stack application for expense tracking. Features secure login and signup with cookie-based session management. Includes robust CRUD operations for managing financial records efficiently",
    stack: [
      "HTML5",
      "MERN",
      "GraphQL",
      "Tailwind CSS",
      "CRUD",
      "Authentication",
      "Passport.js",
      "Chart.js",
      "Cron.js",
      "Vite"
    ],
    sourceCode: "https://github.com/AnaraB/GraphQL_Expense_tracker",
    livePreview: "https://graphql-expense-tracker-dnei.onrender.com",
  },
  {
    name: "Image Generator",
    image: imgGenerator,
    description:
      " ",
    stack: [
      "HTML5",
      "JavaScript",
      "CSS3",
      "Node.js",
      "React",
      "Unsplash API",
      "React Query",
      "Context API",
      "Vite"
      
    ],
    sourceCode: "https://github.com/AnaraB/img_generator",
    livePreview: "https://img-generator-unsplash.netlify.app/",
  },
  {
    name: "Recipe Finder App",
    image: recipeFinder,
    description:
      "A responsive React application to search and explore recipes using the Spoonacular API.",
    stack: ["HTML5", "Tailwind CSS", "React", "Spoonacular API", "Lucide Icons", "Vite"],
    sourceCode: "https://github.com/AnaraB/Recipes-app",
    livePreview: "https://recipes-r59mf5ytw-anaras-projects-d471e7cd.vercel.app/",
  },
  {
    name: "Just a Cart",
    image: cartRedux,
    description:
      "This project is a practical example of implementing a cart feature using Redux Toolkit.",
    stack: [
      "HTML5",
      "React",
      "CSS5",
      "Redux Toolkit",
      "Vite"
    ],
    sourceCode: "https://github.com/AnaraB/cart_feature",
    livePreview: "https://just-the-cart-redux.netlify.app/",
  },

  {
    name: "My Full-Stack projects portfolio",
    image: fullStackPort,
    description:
      "This portfolio showcases my full-stack projects",
    stack: [
      "HTML5",
      "CSS3",
      "Context API",
      "React",
      "Vite",
    ],
    sourceCode: "https://github.com/AnaraB/projects-portfolio-ab",
    livePreview: "https://projects-portfolio-ab.vercel.app/",
  },
];

export const techSkillsList = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Node",
  "JQuery",
  "Bootstrap",
  "TailwindCSS",
  "Material-UI",
  "Express.js",
  "GraphQL",
  "Shopify API",
  "RESTful APIs",
  "Webpack",
  "Babel",
  "Jest",
  "Postman",
  "Bun",
  "WordPress",
  "SEO",
  "UX/UI"

]


export const collaborationList = [
  "Jira",
  "Slack",
  "Notion",
  "Git",
  "GitHub",
  "Agile Methodologies",
  "Code Reviews",
  "Pair Programming",
  "Asynchronous Workflows",
  "Cross-Functional Collaboration",
];

export const problemSolvingSkills = [
  "Environment Setup",
  "Project Configuration",
  "Troubleshooting",
  "Debugging",
  "Chrome DevTools",
  "Performance Optimization",
  "CI/CD",
  "Deployment",
];

// 'Material UI',
//   'Git',
//   'CI/CD',
//   'WordPress',
//   'Shopify API',
//   'GraphQL',
//   'REST API',
//   'MongoDB',
//   'MySQL',
//   'Deployment',
//   'Docker',
//   'Notion',
//   'Slack',
//   'Trello',
//   'UX/UI',
//   'SEO'
