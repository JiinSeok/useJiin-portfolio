export interface Project {
  title: string
  year: number
  description: string
  url: string
}

export const projects: Project[] = [
  {
    title: 'Project One',
    year: 2023,
    description:
      'A responsive web application built with React and TypeScript that features real-time data visualization, user authentication, and a custom design system. Includes interactive dashboards and API integration.',
    url: 'https://example.com/',
  },
  {
    title: 'Project Two',
    year: 2022,
    description:
      'Mobile app developed using React Native that helps users track their fitness goals. Includes workout planning, progress tracking, nutrition logging, and social sharing features with cloud synchronization.',
    url: 'https://example.com/',
  },
  {
    title: 'Project Three',
    year: 2021,
    description:
      'E-commerce platform built with Next.js and a headless CMS. Features include product catalog management, shopping cart functionality, secure payment processing, and order tracking with email notifications.',
    url: 'https://example.com/',
  },
]
