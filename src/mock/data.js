import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Agustin Arias', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! My name is',
  name: 'Agustin Arias',
  subtitle: "I'm the Ultimate Software Engineer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I have been coding since 2018, always looking for new challenges by participating in coding competitions on Codeforces. And solving hard problems from pages such as Codewars, Project Euler, Advent of Code 2019.',
  paragraphTwo:
    'I am passionate about technology and finding new creative ways to solve software engineering problems',
  paragraphThree: '',
  resume:
    'https://www.udrop.com/5v92/CV_english.pdf?download_token=a9c3271afe04d142511e3a0524805cc844a4ee41d3a82f1ca6f55036e1302282', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'DevConnector.png',
    title: 'DevConnector',
    info: 'A Social Media For Developers',
    info2:
      'This is a MERN stack application. It is a small social network app that includes authentication, profiles and forum posts.',
    url: 'https://dev-connect-anta.herokuapp.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'random-quote-generator.jpg',
    title: 'Random Quote Generator',
    info: '',
    info2:
      'Random quote generator made with the help of React, together with Bootstrap, font-awesome and deployed to Netlify.',
    url: 'https://random-quote-generator-anta.netlify.app/',
    repo: 'https://github.com/agustin-arias/random-quote-generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'simple-md-previewer.png',
    title: 'Simple Markdown Previewer',
    info: '',
    info2:
      'Simple React Markdown Previewer made with the help of React,together with TypeScript, Bootstrap, font-awesome and some other npm packages.  This web application was deployed to Netlify.',
    url: 'https://simple-react-md-previewer-anta.netlify.app/',
    repo: 'https://github.com/agustin-arias/simple-react-md-preview', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'puzzle-nurikabe.png',
    title: 'Nurikabe Solver',
    info: '',
    info2:
      'Each puzzle consists of a grid containing clues in various places. The objective is to create islands by partitioning between clues with walls so that a number of rules are satisfied. This uses a backtracking algorithm to solve the problem.',
    url: '',
    repo: 'https://github.com/agustin-arias/nurikabe-solver', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'assembler-interpreter.png', // assembler-interpreter.gif',
    title: 'Assembler Interpreter',
    info: 'Program designed to interpret basic Assembler code.',
    info2:
      "I have coded a program capable of interpreting assembler code and showing a GUI detailing how the program is working. This script uses 0 libraries with the exception of python's sys for console i/o & re for parsing input messages.",
    url: '',
    repo: 'https://github.com/agustin-arias/assembler_interpreter', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: '', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'agustinntarias@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/agustinarias-fullstack/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/agustin-arias',
    },
  ],
};
