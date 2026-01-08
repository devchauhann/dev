
import { Project, Skill, ExperienceItem } from './types.ts';

export const PROJECTS: Project[] = [
  {
    id: 'colora',
    title: "Colora",
    description: "Professional Color Design Platform with 500+ named colors and comprehensive color utilities for modern design workflows.",
    fullDescription: "Colora is a comprehensive color design platform built with React and TypeScript. It provides designers, developers, and creative professionals with an extensive toolkit for color exploration, manipulation, and professional color management. Whether you're building a brand palette, analyzing color accessibility, or implementing color schemes, Colora offers an intuitive interface backed by powerful algorithms and color utilities.",
    imageUrl: "/colora.png",
    year: "2025",
    role: "Color Design Tool",
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Color Theory', 'Web Design'],
    githubUrl: "https://github.com/devchauhann/colora",
    liveUrl: "https://colora.in",
    featured: true,
    problemStatement: "Designers and developers often lack a unified platform for professional color management, accessibility checking, and palette generation. They struggle with color conversion between formats, finding harmonious color schemes, and ensuring WCAG compliance. Colora solves this by providing a comprehensive toolkit with 500+ named colors, multiple design utilities, and real-time visualization.",
    whatIDid: [
      "Built a comprehensive color database with 500+ named colors and their psychological meanings",
      "Implemented RGB, HSL, CMYK color space conversions with precise algorithms",
      "Created multiple design tools: Palette Generator, Brand Mockup, Shadow Lab, and Mesh Architect",
      "Integrated WCAG contrast ratio checker for accessibility compliance",
      "Implemented Image Picker to extract color palettes from uploaded images",
      "Added Tailwind CSS color generation and preview functionality",
      "Built a TypeScale tool for typography and color coordination",
      "Deployed on high-performance infrastructure for instant color processing"
    ],
    techStackDetails: {
      backend: "React Server Components, Node.js",
      frontend: "React, TypeScript, Tailwind CSS, Framer Motion",
      icons: "Lucide React",
      deployment: "Vercel"
    },
    keyLearnings: [
      {
        title: "Color Science & Theory",
        description: "Deep dive into color psychology, color spaces, and accessibility standards (WCAG). Learned how to convert between different color models and implement accurate color algorithms."
      },
      {
        title: "Real-time Data Processing",
        description: "Implemented efficient algorithms for palette generation, color harmony calculations, and image-based color extraction without blocking the UI."
      },
      {
        title: "Design Tool Development",
        description: "Built interactive design utilities with live previews, understanding how professional design tools work under the hood and providing seamless user experiences."
      }
    ]
  },
  {
    id: 'brainsync',
    title: "Brainsync",
    description: "B.Tech study materials, notes, and question papers all in one place. A comprehensive educational platform designed for engineering students.",
    fullDescription: "Brainsync is an all-in-one educational hub meticulously crafted for B.Tech students. It addresses the fragmentation of study resources by centralizing lecture notes, previous year question papers, and curated reference materials into a single, high-performance interface. Designed with student productivity in mind, it simplifies exam preparation and resource sharing within the engineering community.",
    imageUrl: "/brainsync.png",
    year: "2025",
    role: "Study Material",
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: "https://github.com/devchauhann/brainsync/",
    liveUrl: "https://brainsync.vercel.app/",
    featured: true,
    problemStatement: "Engineering students often struggle with scattered study resources across multiple platforms, WhatsApp groups, and physical libraries. Brainsync eliminates this 'information fatigue' by providing a structured, searchable, and always-accessible repository of academic assets.",
    whatIDid: [
      "Built a centralized platform for all B.Tech study materials and resources",
      "Implemented search and filter functionality for easy resource discovery",
      "Designed an intuitive UI for seamless navigation and accessibility",
      "Integrated file upload and sharing capabilities for the community",
      "Deployed on Vercel for global accessibility and performance"
    ],
    techStackDetails: {
      backend: "Next.js, Node.js, Firebase",
      frontend: "React, TypeScript, Tailwind CSS",
      icons: "Lucide React",
      deployment: "Vercel"
    },
    keyLearnings: [
      {
        title: "Community-Driven Design",
        description: "Learned how to design platforms that encourage community participation and resource sharing among users."
      },
      {
        title: "Search Optimization",
        description: "Implemented efficient search algorithms to help users find relevant materials quickly across thousands of documents."
      },
      {
        title: "Scalability",
        description: "Built the platform with scalability in mind to handle growing student base and increasing content library."
      }
    ]
  },
  {
    id: 'toole',
    title: "Toole",
    description: "Free daily-use tools for developers. A comprehensive collection of utility tools to boost developer productivity.",
    fullDescription: "Toole is a developer-first suite of essential utility tools designed to remove friction from the daily coding workflow. It provides a clean, ad-free environment for tasks like JSON formatting, base64 encoding/decoding, color code conversion, and unit testing helpers. It's built for speed and privacy, processing data locally whenever possible.",
    imageUrl: "/toole.png",
    year: "2025",
    role: "Free Tools",
    tags: ['JavaScript', 'HTML', 'CSS', 'Web APIs', 'Open Source'],
    githubUrl: "https://github.com/devchauhann/toole",
    liveUrl: "https://toole.me",
    problemStatement: "Most online developer tools are cluttered with ads, have poor UI/UX, or require accounts for basic features. Toole.me offers a minimalist, 'utility-first' approach that saves time and respects the user's workspace.",
    whatIDid: [
      "Built 15+ essential developer tools with zero external dependencies",
      "Implemented local-first processing for JSON, Base64, and code utilities",
      "Created a minimalist, ad-free interface focused on user productivity",
      "Added copy-to-clipboard functionality for seamless workflow integration",
      "Optimized all tools for performance with real-time processing",
      "Deployed globally on Vercel for instant access from any location",
      "Maintained open-source repository with active community contributions",
      "Implemented dark mode and responsive design for all devices"
    ],
    techStackDetails: {
      backend: "Vanilla JavaScript, Web APIs",
      frontend: "HTML5, CSS3, JavaScript ES6+",
      icons: "No external frameworks, pure web standards",
      deployment: "Vercel"
    },
    keyLearnings: [
      {
        title: "Minimalist Design Philosophy",
        description: "Learned how to build powerful tools with minimal UI clutter, focusing on functionality and user experience. Every feature serves a purpose."
      },
      {
        title: "Client-Side Processing",
        description: "Mastered local-first processing techniques to ensure user data privacy while maintaining performance. No data is sent to servers."
      },
      {
        title: "Web Standards & APIs",
        description: "Deepened knowledge of modern Web APIs like Clipboard API, FileReader, and Canvas for building standalone web utilities."
      }
    ]
  },
  {
    id: 'githubprofile',
    title: "GitHub Profile Generator",
    description: "Open source tool to create professional GitHub profile READMEs with stats, visitors count, and dynamic widgets.",
    fullDescription: "An intuitive web application that allows developers to orchestrate professional GitHub profiles without writing a single line of Markdown manually. It offers a live-preview interface where users can toggle stats cards, social icons, and visitor counters, generating optimized code ready for their repositories.",
    imageUrl: "/githubprofile.png",
    year: "2025",
    role: "Open Source Project",
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub API', 'Open Source'],
    githubUrl: "https://github.com/devchauhann/githubprofile",
    liveUrl: "https://githubprofilegenerator.vercel.app",
    problemStatement: "GitHub profiles are a developer's digital resume, but manually configuring dynamic widgets and layout structures in Markdown is tedious. This tool automates the aesthetic and functional aspects of profile creation.",
    whatIDid: [
      "Built an intuitive drag-and-drop interface for README customization",
      "Integrated GitHub API to fetch real-time user statistics and repo data",
      "Created dynamic widget system with stats cards, badges, and social links",
      "Implemented live preview showing exact README output in real-time",
      "Added visitor counter integration with automatic SVG generation",
      "Generated optimized Markdown code with one-click copy functionality",
      "Added multiple professional README templates to choose from",
      "Deployed globally with zero configuration required for users"
    ],
    techStackDetails: {
      backend: "GitHub API, Node.js backend",
      frontend: "HTML5, CSS3, JavaScript, GitHub Markdown",
      icons: "Custom SVG badges and icons",
      deployment: "Vercel"
    },
    keyLearnings: [
      {
        title: "API Integration",
        description: "Learned how to integrate with GitHub's REST API to fetch user data, repositories, and statistics in real-time while managing rate limits."
      },
      {
        title: "Code Generation",
        description: "Developed algorithms to generate clean, optimized Markdown code from visual configurations, ensuring portability and reusability."
      },
      {
        title: "Live Preview Architecture",
        description: "Implemented efficient live preview system that updates Markdown preview without performance overhead as users modify their profiles."
      }
    ]
  },
  {
    id: 'nearchat',
    title: "Nearchat",
    description: "BLE Mesh Networking & Peer-to-Peer Chat Application for offline communication without internet.",
    fullDescription: "Nearchat is a resilient communication platform built for scenarios where traditional networks fail. Utilizing Bluetooth Low Energy (BLE) and mesh networking protocols, it enables peer-to-peer messaging between devices across multiple hops, making it an essential tool for emergency response and disaster recovery.",
    imageUrl: "/nearchat.png",
    year: "2024",
    role: "Offline Chatting",
    tags: ['Kotlin', 'Bluetooth', 'Mesh Networking', 'P2P', 'Hackathon'],
    githubUrl: "https://github.com/devchauhann/nearchat",
    liveUrl: "https://devchauhann.github.io/nearchat/",
    problemStatement: "In regions with zero internet or cellular connectivity—such as disaster zones or remote expeditions—digital communication is impossible. Nearchat solves this by turning every mobile device into a node in a self-healing mesh network.",
    whatIDid: [
      "Architected BLE mesh networking protocol from scratch for multi-hop communication",
      "Implemented self-healing mesh network that automatically reroutes messages around obstacles",
      "Built native Android app in Kotlin with modern Material Design",
      "Created efficient message queuing system for reliability in poor connectivity",
      "Implemented device discovery and automatic peer connection management",
      "Added encryption for secure peer-to-peer messaging without servers",
      "Optimized BLE power consumption for extended battery life",
      "Developed intuitive UI for mesh network visualization and status monitoring"
    ],
    techStackDetails: {
      backend: "BLE Protocol Stack, Mesh Networking",
      frontend: "Kotlin, Android SDK, Material Design",
      icons: "Material Icons",
      deployment: "Android Play Store"
    },
    keyLearnings: [
      {
        title: "Bluetooth Low Energy Protocol",
        description: "Deep expertise in BLE advertising, scanning, connecting, and GATT characteristics. Understanding of power consumption optimization and range limitations."
      },
      {
        title: "Mesh Network Architecture",
        description: "Learned mesh routing algorithms, message flooding, duplicate detection, and self-healing mechanisms for resilient peer-to-peer networks."
      },
      {
        title: "Offline-First Design",
        description: "Developed patterns for building reliable systems that work without internet connectivity, focusing on eventual consistency and message reliability."
      }
    ]
  },
  {
    id: 'iconworld',
    title: "IconWorld",
    description: "1000+ SVG collection for free. A comprehensive library of scalable vector graphics for developers and designers.",
    fullDescription: "IconWorld is a massive open-source library featuring over 1,000 carefully curated SVG icons. It offers a powerful search engine, category-based browsing, and instant download/copy-to-clipboard functionality. Every icon is optimized for web performance and follows a consistent grid-based design language.",
    imageUrl: "/iconworld.png",
    year: "2025",
    role: "Svg Library",
    tags: ['HTML', 'CSS', 'JavaScript', 'SVG', 'Design'],
    githubUrl: "https://github.com/devchauhann/iconworld",
    liveUrl: "https://iconworld.vercel.app",
    problemStatement: "Finding consistent, high-quality icons usually requires expensive subscriptions or navigating bloated libraries. IconWorld provides a lightweight, focused alternative for projects that need speed and visual harmony.",
    whatIDid: [
      "Curated and optimized 1000+ SVG icons for web and print use",
      "Implemented powerful full-text search with fuzzy matching across icon metadata",
      "Created category-based browsing system with tags and filters",
      "Built instant download/copy-to-clipboard functionality for ease of use",
      "Optimized all SVGs for minimal file size without quality loss",
      "Implemented lazy loading for smooth browsing performance",
      "Added icon customization (color, size) with live preview",
      "Created developer-friendly CDN for direct icon linking in projects"
    ],
    techStackDetails: {
      backend: "Static generation, CDN delivery",
      frontend: "HTML5, CSS3, JavaScript, SVG optimization",
      icons: "1000+ custom and adapted SVGs",
      deployment: "Vercel with CDN"
    },
    keyLearnings: [
      {
        title: "SVG Optimization",
        description: "Mastered SVG optimization techniques including path simplification, compression, and viewBox optimization to reduce file size while maintaining visual quality."
      },
      {
        title: "Full-Text Search Implementation",
        description: "Implemented client-side full-text search with fuzzy matching and relevance scoring, enabling fast icon discovery across large datasets."
      },
      {
        title: "Design Systems & Consistency",
        description: "Learned how to maintain visual consistency across large icon sets using grid systems, stroke widths, and design principles."
      }
    ]
  },
  {
    id: 'macos',
    title: "MacOS Portfolio",
    description: "MacOS-inspired portfolio featuring an interactive desktop environment with functional windows and dock.",
    fullDescription: "A highly immersive, interactive portfolio that replicates the macOS desktop environment. It features draggable windows, a functioning dock with bounce animations, and a control center. Built primarily with vanilla technologies to demonstrate advanced UI/UX engineering and DOM manipulation capabilities.",
    imageUrl: "/macos.png",
    year: "2024",
    role: "Frontend Developer",
    tags: ['HTML', 'CSS', 'JavaScript', 'Animation', 'UI/UX'],
    githubUrl: "https://github.com/devchauhann/devchauhann.github.io",
    liveUrl: "https://devchauhann.github.io/",
    featured: true,
    problemStatement: "Standard portfolios often feel like static documents. This project pushes the boundaries of web interactivity, turning a personal site into a memorable digital experience that showcases technical depth through playful design.",
    whatIDid: [
      "Built a fully functional macOS desktop simulation using vanilla JavaScript",
      "Implemented draggable window system with z-index management and minimize/maximize functionality",
      "Created animated dock with spring physics and bounce effects matching macOS behavior",
      "Developed control center panel with real-time system stats and quick access buttons",
      "Added wallpaper management system with dynamic background switching",
      "Implemented Spotlight search functionality for app discovery",
      "Created window management system with overlap detection and snap-to-grid",
      "Optimized rendering for smooth 60fps animations across all browsers"
    ],
    techStackDetails: {
      backend: "Vanilla JavaScript, no dependencies",
      frontend: "HTML5, CSS3 with advanced animations",
      icons: "Custom SVG-based macOS icons",
      deployment: "GitHub Pages"
    },
    keyLearnings: [
      {
        title: "Advanced DOM Manipulation",
        description: "Mastered complex DOM operations including event delegation, shadow DOM techniques, and efficient DOM querying for high-performance interactions."
      },
      {
        title: "CSS Animations & Physics",
        description: "Deep knowledge of CSS animations, transitions, and JavaScript-driven physics engines for creating natural, fluid motion that feels responsive."
      },
      {
        title: "User Experience Design",
        description: "Learned the importance of micro-interactions, feedback loops, and attention to detail that make interfaces feel polished and intuitive."
      }
    ]
  }
];

export const SKILLS: Skill[] = [
  { technology: 'React', usage: 'Learning' },
  { technology: 'TypeScript', usage: 'Learning' },
  { technology: 'Tailwind CSS', usage: 'Mostly used' },
  { technology: 'JavaScript', usage: 'Mostly used' },
  { technology: 'Git', usage: 'Mostly used' },
  { technology: 'CSS', usage: 'Mostly used' },
  { technology: 'GitHub', usage: 'Mostly used' },
  { technology: 'Vercel', usage: 'Mostly used' }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Full Stack Engineer',
    company: 'Freelance',
    period: '2023 - Present',
    description: 'Building production-ready applications for startups. Specializing in Next.js, AI integrations, and scalable architecture.'
  },
  {
    role: 'Frontend Developer',
    company: 'StartupX',
    period: '2022 - 2023',
    description: 'Developed responsive web applications using React and TypeScript. Implemented complex UI/UX features and optimized performance for improved user experience.'
  },
  {
    role: 'Jr. Web Developer',
    company: 'Tech Solutions Inc.',
    period: '2021 - 2022',
    description: 'Collaborated with cross-functional teams to build web solutions. Learned full-stack development practices, version control, and agile methodologies.'
  }
];
