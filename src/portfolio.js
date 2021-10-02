/* eslint-disable prettier/prettier */
import myEnglishVerCV from './files/PDF/My_Eng_CV_2021_ver_Aug2021_job.pdf';
import udemyLogo from './images/logos/udemy_logo.png';
import ibmLogo from './images/logos/ibm_logo.jpg';
import adpLogo from './images/logos/adp_logo.png';
import deuseSprlLogo from './images/logos/deuse_sprl_logo.png';
import mssLogo from './images/logos/mss_logo.jpg';
// This flag 'SVG Icons' was all Downloaded on this dimension '512*512 pixel'
// From: https://iconarchive.com
// Exmple Spain Flag: https://iconarchive.com/show/flags-icons-by-wikipedia/ES-Spain-Flag-icon.html
import EnglandFlag from './images/svg_icons/england_flag_icon.svg';
import FranceFlag from './images/svg_icons/france_flag_icon.svg';
import GermanyFlag from './images/svg_icons/germany_flag_icon.svg';
import SpainFlag from './images/svg_icons/spain_flag_icon.svg';

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/ZhaniWalid',
  title: 'JS.'
};

let descPargraphe1 = 'I am a full-stack software developer engineer (Web/Mobile), I am 29 years old, ';
    descPargraphe1 += 'from Tunisia ';
let descPargraphe2 = ', I have a two years and half (2.5 years) of professional experience. ';
    descPargraphe2 += 'I use several technologies like Java/JEE, JavaScript/TypeScript (ReactJS, ExtJS), ';
    descPargraphe2 += 'Python/Django, C#/Asp.Net, JSP, Android, Ionic, Unity, Git, RESTful Web API(s), '; 
    descPargraphe2 += 'SQL, NoSql (Firebase).'; 

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Walid Zhani',
  role: 'Full Stack Engineer',
  description: {
    descriptionPartOne: descPargraphe1,
    descriptionPartTwo: descPargraphe2
  },
  resume: myEnglishVerCV,
  social: {
    linkedin: 'https://www.linkedin.com/in/walid-zhani-54705612a/',
    github: 'https://github.com/ZhaniWalid',
    twitter: 'https://twitter.com/walidzhani',
    facebook: 'https://www.facebook.com/edzio.auditore1'
  }
};

const additionalInformations = {
  // 'additionalInformations' can be added an removed
  // if there are no additionalInformations, 'Additional Informations section' won't show up
  fullName: 'Walid Zhani',
  email: 'walid.zhani@esprit.tn',
  country: 'Tunisia',
  voiceVideoContact: {
    phoneNumber: '+21654559441',
    whatsAppNumber: '+21654559441',
    skypeId: 'wazhani'
  },
  dateOfBirth: '03/08/1992',
  state: 'Single',
  driverLicense: 'Class B'
};

const projects = [
  // 'projects' can be added an removed
  // if there are no projects, 'Projects section' won't show up
  {
    name: 'Burger Builder',
    description:
      'ReactJS app built while completing " React - The Complete Guide (incl Hooks, React Router, Redux) " course by "Maximilian Schwarzmüller" on Udemy.',
    stack: ['JavaScript', 'CSS', 'HTML', 'React'],
    sourceCode: 'https://github.com/ZhaniWalid/reactjs_burger_builder_app_udemy',
    livePreview: 'https://reactjs-burger-app-udemy.firebaseapp.com/'
  },
  {
    name: 'Marvel Characters',
    description:
      'Marvel Characters Web App, created with ReactJS for the Front-End and using Firebase as Backend-as-a-Service (BaaS).',
    stack: ['TypeScript', 'CSS', 'HTML', 'React'],
    sourceCode: 'https://github.com/ZhaniWalid/reactjs_marvel_characters_app_job',
    livePreview: 'https://reactjs-marvel-chrctrs-app-job.firebaseapp.com/'
  },
  {
    name: 'Biorhythm Calculator',
    description:
      'A sample " Biorhythm Calculator " app, using React #16 with Ionic #5.',
    stack: ['JavaScript', 'CSS', 'HTML', 'React', 'Ionic'],
    sourceCode: 'https://github.com/ZhaniWalid/react_ionic5_biorhythm_calculator_app_udemy',
    livePreview: 'https://biorhythms-react-ionic.netlify.app/'
  }
];

const skills = [
  // 'skills' can be added or removed
  // if there are no skills, 'Skills section' won't show up
  'HTML',
  'CSS',
  'JavaScript | TypeScript',
  'ReactJS | ExtJS',
  'Ionic 5',
  'Twitter Bootstrap',
  'Git (Github | Bitbucket)',
  'CI | CD',
  'Java | C# | Python',
  'Android | Unity 5',
  'ASP DotNet | Django',
  'JSF | JavaFx | JEE',
  'SQL (MySQL | Oracle DataBase | SQL Server)',
  'NoSql (Firebase)',
  'SQL Server Data Tools | Power BI',
  'Microsoft Office Tools',
  'WSDL | SOAP | REST'
];

