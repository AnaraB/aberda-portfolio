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
    stack: ["JavaScript","CSS3", "Tailwind CSS", "React"],
    sourceCode: "https://github.com/AnaraB/portfolio",
    livePreview: "https://anara-berdalieva.co.uk/",
  },
  {
    name: "GitHub Profile Finder",
    image: github_finder,
    description:
      "Allows users to search for and view GitHub profiles and their repositories",
    stack: ["React", "Tailwind CSS", "REST API", "Context API", "Node.js"],
    sourceCode: "https://github.com/AnaraB/GitHub-profile-finder",
    livePreview: "https://github-profile-search-ashen.vercel.app/",
  },
  {
    name: "GQL Expense Tracker",
    image: expenseTracker,
    description:
      "Mobile-friendly full-stack application for expense tracking. Features secure login and signup with cookie-based session management. Includes robust CRUD operations for managing financial records efficiently",
    stack: [
      "MERN",
      "GraphQL",
      "Tailwind CSS",
      "Passport.js",
      "Chart.js",
      "Cron.js",
    ],
    sourceCode: "https://github.com/AnaraB/GraphQL_Expense_tracker",
    livePreview: "https://graphql-expense-tracker-dnei.onrender.com",
  },
  {
    name: "LIFYA Dashboard",
    image: imgGenerator,
    description:
      "full-stack architecture. Configured the MERN stack, user auth implementation, fetched data from Shopify API, implemented role-based access control. Note: The application is in development. The repository is private. ",
    stack: [
      "MERN",
      "TypeScript",
      "GraphQL",
      "REST API",
      "Passport.js",
      "Bun.js",
      "Redux",
      "Shopify API",
    ],
    sourceCode: "https://github.com/AnaraB?tab=repositories",
    livePreview: "https://github.com",
  },
  {
    name: "Recipe Finder App",
    image: recipeFinder,
    description:
      "A React portfolio SPA website which showcases the front-end projects created during my edX bootcamp programm.",
    stack: ["Bootstrap", "CSS", "React", "Node.js"],
    sourceCode: "https://github.com/AnaraB/portfolio",
    livePreview: "https://anara-berdalieva.co.uk/",
  },
  {
    name: "Gazetteer",
    image: cartRedux,
    description:
      "Map based,  full-stack, mobile-first app to provide information on countries",
    stack: [
      "JavaScript",
      "AJAX",
      "Bootstrap",
      "JQuery",
      "REST API",
      "PHP",
      "Leaflet",
      "XAMPP",
    ],
    sourceCode: "https://github.com/AnaraB/gazetteer",
    livePreview: "https://gazetteer.anara-berdalieva.co.uk/",
  },

  {
    name: "LIFYA Dashboard1",
    image: fullStackPort,
    description:
      "Vendor dashboard for the LIFYA marketplace. The repository is private. ",
    stack: [
      "MERN",
      "TypeScript",
      "GraphQL",
      "REST API",
      "Passport.js",
      "Bun.js",
      "Redux",
      "Shopify API",
    ],
    sourceCode: "https://github.com/AnaraB?tab=repositories",
    livePreview: "https://github.com",
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
