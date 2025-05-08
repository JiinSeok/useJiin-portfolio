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
  },
})

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
