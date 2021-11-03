import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';
import { FaServer } from 'react-icons/fa';
import { MdDeveloperMode } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';
import { IProject, IService, ISkill } from './type';

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about:
      'handle database, server, api using <b>Express </b> & other popular frameworks',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about:
      'I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Competitive Coder',
    about: 'a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'UI/UX designer',
    about:
      'stunning user interface designer using <b>Figma</b>  , <b>Framer</b> <b>Editor X</b> ',
  },
  {
    Icon: RiComputerLine,
    title: 'Software Design Tools',
    about:
      'Software Engineering Designing Tools <b>creately</b> , <b>ERDPlus</b>, <b>DBDesign</b>, <b>SmartSheet</b>!',
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: 'Python',
    level: '45',
  },
  {
    Icon: BsCircleFill,
    name: 'Java Script',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'React Native',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'React',
    level: '70',
  },
  {
    Icon: BsCircleFill,
    name: 'Django',
    level: '80',
  },
  {
    Icon: BsCircleFill,
    name: 'Bootstrap',
    level: '80',
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: 'Figma',
    level: '85',
  },
  {
    Icon: BsCircleFill,
    name: 'Photoshop',
    level: '45',
  },
  {
    Icon: BsCircleFill,
    name: 'Illustrator',
    level: '60',
  },
  {
    Icon: BsCircleFill,
    name: 'Framer',
    level: '45',
  },
  {
    Icon: BsCircleFill,
    name: 'Editor X',
    level: '65',
  },
  {
    Icon: BsCircleFill,
    name: 'Adobe XD',
    level: '55',
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Portfolio Next',
    description:
      'This app shows my portfolio',
    image_path: '/images/covid.jpg',
    deployed_url: 'https://portfolio-nextjs-green-seven.vercel.app/',
    github_url: 'https://github.com/emon1995/portfolio-nextjs',
    category: ['react'],
    key_techs: ['React','Next Js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 2,
    name: 'Mongoose Next',
    image_path: '/images/algoVisual.png',
    deployed_url: 'https://github.com/emon1995/next-mongoose',
    github_url: 'https://github.com/emon1995/next-mongoose',
    category: ['react'],
    description:
      'An web app which shows how backend connected with MongoDB',
    key_techs: ['React','Next Js', 'MongoDB'],
  },

  {
    id: 3,
    name: 'Quiz App',
    image_path: '/images/dev.jpg',
    deployed_url: 'https://github.com/emon1995/quiz-app',
    github_url: 'https://github.com/emon1995/quiz-app',
    category: ['node', 'mongoDB', 'react'],
    description:
      'Quiz app for developers who can quiz performs',
    key_techs: [
      'React',
      'Next Js',
      'Redux',
      'Node',
      'Express',
      'Mongo',
      'REST API',
      'Bootstrap',
    ],
  },

  {
    id: 4,
    name: 'Landing Page App',
    image_path: '/images/chatapp.jpg',
    deployed_url: 'https://github.com/emon1995/next-landing-page',
    github_url: 'https://github.com/emon1995/next-landing-page',
    category: ['node', 'react'],
    description:
      'Landing Page App  Business purpose',
    key_techs: ['React', 'Next Js', 'Tailwind Css'],
  },

  {
    id: 5,
    name: 'Pioneer Bank',
    image_path: '/images/tweetme.jpg',
    deployed_url: 'https://github.com/emon1995/pioneer-bank',
    github_url: 'https://github.com/emon1995/pioneer-bank',
    category: [ 'javascript'],
    description:
      "Pioneer Bank Static website",
    key_techs: ['Html', 'CSS',],
  },

  {
    id: 6,
    name: 'Photo Gallery',
    image_path: '/images/color.jpg',
    deployed_url: '!#',
    github_url: 'https://github.com/emon1995/PhotoGallery',
    category: ['javascript'],
    description:
      'Photo Gallery App Photo uploading app',
    key_techs: ['Html', 'Css', 'JavaScript'],
  },
  {
    id: 7,
    name: 'Number Guesser Game ',
    image_path: '/images/youtubeClone.png',
    deployed_url: 'https://github.com/emon1995/Number-Gusser-Game',
    github_url: 'https://github.com/emon1995/Number-Gusser-Game',
    category: ['javascript'],
    description:
      'Number Guesser Game App check number ',
    key_techs: [
      'Html',
      'Css',
      'Javascript',
      
    ],
  },
  {
    id: 8,
    name: 'Panda Commerce',
    image_path: '/images/football.png',
    deployed_url: 'https://github.com/emon1995/panda-commerce',
    github_url: 'https://github.com/emon1995/panda-commerce',
    category: ['javascript'],
    description:
      'Panda Commerce Website e-commerce platform ',
    key_techs: ['Html', 'Css', 'JavaScript ', ],
  },
];
