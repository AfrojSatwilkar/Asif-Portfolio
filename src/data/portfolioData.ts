// src/data/portfolioData.ts

// --- INTERFACES ---
export interface ProfileData {
  name: string;
  helloTag: string;
  welcomeTag: string;
  title1: string;
  title2: string;
  about: string;
  about2: string;
  profileIconUrl: string; // Path to profile image
  logoUrl: string;
  // New fields for detailed modal
  detailedIntro?: string;
  codingJourney?: string;
  achievements?: string[];
  motivation?: string;
  philosophy?: string;
  passionsOutsideCode?: string[];
  email?: string; // Added email to profileData
  phone?: string; // Optional phone
  location?: string; // Optional location
  openTo?: { text: string; icon?: string }[]; // For contact section points
  starAwardDetails?: {
    imageUrl: string;
    title?: string;
    description?: string;
  };
  skillSet?: {
    name: string;
    level: number; // Percentage 0-100
    color?: string; // Optional: for skill bar color e.g., 'bg-sky-500'
  }[];
}

export interface Service {
  title: string;
  iconUrl: string;
}

export interface Technology {
  name: string;
  iconUrl: string;
}

export interface ExperiencePoint {
  companyName: string;
  title: string;
  iconUrl: string;
  iconBg: string; // Background color for the icon container
  date: string;
  points: string[];
  logoUrl: string;
}

export interface EducationEntry {
  title: string;
  collegeName: string;
  iconUrl: string;
  iconBg: string;
  date: string;
  branch: string;
  percentage: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
}

export interface ProjectTag { // Renamed from Technology for project-specific tags
  name: string;
  color?: string; // Optional color, maps to your Dart color string
}

export interface Project {
  id: string; // Unique ID for URL routing
  title: string; // Was 'name' in your Dart structure
  description: string; // Full description
  shortDescription?: string; // For project listing cards
  category?: string; // e.g., 'Mobile App', 'Web Application'
  tags: ProjectTag[]; // Was 'tags' with name and color
  imageUrl: string; // Main thumbnail for project list (was first of imageList or separate)
  galleryImages?: ProjectImage[]; // Was 'imageList'
  sourceCodeLink?: string; // Was 'sourceCodeLink'
  liveLink?: string; // Add if available
  // Detailed Page Content from previous structure
  introduction?: string; // New field
  problemStatement?: string;
  strugglesAndSolutions?: string;
  designThinking?: string;
  approach?: string;
  developmentJourney?: string; // New field
  conclusion?: string; // New field
  impact?: string; // New field
  technologiesUsed?: string[]; // Can be derived from tags or be a separate list
}

export interface SocialMediaLink {
  name: string;
  iconUrl: string; // Path to icon (lucide-react names can be used later if preferred)
  url: string; // Was 'sourceLink'
}

export interface Experience {
    title: string;
    companyName: string;
    date: string;
    points: string[];
    logoUrl: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl: string;
}

export interface OpenToItem {
    text: string;
    icon?: string;
}

// --- DATA ---

