
import { Project, Skill, ExperienceItem } from './types.ts';

export const PROJECTS: Project[] = [
  {
    id: 'brainsync',
    title: "Brainsync",
    description: "B.Tech study materials, notes, and question papers all in one place. A comprehensive educational platform designed for engineering students.",
    fullDescription: "Brainsync is an all-in-one educational hub meticulously crafted for B.Tech students. It addresses the fragmentation of study resources by centralizing lecture notes, previous year question papers, and curated reference materials into a single, high-performance interface. Designed with student productivity in mind, it simplifies exam preparation and resource sharing within the engineering community.",
    imageUrl: "assets/brainsync.png",
    year: "2025",
    role: "Study Material",
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: "https://github.com/devchauhann/brainsync/",
    liveUrl: "https://brainsync.vercel.app/",
    featured: true,
    problemStatement: "Engineering students often struggle with scattered study resources across multiple platforms, WhatsApp groups, and physical libraries. Brainsync eliminates this 'information fatigue' by providing a structured, searchable, and always-accessible repository of academic assets."
  },
  {
    id: 'toole',
    title: "Toole.me",
    description: "Free daily-use tools for developers. A comprehensive collection of utility tools to boost developer productivity.",
    fullDescription: "Toole.me is a developer-first suite of essential utility tools designed to remove friction from the daily coding workflow. It provides a clean, ad-free environment for tasks like JSON formatting, base64 encoding/decoding, color code conversion, and unit testing helpers. It's built for speed and privacy, processing data locally whenever possible.",
    imageUrl: "assets/toole.png",
    year: "2025",
    role: "Free Tools",
    tags: ['JavaScript', 'HTML', 'CSS', 'Web APIs', 'Open Source'],
    githubUrl: "https://github.com/devchauhann/toole",
    liveUrl: "https://toole.me",
    problemStatement: "Most online developer tools are cluttered with ads, have poor UI/UX, or require accounts for basic features. Toole.me offers a minimalist, 'utility-first' approach that saves time and respects the user's workspace."
  },
  {
    id: 'githubprofile',
    title: "GitHub Profile README Generator",
    description: "Open source tool to create professional GitHub profile READMEs with stats, visitors count, and dynamic widgets.",
    fullDescription: "An intuitive web application that allows developers to orchestrate professional GitHub profiles without writing a single line of Markdown manually. It offers a live-preview interface where users can toggle stats cards, social icons, and visitor counters, generating optimized code ready for their repositories.",
    imageUrl: "assets/githubprofile.png",
    year: "2025",
    role: "Open Source Project",
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub API', 'Open Source'],
    githubUrl: "https://github.com/devchauhann/githubprofile",
    liveUrl: "https://githubprofilegenerator.vercel.app",
    problemStatement: "GitHub profiles are a developer's digital resume, but manually configuring dynamic widgets and layout structures in Markdown is tedious. This tool automates the aesthetic and functional aspects of profile creation."
  },
  {
    id: 'nearchat',
    title: "Nearchat",
    description: "BLE Mesh Networking & Peer-to-Peer Chat Application for offline communication without internet.",
    fullDescription: "Nearchat is a resilient communication platform built for scenarios where traditional networks fail. Utilizing Bluetooth Low Energy (BLE) and mesh networking protocols, it enables peer-to-peer messaging between devices across multiple hops, making it an essential tool for emergency response and disaster recovery.",
    imageUrl: "assets/nearchat.png",
    year: "2024",
    role: "Offline Chatting",
    tags: ['Kotlin', 'Bluetooth', 'Mesh Networking', 'P2P', 'Hackathon'],
    githubUrl: "https://github.com/devchauhann/nearchat",
    liveUrl: "https://devchauhann.github.io/nearchat/",
    problemStatement: "In regions with zero internet or cellular connectivity—such as disaster zones or remote expeditions—digital communication is impossible. Nearchat solves this by turning every mobile device into a node in a self-healing mesh network."
  },
  {
    id: 'iconworld',
    title: "IconWorld",
    description: "1000+ SVG collection for free. A comprehensive library of scalable vector graphics for developers and designers.",
    fullDescription: "IconWorld is a massive open-source library featuring over 1,000 carefully curated SVG icons. It offers a powerful search engine, category-based browsing, and instant download/copy-to-clipboard functionality. Every icon is optimized for web performance and follows a consistent grid-based design language.",
    imageUrl: "assets/iconworld.png",
    year: "2025",
    role: "Svg Library",
    tags: ['HTML', 'CSS', 'JavaScript', 'SVG', 'Design'],
    githubUrl: "https://github.com/devchauhann/iconworld",
    liveUrl: "https://iconworld.vercel.app",
    problemStatement: "Finding consistent, high-quality icons usually requires expensive subscriptions or navigating bloated libraries. IconWorld provides a lightweight, focused alternative for projects that need speed and visual harmony."
  },
  {
    id: 'macos',
    title: "MacOS Portfolio",
    description: "MacOS-inspired portfolio featuring an interactive desktop environment with functional windows and dock.",
    fullDescription: "A highly immersive, interactive portfolio that replicates the macOS desktop environment. It features draggable windows, a functioning dock with bounce animations, and a control center. Built primarily with vanilla technologies to demonstrate advanced UI/UX engineering and DOM manipulation capabilities.",
    imageUrl: "assets/macos.png",
    year: "2024",
    role: "Frontend Developer",
    tags: ['HTML', 'CSS', 'JavaScript', 'Animation', 'UI/UX'],
    githubUrl: "https://github.com/devchauhann/devchauhann.github.io",
    liveUrl: "https://devchauhann.github.io/",
    featured: true,
    problemStatement: "Standard portfolios often feel like static documents. This project pushes the boundaries of web interactivity, turning a personal site into a memorable digital experience that showcases technical depth through playful design."
  }
];

export const SKILLS: Skill[] = [
  { technology: 'React', category: 'Frontend', status: 'Expert' },
  { technology: 'Next.js', category: 'Frontend', status: 'Expert' },
  { technology: 'TypeScript', category: 'Language', status: 'Expert' },
  { technology: 'Node.js', category: 'Backend', status: 'Advanced' },
  { technology: 'PostgreSQL', category: 'Database', status: 'Advanced' },
  { technology: 'Supabase', category: 'Backend', status: 'Advanced' },
  { technology: 'Tailwind CSS', category: 'Frontend', status: 'Expert' },
  { technology: 'AI/LLMs', category: 'Integration', status: 'Intermediate' },
  { technology: 'System Design', category: 'Architecture', status: 'Advanced' },
  { technology: 'Docker', category: 'DevOps', status: 'Intermediate' },
  { technology: 'Framer Motion', category: 'Animation', status: 'Advanced' }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Full Stack Engineer',
    company: 'Freelance',
    period: '2023 - Present',
    description: 'Building production-ready applications for startups. Specializing in Next.js, AI integrations, and scalable architecture.'
  }
];
