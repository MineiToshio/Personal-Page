import { Strings } from '@/types/i18n';
import constants from '@/helpers/constants';

const strings: Strings = {
  BlogMeta: {
    minRead: 'min read',
    comments: 'comments',
  },
  BlogSidebar: {
    recentPosts: 'Recent Posts',
    categories: 'Categories',
    tags: 'Tags',
  },
  PostPreview: {
    keepReading: 'Keep Reading',
  },
  ContactForm: {
    email: 'Email',
    subject: 'Subject',
    name: 'Name',
  },
  AboutMe: {
    whoAmI: 'Who am I?',
    me: `I'm ${constants.name}, frontend developer, entrepreneur and blogger. I'm from Peru (GMT -5) and I love technology and I'm passionate about learning new things.`,
    technologiesIUsed: "Technologies I've used",
    footerTitle: 'Do you want to know more about me?',
    footerButton: 'Visit my LinkedIn',
  },
  Hero: {
    hello: 'Hello! My name is',
    im: "I'm",
    tagline: 'I love solving everyday problems using code.',
    viewMyWork: 'view my work',
    description:
      "I'm a software engineer specialized in creating digital experiences for the web who is passionate about using technology to improve people's lives",
  },
  Proyects: {
    title: 'Do you want to see more projects?',
    button: 'Visit my Github',
  },
  Layout: {
    description: `I'm ${constants.name}, frontend developer, entrepreneur and blogger. I love technology and I'm passionate about learning new things.`,
  },
  Portfolio: {
    all: 'All',
  },
  ProjectModal: {
    goToWeb: 'Go to Website',
  },
  Header: {
    home: 'home',
    aboutMe: 'about me',
    portfolio: 'portfolio',
    contact: 'contact',
  },
  Blog: {
    subtitle: "LET'S LEARN TOGETHER",
  },
  Index: {
    aboutMeTitle: 'About Me',
    aboutMeSubtitle: "I'M A FRONTEND DEVELOPER",
    parallax1Quote: 'The best way to predict the future is to implement it',
    parallax1Author: 'David Heinemeier - Creator of Ruby on Rails',
    portfolioTitle: 'Portfolio',
    portfolioSubtitle: "VIEW SOME OF THE PROJECTS I'VE WORKED ON",
    parallax2Quote:
      'One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.',
    parallax2Author: 'Elbert Hubbard - Writer',
    contactTitle: 'Contact',
    contactSubtitle: "DO YOU HAVE A PROJECT IDEA? LET'S WORK TOGETHER!",
  },
  Spinner: {
    loading: 'Loading',
  },
  BlogSocial: {
    like: 'Like',
    shareTwitter: 'Share on Twitter',
    shareFacebook: 'Share on Facebook',
  },
};

export default strings;
