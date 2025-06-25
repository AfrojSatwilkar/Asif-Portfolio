(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/portfolioData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/data/portfolioData.ts
// --- INTERFACES ---
__turbopack_context__.s({
    "achievements": (()=>achievements),
    "education": (()=>education),
    "experiences": (()=>experiences),
    "fonts": (()=>fonts),
    "profileData": (()=>profileData),
    "projects": (()=>projects),
    "services": (()=>services),
    "socialMediaLinks": (()=>socialMediaLinks),
    "technologies": (()=>technologies)
});
const profileData = {
    name: "I'm Asif Patankar,",
    helloTag: "Hi there,",
    welcomeTag: "Welcome to My Tech Haven",
    title1: "Artificial Intelligence Research Engineer",
    title2: "| Image Processing, Machine Learning, Deep Learning",
    about: "Dynamic AI Research Engineer with 7+ years of experience developing and implementing cutting-edge machine learning models and deep learning solutions. Specialized in computer vision, 3D reconstruction, and embedded AI systems. Proven track record of enhancing model performance, optimizing AI for resource-constrained environments, and delivering impactful technological solutions across multiple industries.",
    about2: "Certified in C, C++, Oracle SQL Development, and Oracle Database Administration, I combine strong programming and database skills with practical software development expertise.",
    about3: "In recent years, I have specialized in Artificial Intelligence and Deep Learning, building neural network models for computer vision applications such as enhanced CCTV systems and AI-powered mobile apps. My work includes machine learning projects in agriculture, leveraging UAV-collected datasets for advanced research.",
    about4: "I continuously expand my skill set with cutting-edge technologies like 3D Point Cloud Data, RGB-D imaging, and embedded system programming, focusing on visual data processing and AI innovation.",
    about5: "Committed to lifelong learning and technological advancement, I strive to deliver impactful solutions that push the boundaries of software engineering and artificial intelligence.",
    profileIconUrl: "/images/Asif_profille.jpg",
    logoUrl: "/images/webLogo.svg",
    email: "asifpatankar@rocketmail.com",
    // phone: "+123 456 7890", // Uncomment and add if you want to display phone
    // location: "City, Country", // Uncomment and add if you want to display location
    // Placeholder content for new detailed fields
    detailedIntro: "Beyond the titles and technologies, I see myself as a problem-solver at heart, driven by a curiosity to understand how things work and a desire to build solutions that make a tangible difference. My journey into tech was fueled by this very curiosity, and it continues to be the force behind my learning and growth.",
    codingJourney: "My coding adventure began with a fascination for how software could bring ideas to life. Starting with web fundamentals, I quickly found a passion for creating interactive user experiences. This led me to explore mobile development with Flutter, where I discovered the joy of building beautiful and performant cross-platform applications. Each project has been a stepping stone, teaching me not just new languages and frameworks, but also the importance of collaboration, perseverance, and user-centric design.",
    achievements: [
        "Successfully led the development and integration of 50+ micro-apps in the AU HUB mobile application.",
        "Key contributor to optimizing business workflows, resulting in measurable efficiency gains.",
        "Recognized for innovative solutions in projects like the Drishti 3D Dashboard and Sampark Lead Management.",
        "Received the 'Star Award' at AU Small Finance Bank for exceptional service and contributions to multiple key projects.",
        "Active participant and contributor to open-source projects related to Flutter and Dart."
    ],
    motivation: "My motivation stems from the challenge of solving complex problems and the satisfaction of seeing a well-crafted piece of software empower users. I'm driven by the constant evolution of technology and the endless opportunities to learn and create something new and impactful. The ability to collaborate with talented teams and contribute to meaningful projects is what keeps me energized.",
    philosophy: "I believe in writing clean, maintainable, and scalable code. For me, software development is as much an art as it is a science. A strong emphasis on user experience, coupled with robust technical architecture, is key to building successful products. Continuous learning and adapting to new paradigms are fundamental to staying relevant and effective in this dynamic field.",
    passionsOutsideCode: [
        "Exploring new genres of music and attending live concerts.",
        "Diving into captivating books, from tech biographies to fantasy novels.",
        "Experimenting with global cuisines and honing my culinary skills.",
        "Hiking and connecting with nature to recharge and find inspiration."
    ],
    openTo: [
        {
            text: "New Project Collaborations",
            icon: "Briefcase"
        },
        {
            text: "Freelance Opportunities",
            icon: "DollarSign"
        },
        {
            text: "Tech Chats & Brainstorming",
            icon: "MessageSquare"
        },
        {
            text: "Open Source Contributions",
            icon: "Github"
        }
    ],
    starAwardDetails: {
        imageUrl: "/images/starAward.jpg",
        title: "Star Award - Service Excellence",
        description: "Recognized by AU Small Finance Bank for outstanding contributions and dedication across multiple projects."
    },
    skillSet: [
        {
            name: "Flutter",
            level: 90,
            color: "bg-sky-500"
        },
        {
            name: "React",
            level: 85,
            color: "bg-cyan-500"
        },
        {
            name: "Next.js",
            level: 80,
            color: "bg-neutral-300"
        },
        {
            name: "Tailwind CSS",
            level: 95,
            color: "bg-teal-500"
        },
        {
            name: "HTML5",
            level: 98,
            color: "bg-orange-500"
        },
        {
            name: "CSS3",
            level: 95,
            color: "bg-blue-500"
        },
        {
            name: "Node.js",
            level: 70,
            color: "bg-green-500"
        },
        {
            name: "Generative AI",
            level: 65,
            color: "bg-purple-500"
        },
        {
            name: "Llama3",
            level: 60,
            color: "bg-pink-500"
        },
        {
            name: "LangGraph",
            level: 55,
            color: "bg-indigo-500"
        }
    ]
};
const services = [
    {
        title: "Web Developer",
        iconUrl: "/images/web.png"
    },
    {
        title: "Flutter Developer",
        iconUrl: "/images/mobile.png"
    },
    {
        title: "Backend Developer",
        iconUrl: "/images/backend.png"
    }
];
const technologies = [
    {
        name: "Flutter",
        iconUrl: "/images/flutter.jpg"
    },
    {
        name: "React JS",
        iconUrl: "/images/tech/react.svg"
    },
    {
        name: "TypeScript",
        iconUrl: "/images/tech/typescript.png"
    },
    {
        name: "Next",
        iconUrl: "/images/nextjs.png"
    },
    {
        name: "JavaScript",
        iconUrl: "/images/tech/js.svg"
    },
    // Uncomment if needed
    {
        name: "HTML 5",
        iconUrl: "/images/tech/html.svg"
    },
    {
        name: "CSS 3",
        iconUrl: "/images/tech/css.svg"
    },
    {
        name: "Ruby",
        iconUrl: "/images/tech/ruby.svg"
    },
    {
        name: "Ruby On Rails",
        iconUrl: "/images/tech/ror.png"
    },
    {
        name: "Redux Toolkit",
        iconUrl: "/images/tech/redux.svg"
    },
    {
        name: "Material UI",
        iconUrl: "/images/tech/MI.png"
    },
    {
        name: "Tailwind CSS",
        iconUrl: "/images/tech/tailwind.svg"
    },
    {
        name: "Node JS",
        iconUrl: "/images/tech/nodejs.svg"
    },
    {
        name: "SQL",
        iconUrl: "/images/tech/sql.png"
    },
    {
        name: "JWT",
        iconUrl: "/images/tech/jwt.png"
    },
    {
        name: "Git",
        iconUrl: "/images/tech/git.png"
    },
    {
        name: "Figma",
        iconUrl: "/images/tech/figma.png"
    },
    {
        name: "Dialog flow",
        iconUrl: "/images/tech/dialogflow.png"
    }
];
const experiences = [
    {
        "title": "Senior Artificial Intelligence Research Engineer",
        "companyName": "Narma Inc.",
        "iconUrl": "/images/company/narma_inc_logo.jpeg",
        "iconBg": "#FFFFFF",
        "date": "Mar 2024 - Apr 2025",
        "points": [
            "Engineered advanced AI models for video deblurring of drone imagery, achieving significant clarity improvement over previous methodologies",
            "Developed Ground Station software following rigorous SDLC principles, creating a robust foundation for future enhancements",
            "Optimized AI detection tasks on embedded systems using TensorRT, substantially improving inference performance and efficiency",
            "Authored comprehensive funding proposals for AI technology initiatives, incorporating detailed market analysis and strategic planning"
        ]
    },
    {
        title: "Artificial Intelligence Research Engineer",
        companyName: "DeltaX",
        iconUrl: "/images/company/deltaxai_logo.jpeg",
        iconBg: "#383E56",
        date: "Mar 2023 – Dec 2023",
        points: [
            "Executed complex 3D reconstruction projects by mastering 3D data formats and convolution techniques, yielding measurable advancements in accuracy",
            "Reproduced and enhanced state-of-the-art AI models using NVIDIA's Minkowski Engine, contributing to significant improvements in research performance metrics",
            "Developed deep learning pipelines for autonomous wheelchair navigation, integrating RGB-D data for efficient pathfinding during SLAM operations",
            "Optimized embedded systems for real-time applications, debugging complex toolchains for Renesas R-Car and Texas Instruments Jacinto 7 ADAS boards"
        ]
    },
    {
        title: "Artificial Intelligence Research Engineer",
        companyName: "Dabeeo",
        iconUrl: "/images/company/dabeeo_inc_logo.jpeg",
        iconBg: "#E6DEDD",
        date: "Aug 2020 – Feb 2023",
        points: [
            "Pioneered AI-driven change detection systems leveraging satellite imagery to monitor illegal construction, generating actionable insights for urban planning",
            "Developed custom deep learning algorithms with near-zero false negatives, significantly optimizing accuracy rates in geospatial analysis",
            "Implemented innovative CNN architectures for building segmentation, incorporating edge detection algorithms to enhance shape definition",
            "Advanced model performance through ensemble learning methodologies, combining CNN architecture with GAN for improved segmentation results"
        ]
    },
    {
        title: "Artificial Intelligence Research Engineer",
        companyName: "GATDA Corporation",
        iconUrl: "/images/company/_gatda_corporation_logo.jpeg",
        iconBg: "#383E56",
        date: "Dec 2019 – Apr 2020",
        points: [
            "Orchestrated development of RESTful APIs integrating deep learning models in production environments",
            "Implemented live AI models on both Android and iOS platforms, ensuring seamless cross-platform operation",
            "Leveraged AWS cloud services to optimize model deployment workflows and enhance system performance"
        ]
    },
    {
        title: "Research Assistant",
        companyName: "CVPR Lab",
        iconUrl: "/images/company/1631335283148.jpeg",
        iconBg: "#E6DEDD",
        date: "Apr 2018 – Aug 2020",
        points: [
            "Designed and developed software solutions to detect radish wilt using C++/C# and OpenCV, facilitating advancements in agricultural technology",
            "Contributed to deep learning models for recycling classification, optimizing dataset management for 176 classes",
            "Constructed algorithms for smart city systems, enhancing video processing capabilities for real-time monitoring",
            "Achieved superior accuracy in sewer inspection projects, building CNN architecture that surpassed existing benchmarks in damage detection models"
        ]
    },
    {
        title: "Software Developer",
        companyName: "SIA Jewels Private Limited",
        iconUrl: "/images/company/schrocken.png",
        iconBg: "#383E56",
        date: "May 2022 - April 2023",
        points: [
            "Drove end-to-end development cycle of retail Point of Sale (POS) applications",
            "Upgraded existing applications to modern code standards ensuring optimal functionality",
            "Innovated and maintained barcode scanning modules within retail POS applications",
            "Optimized SQL queries for peak performance, including writing complex efficient queries",
            "Redesigned database architecture to seamlessly integrate application changes",
            "Provided Pan-India operator support as database administrator",
            "Managed on-site production database manipulation and SQL Server replication"
        ]
    },
    {
        title: "Software Developer",
        companyName: "Travancore Systems",
        iconUrl: "/images/company/travancore_systems_logo.jpeg",
        iconBg: "#383E56",
        date: "Apr 2017 – Aug 2017",
        points: [
            "Led end-to-end development of thermal image processing applications using NonDestructive Testing methods",
            "Seamlessly integrated thermal camera APIs into application architecture for real-time machinery assessment",
            "Implemented mathematical and statistical equations to enhance precision of image processing modules",
            "Crafted strategic database architectures optimizing data management and retrieval",
            "Applied analytical approaches to address complex image processing challenges",
            "Maintained optimal software performance by managing indexes of initial components"
        ]
    },
    {
        title: "Freelancer",
        companyName: "Freelancer for Software and Database Services ",
        iconUrl: "/images/company/schrocken.png",
        iconBg: "#383E56",
        date: "Oct 2016 – Mar 2017",
        points: [
            "Specialized in Extract, Transform, Load (ETL) processes to seamlessly integrate data across diverse systems",
            "Executed precise scheme mapping to ensure alignment between various datasets and sources",
            "Performed meticulous data reconciliation, ensuring accuracy and consistency across integrated systems",
            "Utilized advanced tools and methodologies to orchestrate effective ETL workflows",
            "Implemented robust quality checks throughout the ETL process, ensuring data reliability",
            "Collaborated with cross-functional teams to solve complex data integration challenges"
        ]
    },
    {
        title: "Software Developer",
        companyName: "Parle Global Technologies Pvt. Ltd.",
        iconUrl: "/images/company/parleglobal_logo.jpeg",
        iconBg: "#383E56",
        date: "Aug 2015 – Sep 2016",
        points: [
            "Expertly analyzed user specifications for logical workability, completeness, and optimal business flow for both existing and developing applications",
            "Designed robust databases with complex nested queries, views, and implemented advanced concepts like data encapsulation and inheritance",
            "Conducted rigorous unit testing, system testing, and performance tuning aligned with development standards",
            "Provided expert support to on-site engineers, ensuring efficient problem resolution",
            "Enhanced SCADA GUIs for improved supervisory control and data acquisition efficiency",
            "Implemented secure coding solutions for authentication, authorization, and user management",
            "Engineered 2D barcode generation systems with information like batch numbers and manufacturing dates",
            "Developed algorithms for generating random unique alphanumeric characters for barcode serialization"
        ]
    },
    {
        title: "Teacher",
        companyName: "Shahnaz Tutorials",
        iconUrl: "/images/company/schrocken.png",
        iconBg: "#383E56",
        date: "Jun 2007 – May 2014",
        points: [
            "Taught Mathematics and Computer Science to Secondary School students",
            "Instructed Higher Secondary Commerce students in Mathematics",
            "Expanded to teaching Physics, Chemistry, Biology, and Mathematics to Science students (2012)",
            "Provided instruction in Programming Languages",
            "Taught Mathematics to Diploma (Mechanical/Production) and Engineering students (2014)",
            "Managed finance and marketing operations for the tutorial center",
            "Implemented innovative teaching methodologies catering to diverse learning styles"
        ]
    }
];
const education = [
    {
        title: "Master of Science in Computer Science",
        collegeName: "Sejong University, Seoul, South Korea",
        iconUrl: "/images/education/1631335283148.jpeg",
        iconBg: "#383E56",
        date: "2020",
        branch: 'Computer Science Engineering',
        percentage: '69.2%'
    },
    {
        title: "Bachelor of Science in Information Technology",
        collegeName: "University of Mumbai, Mumbai, India",
        iconUrl: "/images/education/1631357817785.jpeg",
        iconBg: "#383E56",
        date: "2007",
        branch: 'Computer Science Engineering',
        percentage: '82.2%'
    }
];
const projects = [
    {
        id: 'linkedin-agent',
        title: 'LinkedIn AI Agent',
        category: 'AI',
        description: 'This AI agent logs into a LinkedIn account, browses the feed, identifies posts relevant to specific topics using NLP, and then autonomously posts pre-defined, relevant content as comments or posts.',
        shortDescription: 'An AI agent that automates content interaction on LinkedIn.',
        introduction: 'The LinkedIn AI Agent is designed to automate social media engagement for professionals, saving time and increasing visibility on the platform.',
        problemStatement: 'Manually browsing LinkedIn and engaging with relevant content is time-consuming. This agent automates the process, ensuring consistent activity.',
        developmentJourney: 'The agent was built using a modular architecture, with separate components for authentication, feed scraping, content analysis (NLP), and posting. This allowed for iterative development and testing.',
        strugglesAndSolutions: 'A major challenge was bypassing LinkedIn\'s bot detection. This was solved by mimicking human-like browsing behavior, such as randomizing delays and scrolling patterns.',
        designThinking: 'The focus was on creating a reliable and unobtrusive agent. The agent\'s posting schedule and content are configurable to avoid spammy behavior.',
        approach: 'The agent uses a combination of web scraping libraries to interact with LinkedIn, a fine-tuned NLP model to identify relevant posts, and a state machine to manage its workflow.',
        conclusion: 'The LinkedIn AI Agent is an effective tool for automating LinkedIn engagement, providing a consistent presence on the platform with minimal manual intervention.',
        impact: 'The agent helps users increase their visibility and engagement on LinkedIn, leading to more connections and opportunities.',
        tags: [
            {
                name: "AI",
                color: "linear-gradient(90deg, #8E2DE2 0%, #4A00E0 100%)"
            },
            {
                name: "LangChain",
                color: "linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)"
            },
            {
                name: "NLP",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Automation",
                color: "linear-gradient(90deg, #ff9966 0%, #ff5e62 100%)"
            }
        ],
        imageUrl: '/images/project/linkedin_agent.webp',
        galleryImages: [
            {
                url: '/images/project/linkedin_agent.webp',
                alt: 'LinkedIn Agent Dashboard'
            }
        ],
        sourceCodeLink: '#',
        liveLink: '#'
    },
    {
        id: 'email-agent',
        title: 'Intelligent Email Agent for Banking',
        category: 'AI',
        description: 'Developed for a small finance bank, this email agent uses Llama3 and LangChain to analyze incoming emails. It identifies the user\'s intent, automatically creates a CRM ticket, notifies the assigned employee, and can even draft a reply by calling internal APIs to fetch necessary information.',
        shortDescription: 'An email AI agent for intent recognition and automated CRM workflow.',
        introduction: 'This project was initiated to streamline customer support operations at a small finance bank by automating the initial stages of email-based queries.',
        problemStatement: 'The manual process of reading emails, identifying customer needs, creating CRM tickets, and routing them to the correct department was slow and prone to human error, leading to delayed responses.',
        developmentJourney: 'The development involved fine-tuning the Llama3 model for banking-specific intents, building a robust LangChain pipeline for processing emails, and integrating with the bank\'s existing CRM and internal APIs.',
        strugglesAndSolutions: 'Ensuring high accuracy in intent recognition for a wide variety of customer emails was challenging. This was addressed by augmenting the training data with synthetic examples and implementing a confidence-based fallback to a human agent.',
        designThinking: 'The system was designed to be a "human-in-the-loop" agent. While it automates most of the workflow, it provides clear dashboards for human agents to monitor its activity and intervene when necessary.',
        approach: 'The core of the agent is a LangChain pipeline that orchestrates multiple steps: email pre-processing, intent classification using Llama3, entity extraction for key information, API calls to the CRM, and generating a draft response.',
        conclusion: 'The Intelligent Email Agent significantly reduced the manual effort required for handling customer emails, leading to faster response times and improved customer satisfaction.',
        impact: 'The agent automated over 60% of incoming email workflows, allowing customer service representatives to focus on more complex and high-value interactions.',
        tags: [
            {
                name: "Llama3",
                color: "linear-gradient(90deg, #d53369 0%, #daae51 100%)"
            },
            {
                name: "LangChain",
                color: "linear-gradient(90deg, #fc466b 0%, #3f5efb 100%)"
            },
            {
                name: "AI",
                color: "linear-gradient(90deg, #8E2DE2 0%, #4A00E0 100%)"
            },
            {
                name: "CRM",
                color: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)"
            },
            {
                name: "API Integration",
                color: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)"
            }
        ],
        imageUrl: '/images/project/email_agent.webp',
        galleryImages: [
            {
                url: '/images/project/email_agent.webp',
                alt: 'Email Agent Workflow'
            }
        ],
        sourceCodeLink: '#',
        liveLink: '#'
    },
    {
        id: 'au-niyantaran',
        title: "Niyantaran",
        category: "Web",
        description: "Revamped Niyantran's front-end UI with complete redesign based on Figma prototypes. Built dynamic forms for role-based workflows, integrated draft management, and implemented responsive, user-friendly interfaces supporting complex rule configurations. Ensured seamless interaction with backend APIs for rule-driven request processing, role assignments, and real-time audit tracking.",
        shortDescription: "Redesigned Niyantran UI with rule-based dynamic workflows, role-driven forms, draft management, and responsive design.",
        introduction: "Modernized Niyantran's front-end to support flexible, rule-driven workflows while enhancing usability, responsiveness, and real-time process tracking.",
        problemStatement: "Existing static front-end lacked flexibility for dynamic roles, workflows, and draft management, creating rigid user experience and operational delays.",
        strugglesAndSolutions: "Implemented dynamic forms driven by backend rule configurations, built flexible UI components for sequential/parallel approvals, role-based filters, draft saving, and history visualization while ensuring full responsiveness and cross-browser compatibility.",
        designThinking: "Focused on clean, intuitive interfaces with Figma-based design implementation, quick access dashboards, modular request pages, and simplified user journeys to minimize errors.",
        approach: "Utilized modern front-end frameworks, component-based architecture, reusable UI modules, and API integrations to handle dynamic data, validations, role-based visibility, and real-time history logs.",
        developmentJourney: "Started with UI redesign and layout structuring, progressively built request creation forms, recommender/approver workflows, draft-save capabilities, and integrated complex backend APIs for rule-based validations.",
        conclusion: "Delivered a highly flexible, user-friendly, rule-driven front-end that supports business scalability while improving user productivity and minimizing process errors.",
        impact: "Enabled Commercial Banking teams to create, track, and process requests more efficiently with configurable workflows, transparent audit trails, and improved end-user satisfaction.",
        tags: [
            {
                name: "React",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "HTML",
                color: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)"
            },
            {
                name: "Tailwind CSS",
                color: "linear-gradient(90deg, #06beb6 0%, #48b1f3 100%)"
            },
            {
                name: "JavaScript",
                color: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)"
            }
        ],
        imageUrl: "/images/niyan_dashboard.PNG",
        galleryImages: [
            {
                url: "/images/niyan_forInfo.PNG",
                alt: "AU Hub Zoom Login"
            },
            {
                url: "/images/niyan_login.PNG",
                alt: "AU Hub Zoom Feature 1"
            },
            {
                url: "/images/niyan_myRequest.PNG",
                alt: "AU Hub Zoom Feature 2"
            },
            {
                url: "/images/niyan_newRequest.PNG",
                alt: "AU Hub Zoom Feature 3"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'au-hub-zoom',
        title: "AU HUB | Zoom Call Feature and Recording",
        category: "mobile",
        description: "Developed a Zoom Call feature module within the AU HUB application, enabling Business Correspondents (BCs) and employees to initiate, record, and playback Zoom video calls. The solution involved writing platform-specific code for Android and iOS using Zoom SDK integration. Key features include call recording, playback functionality, and Picture-in-Picture (PiP) mode for floating window support. Leveraging Flutter with GetX for state management, the module ensures seamless cross-platform experience. Utilized native integration for Zoom SDK, and packages like `flutter_zoom_sdk`, `flutter_pip`, and `video_player` for enhanced functionality.",
        shortDescription: "Integrated Zoom SDK into AU HUB for video calls with recording, playback, and PiP mode on iOS & Android.",
        introduction: "This project aimed to seamlessly integrate video conferencing capabilities into the existing AU HUB application, enhancing communication for BCs and employees.",
        problemStatement: "The primary challenge was to enable reliable video call functionality, including recording and easy playback, directly within the AU HUB ecosystem, which is used across diverse network conditions and devices. Ensuring a consistent user experience on both Android and iOS while managing SDK complexities was crucial.",
        strugglesAndSolutions: "Integrating the Zoom SDK required careful handling of native modules for both Android (Java/Kotlin) and iOS (Swift/Objective-C). Managing permissions, call states, and background processes for PiP mode presented significant hurdles. These were overcome by creating specific Flutter platform channels and robust error handling.",
        designThinking: "The design focused on intuitive user flows for initiating, joining, and managing calls. The PiP feature was designed to be non-intrusive, allowing users to multitask. Playback controls were kept simple and familiar.",
        approach: "A modular approach was taken, encapsulating Zoom functionalities within a dedicated Flutter service. GetX was used for reactive state management of call statuses and UI updates. Extensive testing was conducted on various devices and network scenarios.",
        developmentJourney: "The development started with a proof-of-concept for basic SDK integration. Iteratively, features like recording, PiP, and platform-specific optimizations were added. Regular feedback from a pilot user group helped refine the user experience.",
        conclusion: "The Zoom integration successfully provided a robust and user-friendly video communication tool within AU HUB, meeting the project's core objectives.",
        impact: "This feature significantly improved remote collaboration and support capabilities, reducing the need for external conferencing tools and streamlining communication workflows for thousands of users.",
        tags: [
            {
                name: "Flutter",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "GetX",
                color: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)"
            },
            {
                name: "Zoom SDK",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "PiP Mode",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/sam_assignTask.png",
        galleryImages: [
            {
                url: "/images/au_hub_login.jpg",
                alt: "AU Hub Zoom Login"
            },
            {
                url: "/images/au_hub_p1.jpg",
                alt: "AU Hub Zoom Feature 1"
            },
            {
                url: "/images/au_hub_p2.jpg",
                alt: "AU Hub Zoom Feature 2"
            },
            {
                url: "/images/au_hub_p3.jpg",
                alt: "AU Hub Zoom Feature 3"
            },
            {
                url: "/images/au_hub_vedio.jpg",
                alt: "AU Hub Zoom Video Playback"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'sampark-rm-app',
        title: "Relationship Manager App (Sampark)",
        category: "Mobile",
        description: "Sampark is a mobile application designed for Relationship Managers (RMs) and Branch Officers (BOs) to efficiently track and manage leads, customer interactions, and task assignments. Built using Flutter and GetX, the app enables seamless task updates, real-time customer engagement, and streamlined lead management. A key feature of the app is Exotel integration, allowing RMs to initiate calls directly from the app, with automatic call logging and recording for compliance and review purposes. The app operates securely within an internal MDM-hosted environment, ensuring restricted access and data privacy. Its intuitive UI and offline functionality significantly boost on-field productivity, making it a crucial tool for managing day-to-day operations.",
        shortDescription: "Flutter & GetX mobile app for RMs to manage leads & tasks, with Exotel call integration and recording.",
        introduction: "Briefly introduce the Sampark RM App project here.",
        problemStatement: "Describe the core problem Sampark RM App aimed to solve.",
        developmentJourney: "Share insights into the development process of Sampark RM App.",
        strugglesAndSolutions: "Detail any challenges faced and how they were overcome during Sampark RM App development.",
        designThinking: "Explain the design philosophy and process behind Sampark RM App.",
        approach: "Describe the technical approach and architecture for Sampark RM App.",
        conclusion: "Summarize the outcomes and learnings from the Sampark RM App project.",
        impact: "Explain the impact Sampark RM App had or is expected to have.",
        tags: [
            {
                name: "Flutter",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "GetX",
                color: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)"
            },
            {
                name: "Exotel",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Call Recording",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/samm_dashboard.jpg",
        galleryImages: [
            {
                url: "/images/samm_login.jpg",
                alt: "Sampark RM App Login"
            },
            {
                url: "/images/samm_dashboard.jpg",
                alt: "Sampark RM App Dashboard"
            },
            {
                url: "/images/sam_dashboard_drawer.jpg",
                alt: "Sampark RM App Dashboard"
            },
            {
                url: "/images/sam_pef.png",
                alt: "Sampark RM App Table View"
            },
            {
                url: "/images/sam_captureLead.jpg",
                alt: "Sampark RM App Table View"
            },
            {
                url: "/images/sam_assignTask.png",
                alt: "Sampark RM App Assign Task"
            },
            {
                url: "/images/sam_assignTask2.jpg",
                alt: "Sampark RM App Assign Task"
            },
            {
                url: "/images/sam_assignTask2.jpg",
                alt: "Sampark RM App Assign Task"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'tura-municipal-board-website',
        title: "Tura Municipal Board Website",
        category: "web",
        description: "The Tura Municipal Board website is a government portal developed using Flutter, designed to streamline form submissions and approvals. The platform features a multi-step approval system where user-submitted forms undergo two rounds of validation before final approval. If a payment is required, users can securely complete transactions via the integrated SBI ePay gateway before printing the approved form. The website enhances administrative efficiency by automating workflows and providing a user-friendly interface for citizens and government officials.",
        shortDescription: "Flutter-based government portal for Tura Municipal Board with form submission, multi-level approval, and SBI ePay integration.",
        introduction: "Briefly introduce the Tura Municipal Board Website project here.",
        problemStatement: "Describe the core problem Tura Municipal Board Website aimed to solve.",
        developmentJourney: "Share insights into the development process of Tura Municipal Board Website.",
        strugglesAndSolutions: "Detail any challenges faced and how they were overcome during Tura Municipal Board Website development.",
        designThinking: "Explain the design philosophy and process behind Tura Municipal Board Website.",
        approach: "Describe the technical approach and architecture for Tura Municipal Board Website.",
        conclusion: "Summarize the outcomes and learnings from the Tura Municipal Board Website project.",
        impact: "Explain the impact Tura Municipal Board Website had or is expected to have.",
        tags: [
            {
                name: "Flutter",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "SBI ePay",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Approval Workflow",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/tura_login.PNG",
        galleryImages: [
            {
                url: "/images/tura_login.PNG",
                alt: "Tura Website Login"
            },
            {
                url: "/images/tura_reg.PNG",
                alt: "Tura Website Registration"
            },
            {
                url: "/images/tura_home.PNG",
                alt: "Tura Website Home"
            },
            {
                url: "/images/tura_tura_about.PNG",
                alt: "Tura Website About"
            },
            {
                url: "/images/tura_tura_scheme.PNG",
                alt: "Tura Website Scheme"
            }
        ],
        sourceCodeLink: "https://turamunicipalboard.com/home",
        liveLink: "https://turamunicipalboard.com/home"
    },
    {
        id: 'sampark-rm-website',
        title: "Relationship Manager Website (Sampark)",
        category: "Web",
        description: "Sampark is a web module designed for Relationship Managers (RMs) and Branch Officers (BOs) to efficiently manage tasks, leads, and customer interactions. The platform allows the Central Team (Admins) to assign tasks, oversee lead management, and streamline customer mapping. Built using Flutter, the website provides an intuitive interface for RMs to track and engage with leads, enhancing operational efficiency. The system ensures seamless communication and data synchronization while offering a private and secure deployment on internal MDM hosting.",
        shortDescription: "Flutter web module for RMs/BOs to manage tasks & leads, with admin oversight for assignments.",
        introduction: "Briefly introduce the Sampark RM Website project here.",
        problemStatement: "Describe the core problem Sampark RM Website aimed to solve.",
        developmentJourney: "Share insights into the development process of Sampark RM Website.",
        strugglesAndSolutions: "Detail any challenges faced and how they were overcome during Sampark RM Website development.",
        designThinking: "Explain the design philosophy and process behind Sampark RM Website.",
        approach: "Describe the technical approach and architecture for Sampark RM Website.",
        conclusion: "Summarize the outcomes and learnings from the Sampark RM Website project.",
        impact: "Explain the impact Sampark RM Website had or is expected to have.",
        tags: [
            {
                name: "Flutter",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Task Management",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Lead Management",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/dashboard.PNG",
        galleryImages: [
            {
                url: "/images/loginImg.PNG",
                alt: "Sampark Web Login"
            },
            {
                url: "/images/dashboard.PNG",
                alt: "Sampark Web Dashboard"
            },
            {
                url: "/images/table.PNG",
                alt: "Sampark Web Table View"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'dhirst-website',
        title: "Dhirst Website",
        category: "web",
        description: "Developed the front-end for AU Compliance Actionable Tracker as per RBI regulatory guidelines, implementing dynamic workflows, multi-role management, real-time compliance tracking, and confidential instruction processing. Built complex UI components for Makers, HODs, SPOCs, FPRs, Checkers, and Observers with role-based access and dynamic Excel-based actionable uploads. Ensured audit trails, notifications, and escalations are fully integrated into the responsive design.",
        shortDescription: "Built dynamic UI for AU Compliance Tracker with role-based workflows, Excel uploads, audit trails, and notification system.",
        introduction: "The project aimed to build a centralized digital compliance tracking system for AU Small Finance Bank in alignment with RBI/2023-24/117 circular, eliminating manual Excel-based compliance tracking and improving transparency, auditability, and governance.",
        problemStatement: "The compliance team manually tracked regulatory obligations, leading to risks of data manipulation, regulatory penalties, and inefficient management across departments and regulators.",
        strugglesAndSolutions: "Built highly dynamic forms handling multiple user roles, confidential instruction flows, Excel file parsing for bulk actionables, and real-time notifications for each role. Complex workflows for deviations, approvals, and clarifications were mapped into front-end logic integrated with backend API flows.",
        designThinking: "Designed intuitive role-specific dashboards, responsive layouts for real-time actionable status, Excel-based bulk upload flows, and dynamic search/filtering mechanisms. Ensured compliance with AU's Figma design system while making the UI highly modular and scalable.",
        approach: "Developed reusable UI modules for each role type (Maker, Checker, HOD, SPOC, FPR, Observer). Integrated dynamic forms with backend APIs for uploading instructions, assigning roles, processing deviations, tracking closures, and full audit history visualizations. Implemented real-time bell notifications and scheduled email summaries.",
        developmentJourney: "Started with login, user management, role assignment screens, followed by confidential instruction creation, Excel import flows, role-wise dashboards, actionable processing screens, deviation workflows, and integrated notification modules.",
        conclusion: "Delivered a centralized, fully digital compliance management system enabling real-time tracking, reducing compliance gaps, and ensuring regulatory adherence with audit trails.",
        impact: "Enabled AU Small Finance Bank to meet RBI compliance mandates, reduced regulatory risks, improved transparency across departments, and provided centralized compliance visibility to senior management.",
        tags: [
            {
                name: "React",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Tailwind CSS",
                color: "linear-gradient(90deg, #06beb6 0%, #48b1f3 100%)"
            },
            {
                name: "JavaScript",
                color: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)"
            },
            {
                name: "HTML",
                color: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)"
            }
        ],
        imageUrl: "/images/dhristi_dashboard.PNG",
        galleryImages: [
            {
                url: "/images/dhiristi_edit.PNG",
                alt: "Sampark Web Login"
            },
            {
                url: "/images/dhiristi_editHistory.PNG",
                alt: "Sampark Web Dashboard"
            },
            {
                url: "/images/dhiristi_return.PNG",
                alt: "Sampark Web Table View"
            },
            {
                url: "/images/dhristi_createnew.PNG",
                alt: "Sampark Web Table View"
            },
            {
                url: "/images/dhristi_login.PNG",
                alt: "Sampark Web Table View"
            },
            {
                url: "/images/dhristi_return_id.PNG",
                alt: "Sampark Web Table View"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'fincareone-branch-change',
        title: "FincareOne | Branch Class Change",
        category: "mobile",
        description: "A comprehensive module within the FincareOne application that digitizes the process of requesting and approving branch and user class changes for employees. It provides a user-friendly interface for employees to submit requests with details like deputation branch and duration. Requests are routed through a two-level approval hierarchy pulled from HRMS. Reporting managers can review, approve, or reject requests through an intuitive interface with swipe gestures. Approved changes are automatically executed by a daily cron job, significantly reducing manual intervention from the IT team.",
        shortDescription: "Flutter module in FincareOne to automate Branch & User Class change requests with a two-level approval workflow based on HRMS hierarchy.",
        introduction: "This project was conceptualized to address the high volume of manual service tickets for branch and user class modifications. The objective was to build a self-service module within the FincareOne super-app, empowering employees to manage their own operational changes while providing a structured and secure approval framework for management.",
        problemStatement: "The IT Business-as-usual (BAU) team was inundated with service requests for branch and user class changes, accounting for 30-40% of their ticket volume. This manual process, which relied on approvals via email or other channels, was inefficient, prone to delays, and lacked a centralized audit trail. The bank needed an automated solution to offload this work from the IT team and place the approval authority directly with the relevant business managers.",
        developmentJourney: "The development process began by mapping out the two-level approval flow based on the HRMS structure. Following the Figma designs, we built distinct UIs for employees and managers using Flutter and GetX. Key features implemented include the request submission form with calendar controls for duration, the manager's approval dashboard with swipeable cards, and API integrations to fetch HRMS data. A significant part of the journey was setting up the daily cron job for executing approved requests and the logic for auto-reverting temporary branch changes.",
        strugglesAndSolutions: "A key challenge was integrating with the HRMS system to dynamically fetch the correct two-level reporting hierarchy for every employee. This was solved by creating a robust backend service that securely communicates with the HRMS database. Implementing the swipe-to-approve/reject functionality with confirmation dialogs required careful state management to ensure a smooth and intuitive user experience. Another challenge was ensuring the cron job was reliable and correctly handled various scenarios, like permanent vs. temporary changes, which was addressed through rigorous testing and scheduling logic.",
        designThinking: "The design, guided by the provided Figma link, focused on creating a clear and efficient user experience. For employees, the process of raising a request was simplified into a single form. For managers, the design prioritized quick decision-making through an 'at-a-glance' card view with employee details and swipe gestures for actions. The inclusion of a confirmation pop-up for rejections was a key design choice to prevent accidental decisions and capture necessary feedback, enhancing the overall usability and reliability of the workflow.",
        approach: "The solution was architected as a module within the Flutter-based FincareOne application. We implemented a role-based access system to differentiate between an employee's view and a manager's view. The business logic for the approval workflow and HRMS integration was handled by backend services. A daily cron job was scheduled on the server-side to process all approved requests in a batch, ensuring system changes are made in a controlled manner during off-peak hours. All data related to requests and approvals was stored in a dedicated database schema to maintain a clear audit trail.",
        conclusion: "The Branch and User Class Change module successfully automated a critical but repetitive administrative task. It provides a secure, auditable, and user-friendly platform that empowers employees and managers, while significantly reducing the burden on the IT team. The project demonstrated how thoughtful application design can streamline internal business processes and improve operational efficiency.",
        impact: "The module is projected to reduce IT service tickets related to branch and user class changes by 30-40%, freeing up the IT team to focus on more critical tasks. It enhances operational agility by speeding up the approval process for employee transfers and role changes. The system provides a transparent and accountable workflow, improving the experience for both employees and their managers.",
        tags: [
            {
                name: "Flutter",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "GetX",
                color: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)"
            },
            {
                name: "Workflow Automation",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "HRMS Integration",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/CrossSell.jpg",
        galleryImages: [
            {
                url: "/images/CrossSell.jpg",
                alt: "Branch Class Change Module"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'fincareone-crosssell',
        title: "FincareOne | CrossSell",
        category: "mobile",
        description: "The Cross-Sell v3.0 module is an advanced lead management system integrated within the Fincare One application. It empowers branch employees, including Branch Managers (BMs), Branch Operations Managers (BOMs), and Relationship Managers (RMs), to seamlessly manage the entire lead lifecycle. The module features role-based user flows for lead submission, assignment, and actioning. BMs/BOMs can assign leads from a central queue, while RMs can act on their assigned leads by calling customers and updating statuses. All employees can submit new leads through a dedicated form with product selection. The system is designed to enhance sales productivity, streamline lead tracking, and improve customer conversion rates through an intuitive, role-specific UI.",
        shortDescription: "A Flutter & GetX lead management module for bank employees to submit, assign, and act on sales leads, with role-based workflows for managers and executives.",
        introduction: "The FincareOne Cross-Sell project was initiated to overhaul the existing lead management process within the Fincare One super-app. The goal was to create a centralized, efficient, and user-friendly module that caters to the specific needs of different employee roles, from lead creation to conversion, ultimately boosting the bank's cross-selling capabilities.",
        problemStatement: "The previous lead management system was fragmented and lacked clear, role-based workflows. Branch Managers struggled with efficiently distributing leads to their teams, and Relationship Managers lacked a streamlined interface to act upon and track their assigned leads. There was no unified process for all employees to submit potential leads, leading to missed opportunities and inefficient tracking. The lack of a centralized system made it difficult to monitor lead status and measure conversion effectiveness across the branch network.",
        developmentJourney: "The development of Cross-Sell v3.0 was guided by detailed user stories and Figma designs. The process began with building the core UI components in Flutter, such as the dynamic lead card widgets and the new landing page. We implemented distinct user flows for BMs/BOMs and RMs, focusing on state management with GetX to handle queues like 'Yet to assign' and 'In Progress'. A key part of the journey was creating the lead submission form with client-side validation and integrating it with the existing 'Create Lead' backend API. The final phase involved linking all screens and ensuring smooth navigation as per the new design.",
        strugglesAndSolutions: "A primary challenge was implementing the role-based access control to display different UIs and functionalities for BMs, RMs, and other employees. This was solved by fetching the user's role upon login and using conditional rendering within the Flutter widgets. Another challenge was managing the state of leads across different queues ('Yet to assign', 'In Progress', 'Closed') efficiently. We leveraged GetX state management to create reactive data stores that updated the UI in real-time as leads were assigned, actioned, or created. Ensuring the form validations for lead submission were robust and user-friendly also required careful implementation of Flutter's form handling capabilities.",
        designThinking: "The design process was user-centric, driven by the detailed Figma mockups provided. The core philosophy was to simplify complex workflows into intuitive, role-specific interfaces. For Branch Managers, the design focused on providing a clear overview and quick assignment capabilities. For Relationship Managers, the focus was on enabling swift action on leads. The UI for lead submission was designed to be clean and straightforward, minimizing friction for all employees. The use of distinct tabs, clear call-to-action buttons, and structured lead cards was a direct result of design thinking aimed at improving user efficiency and satisfaction.",
        approach: "The module was developed using Flutter with GetX for state management, following a modular architecture within the main Fincare One application. We created reusable widgets for lead cards, which could be configured based on the user's role and the lead's status. The front-end logic was separated from the UI, with services dedicated to API interactions, such as creating new leads and updating their status. We adhered strictly to the provided Figma designs for UI implementation and ensured all new components were responsive and performed well on various devices.",
        conclusion: "The Cross-Sell v3.0 module successfully delivered a comprehensive lead management solution that streamlined operations for all branch employees. The project reinforced the importance of clear specifications and user-centric design in developing effective enterprise tools. Key takeaways include the power of role-based UI customization for improving user adoption and the efficiency of using a robust state management solution like GetX for handling complex, dynamic data flows in a mobile application.",
        impact: "The new module is expected to significantly improve the lead conversion rate by ensuring timely assignment and action on leads. It enhances accountability by providing clear visibility into lead statuses for all stakeholders. By empowering every employee to contribute to lead generation, the application widens the sales funnel. The streamlined workflows reduce administrative overhead for Branch Managers and allow Relationship Managers to focus more on customer interaction, ultimately driving business growth and improving overall sales performance.",
        tags: [
            {
                name: "Flutter",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "GetX",
                color: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)"
            },
            {
                name: "Lead Management",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "REST API",
                color: "linear-gradient(90deg, #f953c6 0%, #b91d73 100%)"
            }
        ],
        imageUrl: "/images/CrossSell.jpg",
        galleryImages: [
            {
                url: "/images/CrossSell.jpg",
                alt: "CrossSell Module"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: "mosymphony-cgt",
        title: "Mosymphony-CGT",
        category: "Web Application",
        shortDescription: "A comprehensive platform for managing Cell-Gene Therapy ecosystems, enabling secure collaboration between organizations, researchers, and healthcare providers.",
        description: "Mosymphony-CGT is an advanced web platform designed to facilitate and streamline Cell-Gene Therapy research and collaboration. The system implements a robust user management system with role-based access control, secure authentication, and comprehensive organization management capabilities.",
        imageUrl: "/images/cgt.png",
        galleryImages: [
            {
                url: "/images/cgt.png",
                alt: "Cell and Gene Therapy Project"
            },
            {
                url: "/images/cgt.png",
                alt: "User Management Interface"
            },
            {
                url: "/images/cgt.png",
                alt: "Organization Management View"
            }
        ],
        tags: [
            {
                name: "React",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Node.js",
                color: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)"
            },
            {
                name: "PostgreSQL",
                color: "linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)"
            },
            {
                name: "JWT",
                color: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)"
            },
            {
                name: "REST API",
                color: "linear-gradient(90deg, #f953c6 0%, #b91d73 100%)"
            },
            {
                name: "Two-Factor Authentication",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Role-Based Access Control",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Organization Management",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        technologiesUsed: [
            "React.js",
            "Node.js",
            "PostgreSQL",
            "JWT Authentication",
            "RESTful APIs",
            "Two-Factor Authentication",
            "Role-Based Access Control",
            "Organization Management"
        ],
        liveLink: "#",
        sourceCodeLink: "#",
        introduction: "Mosymphony-CGT is a specialized platform designed to address the unique needs of Cell-Gene Therapy research and collaboration. The system provides a secure and efficient way for organizations, researchers, and healthcare providers to collaborate while maintaining strict data security and compliance requirements.",
        problemStatement: "The Cell-Gene Therapy field faces several challenges:\n\n1. Complex collaboration requirements between multiple organizations\n2. Need for secure data sharing and access control\n3. Difficulty in managing user roles and permissions across different organizations\n4. Lack of standardized processes for ecosystem management\n5. Security concerns in handling sensitive research data",
        developmentJourney: "The development journey involved several key phases:\n\n1. Initial Planning and Architecture Design\n   - Defined system requirements and architecture\n   - Designed database schema for user and organization management\n   - Planned API structure and authentication flow\n\n2. Core Development\n   - Implemented user registration and authentication system\n   - Developed organization management features\n   - Created role-based access control system\n   - Built two-factor authentication mechanism\n\n3. Security Implementation\n   - Implemented JWT-based authentication\n   - Added two-step verification process\n   - Developed secure password management\n   - Created secure API endpoints\n\n4. Testing and Optimization\n   - Conducted security testing\n   - Performed load testing\n   - Optimized database queries\n   - Enhanced user experience",
        strugglesAndSolutions: "Key challenges and their solutions:\n\n1. Complex User Management\n   - Implemented a flexible role-based system\n   - Created separate flows for different user types\n   - Developed comprehensive permission management\n\n2. Security Concerns\n   - Implemented two-factor authentication\n   - Added OTP verification system\n   - Created secure token management\n\n3. Organization Management\n   - Developed hierarchical organization structure\n   - Created flexible collaboration models\n   - Implemented organization-specific settings\n\n4. Data Security\n   - Implemented end-to-end encryption\n   - Created secure data sharing mechanisms\n   - Developed audit logging system",
        designThinking: "The design process focused on:\n\n1. User Experience\n   - Intuitive interface for complex operations\n   - Clear navigation structure\n   - Responsive design for all devices\n\n2. Security First\n   - Multiple authentication layers\n   - Secure data transmission\n   - Role-based access control\n\n3. Scalability\n   - Modular architecture\n   - Flexible organization structure\n   - Extensible API design",
        approach: "The development approach included:\n\n1. Agile Methodology\n   - Iterative development cycles\n   - Regular stakeholder feedback\n   - Continuous improvement\n\n2. Security-First Development\n   - Regular security audits\n   - Penetration testing\n   - Compliance verification\n\n3. User-Centered Design\n   - User research and feedback\n   - Usability testing\n   - Performance optimization",
        conclusion: "Mosymphony-CGT successfully addresses the complex needs of Cell-Gene Therapy research collaboration. The platform provides a secure, scalable, and user-friendly solution for managing research ecosystems, enabling effective collaboration while maintaining strict security standards.",
        impact: "The platform has made significant impact in the Cell-Gene Therapy field:\n\n1. Improved Collaboration\n   - Streamlined communication between organizations\n   - Enhanced data sharing capabilities\n   - Reduced administrative overhead\n\n2. Enhanced Security\n   - Reduced security incidents\n   - Improved compliance with regulations\n   - Better data protection\n\n3. Increased Efficiency\n   - Faster onboarding process\n   - Reduced manual work\n   - Better resource utilization"
    },
    {
        id: 'mosymphony-qem',
        title: "Mosymphony | Quality Event Module",
        category: "Web",
        description: "Mosymphony is a cutting-edge application designed to streamline contract manufacturing processes for enterprises in the pharmaceutical industry. The platform fosters transparency and communication between Pharma sponsors and CMOs, while the quality event module tracks and records every event and quality control to ensure accountability. By providing secure communication channels, reliable data sharing, and real-time updates, Mosymphony builds trust and guarantees smooth manufacturing and distribution processes.",
        shortDescription: "Application for pharma contract manufacturing, with a module for quality event tracking and sponsor-CMO communication.",
        introduction: "Briefly introduce the Mosymphony QEM project here.",
        problemStatement: "Describe the core problem Mosymphony QEM aimed to solve.",
        developmentJourney: "Share insights into the development process of Mosymphony QEM.",
        strugglesAndSolutions: "Detail any challenges faced and how they were overcome during Mosymphony QEM development.",
        designThinking: "Explain the design philosophy and process behind Mosymphony QEM.",
        approach: "Describe the technical approach and architecture for Mosymphony QEM.",
        conclusion: "Summarize the outcomes and learnings from the Mosymphony QEM project.",
        impact: "Explain the impact Mosymphony QEM had or is expected to have.",
        tags: [
            {
                name: "JavaScript",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "React",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Redux",
                color: "linear-gradient(90deg, #a770ef 0%, #f6d365 100%)"
            },
            {
                name: "Material UI",
                color: "linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)"
            },
            {
                name: "CSS",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/qem.png",
        galleryImages: [
            {
                url: "/images/qem.png",
                alt: "Mosymphony QEM"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'netflix-clone',
        title: "Netflix Clone",
        category: "Web",
        description: "The Netflix Clone project is aimed at creating a replica of the popular streaming platform, Netflix, using React and GraphQL. The project will allow users to browse and watch movies and TV shows, just like on the original platform.",
        shortDescription: "A Netflix replica built with React and GraphQL for browsing and watching movies/TV shows.",
        introduction: "Briefly introduce the Netflix Clone project here.",
        problemStatement: "Describe the core problem Netflix Clone aimed to solve.",
        developmentJourney: "Share insights into the development process of Netflix Clone.",
        strugglesAndSolutions: "Detail any challenges faced and how they were overcome during Netflix Clone development.",
        designThinking: "Explain the design philosophy and process behind Netflix Clone.",
        approach: "Describe the technical approach and architecture for Netflix Clone.",
        conclusion: "Summarize the outcomes and learnings from the Netflix Clone project.",
        impact: "Explain the impact Netflix Clone had or is expected to have.",
        tags: [
            {
                name: "ReactJS",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "GraphQL API",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "DataStax AstraDB",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Netlify",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/net.jpg",
        galleryImages: [
            {
                url: "/images/net.jpg",
                alt: "Netflix Clone"
            }
        ],
        sourceCodeLink: "https://github.com/arun2github/workshop-graphql-netflix",
        liveLink: "#"
    },
    {
        id: 'node-mailer-app',
        title: "Node Mailer Application",
        category: "web",
        description: "The project is aimed at building an application that enables users to send a large number of emails using Node.js and the nodemailer library. The application will allow users to compose and send personalized emails to a large number of recipients with ease.",
        shortDescription: "Application for sending bulk personalized emails using Node.js and Nodemailer.",
        introduction: "Briefly introduce the Node Mailer Application project here.",
        problemStatement: "Describe the core problem Node Mailer Application aimed to solve.",
        developmentJourney: "Share insights into the development process of Node Mailer Application.",
        strugglesAndSolutions: "Detail any challenges faced and how they were overcome during Node Mailer Application development.",
        designThinking: "Explain the design philosophy and process behind Node Mailer Application.",
        approach: "Describe the technical approach and architecture for Node Mailer Application.",
        conclusion: "Summarize the outcomes and learnings from the Node Mailer Application project.",
        impact: "Explain the impact Node Mailer Application had or is expected to have.",
        tags: [
            {
                name: "NodeJS",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "JavaScript",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "SQL",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/nodeM.png",
        galleryImages: [
            {
                url: "/images/nodeM.png",
                alt: "Node Mailer App"
            }
        ],
        sourceCodeLink: "https://github.com/arun2github/Nodemailer/tree/master",
        liveLink: "#"
    }
];
const socialMediaLinks = [
    {
        name: 'linkedin',
        iconUrl: "/images/ln.png",
        url: "www.linkedin.com/in/asifpatankar"
    },
    {
        name: 'facebook',
        iconUrl: "/images/facebook.png",
        url: 'https://www.facebook.com/arun.disambiguation?mibextid=ZbWKwL'
    },
    {
        name: 'github',
        iconUrl: "/images/github.png",
        url: 'https://github.com/asifpatankar'
    }
];
const fonts = {
    FONT_MONTSERRAT: "Montserrat",
    FONT_POPPINS: "Poppins"
};
const achievements = [
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
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Hero.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolioData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Hero = ()=>{
    _s();
    const nameParts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].name.replace(",", "").split(" ");
    const firstName = nameParts.slice(1, nameParts.length - 1).join(" ");
    const lastName = nameParts[nameParts.length - 1];
    const titleWords = (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].title1 + ' ' + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].title2).split(' ');
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const textX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(x, {
        "Hero.useTransform[textX]": (latest)=>latest * 0.1
    }["Hero.useTransform[textX]"]);
    const textY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(y, {
        "Hero.useTransform[textY]": (latest)=>latest * 0.1
    }["Hero.useTransform[textY]"]);
    const iconsX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(x, {
        "Hero.useTransform[iconsX]": (latest)=>latest * 0.05
    }["Hero.useTransform[iconsX]"]);
    const iconsY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(y, {
        "Hero.useTransform[iconsY]": (latest)=>latest * 0.05
    }["Hero.useTransform[iconsY]"]);
    const handleMouseMove = (e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * 50); // Adjust multiplier for sensitivity
        y.set(yPct * 50);
    };
    const handleMouseLeave = ()=>{
        x.set(0);
        y.set(0);
    };
    const socialIcons = {
        linkedin: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
            size: 28
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 42,
            columnNumber: 15
        }, this),
        github: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            role: "img",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-7 w-7",
            fill: "currentColor",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "GitHub"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 43,
                    columnNumber: 124
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 43,
                    columnNumber: 145
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 43,
            columnNumber: 13
        }, this),
        instagram: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
            size: 28
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 44,
            columnNumber: 16
        }, this)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        id: "hero",
        className: "relative h-screen w-full flex flex-col items-center justify-center overflow-hidden",
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative z-10 text-center text-white p-4",
                style: {
                    x: textX,
                    y: textY
                },
                transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block mb-2",
                            children: [
                                firstName.split('').map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        initial: {
                                            opacity: 0,
                                            y: 50
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 20,
                                            delay: index * 0.05
                                        },
                                        className: "inline-block",
                                        children: char
                                    }, index, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-cyan-400",
                                    children: lastName.split('').map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            initial: {
                                                opacity: 0,
                                                y: 50
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                type: 'spring',
                                                stiffness: 100,
                                                damping: 20,
                                                delay: (firstName.length + index) * 0.05
                                            },
                                            className: "inline-block",
                                            children: char
                                        }, index, false, {
                                            fileName: "[project]/src/components/Hero.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "mt-4 text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 1.5,
                            duration: 0.8
                        },
                        children: titleWords.map((word, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block mr-2.5",
                                children: word
                            }, index, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 2,
                            duration: 0.8
                        },
                        className: "mt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#projects",
                            className: "group relative inline-block text-lg font-semibold",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10 px-8 py-3 text-white bg-black/50 border border-cyan-400/50 rounded-lg backdrop-blur-sm transition-all duration-300 group-hover:bg-cyan-400/20 group-hover:border-cyan-400/80 group-hover:shadow-cyan-500/50 group-hover:shadow-lg",
                                children: "View My Work"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-8 right-8 z-20",
                initial: {
                    opacity: 0,
                    x: 50
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    delay: 2,
                    duration: 0.8
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex space-x-5 text-white",
                    style: {
                        x: iconsX,
                        y: iconsY
                    },
                    transition: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 20
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["socialMediaLinks"].map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: social.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-white hover:text-cyan-400 transition-colors duration-300",
                            children: socialIcons[social.name.toLowerCase()] || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 133,
                                columnNumber: 86
                            }, this)
                        }, social.name, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-20",
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 2.5,
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                    className: "text-neutral-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
};
_s(Hero, "JkCIsdgHIBbd3xZDl7tazt3b+Rk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/About.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolioData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const About = ()=>{
    const fadeIn = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        }
    };
    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "relative text-white py-20 md:py-28 bg-transparent overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 relative z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center",
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: true,
                    amount: 0.3
                },
                variants: staggerContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "lg:col-span-2 flex justify-center items-center",
                        variants: fadeIn,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl rotate-12 blur-sm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-cyan-400/20 rounded-full blur-md"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "relative w-[350px] h-[450px] lg:w-[350px] lg:h-[400px] overflow-hidden bg-gradient-to-br from-cyan-400/10 to-purple-500/10 backdrop-blur-sm",
                                    style: {
                                        borderRadius: "2rem 0.5rem 2rem 0.5rem",
                                        border: "2px solid transparent",
                                        backgroundImage: "linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(147, 51, 234, 0.3))",
                                        backgroundClip: "padding-box"
                                    },
                                    animate: {
                                        boxShadow: [
                                            "0 8px 32px rgba(6, 182, 212, 0.3), 0 0 0 1px rgba(6, 182, 212, 0.2)",
                                            "0 12px 40px rgba(147, 51, 234, 0.3), 0 0 0 1px rgba(147, 51, 234, 0.2)",
                                            "0 8px 32px rgba(6, 182, 212, 0.3), 0 0 0 1px rgba(6, 182, 212, 0.2)"
                                        ],
                                        y: [
                                            0,
                                            -5,
                                            0
                                        ]
                                    },
                                    transition: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    },
                                    whileHover: {
                                        scale: 1.02,
                                        rotate: 1,
                                        transition: {
                                            duration: 0.3
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 rounded-[2rem_0.5rem_2rem_0.5rem] p-[2px]",
                                            style: {
                                                background: "linear-gradient(135deg, #06b6d4, #9333ea, #06b6d4)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full rounded-[calc(2rem-2px)_calc(0.5rem-2px)_calc(2rem-2px)_calc(0.5rem-2px)] overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/Asif_profile.jpg" // Placeholder image
                                                    ,
                                                    alt: "Asif Patankar",
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    className: "scale-105 transition-transform duration-700 hover:scale-110"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/About.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/About.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/About.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "lg:col-span-3 flex flex-col space-y-8",
                        variants: staggerContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "p-8 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl",
                                variants: fadeIn,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl lg:text-5xl font-extrabold text-cyan-400 mb-6",
                                        children: "About Me"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-neutral-300 leading-relaxed",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].about
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: fadeIn,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/AFROJSATWILKAR_CV.pdf",
                                    download: "Afroj_Satwilkar_CV.pdf",
                                    className: "group mt-2 relative inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-cyan-400 overflow-hidden transition-all duration-300 hover:text-black hover:shadow-cyan-400/50 hover:shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute left-0 top-0 h-full w-0 bg-cyan-400 transition-all duration-300 ease-in-out group-hover:w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About.tsx",
                                            lineNumber: 138,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative z-10 flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    size: 20,
                                                    className: "mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/About.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, this),
                                                "Download Resume"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/About.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 132,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/About.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/About.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
_c = About;
const __TURBOPACK__default__export__ = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Contact.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolioData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const socialIconMap = {
    linkedin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
    github: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
    instagram: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"]
};
const openToIconMap = {
    briefcase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"],
    dollarsign: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"],
    messagesquare: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"],
    github: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"],
    default: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"]
};
const ContactInfoItem = ({ icon, text, href })=>{
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start group text-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mr-4 text-cyan-400 mt-1",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/Contact.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-neutral-300 group-hover:text-white transition-colors",
                children: text.split(',').map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block",
                        children: item.trim()
                    }, index, false, {
                        fileName: "[project]/src/components/Contact.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Contact.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Contact.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
    return href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        className: "transition-transform hover:scale-105 inline-block",
        children: content
    }, void 0, false, {
        fileName: "[project]/src/components/Contact.tsx",
        lineNumber: 34,
        columnNumber: 17
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-block",
        children: content
    }, void 0, false, {
        fileName: "[project]/src/components/Contact.tsx",
        lineNumber: 34,
        columnNumber: 110
    }, this);
};
_c = ContactInfoItem;
const Contact = ()=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        submitting: false,
        success: false,
        error: false,
        message: ''
    });
    const handleChange = (e)=>{
        setFormData((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus({
            submitting: true,
            success: false,
            error: false,
            message: ''
        });
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                setStatus({
                    submitting: false,
                    success: true,
                    error: false,
                    message: data.message || 'Message sent successfully!'
                });
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                throw new Error(data.error || 'Something went wrong.');
            }
        } catch (error) {
            if (error instanceof Error) {
                setStatus({
                    submitting: false,
                    success: false,
                    error: true,
                    message: error.message || 'Failed to send message.'
                });
            } else {
                setStatus({
                    submitting: false,
                    success: false,
                    error: true,
                    message: 'An unknown error occurred.'
                });
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-20 md:py-28 bg-transparent text-white overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    initial: {
                        opacity: 0,
                        y: -30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        amount: 0.5
                    },
                    transition: {
                        duration: 0.7,
                        ease: "circOut"
                    },
                    className: "text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 text-center",
                    children: [
                        "Get In ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-cyan-400",
                            children: "Touch"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Contact.tsx",
                            lineNumber: 80,
                            columnNumber: 18
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.3
                            },
                            transition: {
                                duration: 0.8,
                                ease: "easeOut"
                            },
                            className: "space-y-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-5 flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-3xl font-bold text-cyan-400 mb-4",
                                            children: "Contact Information"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactInfoItem, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 94,
                                                columnNumber: 60
                                            }, void 0),
                                            text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].email,
                                            href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].email}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 94,
                                            columnNumber: 37
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactInfoItem, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 95,
                                                columnNumber: 60
                                            }, void 0),
                                            text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].phone
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 95,
                                            columnNumber: 37
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactInfoItem, {
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 96,
                                                columnNumber: 63
                                            }, void 0),
                                            text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].location
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 96,
                                            columnNumber: 40
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Contact.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].openTo && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].openTo.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-2xl font-bold text-cyan-400 mb-4",
                                            children: "I'm Open To"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].openTo.map((item, index)=>{
                                                const iconName = (item.icon || 'default').toLowerCase();
                                                const Icon = openToIconMap[iconName] || openToIconMap.default;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center bg-neutral-900/80 p-3 rounded-lg border border-neutral-800/80",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            size: 20,
                                                            className: "mr-3 text-cyan-400 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-neutral-300",
                                                            children: item.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Contact.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-2xl font-bold text-cyan-400 mb-4",
                                            children: "Follow Me"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-4",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["socialMediaLinks"].map((link)=>{
                                                const IconComponent = socialIconMap[link.name.toLowerCase()];
                                                return IconComponent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: link.url,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    "aria-label": link.name,
                                                    className: "p-3 bg-neutral-900/80 hover:bg-cyan-900/50 rounded-full text-neutral-400 hover:text-white transition-all duration-300 transform hover:scale-110 border border-neutral-800/80 hover:border-cyan-400/50",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                        size: 24
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Contact.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 23
                                                    }, this)
                                                }, link.name, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 21
                                                }, this) : null;
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Contact.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Contact.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true,
                                amount: 0.3
                            },
                            transition: {
                                duration: 0.8,
                                ease: "easeOut"
                            },
                            className: "bg-neutral-900/80 p-8 md:p-10 rounded-xl shadow-2xl border border-neutral-800/80",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "name",
                                        required: true,
                                        value: formData.name,
                                        onChange: handleChange,
                                        placeholder: "Your Name",
                                        className: "w-full px-4 py-3 bg-neutral-800/70 border-2 border-neutral-700/80 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all duration-300 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "email",
                                        required: true,
                                        value: formData.email,
                                        onChange: handleChange,
                                        placeholder: "Your Email",
                                        className: "w-full px-4 py-3 bg-neutral-800/70 border-2 border-neutral-700/80 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all duration-300 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "subject",
                                        required: true,
                                        value: formData.subject,
                                        onChange: handleChange,
                                        placeholder: "Subject",
                                        className: "w-full px-4 py-3 bg-neutral-800/70 border-2 border-neutral-700/80 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all duration-300 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "message",
                                        required: true,
                                        value: formData.message,
                                        onChange: handleChange,
                                        placeholder: "Your Message",
                                        rows: 5,
                                        className: "w-full px-4 py-3 bg-neutral-800/70 border-2 border-neutral-700/80 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all duration-300 text-white resize-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: status.submitting,
                                        className: "group w-full relative inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-cyan-400 overflow-hidden transition-all duration-300 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute left-0 top-0 h-full w-0 bg-cyan-400 transition-all duration-300 ease-in-out group-hover:w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative z-10 flex items-center",
                                                children: [
                                                    status.submitting ? 'Sending...' : 'Send Message',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                        size: 18,
                                                        className: "ml-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Contact.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    status.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-sm mt-2 text-center ${status.error ? 'text-red-500' : 'text-green-500'}`,
                                        children: status.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Contact.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Contact.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Contact.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
};
_s(Contact, "mxzmCcODtHNJqY/mINeNMr+h7kY=");
_c1 = Contact;
const __TURBOPACK__default__export__ = Contact;
var _c, _c1;
__turbopack_context__.k.register(_c, "ContactInfoItem");
__turbopack_context__.k.register(_c1, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Experience.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolioData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const ExperienceCard = ({ experience, index })=>{
    const cardVariants = {
        hidden: {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.2
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "mb-12 flex group",
        variants: cardVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true,
            amount: 0.3
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `hidden md:flex flex-col items-center mr-6 ${index % 2 === 0 ? 'order-1' : 'order-3 ml-6'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center justify-center w-12 h-12 rounded-full bg-[#2D3748] group-hover:bg-[#535C91] transition-all duration-300 border-4 border-[#1A1D24] shadow-lg",
                        style: {
                            backgroundColor: experience.iconBg || '#2D3748'
                        },
                        children: experience.iconUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: experience.iconUrl,
                            alt: `${experience.companyName} logo`,
                            width: 32,
                            height: 32,
                            className: "rounded-full object-contain p-1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Experience.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                            size: 24,
                            className: "text-neutral-300 group-hover:text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Experience.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1 flex-grow bg-gradient-to-b from-[#535C91] via-[#7E8CE0] to-transparent mt-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Experience.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `bg-[#2D3748]/50 p-6 rounded-lg shadow-xl hover:shadow-[#535C91]/40 transition-all duration-300 w-full md:w-auto flex-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-semibold text-[#A0AEC0] group-hover:text-[#7E8CE0] transition-colors duration-300",
                                children: experience.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-neutral-400 mt-1 sm:mt-0 bg-[#1A1D24]/70 px-3 py-1 rounded-full",
                                children: experience.date
                            }, void 0, false, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center text-neutral-300 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                size: 16,
                                className: "mr-2 text-[#7E8CE0]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: experience.companyName
                            }, void 0, false, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc list-inside text-neutral-200 space-y-2 pl-1",
                        children: experience.points.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "text-sm leading-relaxed",
                                children: point
                            }, i, false, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Experience.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Experience.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
};
_c = ExperienceCard;
const Experience = ()=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experiences"] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experiences"].length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "experience",
            className: "py-16 md:py-24 bg-gradient-to-br from-[#1A1D24] via-[#212530] to-[#1A1D24] text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-4 text-neutral-100",
                    children: "My Journey"
                }, void 0, false, {
                    fileName: "[project]/src/components/Experience.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-neutral-300",
                    children: "Experience details are not available at the moment."
                }, void 0, false, {
                    fileName: "[project]/src/components/Experience.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Experience.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        className: "py-20 md:py-32 bg-gradient-to-br from-[#1A1D24] via-[#212530] to-[#1A1D24]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    initial: {
                        opacity: 0,
                        y: -30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.7,
                        ease: "circOut"
                    },
                    className: "text-5xl md:text-6xl font-extrabold mb-16 md:mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7E8CE0] via-[#535C91] to-[#A0AEC0]",
                    children: "My Professional Journey"
                }, void 0, false, {
                    fileName: "[project]/src/components/Experience.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#535C91]/50 via-[#7E8CE0]/50 to-transparent md:hidden"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Experience.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experiences"].map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExperienceCard, {
                                experience: exp,
                                index: index
                            }, index, false, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Experience.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Experience.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Experience.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
};
_c1 = Experience;
const __TURBOPACK__default__export__ = Experience;
var _c, _c1;
__turbopack_context__.k.register(_c, "ExperienceCard");
__turbopack_context__.k.register(_c1, "Experience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Education.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolioData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const EducationCard = ({ entry, index })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.9
        },
        whileInView: {
            opacity: 1,
            scale: 1
        },
        viewport: {
            once: true,
            amount: 0.3
        },
        transition: {
            duration: 0.5,
            delay: index * 0.15
        },
        whileHover: {
            y: -10,
            transition: {
                duration: 0.3
            }
        },
        className: "bg-neutral-900/80 p-6 rounded-xl shadow-lg border border-neutral-800/80 group transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-400/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start space-x-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center bg-neutral-800/90 border-2 border-cyan-400/50 overflow-hidden",
                    children: entry.iconUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: entry.iconUrl,
                        alt: `${entry.collegeName} logo`,
                        width: 48,
                        height: 48,
                        className: "object-contain p-1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Education.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                        size: 32,
                        className: "text-cyan-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Education.tsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Education.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-grow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-neutral-100 group-hover:text-cyan-400 transition-colors duration-300",
                            children: entry.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/Education.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-md font-medium text-neutral-300 mt-1",
                            children: entry.collegeName
                        }, void 0, false, {
                            fileName: "[project]/src/components/Education.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-neutral-400 mt-1",
                            children: entry.date
                        }, void 0, false, {
                            fileName: "[project]/src/components/Education.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 border-t border-neutral-800/80 pt-4 space-y-2",
                            children: entry.branch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-neutral-300 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        size: 16,
                                        className: "mr-2 text-cyan-400/80"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Education.tsx",
                                        lineNumber: 37,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    entry.branch
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Education.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Education.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Education.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Education.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Education.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_c = EducationCard;
const Education = ()=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["education"] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["education"].length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "education",
            className: "py-20 md:py-28 bg-black text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-4 text-white",
                    children: "My Education"
                }, void 0, false, {
                    fileName: "[project]/src/components/Education.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-neutral-300",
                    children: "Education details are not available at the moment."
                }, void 0, false, {
                    fileName: "[project]/src/components/Education.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Education.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "education",
        className: "py-20 md:py-28 bg-transparent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    initial: {
                        opacity: 0,
                        y: -30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        amount: 0.5
                    },
                    transition: {
                        duration: 0.7,
                        ease: "circOut"
                    },
                    className: "text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 md:mb-20 text-center text-white",
                    children: [
                        "Academic ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-cyan-400",
                            children: "Background"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Education.tsx",
                            lineNumber: 67,
                            columnNumber: 20
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Education.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["education"].map((edu, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EducationCard, {
                            entry: edu,
                            index: index
                        }, index, false, {
                            fileName: "[project]/src/components/Education.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Education.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Education.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Education.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
};
_c1 = Education;
const __TURBOPACK__default__export__ = Education;
var _c, _c1;
__turbopack_context__.k.register(_c, "EducationCard");
__turbopack_context__.k.register(_c1, "Education");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Publications.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
;
const publications = [
    {
        id: 1,
        title: "Medium Articles on AI & Deep Learning",
        description: "Automating SoftEther VPN Client Connections on Linux: A Complete Guide” (2025)",
        authors: [
            "Asif Ashraf Patankar"
        ],
        journal: "Medium",
        year: 2025,
        link: "https://example.com/paper1",
        type: "journal"
    },
    {
        id: 2,
        title: "Research Publications",
        description: "Automatic radish wilt detection using image processing based techniques and machine learning algorithm.",
        authors: [
            "Asif Ashraf Patankar"
        ],
        journal: "International Conference on Web Technologies",
        year: 2020,
        link: "https://example.com/paper2",
        type: "conference"
    }
];
const Publications = ()=>{
    const fadeIn = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };
    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3
            }
        }
    };
    const getTypeIcon = (type)=>{
        switch(type){
            case 'journal':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    size: 20,
                    className: "text-blue-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/Publications.tsx",
                    lineNumber: 63,
                    columnNumber: 16
                }, this);
            case 'conference':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                    size: 20,
                    className: "text-green-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/Publications.tsx",
                    lineNumber: 65,
                    columnNumber: 16
                }, this);
            case 'book':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    size: 20,
                    className: "text-purple-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/Publications.tsx",
                    lineNumber: 67,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    size: 20,
                    className: "text-cyan-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/Publications.tsx",
                    lineNumber: 69,
                    columnNumber: 16
                }, this);
        }
    };
    const getTypeBadge = (type)=>{
        const colors = {
            journal: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
            conference: 'bg-green-500/20 text-green-300 border-green-500/30',
            book: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
            preprint: 'bg-orange-500/20 text-orange-300 border-orange-500/30'
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `px-3 py-1 text-xs font-semibold rounded-full border ${colors[type]}`,
            children: type.charAt(0).toUpperCase() + type.slice(1)
        }, void 0, false, {
            fileName: "[project]/src/components/Publications.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "publications",
        className: "relative text-white py-20 md:py-28 bg-transparent overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 relative z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: true,
                    amount: 0.1
                },
                variants: staggerContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: fadeIn,
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6",
                                children: [
                                    "Research & ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-cyan-400",
                                        children: "Publications"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Publications.tsx",
                                        lineNumber: 99,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Publications.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed",
                                children: "Explore my research contributions and published works in web development, machine learning, and software engineering."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Publications.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Publications.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8",
                        children: publications.map((publication)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: fadeIn,
                                className: "group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full h-32 mb-4 rounded-lg overflow-hidden bg-neutral-800",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center",
                                            children: [
                                                getTypeIcon(publication.type),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-2 text-sm font-medium",
                                                    children: "Publication"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Publications.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Publications.tsx",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Publications.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-3",
                                        children: [
                                            getTypeBadge(publication.type),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center text-sm text-neutral-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        size: 16,
                                                        className: "mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Publications.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 21
                                                    }, this),
                                                    publication.year
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Publications.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Publications.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300",
                                        children: publication.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Publications.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-neutral-300 text-sm leading-relaxed mb-4 line-clamp-3",
                                        children: publication.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Publications.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-neutral-400 mb-1",
                                                children: "Authors:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Publications.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-neutral-300",
                                                children: publication.authors.join(', ')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Publications.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Publications.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-neutral-400 mb-1",
                                                children: "Published in:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Publications.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-cyan-400",
                                                children: publication.journal
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Publications.tsx",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Publications.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: publication.link,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-white transition-colors duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Read Publication"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Publications.tsx",
                                                lineNumber: 157,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                size: 16,
                                                className: "ml-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Publications.tsx",
                                                lineNumber: 158,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Publications.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Publications.tsx",
                                        lineNumber: 161,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, publication.id, true, {
                                fileName: "[project]/src/components/Publications.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Publications.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: fadeIn,
                        className: "text-center mt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/publications",
                            className: "group relative inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-cyan-400 overflow-hidden transition-all duration-300 hover:text-black hover:shadow-cyan-400/50 hover:shadow-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute left-0 top-0 h-full w-0 bg-cyan-400 transition-all duration-300 ease-in-out group-hover:w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Publications.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            size: 20,
                                            className: "mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Publications.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this),
                                        "View All Publications"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Publications.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Publications.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Publications.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Publications.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Publications.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Publications.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
};
_c = Publications;
const __TURBOPACK__default__export__ = Publications;
var _c;
__turbopack_context__.k.register(_c, "Publications");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/NeuralNetworkBackground.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const NeuralNetworkBackground = ()=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    const [nodes, setNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [connections, setConnections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    // Initialize nodes and connections
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NeuralNetworkBackground.useEffect": ()=>{
            const updateDimensions = {
                "NeuralNetworkBackground.useEffect.updateDimensions": ()=>{
                    setDimensions({
                        width: window.innerWidth,
                        height: window.innerHeight
                    });
                }
            }["NeuralNetworkBackground.useEffect.updateDimensions"];
            updateDimensions();
            window.addEventListener('resize', updateDimensions);
            return ({
                "NeuralNetworkBackground.useEffect": ()=>window.removeEventListener('resize', updateDimensions)
            })["NeuralNetworkBackground.useEffect"];
        }
    }["NeuralNetworkBackground.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NeuralNetworkBackground.useEffect": ()=>{
            if (dimensions.width === 0 || dimensions.height === 0) return;
            // Create nodes with distinct 3D layers
            const layers = 4; // Reduced layers
            const totalNodes = Math.max(25, Math.floor(dimensions.width * dimensions.height / 30000)); // Fewer particles
            const newNodes = [];
            // Create nodes in structured layers for better 3D effect
            for(let layer = 0; layer < layers; layer++){
                const nodesInLayer = Math.floor(totalNodes / layers) + (layer === 0 ? totalNodes % layers : 0);
                for(let i = 0; i < nodesInLayer; i++){
                    const z = layer / (layers - 1);
                    const perspectiveScale = 0.3 + z * 0.7;
                    newNodes.push({
                        id: newNodes.length,
                        x: Math.random() * dimensions.width,
                        y: Math.random() * dimensions.height,
                        z: z,
                        vx: (Math.random() - 0.5) * 0.02 * perspectiveScale,
                        vy: (Math.random() - 0.5) * 0.02 * perspectiveScale,
                        vz: (Math.random() - 0.5) * 0.008,
                        connections: [],
                        size: (Math.random() * 1 + 1) * perspectiveScale * (1 + z),
                        opacity: (Math.random() * 0.4 + 0.6) * perspectiveScale,
                        pulsePhase: Math.random() * Math.PI * 2,
                        layer: layer
                    });
                }
            }
            // Create connections
            const newConnections = [];
            const maxDistance = 150;
            const maxConnections = 4;
            newNodes.forEach({
                "NeuralNetworkBackground.useEffect": (node, i)=>{
                    let connectionCount = 0;
                    newNodes.forEach({
                        "NeuralNetworkBackground.useEffect": (otherNode, j)=>{
                            if (i !== j && connectionCount < maxConnections) {
                                const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2));
                                if (distance < maxDistance && Math.random() > 0.7) {
                                    const connectionExists = newConnections.some({
                                        "NeuralNetworkBackground.useEffect.connectionExists": (conn)=>conn.from === i && conn.to === j || conn.from === j && conn.to === i
                                    }["NeuralNetworkBackground.useEffect.connectionExists"]);
                                    if (!connectionExists) {
                                        newConnections.push({
                                            from: i,
                                            to: j,
                                            strength: Math.random() * 0.8 + 0.2,
                                            active: Math.random() > 0.5,
                                            pulseProgress: Math.random()
                                        });
                                        node.connections.push(j);
                                        connectionCount++;
                                    }
                                }
                            }
                        }
                    }["NeuralNetworkBackground.useEffect"]);
                }
            }["NeuralNetworkBackground.useEffect"]);
            setNodes(newNodes);
            setConnections(newConnections);
        }
    }["NeuralNetworkBackground.useEffect"], [
        dimensions
    ]);
    // Mouse movement handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NeuralNetworkBackground.useEffect": ()=>{
            const handleMouseMove = {
                "NeuralNetworkBackground.useEffect.handleMouseMove": (e)=>{
                    mouseRef.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }["NeuralNetworkBackground.useEffect.handleMouseMove"];
            window.addEventListener('mousemove', handleMouseMove);
            return ({
                "NeuralNetworkBackground.useEffect": ()=>window.removeEventListener('mousemove', handleMouseMove)
            })["NeuralNetworkBackground.useEffect"];
        }
    }["NeuralNetworkBackground.useEffect"], []);
    // Animation loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NeuralNetworkBackground.useEffect": ()=>{
            if (!canvasRef.current || nodes.length === 0) return;
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            const animate = {
                "NeuralNetworkBackground.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, dimensions.width, dimensions.height);
                    // Update nodes
                    const updatedNodes = nodes.map({
                        "NeuralNetworkBackground.useEffect.animate.updatedNodes": (node)=>{
                            // Mouse interaction
                            const mouseDistance = Math.sqrt(Math.pow(node.x - mouseRef.current.x, 2) + Math.pow(node.y - mouseRef.current.y, 2));
                            const mouseInfluence = Math.max(0, 1 - mouseDistance / 200);
                            const attractionForce = mouseInfluence * 0.02;
                            if (mouseDistance < 200) {
                                const angle = Math.atan2(mouseRef.current.y - node.y, mouseRef.current.x - node.x);
                                node.vx += Math.cos(angle) * attractionForce;
                                node.vy += Math.sin(angle) * attractionForce;
                            }
                            // Update position with 3D movement
                            node.x += node.vx;
                            node.y += node.vy;
                            node.z += node.vz;
                            // Boundary wrapping
                            if (node.x < 0) node.x = dimensions.width;
                            if (node.x > dimensions.width) node.x = 0;
                            if (node.y < 0) node.y = dimensions.height;
                            if (node.y > dimensions.height) node.y = 0;
                            if (node.z < 0) node.z = 1;
                            if (node.z > 1) node.z = 0;
                            // Add some damping
                            node.vx *= 0.995;
                            node.vy *= 0.995;
                            node.vz *= 0.995;
                            // Update pulse (even slower)
                            node.pulsePhase += 0.003; // Slower pulse
                            const baseOpacity = (0.4 + Math.sin(node.pulsePhase) * 0.3) * (1 + node.z * 0.8);
                            node.opacity = Math.max(0.2, baseOpacity);
                            return node;
                        }
                    }["NeuralNetworkBackground.useEffect.animate.updatedNodes"]);
                    // Update connections (slower pulse)
                    const updatedConnections = connections.map({
                        "NeuralNetworkBackground.useEffect.animate.updatedConnections": (conn)=>{
                            conn.pulseProgress += 0.005; // Slower connection pulses
                            if (conn.pulseProgress > 1) {
                                conn.pulseProgress = 0;
                                conn.active = Math.random() > 0.2;
                            }
                            return conn;
                        }
                    }["NeuralNetworkBackground.useEffect.animate.updatedConnections"]);
                    // Draw connections with 3D perspective
                    const connectionsWithZ = updatedConnections.map({
                        "NeuralNetworkBackground.useEffect.animate.connectionsWithZ": (conn)=>{
                            const fromNode = updatedNodes[conn.from];
                            const toNode = updatedNodes[conn.to];
                            const avgZ = fromNode && toNode ? (fromNode.z + toNode.z) / 2 : 0;
                            return {
                                ...conn,
                                avgZ
                            };
                        }
                    }["NeuralNetworkBackground.useEffect.animate.connectionsWithZ"]);
                    const sortedConnections = connectionsWithZ.sort({
                        "NeuralNetworkBackground.useEffect.animate.sortedConnections": (a, b)=>a.avgZ - b.avgZ
                    }["NeuralNetworkBackground.useEffect.animate.sortedConnections"]);
                    sortedConnections.forEach({
                        "NeuralNetworkBackground.useEffect.animate": (conn)=>{
                            const fromNode = updatedNodes[conn.from];
                            const toNode = updatedNodes[conn.to];
                            if (!fromNode || !toNode) return;
                            // Apply perspective transformation
                            const fromX = fromNode.x + (fromNode.x - dimensions.width / 2) * fromNode.z * 0.1;
                            const fromY = fromNode.y + (fromNode.y - dimensions.height / 2) * fromNode.z * 0.1;
                            const toX = toNode.x + (toNode.x - dimensions.width / 2) * toNode.z * 0.1;
                            const toY = toNode.y + (toNode.y - dimensions.height / 2) * toNode.z * 0.1;
                            const distance = Math.sqrt(Math.pow(fromX - toX, 2) + Math.pow(fromY - toY, 2));
                            if (distance < 250) {
                                const avgZ = conn.avgZ;
                                const depthScale = 0.5 + avgZ * 1.5;
                                // Create gradient line
                                const gradient = ctx.createLinearGradient(fromX, fromY, toX, toY);
                                const fromR = Math.floor(80 + fromNode.z * 175);
                                const fromG = Math.floor(120 + fromNode.z * 135);
                                const toR = Math.floor(80 + toNode.z * 175);
                                const toG = Math.floor(120 + toNode.z * 135);
                                gradient.addColorStop(0, `rgba(${fromR}, ${fromG}, 255, ${fromNode.opacity * 0.6})`);
                                gradient.addColorStop(1, `rgba(${toR}, ${toG}, 255, ${toNode.opacity * 0.6})`);
                                ctx.beginPath();
                                ctx.moveTo(fromX, fromY);
                                ctx.lineTo(toX, toY);
                                const baseOpacity = conn.active ? (0.3 + Math.sin(conn.pulseProgress * Math.PI * 2) * 0.5) * (1 - distance / 250) * depthScale : 0.15 * (1 - distance / 250) * depthScale;
                                ctx.strokeStyle = gradient;
                                ctx.lineWidth = conn.strength * depthScale;
                                const oldAlpha = ctx.globalAlpha;
                                ctx.globalAlpha = Math.min(baseOpacity, 0.9);
                                ctx.stroke();
                                ctx.globalAlpha = oldAlpha;
                                // Enhanced pulse effect
                                if (conn.active && conn.pulseProgress < 0.9) {
                                    const pulseX = fromX + (toX - fromX) * conn.pulseProgress;
                                    const pulseY = fromY + (toY - fromY) * conn.pulseProgress;
                                    const pulseZ = fromNode.z + (toNode.z - fromNode.z) * conn.pulseProgress;
                                    const pulseSize = (2 + pulseZ * 3) * depthScale;
                                    ctx.beginPath();
                                    ctx.arc(pulseX, pulseY, pulseSize, 0, Math.PI * 2);
                                    const pulseOpacity = (0.9 - conn.pulseProgress) * depthScale;
                                    ctx.fillStyle = `rgba(255, 255, 255, ${pulseOpacity})`;
                                    ctx.fill();
                                    // Pulse glow
                                    ctx.beginPath();
                                    ctx.arc(pulseX, pulseY, pulseSize * 2, 0, Math.PI * 2);
                                    ctx.fillStyle = `rgba(150, 200, 255, ${pulseOpacity * 0.3})`;
                                    ctx.fill();
                                }
                            }
                        }
                    }["NeuralNetworkBackground.useEffect.animate"]);
                    // Draw nodes by depth layers
                    const sortedNodes = updatedNodes.slice().sort({
                        "NeuralNetworkBackground.useEffect.animate.sortedNodes": (a, b)=>a.z - b.z
                    }["NeuralNetworkBackground.useEffect.animate.sortedNodes"]);
                    sortedNodes.forEach({
                        "NeuralNetworkBackground.useEffect.animate": (node)=>{
                            const perspectiveX = node.x + (node.x - dimensions.width / 2) * node.z * 0.1;
                            const perspectiveY = node.y + (node.y - dimensions.height / 2) * node.z * 0.1;
                            // Shadow effect for back layers
                            if (node.z < 0.8) {
                                ctx.beginPath();
                                ctx.arc(perspectiveX + 2, perspectiveY + 2, node.size * 0.8, 0, Math.PI * 2);
                                ctx.fillStyle = `rgba(0, 0, 50, ${(1 - node.z) * 0.3})`;
                                ctx.fill();
                            }
                            // Enhanced 3D glow effect
                            const glowRadius = node.size * (2 + node.z * 3);
                            const gradient = ctx.createRadialGradient(perspectiveX, perspectiveY, 0, perspectiveX, perspectiveY, glowRadius);
                            // Dynamic color palette based on depth
                            const r = Math.floor(100 + node.z * 155);
                            const g = Math.floor(150 + node.z * 105);
                            const b = 255;
                            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${node.opacity * 0.8})`);
                            gradient.addColorStop(0.3, `rgba(${Math.floor(r * 0.7)}, ${Math.floor(g * 0.7)}, ${b}, ${node.opacity * 0.4})`);
                            gradient.addColorStop(1, `rgba(50, 100, 255, 0)`);
                            ctx.beginPath();
                            ctx.arc(perspectiveX, perspectiveY, glowRadius, 0, Math.PI * 2);
                            ctx.fillStyle = gradient;
                            ctx.fill();
                            // Main node core
                            ctx.beginPath();
                            ctx.arc(perspectiveX, perspectiveY, node.size, 0, Math.PI * 2);
                            const coreOpacity = node.opacity * (0.8 + node.z * 0.2);
                            ctx.fillStyle = `rgba(255, 255, 255, ${coreOpacity})`;
                            ctx.fill();
                            // Inner highlight for 3D effect
                            ctx.beginPath();
                            const highlightOffset = node.size * 0.25;
                            ctx.arc(perspectiveX - highlightOffset, perspectiveY - highlightOffset, node.size * 0.3, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity * 0.9})`;
                            ctx.fill();
                            // Outer ring for depth perception
                            if (node.z > 0.6) {
                                ctx.beginPath();
                                ctx.arc(perspectiveX, perspectiveY, node.size + 1, 0, Math.PI * 2);
                                ctx.strokeStyle = `rgba(150, 200, 255, ${node.opacity * 0.3})`;
                                ctx.lineWidth = 1;
                                ctx.stroke();
                            }
                        }
                    }["NeuralNetworkBackground.useEffect.animate"]);
                    setNodes(updatedNodes);
                    setConnections(updatedConnections);
                    animationFrameRef.current = requestAnimationFrame(animate);
                }
            }["NeuralNetworkBackground.useEffect.animate"];
            animate();
            return ({
                "NeuralNetworkBackground.useEffect": ()=>{
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                }
            })["NeuralNetworkBackground.useEffect"];
        }
    }["NeuralNetworkBackground.useEffect"], [
        nodes,
        connections,
        dimensions
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed inset-0 z-0",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 2
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            width: dimensions.width,
            height: dimensions.height,
            className: "absolute inset-0 bg-black",
            style: {
                filter: 'blur(0.5px)'
            }
        }, void 0, false, {
            fileName: "[project]/src/components/NeuralNetworkBackground.tsx",
            lineNumber: 352,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/NeuralNetworkBackground.tsx",
        lineNumber: 346,
        columnNumber: 5
    }, this);
};
_s(NeuralNetworkBackground, "SWp2knHRsZk7sCkoUFYoSAwZGvI=");
_c = NeuralNetworkBackground;
const __TURBOPACK__default__export__ = NeuralNetworkBackground;
var _c;
__turbopack_context__.k.register(_c, "NeuralNetworkBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/About.tsx [app-client] (ecmascript)");
// import Projects from "@/components/Projects";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Contact.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Experience$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Experience.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Education$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Education.tsx [app-client] (ecmascript)");
// import SpaceBackground from "@/components/SpaceBackground";
// import Technologies from "@/components/Technologies";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Publications$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Publications.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NeuralNetworkBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NeuralNetworkBackground.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex min-h-screen flex-col items-center justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NeuralNetworkBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Experience$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Publications$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Education$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Contact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_cddf44e0._.js.map