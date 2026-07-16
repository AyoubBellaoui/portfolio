export const profile = {
  name: "Ayoub Bellaoui",
  firstName: "Ayoub",
  lastName: "Bellaoui",
  initials: "AB",
  role: "Backend Web Developer",
  location: "Casablanca, Morocco",
  email: "ayoubbellaoui@yahoo.com",
  photo: "/images/profile.jpg",
  bio: "Backend-focused web developer with hands-on experience building server-side applications using Node.js, Express.js, and Laravel. Specialized in MySQL-based systems — API design, data modeling, and business logic — with working React fluency for real full-stack collaboration. I care about clean, maintainable code and shipping backend solutions that hold up.",
  resumeUrl: "/cv.pdf",
  roles: [
    "Backend Web Developer",
    "Laravel & Node.js",
    "REST API Builder",
    "Career-Changer",
  ],
} as const;

export const languages = [
  { name: "Amazigh", level: "Native" },
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Technical" },
  { name: "English", level: "Intermediate" },
] as const;

export const socials = [
  {
    name: "GitHub",
    handle: "AyoubBellaoui",
    href: "https://github.com/AyoubBellaoui",
    icon: "github",
  },
  {
    name: "LinkedIn",
    handle: "ayoub-bellaoui",
    href: "https://www.linkedin.com/in/ayoub-bellaoui-8a1522175",
    icon: "linkedin",
  },
  {
    name: "X",
    handle: "@mistercowboy70",
    href: "https://x.com/mistercowboy70",
    icon: "x",
  },
  {
    name: "Email",
    handle: "ayoubbellaoui@yahoo.com",
    href: "mailto:ayoubbellaoui@yahoo.com",
    icon: "mail",
  },
] as const;

export const stats = [
  { label: "Projects Shipped", value: "6" },
  { label: "Internships", value: "2" },
  { label: "Focus", value: "Backend-First" },
] as const;

export const services = [
  {
    title: "Full-Stack Web Applications",
    description: "Building complete web apps with React.js & Laravel.",
  },
  {
    title: "RESTful APIs & Server-Side Development",
    description: "Designing robust APIs and services with Node.js & Express.js.",
  },
  {
    title: "Responsive & Mobile-First Design",
    description: "Interfaces that feel native on every screen size.",
  },
  {
    title: "Landing Pages & WordPress",
    description: "Custom landing pages and WordPress builds tailored to the brief.",
  },
  {
    title: "Database Design & Management",
    description: "Structuring and managing data with MySQL, MariaDB & MSSQL.",
  },
  {
    title: "Performance Optimization",
    description: "Applying best practices to keep web apps fast and reliable.",
  },
] as const;

// Flat list for the scrolling marquee — grouped loosely so both rows read well.
export const skillsRowA = [
  "JavaScript",
  "PHP",
  "Laravel",
  "Node.js",
  "Express.js",
  "React.js",
  "React Native",
  "MySQL",
  "MariaDB",
  "MSSQL",
  "HTML5",
  "CSS3",
] as const;

export const skillsRowB = [
  "Git",
  "GitHub",
  "WordPress",
  "Bootstrap",
  "Bulma",
  "Figma",
  "UML",
  "MERISE",
  "XAMPP",
  "Laragon",
  "C",
  "Linux",
] as const;

export type JourneyItem = {
  period: string;
  title: string;
  place: string;
  description: string;
  current?: boolean;
};

export const journey: JourneyItem[] = [
  {
    period: "2017",
    title: "Baccalauréat, Life & Earth Sciences",
    place: "Lycée Abdelali Benchekroun, Larache",
    description: "Finished secondary school and started looking toward technical education.",
  },
  {
    period: "2018 – 2020",
    title: "Specialized Technician Diploma (TDI)",
    place: "Institut de Technologie Appliquée, Larache",
    description: "Trained in computer development fundamentals — the starting point for everything after.",
  },
  {
    period: "Sep – Dec 2021",
    title: "Web Developer Intern",
    place: "AMAL SOFT, Casablanca",
    description: "Built a sales and cash-management web app for a retail store with PHP & MySQL — later shipped as the Deluxe App.",
  },
  {
    period: "Apr – Jul 2022",
    title: "Web Developer Intern",
    place: "Royal Institute of Amazigh Culture, Rabat",
    description: "Designed the database schema and CRUD flows for a contract-management system in PHP & MySQL — later shipped as the Contract Manager App.",
  },
  {
    period: "Dec 2022 – Feb 2025",
    title: "Full-Time Driving Test Examiner",
    place: "NARSA, Rabat",
    description: "Stepped outside tech for a full-time role — time that sharpened the resolve to return to development for good.",
  },
  {
    period: "Since Nov 2025",
    title: "Professional Bachelor's, Web & Mobile Development",
    place: "IFIAG, Casablanca",
    description: "Back in the field full-time, formalizing years of hands-on backend work with a degree in web and mobile development.",
    current: true,
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  codeUrl: string;
  demoUrl?: string;
  image: string;
  builtAt?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ecommerce-landing-page",
    title: "E-commerce Landing Page",
    description:
      "A modern online shop with product pages, shopping cart, and responsive design.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    codeUrl: "https://github.com/AyoubBellaoui/Ziyachic",
    demoUrl: "https://cerulean-seahorse-b20076.netlify.app/",
    image: "/images/projects/ecommerce.png",
  },
  {
    slug: "clinic-pro",
    title: "Clinic Pro",
    description:
      "A full-stack application to manage a medical cabinet or private hospital, built with Laravel, MySQL, and Tailwind CSS.",
    tech: ["Laravel", "MySQL", "Tailwind CSS"],
    codeUrl: "https://github.com/AyoubBellaoui/clinique-medicale-app",
    image: "/images/projects/clinic-pro.png",
    featured: true,
  },
  {
    slug: "facebook-clone-app",
    title: "Facebook Clone App",
    description: "A clone of Facebook's core experience built with React 19 and Vite.",
    tech: ["React.js", "Vite"],
    codeUrl: "https://github.com/AyoubBellaoui/facebook-clone-app",
    image: "/images/projects/facebook-clone.png",
  },
  {
    slug: "student-app",
    title: "Student App",
    description: "A student management application built with Laravel and MySQL.",
    tech: ["Laravel", "MySQL"],
    codeUrl: "https://github.com/AyoubBellaoui/StudentProject",
    image: "/images/projects/student-app.png",
  },
  {
    slug: "deluxe-app",
    title: "Deluxe App",
    description:
      "A sales and cash management web application for a retail store, built with PHP8 & MySQL.",
    tech: ["PHP8", "MySQL"],
    codeUrl: "https://github.com/AyoubBellaoui/DELUXEApp",
    image: "/images/projects/deluxe-app.jpg",
    builtAt: "AMAL SOFT",
  },
  {
    slug: "contract-manager-app",
    title: "Contract Manager App",
    description: "A contract management web application built with PHP8 and MySQL.",
    tech: ["PHP8", "MySQL"],
    codeUrl: "https://github.com/AyoubBellaoui/Contratmanager",
    image: "/images/projects/contract-manager.jpg",
    builtAt: "Royal Institute of Amazigh Culture",
  },
];

export const nav = [
  { href: "#journey", label: "Journey" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
] as const;
