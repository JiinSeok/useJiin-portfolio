import createMiddleware from 'next-intl/middleware';

/**
 * Internationalization middleware configuration
 * Handles locale detection and routing for the application
 */
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ko'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'ko',

  // Whether to add a locale prefix for the default locale (e.g. `/ko/about`), 
  // or keep it without a prefix (e.g. `/about`)
  localePrefix: 'as-needed'
});

export const config = {
  // Match all pathnames except for
  // - ... static files (e.g. /favicon.ico)
  // - ... internal Next.js paths (e.g. /_next/...)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
