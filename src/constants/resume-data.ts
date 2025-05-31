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
      role: "Software Developer",
      location: "Mumbai, India",
      duration: "June 2023 - Present",
      achievements: [
        "Integrated Google Pub/Sub, streamlining message flow and reducing response delays by 15%.",
        "Developed RESTful APIs for browser, optimizing response times by 12% and reducing QA-related API issues by 20%.",
        "Enhanced internal workflows by introducing an OpenAI-based API service capable of dynamic multi-prompt processing, reducing manual effort by 30%.",
        "Implemented a comprehensive error and exception handling framework, reducing debugging time by 25% and decreasing cycle time by 15%.",
        "Contributed to development of a feature-rich Android browser using Firefox Android Components, Jetpack Compose, and Room.",
        "Enabled seamless communication between native Android code and JavaScript-based browser extensions.",
        "Integrated Room database, reducing data access latency by 25% and improving app performance.",
        "Architected and deployed a centralized data pipeline and API gateway using PHP and MySQL, enhancing cross-project data sharing and improving processing speed by 30%.",
        "Built an intuitive admin panel (PHP, MySQL) for internal use, streamlining data management and reducing administrative task time by 18%.",
      ],
      skillsUsed: ["Java", "PHP", "MySQL", "Android", "Kotlin", "Flutter", "AWS", "Jetpack Compose", "REST APIs", "JavaScript", "Room", "Google Pub/Sub"],
    },
    {
      company: "Tala",
      role: "Software Engineering Intern",
      location: "Remote, India",
      duration: "February 2023 - May 2023",
      achievements: [
        "Secured critical backend endpoints using Java and Dropwizard, reducing system vulnerabilities by 18%.",
        "Contributed to the deployment of secure cron job endpoints via AWS, improving scalability and resilience.",
        "Analyzed and documented the application’s architecture, creating comprehensive flow diagrams that reduced onboarding time for new team members by 12%.",
        "Optimized Razorpay API integration, reducing transaction errors by 14% and improving transaction processing speed by 22%.",
      ],
      skillsUsed: ["Java", "Dropwizard", "JDBC", "PostgreSQL", "AWS", "REST APIs", "JavaScript", "Jenkins"],
    },
  ],
  projects: [
    {
      name: "ExpenseVue",
      technologies: ["ReactJS"],
      descriptionPoints: [
        "Engineered a robust expense tracker enabling seamless expense addition and year-based filtering, improving categorization efficiency by 40%.",
        "Implemented visual chart representation for monthly expenses, enhancing data comprehension and visualization.",
      ],
      githubLink: "https://github.com/siddhi-244/ExpenseVue", // Example, replace if actual exists
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
      githubLink: "https://github.com/siddhi-244/GitTrackr", // Example, replace if actual exists
      liveLink: "https://siddhi-244.github.io/FindMe/",
      dataAiHint: "code analytics",
    },
  ],
  education: [
    // {
    //   institution: "Northeastern University",
    //   degree: "Master of Science (MS), Computer Science",
    //   duration: "September 2025 – May 2027",
    //   // gpa: "3.8/4",
    // },
    {
      institution: "University of Mumbai",
      degree: "Bachelor of Engineering (B.E), Computer Engineering",
      duration: "August 2019 – May 2023",
      gpa : "3.8/4"
    },
  ],
  technicalSkillsText: "Programming Languages: Kotlin, C++, Javascript, Typescript, Python, PHP, HTML, CSS, Java. Frameworks: Android, Room, Jetpack Compose, Flutter, Bootstrap, JQuery, Express, Dropwizard, SpringBoot, Hibernate, Reactjs, Nodejs, Laravel, Google Cloud Pub/Sub. Databases: MySQL, PostgreSQL, MongoDB, Firebase, SQLLite. Familiar: AWS, Redis, Django, Kafka. Tools: Intellij IDEA, Git, Docker, Postman, Visual Studio Code, Android Studio, CI/CD pipelines. Core Concepts: Object-Oriented Programming, Data Structures and Algorithms, Database Management Systems, Microservices, Low level design, REST APIs.",
  skills: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Kotlin" }, { name: "C++" }, { name: "JavaScript" }, { name: "TypeScript" },
        { name: "Python" }, { name: "PHP" }, { name: "HTML" }, { name: "CSS" }, { name: "Java" },
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
        { name: "Firebase" }, { name: "SQLite" },
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
