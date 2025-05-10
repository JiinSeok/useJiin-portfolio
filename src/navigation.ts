'use client'

import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

const routing = defineRouting({
  locales: ['en', 'ko'],
  defaultLocale: 'ko',
  pathnames: {
    '/': '/',
    '/register': '/register',
    '/contact': '/contact',
    '/blog': '/blog',
    '/blog/[slug]': '/blog/[slug]',
    '/photos': '/photos',
    '#': '#',
    '#ux-design': '#ux-design',
    '#tech-stack': '#tech-stack',
    '#resume': '#resume',
  },
})

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