export const profileData: ProfileData = {
  name: "I'm Afroj  Satwilkar,",
  helloTag: "Hi there,",
  welcomeTag: "Welcome to My Portfolio",
  title1: "Full Stack Developer",
  title2: "Web Developer",
  about: "Full Stack Developer with strong backend expertise and extensive experience in Laravel microservices architecture, Core PHP, SQL database management, and API development. Specialized in building scalable, secure, and high-performance backend systems while also skilled in frontend technologies like HTML, CSS, JavaScript, and jQuery to deliver fully integrated web solutions.Recognized with Tech Innovation and multiple Star Performer Awards for creating innovative, reliable, and efficient applications. Proficient in VAPT security practices, version control (Git), and performance optimization. Passionate about emerging technologies and eager to contribute to impact-driven, growth-focused projects.",
  about2: "Experienced in managing SQL databases, enhancing security through Vulnerability Assessment and Penetration Testing (VAPT), and maintaining code integrity with version control systems. Passionate about emerging technologies and dedicated to delivering high-quality, efficient solutions. Seeking new challenges to leverage my skills in full-stack development and contribute to innovative projects.",
  profileIconUrl: "/images/profile.jpg", // PLEASE REPLACE THIS IMAGE
  logoUrl: "/images/webLogo.svg",      // PLEASE REPLACE THIS IMAGE
  email: "afrozsatvilkar2014@gmail.com",
  phone: "(+91) 8766846428,",
  location: "Ratnagiri, Maharashtra – 415801",

  detailedIntro: "Award-winning Full Stack Developer with extensive experience in web development, specializing in HTML, CSS, JavaScript, jQuery, Core PHP, and Laravel. Adept at building scalable, secure, and responsive web applications with expertise in SQL database management, VAPT security practices, and version control (Git).Honored with multiple Tech Innovation and Star Performer Awards for delivering innovative, high-impact solutions. Passionate about emerging technologies, performance optimization, and crafting user-centric digital experiences. Eager to contribute to cutting-edge, growth-driven projects.",
  codingJourney: "My journey in tech began with a curiosity for how websites were built, which quickly evolved into a deep-seated passion for full-stack development. Starting with the fundamentals of HTML, CSS, and JavaScript, I expanded my knowledge to include back-end technologies like PHP and Laravel, as well as database management with MySQL. This holistic understanding of web development allows me to approach projects with a comprehensive perspective, ensuring seamless integration between the front-end and back-end. Each project has been an opportunity to learn, grow, and refine my skills, and I am excited to continue this journey of innovation and problem-solving.",
  achievements: [
    "Star Award: Successfully develop multiple application and completed in time.",
    "Fast track promotion: Engineering officer to software engineering manager.",
    "Star Award: Energetic and enthusiastic about work, with a proven track record of success on multiple projects."
  ],
  motivation: "I am driven by the challenge of turning complex problems into simple, elegant, and efficient solutions. The ever-evolving nature of technology inspires me to continuously learn and adapt, and I am motivated by the opportunity to contribute to projects that have a meaningful impact. Collaborating with talented teams and leveraging my skills to build high-quality applications is what fuels my passion for full-stack development.",
  philosophy: "I believe in a user-centric approach to development, where the primary goal is to create intuitive and engaging experiences. Writing clean, maintainable, and well-documented code is a cornerstone of my practice, as it ensures the longevity and scalability of the applications I build. I am a strong advocate for best practices in security and performance, and I am committed to delivering solutions that are both robust and reliable.",
  passionsOutsideCode: [
    "Exploring new technologies and contributing to open-source projects.",
    "Staying updated with the latest industry trends and best practices.",
    "Engaging in online courses and workshops to expand my skill set."
  ],
  openTo: [
    { text: "New Project Collaborations", icon: "Briefcase" },
    { text: "Freelance Opportunities", icon: "DollarSign" },
    { text: "Full-Stack Development Roles", icon: "Code" },
    { text: "Tech Brainstorming", icon: "MessageSquare" }
  ],
  starAwardDetails: {
    imageUrl: "/images/star_award.jpg", // <<-- IMPORTANT: REPLACE THIS PATH
    title: "Star Award",
    description: "Recognized for successfully developing multiple applications and completing them on time, demonstrating energy and enthusiasm for work with a proven track record of success on multiple projects."
  },
  skillSet: [
    { name: "HTML", level: 95, color: "bg-orange-500" },
    { name: "CSS", level: 95, color: "bg-blue-500" },
    { name: "JavaScript", level: 90, color: "bg-yellow-500" },
    { name: "jQuery", level: 85, color: "bg-blue-400" },
    { name: "PHP", level: 90, color: "bg-indigo-500" },
    { name: "Laravel", level: 90, color: "bg-red-500" },
    { name: "Java", level: 80, color: "bg-red-600" },
    { name: "Spring Boot", level: 80, color: "bg-green-600" },
    { name: "MySQL", level: 90, color: "bg-blue-600" },
    { name: "AWS", level: 75, color: "bg-yellow-600" },
  ]
};

export const services: Service[] = [
  { title: "Full Stack Developer", iconUrl: "/images/web.png" },       // YOU MUST PROVIDE THESE IMAGES
  { title: "Backend Developer", iconUrl: "/images/backend.png" },// YOU MUST PROVIDE THESE IMAGES
];

export const technologies: Technology[] = [
  { name: "HTML", iconUrl: "/images/tech/html.svg" },
  { name: "CSS", iconUrl: "/images/tech/css.svg" },
  { name: "JavaScript", iconUrl: "/images/tech/js.svg" },
  { name: "jQuery", iconUrl: "/images/jquery-logo.svg" }, // Needs new icon
  { name: "PHP", iconUrl: "/images/php-logo.svg" }, // Needs new icon
  { name: "Laravel", iconUrl: "/images/laravel-logo.svg" }, // Needs new icon
  { name: "Java", iconUrl: "/images/java-logo.svg" }, // Needs new icon
  { name: "Spring Boot", iconUrl: "/images/spring-logo.svg" }, // Needs new icon
  { name: "MySQL", iconUrl: "/images/tech/sql.png" }, // Reusing sql icon
  { name: "AWS", iconUrl: "/images/aws-logo.svg" }, // Needs new icon
  { name: "Git", iconUrl: "/images/tech/git.png" },
];

