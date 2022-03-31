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
  subTitle: "An experienced software engineer with over 10 years of experience designing, building and maintaining highly available scalable systems. I am a leader, a team player, and a passionate learner always looking to improve and learn more. I am currently looking to transition into the gaming industry.",
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button // TODO:
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
  subTitle: "Highely motivated and passionate software engineer with experience in all stages of development",
  skills: [
    emoji(
      "⚡ Design, develop, deploy, test and maintain all aspects of scalable and highly available systems"
    ),
    emoji("⚡"), // TODO:
    emoji(
      "⚡ "
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
      fontAwesomeClassname: "fab fa-code"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fab fa-dharmachakra"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fab fa-server"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fab fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
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
      schoolName: "The College of Management, Academic Studies",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2013 - 2016"
    },
    {
      schoolName: "IDF School of Computer Proffesions",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Software Developer",
      duration: "September 2011 - March 2012",
      desc: "Intense 6 months course covering everything from operating systems, algorithms, databases, frontend, backend and more"
    },
    {
      schoolName: "American International School Of Bucharest",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "High School student",
      duration: "2008 - 2010"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
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
      companylogo: require("./assets/images/facebookLogo.png"),
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
      companylogo: require("./assets/images/facebookLogo.png"),
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
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "December 2015 – August 2016",
      desc: "Developed from scratch and maintained an automation infrastructure using C# and Selenium",
      descBullets: [
        "Introduced and showcased the importance of the automation field to other team leaders and manager in the unit",
        "Trained QA testers in arts of writing code.",
        "Lead a Scrum team of 6 QA testers while working side by side with the development team."
      ]
    },
    {
      role: "Officer's Team Leader",
      company: "Israel Defense Forces",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "May 2015 – December 2015",
      desc: "Trained officer cadets in their final stages of officer's course",
      descBullets: [
        "Gave lectures, organized trips and exercises and conducted discussions about my own past experience and what their future roles as officers will hold"
      ]
    },
    {
      role: "Software Developer",
      company: "Israel Defense Forces",
      companylogo: require("./assets/images/facebookLogo.png"),
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
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
