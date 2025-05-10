/**
 * Image constants for the portfolio site
 */

// Define a type for image objects
export type ImageObject = {
  src: string
  alt: string
}

// Portfolio logo
export const PORTFOLIO_LOGO: ImageObject = {
  src: '/images/portfolio/logo.png',
  alt: 'Jiin Seok Portfolio Logo',
}

// Social media icons
export const SOCIAL_ICONS = {
  GITHUB: {
    src: '/images/social/github.svg',
    alt: 'GitHub Profile',
  },
  LINKEDIN: {
    src: '/images/social/linkedin.svg',
    alt: 'LinkedIn Profile',
  },
} as const
