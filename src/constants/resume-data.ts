import type { LucideIcon } from 'lucide-react';

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  duration: string;
  achievements: string[];
  skillsUsed?: string[];
}

export interface ProjectEntry {
  name: string;
  technologies: string[];
  descriptionPoints: string[];
  githubLink?: string;
  liveLink?: string;
  image: string;
  dataAiHint: string;
}

export interface EducationInstance {
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon?: LucideIcon | string }[]; // string for custom SVG path or simple text
}

export interface ContactLink {
  name: string;
  url: string;
  iconName: string; // To be mapped to LucideIcon component
}

export const resumeData = {
  name: "Siddhi Bhanushali",
  jobTitle: "Software Developer",
  profilePicture: "https://avatars.githubusercontent.com/u/69195262?v=4",
  profilePictureAiHint: "professional portrait",
  introduction:
    "A passionate and results-oriented Software Developer with expertise in building scalable web and mobile applications. Proven ability to integrate cutting-edge technologies and optimize system performance.",
  contact: {
    email: "siddhi.bhanushali@outlook.com",
    github: "https://github.com/siddhi-244",
    linkedin: "https://www.linkedin.com/in/siddhi-bhanushali/",
  },
  experience: [
    {
      company: "Sellergize Web Technology Services",
      role: "Developer",
      location: "Mumbai, India",
      duration: "June 2023 - July 2025",
      achievements: [
        "Created Crawlmate, an AI-powered web scraping and coupon extraction platform built on Python and Laravel, capable of processing website data from site-specific selectors, reducing manual effort and downsizing the team from 7 to 2 engineers.",
        "Engineered an OpenAI-based multi-prompt automation platform leveraging Python and prompt engineering to automate content workflows, reducing manual validation effort by nearly 40% while ensuring accurate store categorization.",
        "Integrated Google Pub/Sub with PHP and Google Cloud SDK to enable asynchronous communication between microservices, enhancing fault isolation and maintaining system resilience under load.",
        "Developed REST APIs in Go for browser-related services, improving request latency and simplifying feature rollouts through modular service design.",
        "Built a custom Android browser using Kotlin, Jetpack Compose, and Firefox Extensions, featuring bookmarks, tab groups, downloads, and shopping bag management for an enhanced user experience.",
        "Established bi-directional communication between native Android (Kotlin) and JavaScript extensions to enable real-time updates such as coupon application and adaptive theming."
      ],
      skillsUsed: ["Kotlin", "Java", "Python", "PHP", "Golang", "MySQL", "Android", "Jetpack Compose", "Room", "JavaScript", "Google Pub/Sub", "Laravel", "Bootstrap"],
    },
    {
      company: "Tala",
      role: "Software Engineering Intern",
      location: "Bengaluru, India",
      duration: "February 2023 - May 2023",
      achievements: [
        "Secured backend endpoints using Java and Dropwizard.",
        "Automated cron job deployments with AWS Lambda, improving uptime reliability and reducing manual intervention.",
        "Authored detailed architectural documentation with flow diagrams to support new engineer onboarding.",
        "Optimized Razorpay payment integration for smoother transaction processing and improved reliability.",
      ],
      skillsUsed: ["Java", "Dropwizard", "AWS Lambda", "JDBC", "PostgreSql"],
    },
  ],
  projects: [
    {
      name: "Calendar App",
      technologies: ["Java", "Swing", "Design Patterns"],
      descriptionPoints: [
        "Implemented a Java calendar application with GUI and CLI support, featuring a finite state machine–based parser for calendar and event commands.",
        "Integrated parser logic with backend scheduling and Swing UI to support event creation, editing (instance/series), copying, and querying."
      ],
      githubLink: "https://github.com/siddhi-244/calendar-app",
    },
    {
      name: "EduConnect",
      technologies: ["NextJs, Firebase, TypeScript"],
      descriptionPoints: [
        "Developed EduConnect, a real-time class scheduling web app using Next.js, TypeScript, and Firebase, enabling seamless interaction and role-based booking between students and teachers.",
        "Architected and integrated Firebase Database for dynamic slot management, ensuring instant updates, conflict prevention, and a responsive cross-platform user experience.",
        "Implemented role-based access control, allowing students to book slots with teachers and teachers to manage their availability, enhancing user experience and system efficiency.",
      ],
      githubLink: "https://github.com/siddhi-244/EduConnect",
      liveLink: "https://edu-connect-lac.vercel.app/",
      dataAiHint: "Calendly for Stduents and Teachers",
    },
    {
      name: "ExpenseVue",
      technologies: ["ReactJS"],
      descriptionPoints: [
        "Engineered a robust expense tracker enabling seamless expense addition and year-based filtering, improving categorization efficiency.",
        "Implemented visual chart representation for monthly expenses, enhancing data comprehension and visualization.",
      ],
      githubLink: "https://github.com/siddhi-244/ExpenseVue",
      liveLink: "https://siddhi-244.github.io/Expense-Tracker/",
      dataAiHint: "finance dashboard",
    },
    {
      name: "GitTrackr",
      technologies: ["JavaScript", "GitHub API"],
      descriptionPoints: [
        "Created a GitHub user tracker website for exploring and tracking users, accessing comprehensive stats.",
        "Designed a user-friendly interface for seamless navigation of GitHub profiles for detailed insights.",
      ],
      githubLink: "https://github.com/siddhi-244/GitTrackr",
      liveLink: "https://siddhi-244.github.io/FindMe/",
      dataAiHint: "code analytics",
    },
  ],
  education: [
    {
      institution: "Northeastern University",
      degree: "Master of Science (MS), Computer Science",
      duration: "September 2025 – May 2027",
      gpa: "4/4",
    },
    {
      institution: "University of Mumbai",
      degree: "Bachelor of Engineering (B.E), Computer Engineering",
      duration: "August 2019 – May 2023",
      gpa : "3.8/4"
    },
  ],
  technicalSkillsText: "Programming Languages: Kotlin, C++, Javascript, Typescript, Python, PHP, Java. Frameworks: Android, Room, Jetpack Compose, Flutter, Bootstrap, JQuery, Express, Dropwizard, SpringBoot, Hibernate, Reactjs, Nodejs, Laravel, Google Cloud Pub/Sub. Databases: MySQL, PostgreSQL, MongoDB, Firebase, SQLLite. Familiar: AWS, Redis, Django, Kafka. Tools: Intellij IDEA, Git, Docker, Postman, Visual Studio Code, Android Studio, CI/CD pipelines. Core Concepts: Object-Oriented Programming, Data Structures and Algorithms, Database Management Systems, Microservices, Low level design, REST APIs.",
  skills: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Kotlin" }, { name: "C++" }, { name: "JavaScript" }, { name: "TypeScript" },
        { name: "Python" }, { name: "PHP" }, { name: "Java" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Android" }, { name: "Room" }, { name: "Jetpack Compose" }, { name: "Flutter" },
        { name: "Bootstrap" }, { name: "jQuery" }, { name: "Express.js" }, { name: "Dropwizard" },
        { name: "Spring Boot" }, { name: "Hibernate" }, { name: "React.js" }, { name: "Node.js" },
        { name: "Laravel" }, { name: "Google Cloud Pub/Sub" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL" }, { name: "PostgreSQL" }, { name: "MongoDB" },
        { name: "Firebase" }, { name: "SQLite" }, { name: "NoSQL" }
      ],
    },
    {
      title: "Familiar With",
      skills: [
        { name: "AWS" }, { name: "Redis" }, { name: "Django" }, { name: "Kafka" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "IntelliJ IDEA" }, { name: "Git" }, { name: "Docker" }, { name: "Postman" },
        { name: "VS Code" }, { name: "Android Studio" }, { name: "CI/CD Pipelines" },
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "OOP" }, { name: "DSA" }, { name: "DBMS" },
        { name: "Microservices" }, { name: "Low-Level Design" }, { name: "REST APIs" },
      ],
    },
  ],
  achievements: [
    "Independently initiated and developed an internal data pipeline project in my second week at Sellergize Web Technology Services, powering data utilization for three key company initiatives and streamlining cross-project operations.",
    "Winner of Diversion2k22 and Diversion2k23.",
    "MLH Prep Fellow 2022.",
    "Among top mentors for OpenCode 2022 and Social Summer of Code'22.",
    "Among top 15 contributors  in Letsgrowmore summer of code which had more than 4000+ participants.",
    "Top Project Admin in Hack Club RAIT Summer of Code'22."
  ],
};

export type ResumeData = typeof resumeData;
