export const PATHS = {
  PP: "/images/man2.png",
  MOBILE: 9022546526,
  INSTA: "https://www.instagram.com/mangesh.707/",
  GMAIL: "mailto:mangeshkhandale327@gmail.com",
  LINKEDIN: "https://www.linkedin.com/in/mangesh0712/",
  GITHUB: "https://github.com/mangesh0712",
};
export const NAVBAR_DATA = [
  {
    id: 1,
    title: "about me",
    path: "/aboutme",
  },
  {
    id: 2,
    title: "my work",
    path: "/experience",
  },
  {
    id: 3,
    title: "my offer",
    path: "/myoffer",
  },
  {
    id: 4,
    title: "my cv",
    path: "/mycv",
  },
  {
    id: 5,
    title: "contact me",
    path: "/contacts",
  },
];

export const EXPERIENCE_PAGE_TABS = [
  {
    id: 1,
    title: "fdc",
    path: "/fdc",
  },
  {
    id: 2,
    title: "bushel technologies",
    path: "/bushel",
  },
  {
    id: 3,
    title: "Cognizant (CTS)",
    path: "/cognizant",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "msk clothing",
    img: "/images/mskclothing.png",
    path: "https://cranky-varahamihira-f93d97.netlify.app",
    description: `“It's an E-com website let's you sign in by google and integrated with stripe payment system, completely responsive and mobile friendly ”`,
    techUsed: [
      "react",
      "tailwind",
      "firebase",
      "sso",
      "react-hooks",
      "redux",
      "react-router",
    ],
  },
  {
    id: 2,
    title: "youtube clone",
    img: "/images/youtube.png",
    path: "https://stupefied-bassi-531f50.netlify.app/",
    description: `“Its a yuotube like clone which let's you play and search videos ,completely responsive and mobile friendly. ”`,
    techUsed: ["react", "tailwind", "firebase", "react-hooks", "react-router"],
  },
];

export const COMPANIES = {
  fdc: {
    name: "fast data connect",
    role: "junior developer",
    timeSpan: "june - september 2019",
    timeLine: [
      "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
      "Engineered and maintained major features of  web app using ES6, Handlebars, ReactJs, Tailwind , .net",
    ],
  },
  bushel: {
    name: "bushel technologies",
    role: "software developer",
    timeSpan: "november 2019 - dec 2021",
    timeLine: [
      "Feature and performance enhancements – used react- hooks.",
      "Integration of API’s developed by back-end developers with client-side logic",
      "Interfaced with clients on a weekly basis, providing technological expertise",
    ],
  },
  cognizant: {
    name: "Cognizant",
    role: "senior frontend developer",
    timeSpan: "from jan 2022",
    timeLine: [
      "Developed and maintained code for Business to Business middleware application for accounting the transactions  primarily using ReactJs, Typescript",
      "Feature and performance enhancements – used react- hooks.",
      "Working for Socite General Client on product called IAppli (Application monitoring app) ",
    ],
  },
};

export const MY_OFFER_LIST_DATA = {
  keyPoints: [
    "verifying good UI/UX design,",
    "leading/co-developing the front-end and back-end,",
    "estimating tasks,",
    "setting up the CI/CD,",
    "researching possible techs,",
    "launching and monitoring the project.",
  ],
  frontend: [
    "lead TypeScript/JavaScript development: bootstraping, refactoring, improving the structure, reliability, build setup;",
    "full integration of front-end development using tools like , code minifications, multiple environments support, CI/CD, Storybook components library, automated testing of accessibility, server-side render,",
    "good sense of design and UX,",
    "Good experience in almost all of the JS ecosystems, by having used in the past many libraries like Next.js, React, Redux, Angular, jQuery, Lodash/Underscore and many else.",
  ],
  backend: [
    "cooperation with APIs",
    "can also work with authentication and autherization servers,",
    "refactoring existing applications, by improving code readibility,",
    "using different types of databases (like MySQL, mongoDB)",
  ],
};
