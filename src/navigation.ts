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
    '#': '#',
    '#ux-design': '#ux-design',
    '#tech-stack': '#tech-stack',
    '#resume': '#resume',
    '#til': '#til',
  },
})

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