const languages = [
  // 'languages' can be added an removed
  // if there are no languages, 'Languages section' won't show up
  {
    langName: 'English',
    langLvlRate: 'B2',
    langLvlDesc: 'Upper intermediate', // Independent user
    langFlagTxt: 'England Flag', 
    langFlagIcon: EnglandFlag
  },
  {
    langName: 'French',
    langLvlRate: 'B2',
    langLvlDesc: 'Upper intermediate', // Independent user
    langFlagTxt: 'France Flag',
    langFlagIcon: FranceFlag
  },
  {
    langName: 'German',
    langLvlRate: 'A2',
    langLvlDesc: 'Learning in progress', // Basic user
    langFlagTxt: 'Germany Flag',
    langFlagIcon: GermanyFlag
  },
  {
    langName: 'Spanish',
    langLvlRate: 'A1',
    langLvlDesc: 'Beginner', // Very basic user
    langFlagTxt: 'Spain Flag',
    langFlagIcon: SpainFlag
  }
];


let descRoleAdp1 = 'I worked as a Full-Stack JEE Web developer, using Java (Back-End) / ExtJS + JSP (Front-End) ';
    descRoleAdp1 += 'with a team using Agile SCRUM methodology, Bitbucket for Version-Control & Jenkins for CI / CD.';
const descRoleAdp2 = 'My role was to fix bugs / create new features, in existing Web applications.';
// eslint-disable-next-line prefer-template
// console.log('descRoleAdp:\n ', descRoleAdp1+ '\n'+ descRoleAdp2);

let descRoleMss1 = 'Development of a Mobile application on Android 4.4.2 (Front-End) for the consultation of '; 
    descRoleMss1 += 'banking transactions via TPE(s), and to follow the statistics via the Business intelligence (BI).';
let descRoleMss2 = 'Development of an ASP.NET Web API Application (Back-End) which includes '; 
    descRoleMss2 += 'RESTful Web Services that will be consumable via the Android client.';
// eslint-disable-next-line prefer-template
// console.log('descRoleMss:\n ', descRoleMss1+ '\n'+ descRoleMss2);

const professionalExperiences = [
  // 'professionalExperiences' can be added or removed
  // if there are no professionalExperiences, 'Professional Experiences' section won't show up
  {
    period: '01/04/2019 - 31/12/2020',
    companyName: 'ADP (Automatic Data Processing)',
    companyLogo: adpLogo,
    linkToLinkedInCompany: 'https://www.linkedin.com/company/adp/',
    role: {
      mainRole: 'Associate Application Developer Engineer',
      detailedRole: 'Web Developer: JavaEE / ExtJS'
    },
    description: {
      descriptionPartOne: descRoleAdp1,
      descriptionPartTwo: descRoleAdp2
    }
  },
  {
    period: '01/10/2018 - 31/12/2018',
    companyName: 'DEUSE SPRL',
    companyLogo: deuseSprlLogo,
    linkToLinkedInCompany: 'https://www.linkedin.com/company/deuse-sprl/',
    role: {
      mainRole: 'Developer Engineer',
      detailedRole: 'Web Developer: Python (Django)'
    },
    description: {
      descriptionPartOne: 'I worked as a Web developer using Python (with Django Framework).',
      descriptionPartTwo: null
    }
  },
  {
    period: '05/02/2018 - 05/08/2018',
    companyName: 'MSS (Monetics Services Solutions)',
    companyLogo: mssLogo,
    linkToLinkedInCompany: 'https://www.linkedin.com/company/monetics-services-solutions/',
    role: {
      mainRole: ' Internship Project Engineer',
      detailedRole: 'Full-Stack Android Developer: cSharp (.Net) / Java (Android)'
    },
    description: {
      descriptionPartOne: descRoleMss1,
      descriptionPartTwo: descRoleMss2
    }
  }
];

const onlineCertifications = [
  // 'onlineCertifications' can be added or removed
  // if there are no onlineCertifications, 'Online Certifications' section won't show up
  {
    logoCourseProvider: udemyLogo,
    issuedBy: 'Udemy',
    nameCertif: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
    linkToCertif: 'https://www.udemy.com/certificate/UC-252c97fc-c6ff-438c-b584-82718fab17d4/',
    issuedOn: '07/12/2020'
  },
  {
    logoCourseProvider: udemyLogo,
    issuedBy: 'Udemy',
    nameCertif: 'Ionic React: Cross-Platform Mobile Development with Ionic 5',
    linkToCertif: 'https://www.udemy.com/certificate/UC-4a07ab41-049d-4711-b3a7-98e24216fe8b/',
    issuedOn: '25/12/2020'
  },
  {
    logoCourseProvider: udemyLogo,
    issuedBy: 'Udemy',
    nameCertif: 'The Complete Oracle SQL Certification Course',
    linkToCertif: 'https://www.udemy.com/certificate/UC-0f7ea810-4819-42cd-8b5e-601033484e49/',
    issuedOn: '23/10/2020'
  },
  {
    logoCourseProvider: ibmLogo,
    issuedBy: 'IBM (IBM Skills Academy)',
    nameCertif: 'Big Data Developer - Explorer Award for Students (2016)',
    linkToCertif: 'https://www.credly.com/badges/5cf0e375-eb88-44a1-ac2e-5d7ab5bf40ec/linked_in_profile',
    issuedOn: '24/01/2018'
  }
];

const contact = {
  // 'email' is optional - if left empty Contact section won't show up
  email: 'walid.zhani@esprit.tn'
};

export { 
  header,
  about,
  additionalInformations,
  projects,
  skills,
  languages,
  professionalExperiences, 
  onlineCertifications, 
  contact
};