export const experiences: Experience[] = [
    {
        title: "Full Stack Web Developer (Senior Manager - Engineering)",
        companyName: "AU Small Finance Bank",
        date: "April 2022 - Present",
        points: [
            "Collaborated with cross-functional teams to gather and analyze project requirements, ensuring alignment and comprehensive understanding.",
            "Designed and developed responsive web applications using HTML, CSS, JavaScript, jQuery, and other web technologies.",
            "Managed SQL databases (e.g., MySQL) for efficient data storage and retrieval.",
            "Maintained code integrity and managed repositories using Git.",
            "Enhanced system and application security by addressing Vulnerability Assessment and Penetration Testing (VAPT) issues.",
            "Developed and integrated APIs for seamless data exchange between web services.",
            "Built and maintained web applications using PHP, Laravel, and JavaScript, adhering to best practices and coding standards.",
            "Provided recommendations on implementing new tools and practices by staying updated with industry trends and emerging technologies."
        ],
        logoUrl: "/images/logos/ausmall.png"
    },
    {
        title: "Intern",
        companyName: "BridgeLabz",
        date: "Nov 2021 – April 2022",
        points: [
            "Proficient in front-end and back-end web development.",
            "Developed responsive web applications with a focus on user-friendly interfaces.",
            "Experienced in SQL database management.",
            "Skilled in Git for version control and collaboration.",
            "Hands-on experience with testing, debugging, and API integration.",
            "Optimized web performance to improve page load times and user experience.",
            "Acquired valuable skills in both front-end and back-end web development.",
            "Honed problem-solving abilities and gained practical experience in creating user-friendly and efficient web applications."
        ],
        logoUrl: "/images/logos/bridgelabz.png"
    },
];

export interface Education {
  title: string;
  collegeName: string;
  date: string;
  branch?: string;
  logoUrl?: string;
}

export const education: Education[] = [
    {
        title: 'Master of Computer Applications (MCA)',
        collegeName: 'University of Mumbai',
        date: '2020 - 2022',
        branch: 'Computer Science',
        logoUrl: '/images/education/mumbai-university.png',
    },
    {
        title: 'Bachelor of Science (BSc)',
        collegeName: 'University of Mumbai',
        date: '2017 - 2020',
        branch: 'Information Technology',
        logoUrl: '/images/education/mumbai-university.png',
    },
    {
        title: 'Higher Secondary Certificate (HSC)',
        collegeName: 'S.P. College, Ratnagiri',
        date: '2015 - 2017',
        branch: 'Science',
        logoUrl: '/images/education/sp-college.png',
    }
];

