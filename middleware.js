"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var middleware_1 = require("next-intl/middleware");
/**
 * Internationalization middleware configuration
 * Handles locale detection and routing for the application
 */
exports.default = (0, middleware_1.default)({
    // A list of all locales that are supported
    locales: ['en', 'ko'],
    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: 'ko',
    // Whether to add a locale prefix for the default locale (e.g. `/ko/about`),
    // or keep it without a prefix (e.g. `/about`)
    localePrefix: 'as-needed',
});
exports.config = {
    // Match all pathnames except for
    // - ... static files (e.g. /favicon.ico)
    // - ... internal Next.js paths (e.g. /_next/...)
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};
