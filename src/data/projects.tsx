export const Category = {
  WEB: 'web',
  MOBILE: 'mobile',
  BACK: 'back',
} as const;

export type CategoryType = typeof Category[keyof typeof Category];
export interface Project {
  id: string;
  tags: string[];
  category: CategoryType[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface ProjectText {
  title: string;
  description: string;
  longDescription: string;
  personalNote: string;
  features: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "portfolio",
    tags: ["React", "TypeScript", "Tailwind", "ESLint"],
    category: [Category.WEB],
    githubUrl: "https://github.com/Yaya6mgt/portfolio-mono",
  },
  {
    id: "ssl-monitor",
    tags: ["React","Node.js", "Express", "PostgreSQL", "TypeScript", "Tailwind", "Docker"],
    category: [Category.BACK, Category.WEB],
    githubUrl: "https://github.com/Yaya6mgt/ssl-monitor",
  },
  {
    id: "cabanesDB",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    category: [Category.WEB, Category.BACK],
    liveUrl: "https://www.cabanesdb.fr/"
  },
  {
    id: "koudmain",
    tags: ["React Native", "Next.js", "NestJS", "Expo", "Golang", "Turborepo", "TypeScript", "Tailwind", "Docker", "Documenso"],
    category: [Category.BACK,Category.MOBILE, Category.WEB],
    githubUrl: "https://github.com/Koudmain",
    liveUrl: "https://www.koudmain.fr/"
  },
  {
    id: "area",
    tags: ["Node.js", "React", "Kotlin", "Redis", "OAuth2", "TypeScript"],
    category: [Category.BACK, Category.WEB, Category.MOBILE],
    githubUrl: "https://github.com/Yaya6mgt/Area-epi",
  },
  {
    id: "chattera",
    tags: ["Node.js", "React", "React Native", "Expo", "Vite", "WebSockets"],
    category: [Category.BACK, Category.WEB, Category.MOBILE],
    githubUrl: "https://github.com/Yaya6mgt/chattera-project",
  },
];
