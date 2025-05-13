'use client'

import { SITE_BUILD_FEATURES } from '@/constants/sections/siteBuild'
import { useTranslations } from 'next-intl'

/**
 * Site Build section component for the homepage
 *
 * This component explains how the website was built, including technologies used,
 * development process, site structure, applied methods, and new learnings.
 */
export default function SiteBuildSection() {
  const t = useTranslations('HomePage')

  return (
    <section id="site-build" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-3">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('site-build.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('site-build.description')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_BUILD_FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold">{t(feature.title)}</h3>
              </div>
              <p className="text-muted-foreground">{t(feature.description)}</p>
            </div>
          ))}
        </div>

        {/* Development Process Diagram */}
        <div className="mt-16 bg-card p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            {t('site-build.process.title')}
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-4">
            {/* Step 1: Planning */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-semibold mb-2">Planning</h4>
              <p className="text-sm text-muted-foreground">
                Requirements gathering, site architecture, and content planning
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-2xl text-muted-foreground">→</div>
            <div className="block md:hidden text-2xl text-muted-foreground">↓</div>

            {/* Step 2: Design */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="font-semibold mb-2">Design</h4>
              <p className="text-sm text-muted-foreground">
                UI/UX design, component structure, and responsive layouts
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-2xl text-muted-foreground">→</div>
            <div className="block md:hidden text-2xl text-muted-foreground">↓</div>

            {/* Step 3: Development */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h4 className="font-semibold mb-2">Development</h4>
              <p className="text-sm text-muted-foreground">
                Frontend implementation, content integration, and testing
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block text-2xl text-muted-foreground">→</div>
            <div className="block md:hidden text-2xl text-muted-foreground">↓</div>

            {/* Step 4: Deployment */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold mb-2">Deployment</h4>
              <p className="text-sm text-muted-foreground">
                Continuous integration, deployment, and performance optimization
              </p>
            </div>
          </div>
        </div>

        {/* Site Structure Diagram */}
        <div className="mt-16 bg-card p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            {t('site-build.structure.title')}
          </h3>
          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              {/* Root */}
              <div className="bg-primary/10 p-4 rounded-lg text-center mb-4">
                <span className="font-semibold">Next.js App</span>
              </div>

              {/* First Level */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-secondary/20 p-3 rounded-lg text-center text-sm">
                  <span className="font-medium">Components</span>
                </div>
                <div className="bg-secondary/20 p-3 rounded-lg text-center text-sm">
                  <span className="font-medium">Pages</span>
                </div>
                <div className="bg-secondary/20 p-3 rounded-lg text-center text-sm">
                  <span className="font-medium">Utils</span>
                </div>
              </div>

              {/* Second Level */}
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-secondary/10 p-2 rounded-lg text-center text-xs">
                  <span>UI</span>
                </div>
                <div className="bg-secondary/10 p-2 rounded-lg text-center text-xs">
                  <span>Sections</span>
                </div>
                <div className="bg-secondary/10 p-2 rounded-lg text-center text-xs">
                  <span>Home</span>
                </div>
                <div className="bg-secondary/10 p-2 rounded-lg text-center text-xs">
                  <span>Blog</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Used Technologies Section */}
        <div className="mt-16 bg-card p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            {t('site-build.technologies.title')}
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            {t('site-build.technologies.description')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Frontend Framework */}
            <div className="flex flex-col items-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <span className="text-2xl">⚛️</span>
              </div>
              <h4 className="font-semibold text-center">Next.js</h4>
              <p className="text-xs text-center text-muted-foreground">v14.2.3</p>
            </div>

            {/* UI Library */}
            <div className="flex flex-col items-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="font-semibold text-center">React</h4>
              <p className="text-xs text-center text-muted-foreground">v18.2.0</p>
            </div>

            {/* Styling */}
            <div className="flex flex-col items-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="font-semibold text-center">Tailwind CSS</h4>
              <p className="text-xs text-center text-muted-foreground">v4.1.5</p>
            </div>

            {/* State Management */}
            <div className="flex flex-col items-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-center">Zustand</h4>
              <p className="text-xs text-center text-muted-foreground">v5.0.4</p>
            </div>

            {/* Form Handling */}
            <div className="flex flex-col items-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <span className="text-2xl">📝</span>
              </div>
              <h4 className="font-semibold text-center">React Hook Form</h4>
              <p className="text-xs text-center text-muted-foreground">v7.56.3</p>
            </div>

            {/* Internationalization */}
            <div className="flex flex-col items-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <span className="text-2xl">🌐</span>
              </div>
              <h4 className="font-semibold text-center">next-intl</h4>
              <p className="text-xs text-center text-muted-foreground">v4.1.0</p>
            </div>

            {/* UI Components */}
            <div className="flex flex-col items-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <span className="text-2xl">🧩</span>
              </div>
              <h4 className="font-semibold text-center">Radix UI</h4>
              <p className="text-xs text-center text-muted-foreground">Components</p>
            </div>

            {/* Data Fetching */}
            <div className="flex flex-col items-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <span className="text-2xl">📡</span>
              </div>
              <h4 className="font-semibold text-center">React Query</h4>
              <p className="text-xs text-center text-muted-foreground">v5.75.5</p>
            </div>

            {/* TypeScript */}
            <div className="flex flex-col items-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <span className="text-2xl">📘</span>
              </div>
              <h4 className="font-semibold text-center">TypeScript</h4>
              <p className="text-xs text-center text-muted-foreground">v5.8.3</p>
            </div>

            {/* Package Manager */}
            <div className="flex flex-col items-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <span className="text-2xl">📦</span>
              </div>
              <h4 className="font-semibold text-center">Yarn</h4>
              <p className="text-xs text-center text-muted-foreground">v1.22.22</p>
            </div>

            {/* Markdown */}
            <div className="flex flex-col items-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <span className="text-2xl">📄</span>
              </div>
              <h4 className="font-semibold text-center">MDX</h4>
              <p className="text-xs text-center text-muted-foreground">next-mdx-remote</p>
            </div>

            {/* Linting & Formatting */}
            <div className="flex flex-col items-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                <span className="text-2xl">🧹</span>
              </div>
              <h4 className="font-semibold text-center">ESLint & Prettier</h4>
              <p className="text-xs text-center text-muted-foreground">Code Quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
