import githubFinder from "./assets/images/github_finder.jpeg";
import gazetteer from "./assets/images/gazetter.jpeg";
import companyDirectory from "./assets/images/companyDirectory.jpeg";
import expenseTracker from "./assets/images/expenseTracker.jpeg";
import reactPortfolio from "./assets/images/reactPortfolio.jpeg";
import vendorDashboard from "./assets/images/vendorDashboard.jpeg";



const projects = [
  {
    name: 'Company Directory',
    image: companyDirectory,
    description:
      'A mobile-first, full-stack application to maintain a company personnel database',
    stack: ['JavaScript', 'PHP', 'MySQL', 'Bootstrap','XAMPP'],
    sourceCode: 'https://github.com/AnaraB/companydirectory',
    livePreview: 'https://companydirectory.anara-berdalieva.co.uk/',
  },
  {
    name: 'GitHub Profile Finder',
    image: githubFinder,
    description:
      'Allows users to search for and view GitHub profiles and their repositories',
    stack: ['React','Tailwind CSS', 'REST API', 'Context API', 'Node.js'],
    sourceCode: 'https://github.com/AnaraB/GitHub-profile-finder',
    livePreview: 'https://github-profile-search-ashen.vercel.app/',
  },
  {
    name: 'Gazetteer',
    image: gazetteer,
    description:
      'Map based,  full-stack, mobile-first app to provide information on countries',
    stack: ['JavaScript', 'AJAX', 'Bootstrap', 'JQuery', 'REST API', 'PHP', 'Leaflet', 'XAMPP'],
    sourceCode: 'https://github.com/AnaraB/gazetteer',
    livePreview: 'https://gazetteer.anara-berdalieva.co.uk/',
  },
  {
    name: 'GQL Expense Tracker',
    image: expenseTracker,
    description:'Mobile-friendly full-stack application for expense tracking. Features secure login and signup with cookie-based session management. Includes robust CRUD operations for managing financial records efficiently',
    stack: ['MERN', 'GraphQL', 'Tailwind CSS', 'Passport.js', 'Chart.js', 'Cron.js'],
    sourceCode: 'https://github.com/AnaraB/GraphQL_Expense_tracker',
    livePreview: 'https://graphql-expense-tracker-dnei.onrender.com',
  },
  {
    name: 'REACT portfolio',
    image: reactPortfolio,
    description:
      'A React portfolio SPA website which showcases the front-end projects created during my edX bootcamp programm.',
    stack: ['Bootstrap', 'CSS', 'React', 'Node.js'],
    sourceCode: 'https://github.com/AnaraB/portfolio',
    livePreview: 'https://anara-berdalieva.co.uk/',
  },
  {
    name: 'LIFYA Dashboard',
    image: vendorDashboard,
    description:
      'Vendor dashboard for the LIFYA marketplace during a 6-month internship. Showcased expertise in TypeScript, GraphQL, and full-stack architecture. Configured the MERN stack, user auth implementation, fetched data from Shopify API, implemented role-based access control. Note: The application is in development. The repository is private. ',
    stack: ['MERN', 'TypeScript', 'GraphQL', 'REST API', 'Passport.js', 'Bun.js', 'Redux', 'Shopify API'],
    sourceCode: 'https://github.com/AnaraB?tab=repositories',
    livePreview: 'https://github.com',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'MERN stack',
  'PHP',
  'Express.js',
  'Node',
  'JQuery',
  'Bootstrap',
  'TailwindCSS',
  'Material UI',
  'Git',
  'CI/CD',
  'WordPress',
  'Shopify API',
  'GraphQL',
  'REST API',
  'MongoDB',
  'MySQL',
  'Deployment',
  'Docker',
  'Notion',
  'Slack', 
  'Trello',
  'UX/UI',
  'SEO'
]


export {  projects, skills }
