/**
 * Router constants for the portfolio site
 *
 * Each route object contains:
 * - path: The URL path for the route
 * - getName: A function that returns the display name for the route
 */

// Define types for router items
interface RouterItem {
  path: string;
  getName: (customName?: string) => string;
  external?: boolean;
}
export const ROUTER: Record<string, RouterItem> = {
  // Main pages
  Home: {
    path: '/',
    getName: (customName?: string) => customName || 'Home',
  },

  // Portfolio sections (these are anchor links on the home page)
  UXDesign: {
    path: '#ux-design',
    getName: (customName?: string) => customName || 'UX Design',
  },
  TechStack: {
    path: '#tech-stack',
    getName: (customName?: string) => customName || 'Tech Stack',
  },
  SiteBuild: {
    path: '/site-build',
    getName: (customName?: string) => customName || 'How This Site Was Built',
  },
  Resume: {
    path: '#resume',
    getName: (customName?: string) => customName || 'Resume',
  },
  TIL: {
    path: '/til',
    getName: (customName?: string) => customName || 'Today I Learned',
  },
  Contact: {
    path: '#contact',
    getName: (customName?: string) => customName || 'Contact',
  },

  // External links
  GitHub: {
    path: 'https://github.com/JiinSeok',
    getName: (customName?: string) => customName || 'GitHub',
    external: true,
  },
  LinkedIn: {
    path: 'https://linkedin.com/in/jiin-seok',
    getName: (customName?: string) => customName || 'LinkedIn',
    external: true,
  },
  Email: {
    path: 'mailto:seokjiin1073@gmail.com',
    getName: (customName?: string) => customName || 'Email',
    external: true,
  },

  // Blog
  Blog: {
    path: '/blog',
    getName: (customName?: string) => customName || 'Blog',
  },

  // Soft Skills
  SoftSkills: {
    path: '/soft-skills',
    getName: (customName?: string) => customName || 'Soft Skills',
  },
} as const
