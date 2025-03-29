const enTranslations = {
  nav: {
    home: "Home",
    projects: "Projects",
    resume: "Resume",
    contact: "Contact"
  },
  home: {
    welcome: "Welcome to my website!",
    intro: "I'm Kylian Brault, a computer science student. My website is a showcase for my skills and projects, where I share my creations and experiences. Explore my work to discover how I transform ideas into digital reality.",
    resumeBtn: "Resume",
    contactBtn: "Contact me"
  },
  projects: {
    title: "Last Projects",
    learnMore: "Learn more",
    chickenCoop: {
      title: "Smart chicken coop",
      description: "The smart chicken coop project is a student initiative to create a connected chicken coop system. It uses a thermal camera for egg detection and a 3D-printed mechanism for egg collection. A Raspberry Pi 4 controls the system and sends notifications via a mobile app. The goal is to introduce students to engineering, from design to implementation."
    },
    portfolio: {
      title: "Portfolio",
      description: "This portfolio website was designed and developed to showcase my projects and skills. The website features responsive design, clean layout, and modern web technologies to create an optimal viewing experience across various devices."
    },
    seriousGame: {
      title: "Serious Game",
      description: "The serious game is a student project aimed at developing a 2D serious game on cybersecurity. The game, developed on Unity with C#, aims to educate players about cybersecurity threats and teach them how to detect and counter them. It consists of two main phases: detecting suspicious addresses and stopping the spread of a computer infection."
    },
    reservation: {
      title: "Reservation System",
      description: "A comprehensive reservation system built with PHP and MySQL. This project features user registration and authentication with email verification, appointment scheduling with calendar integration, and profile management capabilities. The system implements security practices including CSRF protection and password hashing."
    },
    backButton: "Back to Projects"
  },
  chickenCoop: {
    title: "Smart Chicken Coop",
    aboutTitle: "About this project",
    aboutText1: "The smart chicken coop project is a student initiative to create a connected chicken coop system. It uses a thermal camera for egg detection and a 3D-printed mechanism for egg collection. A Raspberry Pi 4 controls the system and sends notifications via a mobile app. The goal is to introduce students to engineering, from design to implementation.",
    aboutText2: "This section details my contribution to the \"Smart Chicken\" year project, focusing on the automated egg collection system. As part of a larger initiative to create a smart chicken coop, my role involved designing and implementing a mechanism to automatically retrieve eggs after they were detected. This system aimed to reduce manual effort, minimize egg damage, and integrate seamlessly with the thermal egg detection. The ultimate goal was to create a fully functional smart coop, as depicted in the project overview image.",
    technologiesTitle: "Technologies",
    tech1: "Raspberry Pi (for overall system control and integration)",
    tech2: "Mechanical components (motors for movement)",
    tech3: "Electronics for motor control and sensing",
    featuresTitle: "Key Features",
    feature1Title: "Automated Egg Retrieval:",
    feature1Text: "Mechanism to physically collect eggs from the nesting area after detection.",
    feature2Title: "Automated Transfer to Storage:",
    feature2Text: "Directed collected eggs towards a designated storage area within the coop.",
    techNotionsTitle: "Technical Notions",
    bubble1: "Python Automation",
    bubble2: "3D Printing"
  },
  seriousGame: {
    title: "Serious Game",
    aboutTitle: "About this project",
    aboutText1: "The serious game is a student project aimed at developing a 2D serious game on cybersecurity. The game, developed on Unity with C#, aims to educate players about cybersecurity threats and teach them how to detect and counter them. It consists of two main phases: detecting suspicious addresses and stopping the spread of a computer infection.",
    aboutText2: "This serious game project was developed as an educational tool that combines gaming elements with educational content. The game was designed to teach specific skills or knowledge in an engaging and interactive way, making learning more enjoyable and effective.",
    technologiesTitle: "Technologies",
    tech1: "Unity Game Engine",
    tech2: "C# Programming",
    tech3: "UI/UX Design",
    featuresTitle: "Key Features",
    feature1Title: "Interactive Learning:",
    feature1Text: "Engaging gameplay mechanics that reinforce educational content.",
    feature2Title: "Adaptive Difficulty:",
    feature2Text: "Adjusts challenge level based on player performance.",
    techNotionsTitle: "Technical Notions",
    gameDesign: "Game Design"
  },
  portfolioProject: {
    title: "Portfolio Website",
    aboutTitle: "About this project",
    aboutText1: "This portfolio website was designed and developed to showcase my projects and skills. The website features responsive design, clean layout, and modern web technologies to create an optimal viewing experience across various devices.",
    aboutText2: "My personal portfolio website serves as a central hub for my professional information. Developed with HTML, CSS, and JavaScript, it provides a responsive design to ensure optimal viewing on any device. Key features include a project showcase with detailed descriptions and links, an \"Resume\" section outlining my background and skills, and a contact form for visitors to easily reach out. The site is designed to present my work, skills, and experience in a clear and engaging manner.",
    technologiesTitle: "Technologies",
    tech1: "HTML5 / CSS3",
    tech2: "JavaScript",
    tech3: "Responsive Web Design",
    featuresTitle: "Key Features",
    feature1Title: "Responsive Design:",
    feature1Text: "Adapts to various screen sizes for optimal viewing experience.",
    feature2Title: "Project Showcase:",
    feature2Text: "Dedicated pages for each project with detailed information.",
    feature3Title: "Contact Form:",
    feature3Text: "Easy way for visitors to get in touch.",
    techNotionsTitle: "Technical Notions",
    responsiveDesign: "Responsive Design",
    linksTitle: "Links",
    viewGithub: "View on GitHub"
  },
  reservationProject: {
    title: "Reservation System",
    aboutTitle: "About this project",
    aboutText1: "A comprehensive reservation system built with PHP and MySQL. This project features user registration and authentication with email verification, appointment scheduling with calendar integration, and profile management capabilities. The system implements security practices including CSRF protection and password hashing.",
    aboutText2: "The reservation system was developed to provide a complete solution for managing appointments and user accounts. Users can register with email verification, log in securely, schedule appointments using an interactive calendar, manage their profile information, and cancel appointments when needed. The system includes admin capabilities and focuses on security best practices throughout the application.",
    technologiesTitle: "Technologies",
    tech1: "PHP",
    tech2: "MySQL Database",
    tech3: "JavaScript with FullCalendar",
    tech4: "HTML5/CSS3",
    featuresTitle: "Key Features",
    feature1Title: "User Authentication:",
    feature1Text: "Secure registration and login system with email verification.",
    feature2Title: "Appointment Management:", 
    feature2Text: "Interactive calendar for scheduling and managing appointments.",
    feature3Title: "Profile Management:",
    feature3Text: "Users can view and update their personal information.",
    feature4Title: "Security Features:",
    feature4Text: "CSRF protection, password hashing, and input validation throughout the application.",
    techNotionsTitle: "Technical Notions",
    bubble1: "Authentication",
    bubble2: "CSRF Protection",
    linksTitle: "Links",
    viewDemo: "View Demo"
  },
  contact: {
    title: "Contact me",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email address",
    subjectPlaceholder: "What is this regarding ?",
    messagePlaceholder: "Your message here...",
    sendButton: "Send Message",
    successMessage: "Your message has been sent successfully!",
    errorMessage: "Failed to send message. Please try again.",
    securityError: "Security verification failed. Please try again."
  },
  footer: {
    copyright: "© 2025 Kylian BRAULT - All rights reserved."
  }
};