export const projects: Project[] = [
  {
    id: "lapdilite",
    title: "LapDilite",
    shortDescription: "A web application for loan creation and disbursement with approval stages.",
    description: "Developed a web application named LapDilite using Core PHP, JavaScript, HTML, and CSS. The project included various approval stages, document uploads, and a maker-checker process for loan creation and disbursement. Emphasized security and VAPT (Vulnerability Assessment and Penetration Testing) concerns while ensuring a user-friendly interface.",
    category: "Web Application",
    tags: [
        { name: "Core PHP", color: "blue-text-gradient" },
        { name: "JavaScript", color: "green-text-gradient" },
        { name: "HTML", color: "pink-text-gradient" },
        { name: "CSS", color: "orange-text-gradient" },
    ],
    imageUrl: "/images/projects/lapdilite.png", // Provide image
    technologiesUsed: ["Core PHP", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "razorpay-integration",
    title: "Razorpay Payment Gateway Integration",
    shortDescription: "Integrated Razorpay to process login fees via payment links.",
    description: "Integrated the Razorpay payment gateway to handle the processing of login fees from customers via payment links, streamlining the payment process for users.",
    category: "Payment Integration",
    tags: [
        { name: "Razorpay API", color: "blue-text-gradient" },
        { name: "PHP", color: "green-text-gradient" },
    ],
    imageUrl: "/images/projects/razorpay.png", // Provide image
    technologiesUsed: ["Razorpay API", "PHP"],
  },
  {
    id: "ca-portal",
    title: "CA Portal for VKYC",
    shortDescription: "A web application for verifying customer Video Know Your Customer (VKYC).",
    description: "Develop a robust and user-friendly web application for verifying customer VKYC (Video Know Your Customer), utilizing Laravel, JavaScript, HTML, and CSS. Created the CA Portal, a web-based platform designed to streamline the VKYC process. The application allows for the approval and rejection of customers' video KYC submissions efficiently.",
    category: "Web Application",
    tags: [
        { name: "Laravel", color: "blue-text-gradient" },
        { name: "JavaScript", color: "green-text-gradient" },
        { name: "HTML", color: "pink-text-gradient" },
        { name: "CSS", color: "orange-text-gradient" },
    ],
    imageUrl: "/images/projects/ca-portal.png", // Provide image
    technologiesUsed: ["Laravel", "JavaScript", "HTML", "CSS"],
  },
  
  {
    id: "tura-portal",
    title: "Tura Municipal Board",
    description: "The Tura Municipal Board website is a government portal developed using Flutter, designed to streamline form submissions and approvals. The platform features a multi-step approval system where user-submitted forms undergo two rounds of validation before final approval. If a payment is required, users can securely complete transactions via the integrated SBI ePay gateway before printing the approved form. The website enhances administrative efficiency by automating workflows and providing a user-friendly interface for citizens and government officials.",
    shortDescription: "Flutter-based government portal for Tura Municipal Board with form submission, multi-level approval, and SBI ePay integration.",
    category: "Web Application",
    tags: [
        { name: "Laravel", color: "blue-text-gradient" },
        { name: "Api", color: "green-text-gradient" },
        { name: "Sbi payment gateway", color: "pink-text-gradient" },
        
    ],
    imageUrl: "/images/tura_login.PNG",// Provide image
    liveLink: "https://turamunicipalboard.com/home",
    technologiesUsed: ["Laravel", "Api", "Sbi payment gateway"],
  },
 
];

export const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "LinkedIn",
    iconUrl: "/images/social/linkedin.svg", // Provide icon
    url: "https://www.linkedin.com/in/afroj-satwilkar-7aaa20193/",
  },
  {
    name: "GitHub",
    iconUrl: "/images/social/github.svg", // Provide icon
    url: "https://github.com/AfrojSatwilkar", // Assuming username, please verify
  },
  {
    name: "Instagram",
    iconUrl: "/images/social/instagram.svg", // Provide icon
    url: "https://www.instagram.com/mr_afroz01?igsh=bGdrNDhlYnpvZzFk&utm_source=qr",
  },
];

// export const testimonials: any[] = []; // No testimonials in resume

// --- FONTS (Informational, not directly used by Next.js like this) ---
export const fonts = {
  FONT_MONTSERRAT: "Montserrat", // For reference, Next/Font is preferred
  FONT_POPPINS: "Poppins",       // For reference, Next/Font is preferred
};

// --- RAW ASSET PATHS (Informational, actual paths are now in the data objects above) ---
// You will need to move these images into your /public folder
// and update the paths in the data objects above if they differ.
/*
Example:
CommonStyle.PROFILE_ICON = 'assets/images/profile.jpg'; becomes profileIconUrl: "/images/profile.jpg",
CommonStyle.css = 'assets/images/tech/css.svg'; becomes iconUrl: "/images/tech/css.svg",
*/

export const achievements: Achievement[] = [
  {
    title: 'Placeholder Award 1',
    issuer: 'Awarding Organization',
    date: 'Month Year',
    description: 'A brief description of why this award was given.',
    imageUrl: '/images/achievements/placeholder-1.jpg'
  },
  {
    title: 'Placeholder Award 2',
    issuer: 'Awarding Organization',
    date: 'Month Year',
    description: 'A brief description of why this award was given.',
    imageUrl: '/images/achievements/placeholder-2.jpg'
  },
  {
    title: 'Placeholder Award 3',
    issuer: 'Awarding Organization',
    date: 'Month Year',
    description: 'A brief description of why this award was given.',
    imageUrl: '/images/achievements/placeholder-3.jpg'
  },
  {
    title: 'Placeholder Award 4',
    issuer: 'Awarding Organization',
    date: 'Month Year',
    description: 'A brief description of why this award was given.',
    imageUrl: '/images/achievements/placeholder-4.jpg'
  },
];

