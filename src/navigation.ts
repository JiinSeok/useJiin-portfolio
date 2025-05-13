import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'
import React from 'react'

// Define all the paths used in the application
const routing = defineRouting({
  locales: ['en', 'ko'],
  defaultLocale: 'ko',
  pathnames: {
    '/': '/',
    '/register': '/register',
    '/contact': '/contact',
    '/blog': '/blog',
    '/blog/[slug]': {
      en: '/blog/[slug]',
      ko: '/blog/[slug]'
    },
    '/blog/albaform-project': '/blog/albaform-project',
    '/photos': '/photos',
    '/til': '/til',
    '/soft-skills': '/soft-skills',
    '/site-build': '/site-build',
    '#': '#',
    '#ux-design': '#ux-design',
    '#tech-stack': '#tech-stack',
    '#resume': '#resume',
    '#til': '#til',
    '#contact': '#contact',
  },
})

// Get the original navigation components and functions
const navigation = createNavigation(routing)

// Create a custom Link component that accepts any href value
const CustomLink = (props: any) => {
  // For navigation menu items, don't include locale
  const modifiedProps = { ...props };

  // Check if this is a navigation link (based on href pattern)
  if (props.href) {
    // Case 1: String href that starts with # (anchor link)
    // Case 2: String href that is a navigation path (/, /til, /soft-skills, etc.)
    // Case 3: Object href with a hash property (Next.js style navigation with hash)
    const internalPaths = ['/', '/til', '/soft-skills', '/site-build', '/blog', '#resume', '#contact', '#tech-stack', '#ux-design', '#personal'];

    if ((typeof props.href === 'string' && 
         (props.href.startsWith('#') || internalPaths.includes(props.href))) || 
        (typeof props.href === 'object' && props.href.hash)) {
      modifiedProps.locale = false;
    }
  }

  // Use the original Link component with the modified props
  return React.createElement(navigation.Link, modifiedProps)
}

// Export the custom Link component and the original navigation functions
export const { redirect, usePathname, useRouter } = navigation
export { CustomLink as Link }
