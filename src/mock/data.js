import { nanoid } from 'nanoid';
import React from 'react';

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
  paragraphOne: `Sup! 👋🏻 I'm Agustin, studying Computer Science and Mathematics @ UBA.

    I have an enormous amount of curiosity which fuels my drive to learn new technologies and concepts.
    
    I am a fanatic for software💻 and finances 📈, and always try to find new innovative ways to solve problems both in software engineering and personal finances.
    
    I love working in the IT industry due to its fast pace and flexibility.
    `,
  paragraphTwo:
    'I am passionate about technology and finding new creative ways to solve software engineering problems',
  paragraphThree: '',
  resume: 'https://raw.githubusercontent.com/agustin-arias/Resume/main/agustin_arias_resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'DevConnector.png',
    title: 'DevConnector',
    info: 'A Social Media For Developers',
    info2:
      'This is a MERN (MongoDB, Express, React & Node) stack application. It is a small social network app that includes authentication, profiles and forum posts.',
    url: 'https://dev-connector-anta.netlify.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dotfiles.png',
    title: 'Dotfiles Configuration',
    info: 'My Dotfiles Configuration Files',
    info2:
      'Here you can find my dotfiles which include backups (Keybindings, installed software), crontabs, .gitconfig and .gitignore, bash and zsh aliases and functions, vim customization, and config files for random programs like Vscode and Terminator (Terminal emulator similar to Tmux)',
    url: '',
    repo: 'https://github.com/agustin-arias/.dotfiles', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'assembler-interpreter.png', // assembler-interpreter.gif',
    title: 'Assembler Interpreter',
    info: 'Program designed to interpret basic Assembler code.',
    info2:
      "I have coded a program capable of interpreting assembler code and showing a GUI detailing how the program is working. This script uses 0 libraries with the exception of python's sys (for interaction with the OS) for console i/o & re (Regex library) for parsing input messages.",
    url: 'https://raw.githubusercontent.com/agustin-arias/assembler_interpreter/master/demonstration.gif',
    repo: 'https://github.com/agustin-arias/assembler_interpreter', // if no repo, the button will not show up
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
    img: 'change_background.png',
    title: 'Random Background Changer',
    info: '',
    info2: (
      <>
        This is a CLI that takes two random wallpapers from{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://motaen.com">
          Motaen
        </a>{' '}
        and sets them as lockscreen and background pictures. It can take as argument: new,
        3d-graphics, animals, aviation, games, girls, holidays, men, motorcycles, among others.
      </>
    ),
    url: 'https://raw.githubusercontent.com/agustin-arias/change-background/main/demonstration.gif',
    repo: 'https://github.com/agustin-arias/change-background', // if no repo, the button will not show up
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
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/agustin-arias/prime-circles', // if no repo, the button will not show up
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
      name: 'envelope', // email
      url: `mailto:${contactData.email}`,
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/agustinntarias',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/agustin-arias',
    },
  ],
};
