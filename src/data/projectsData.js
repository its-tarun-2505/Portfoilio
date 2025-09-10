const projectsData = [
  // cloudCart ->  E-Commerce by NextJs
  {
    id: "cloudcart",
    slug: "cloudcart",
    title: "CloudCart",
    subtitle: "Next.js E-Commerce Platform",
    shortDesc:
      "Modern e-commerce web app built with Next.js, featuring GitHub OAuth authentication, product catalog, and responsive UI.",
    tags: ["Next.js", "NextAuth", "OAuth", "E-Commerce"],
    thumbnail: "/ProjectImages/cloudCart/cloudcart-thumbnail.png",
    thumbnailAlt: "CloudCart application preview",
    techStack: [
      "Next.js 15.5.2",
      "React 19.1.0",
      "NextAuth.js",
      "CSS Modules",
      "Lucide React",
      "Node.js"
    ],
    description: `
  CloudCart is a modern e-commerce web application built using Next.js (App Router) that integrates authentication, product catalogs, and responsive UI. It demonstrates production-ready features like protected routes, server-side rendering, and incremental static regeneration.

  Authentication is handled via NextAuth.js with GitHub OAuth, ensuring secure and smooth sign-in flows. Middleware enforces route protection, redirecting unauthenticated users to a custom login page. The product catalog is powered by the DummyJSON API, displaying products across categories like Beauty, Furniture, and Groceries with filtering and grouping capabilities.

  Product detail pages use dynamic routing and provide detailed information, including price calculations, discount handling, stock availability, and ratings. Optimizations like ISR, lazy loading, and Next.js Image ensure performance and scalability. 

  The UI is mobile-first, styled with Tailwind CSS and CSS Modules, and enhanced with Lucide icons and Google Fonts. The navigation includes breadcrumb support and a responsive hamburger menu. Together, these features make CloudCart a production-quality foundation for e-commerce platforms.
    `,
    keyPoints: [
      "Implemented GitHub OAuth authentication with NextAuth.js.",
      "Protected product routes using NextAuth middleware.",
      "Fetched and displayed products from DummyJSON API with category filtering.",
      "Built dynamic product detail pages with ISR and performance optimizations.",
      "Designed a responsive UI with Tailwind CSS, CSS Modules, and Google Fonts."
    ],
    images: [
      "/ProjectImages/cloudCart/image1.png",
      "/ProjectImages/cloudCart/image2.png",
      "/ProjectImages/cloudCart/image3.png",
      "/ProjectImages/cloudCart/image4.png",
      "/ProjectImages/cloudCart/image5.png",
      "/ProjectImages/cloudCart/image6.png",
      "/ProjectImages/cloudCart/image7.png",
    ],
    githubLink: "https://github.com/its-tarun-2505/CloudCart__NextJS",
    liveLink: "https://cloud-cart-next-js.vercel.app/",
    videoLink: "",
    projectType: "E-Commerce Platform",
    duration: "2 weeks",
    status: "Completed"
  },
  // RoomLoop
  {
    id: "roomloop",
    slug: "roomloop",
    title: "RoomLoop",
    subtitle: "Real-Time Micro-Meetup MERN Platform",
    shortDesc:
      "Real-time MERN-based micro-meetup app with secure rooms and instant messaging.",
    tags: ["MERN", "Socket.io", "Real-time", "JWT"],
    thumbnail: "/ProjectImages/roomLoop/roomloop-thumbnail.jpg",
    thumbnailAlt: "RoomLoop application preview",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "JWT",
      "Tailwind CSS",
      "Bcrypt",
    ],
    description: `
RoomLoop is a robust real-time micro-meetup platform that bridges the gap between idea-sharing and spontaneous collaboration. Born from the need for lightweight digital gatherings without the overhead of full-scale video conferencing apps, RoomLoop empowers users to join and host text-based rooms in real time with instant notifications, seamless UX, and secure interactions.

The app was architected using the MERN stack. On the backend, Express.js and MongoDB structure the data flow across multiple models like users, rooms, chats, and sessions. Authentication is safeguarded using JWT for session tokens and bcrypt for hashed passwords. On the frontend, React handles routing and state while Tailwind CSS ensures sleek responsiveness. Socket.io enables live messaging and dynamic room status updates.

RoomLoop's room system includes over 7 predefined room types (e.g., coding help, brainstorms, feedback loops), each with automatic open/closed status based on user activity. This structure boosts engagement and reduces confusion around scheduling. The mobile-first design ensures a consistent experience across screen sizes. With over 100+ concurrent simulated users tested, the app demonstrated stability and scalability.
    `,
    keyPoints: [
      "Built a 7+ category room system with automatic state transitions.",
      "Integrated Socket.io to provide real-time updates across components.",
      "Used JWT for authentication and bcrypt for secure user sessions.",
      "Designed for 95% mobile compatibility using Tailwind CSS.",
      "Deployed with fully scalable routing and model separation.",
    ],
    images: [
      "/ProjectImages/roomLoop/image1.png",
      "/ProjectImages/roomLoop/image2.png",
      "/ProjectImages/roomLoop/image3.png",
      "/ProjectImages/roomLoop/image4.png",
      "/ProjectImages/roomLoop/image5.png",
      "/ProjectImages/roomLoop/image6.png",
      "/ProjectImages/roomLoop/image7.png",
      "/ProjectImages/roomLoop/image8.png",
      "/ProjectImages/roomLoop/image9.png",
      "/ProjectImages/roomLoop/image10.png",
    ],
    githubLink: "https://github.com/its-tarun-2505/roomloop",
    liveLink: "https://roomloop-vsru.vercel.app/",
    videoLink:
      "https://drive.google.com/file/d/1U8SR39pcuI9nTrRpU_0Td708-D1UbhY7/view",
    projectType: "Real-time Collaboration Tool",
    // role: "Full-stack Developer",
    duration: "5 weeks",
    status:"Completed"
  },

  // Brain Tumor Detection System
  {
    id: "brain-tumor-detection",
    slug: "brain-tumor-detection",
    title: "Brain Tumor Detection System",
    subtitle: "AI-Powered MRI Scan Classifier",
    shortDesc:
      "A deep learning tool for real-time detection of brain tumors from MRI scans.",
    tags: ["Deep Learning", "CNN", "OpenCV", "TensorFlow", "Medical AI"],
    thumbnail: "/ProjectImages/brainTumor/brainTumor-thumbnail.jpeg",
    thumbnailAlt: "MRI scan showing detection overlay in Brain Tumor Detector",
    techStack: ["Python", "TensorFlow", "OpenCV", "NumPy", "Matplotlib"],
    description: `
    The Brain Tumor Detection System is a deep learning–based application that aids radiologists and medical practitioners in early detection of brain tumors using MRI scans. Developed with a Convolutional Neural Network (CNN) trained on labeled MRI datasets, it helps improve diagnosis accuracy and speed.
    
    The system ingests grayscale MRI images, applies preprocessing via OpenCV (resizing, normalization), and then feeds them into a CNN architecture built in TensorFlow. The model was trained over multiple epochs to achieve over 95% accuracy in detecting anomalies.
    
    For visualization and human interpretability, the app displays both the raw MRI scan and the model’s prediction alongside confidence scores. It includes a user interface to upload and evaluate new MRI scans in real-time. This prototype has been tested across various datasets and shown to reduce processing latency by 20%.
    
    Future integrations are planned with EHR systems to allow hospital-wide accessibility, thereby improving medical collaboration and centralized patient care.
    `,
    keyPoints: [
      "Achieved 95% classification accuracy on real MRI scans using a CNN.",
      "Reduced image preprocessing and model inference time by 20%.",
      "Created a user-friendly interface for scan upload and result display.",
      "Tested with 100+ real-world examples, enabling fast, real-time detection.",
      "Explored secure EHR system integrations for clinical deployment.",
    ],
    images: [
      "/ProjectImages/brainTumor/image1.png",
      "/ProjectImages/brainTumor/image2.png",
      "/ProjectImages/brainTumor/image3.png",
      "/ProjectImages/brainTumor/image4.png",
      "/ProjectImages/brainTumor/image5.png",
      "/ProjectImages/brainTumor/image6.png",
    ],
    githubLink: "https://github.com/its-tarun-2505/Brain_Tumor_Detection",
    liveLink: null,
    videoLink: null,
    projectType: "Medical AI Tool",
    // role: "Machine Learning Developer",
    duration: "Semester long project", //"Academic / Personal Research Project"
    status:"Completed"
  },

    // portfolio
  {
    id: "portfolio",
    slug: "portfolio",
    title: "Portfolio",
    subtitle: "Personal space on the web.",
    shortDesc:
      "Showcases projects, skills, and blog posts with a CMS-style admin panel.",
    tags: ["MERN", "Tailwind", "Context API", "JWT"],
    thumbnail: "/ProjectImages/portfolio/portfolio-thubmnail.png",
    thumbnailAlt: "Portfolio website preview",

    techStack: [
      "React.js",
      "Vite",
      "HTML5",
      "JavaScript",
      "CSS3",
      "Git/Github"
    ],

    description: `
This portfolio website is a full-stack MERN application that highlights my projects, skills, and professional journey.  
The frontend is built with React, React Router, and the Context API for global state (theme, authentication, and project data). Tailwind CSS ensures a responsive, mobile-first UI.

The backend uses Express.js with MongoDB for dynamic content storage—projects, blog posts, and contact messages are all stored as documents. JWT secures the admin dashboard, while Cloudinary handles image uploads for project galleries.

An admin panel lets me add or edit projects on the fly without redeploying. Page-level code-splitting and lazy loading keep performance snappy even on slower networks.
  `,

    keyPoints: [
      "Built with the MERN stack",
      "Admin dashboard secured by JWT‐protected routes.",
      "Dynamic project and blog management—no code deployment needed to update content.",
      "Fully responsive design via Tailwind CSS; dark/light theme toggle.",
    ],

    images: [
      "/ProjectImages/portfolio/image1.png",
      "/ProjectImages/portfolio/image2.png",
      "/ProjectImages/portfolio/image3.png",
      "/ProjectImages/portfolio/image4.png",
      "/ProjectImages/portfolio/image5.png",
      "/ProjectImages/portfolio/image6.png",
    ],

    githubLink: "https://github.com/its-tarun-2505/Portfoilio",
    liveLink: "https://portfoilio-topaz.vercel.app/home",
    videoLink: null,
    projectType: "Personal Portfolio",
    duration: "1 week",
    status:"Completed"
  },
  // //study-notion
  // {
  //   id: "study-notion",
  //   slug: "study-notion",
  //   title: "Study Notion",
  //   subtitle: "Full-Stack E-Learning Platform",
  //   shortDesc: "Interactive learning platform for educators and learners built with the MERN stack.",
  //   tags: ["MERN", "LMS", "Redux", "Tailwind", "OTP Auth"],
  //   thumbnail: "myPhoto.png",
  //   thumbnailAlt: "Study Notion course management and dashboard preview",
  //   techStack: [
  //     "MongoDB",
  //     "Express.js",
  //     "React.js",
  //     "Node.js",
  //     "Redux",
  //     "Tailwind CSS",
  //   ],
  //   description: `
  // Study Notion is an all-in-one learning management system (LMS) that supports course creation, enrollment, feedback, and secure user interactions. It enables educators to upload rich course content while providing learners with an engaging and responsive UI for browsing and completing modules.
  
  // Built with the MERN stack and Redux, the app allows for both authenticated and guest interactions. Users can sign up with OTP verification and recover lost credentials via a secure reset system. The admin dashboard supports course CRUD operations, user management, and real-time course feedback aggregation.
  
  // A rating and review system was implemented to help learners choose quality content and provide meaningful feedback to instructors. The UI was designed with Tailwind CSS for consistent behavior across mobile and desktop devices.
  
  // Study Notion has served as a testing ground for advanced concepts like role-based routing, modular backend architecture, and scalable course APIs.
  //   `,
  //   keyPoints: [
  //     "Implemented OTP auth and secure forgot-password flow.",
  //     "Built Redux-based state management for real-time updates.",
  //     "Integrated rating system to increase course feedback by 25%.",
  //     "Admin dashboard supports full course and user management.",
  //     "Designed a fully responsive, adaptive UI using Tailwind CSS.",
  //   ],
  //   images: [
  //     "/images/study-notion/dashboard.png",
  //     "/images/study-notion/course-preview.png",
  //   ],
  //   githubLink: "https://github.com/your-username/study-notion",
  //   liveLink: null,
  //   videoLink: null,
  //   projectType: "EdTech / LMS",
  //   // role: "Full-Stack Developer",
  //   duration: "8 weeks", //"Capstone / Freelance-style Project"
  //   status:"Scheduled for next month"
  // },
];

export default projectsData;
