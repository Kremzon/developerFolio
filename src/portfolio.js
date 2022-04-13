/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nadav Kremer",
  title: "Hi all, I'm Nadav",
  subTitle:
    "A senior software engineer with over 10 years of experience. I am a leader, a team player, and a passionate learner always looking to conquer the next challenge and learn more. I am highly motivated to bring my skill set into the gaming industry. Having done some independent learning and a few projects, I am looking for a position as a game developer and looking to relocate to the UK.",
  resumeLink:
    "https://drive.google.com/file/d/1Nssv1dC1b2UhlFhEpoC0ARVkzTb_zUlY/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/nadav-kremer/",
  gmail: "nadavbeker@gmail.com",
  github: "https://github.com/Kremzon",
  medium: "https://medium.com/@nadavbeker",
  facebook: "https://www.facebook.com/nadavkr/",
  stackoverflow: "https://stackoverflow.com/users/3600000/kremzon",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Highely motivated and passionate software engineer with experience in all stages of development",
  skills: [
    emoji(
      "⚡ Develop, deploy, test and maintain all aspects of scalable and highly available systems"
    ),
    emoji(
      "⚡ Develop games in my free time utilizing my many skills from years of coding"
    ),
    emoji(
      "⚡ Design and define solutions for complex architecture challenges and bring them to life"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "GameDev.tv",
      logo: require("./assets/images/gamedevtv.png"),
      subHeader: "Multiple Unity courses",
      duration: "2022"
    },
    {
      schoolName: "The College of Management, Academic Studies",
      logo: require("./assets/images/collegeOfManagement.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2013 - 2016"
    },
    {
      schoolName: "IDF School of Computer Professions",
      logo: require("./assets/images/IDF.svg"),
      subHeader: "Software Developer",
      duration: "September 2011 - March 2012",
      desc: "Intense 6 months course covering everything from operating systems, algorithms, databases, frontend, backend and more"
    },
    {
      schoolName: "American International School Of Bucharest",
      logo: require("./assets/images/AISB.jpeg"),
      subHeader: "High School student",
      duration: "2008 - 2010"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "100%"
    },
    {
      Stack: "Game Development",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "OptimalQ",
      companylogo: require("./assets/images/OptimalQ.jpg"),
      date: "June 2018 – Present",
      desc: "As the company's first employee I am responsible for all stages of the development lifecycle.",
      descBullets: [
        "Designing, developing, deploying and maintaining all aspects of scalable and highly available systems",
        "Collaborating with our data science division on designing and implementing our data processing pipeline while also developing production grade ML infrastructure with automatic improvement processes.",
        "Working in microservice architecture using python, utilizing Apache Kafka, MySQL, Redis and MongoDB (and more) running on Kubernetes on the cloud."
      ]
    },
    {
      role: "Team Leader and Project Manager",
      company: "Israel Defense Forces",
      companylogo: require("./assets/images/IDF.svg"),
      date: "August 2016 – May 2018",
      desc: "Managing the maintenance of a legacy multi-server, multi-client system and developing new features",
      descBullets: [
        "Balancing between the needs of managers, clients, users and customer support in a limited resources environment.",
        "Leading a Scrum team of 3 developers of various levels"
      ]
    },
    {
      role: "Automation Team Leader",
      company: "Israel Defense Forces",
      companylogo: require("./assets/images/IDF.svg"),
      date: "December 2015 – August 2016",
      desc: "Developed from scratch and maintained an automation infrastructure using C# and Selenium",
      descBullets: [
        "Introduced and showcased the importance of the automation field to other team leaders and manager in the unit",
        "Trained QA testers in the arts of writing code.",
        "Lead a Scrum team of 6 QA testers while working side by side with the development team."
      ]
    },
    {
      role: "Officer's Team Leader",
      company: "Israel Defense Forces",
      companylogo: require("./assets/images/IDF.svg"),
      date: "May 2015 – December 2015",
      desc: "Trained officer cadets in their final stages of officer's course",
      descBullets: [
        "Gave lectures, organized trips and exercises and conducted discussions about my own past experience and what their future roles as officers will hold"
      ]
    },
    {
      role: "Software Developer",
      company: "Israel Defense Forces",
      companylogo: require("./assets/images/IDF.svg"),
      date: "March 2012 – November 2014",
      desc: "Designed and developed from scratch a cryptographic management information system",
      descBullets: [
        "Involved in all stages of the development lifecycle. Led multiple projects within the team",
        "Working as part of a scrum team of 5 developers",
        "Used technologies such as C#, ASP.NET MVC, JQuery, MS SQL and more"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Game Development Projects",
  subtitle: "Games I've made as part of my journy to become a game developer",
  projects: [
    {
      image: require("./assets/images/CovidFighter.png"),
      projectName: "Virus Fighter",
      projectDesc:
        "Virus themed space shooter made with Unity. Code and design by me",
      footerLink: [
        {
          name: "Play On Android",
          url: "https://play.google.com/store/apps/details?id=com.BekerStudios.CovidFighter"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/LegoBrickBreaker.png"),
      projectName: "Lego Brick Breaker",
      projectDesc:
        "Lego Brick Breaker game made with Unity. Code and design by me",
      footerLink: [
        {
          name: "Play in browser",
          url: "https://sharemygame.com/@Kremzon/lego-brick-breaker"
        }
      ]
    },
    {
      image: require("./assets/images/SaveTheForest.png"),
      projectName: "Save The Forest",
      projectDesc:
        "A 3D adventure game about saving the forest using various animal forms. Developed as part of a team in Global Game Jam 2022",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://globalgamejam.org/2022/games/save-forest-2"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@nadavbeker/how-i-used-scriptable-objects-to-build-a-powerup-system-39ad82628f6a",
      title: "How I used scriptable objects to build a powerup system",
      description:
        "How to use Unity's ScriptableObject, and how I used them to make a powerup system for my space shooter game"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open for opportunities. Looking to rellocate to the UK",
  email_address: "nadavbeker@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
