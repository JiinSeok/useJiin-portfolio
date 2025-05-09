'use client'

import LanguageSwitcher from '@/components/LanguageSwitcher'
import { Button } from '@/components/ui/Button'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('HomePage')

  return (
    <div className="flex flex-col items-center">
      {/* Navigation */}
      <nav className="w-full max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-primary">NEXCA</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            {t('nav.features')}
          </Link>
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors"
          >
            {t('nav.benefits')}
          </Link>
          <Link
            href="/register"
            className="text-foreground hover:text-primary transition-colors"
          >
            {t('nav.contact')}
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            {t('nav.get-started')}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('hero.title')}{' '}
              <span className="text-primary">{t('hero.title-highlight1')}</span>{' '}
              <span className="text-primary">{t('hero.title-highlight2')}</span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {t('hero.cta-trial')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                {t('hero.cta-demo')}
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-80 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-chart-1 to-chart-3 rounded-lg opacity-20 blur-xl"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="bg-card p-6 rounded-lg shadow-lg w-full max-w-sm">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">
                      {t('hero.ai-assistant')}
                    </span>
                    <div className="h-3 w-3 rounded-full bg-chart-1"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-secondary p-3 rounded-lg text-sm">
                      {t('hero.ai-question')}
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg text-sm">
                      {t('hero.ai-answer')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('features.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('features.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('features.model-management.title'),
                description: t('features.model-management.description'),
                icon: '🤖',
              },
              {
                title: t('features.analytics.title'),
                description: t('features.analytics.description'),
                icon: '📊',
              },
              {
                title: t('features.infrastructure.title'),
                description: t('features.infrastructure.description'),
                icon: '☁️',
              },
              {
                title: t('features.collaboration.title'),
                description: t('features.collaboration.description'),
                icon: '👥',
              },
              {
                title: t('features.api.title'),
                description: t('features.api.description'),
                icon: '🔌',
              },
              {
                title: t('features.security.title'),
                description: t('features.security.description'),
                icon: '🔒',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="w-full py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('benefits.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('benefits.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                {[
                  {
                    title: t('benefits.productivity.title'),
                    description: t('benefits.productivity.description'),
                  },
                  {
                    title: t('benefits.costs.title'),
                    description: t('benefits.costs.description'),
                  },
                  {
                    title: t('benefits.time-to-market.title'),
                    description: t('benefits.time-to-market.description'),
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1 bg-primary/10 rounded-full p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-chart-2 to-chart-4 rounded-lg opacity-20 blur-xl"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="bg-card p-6 rounded-lg shadow-lg w-full max-w-sm">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl">📈</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          {t('benefits.metrics.title')}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t('benefits.metrics.subtitle')}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">
                            {t('benefits.metrics.accuracy')}
                          </span>
                          <span className="text-sm font-medium">98%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div
                            className="bg-chart-1 h-2 rounded-full"
                            style={{ width: '98%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">
                            {t('benefits.metrics.response-time')}
                          </span>
                          <span className="text-sm font-medium">120ms</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div
                            className="bg-chart-3 h-2 rounded-full"
                            style={{ width: '85%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">
                            {t('benefits.metrics.uptime')}
                          </span>
                          <span className="text-sm font-medium">99.9%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div
                            className="bg-chart-4 h-2 rounded-full"
                            style={{ width: '99.9%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="w-full py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {t('cta.trial')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              {t('cta.contact')}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">NEXCA</h3>
              <p className="text-muted-foreground">{t('footer.description')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {t('footer.product')}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.features')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.pricing')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.documentation')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.api')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {t('footer.company')}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.about')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.blog')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.careers')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.contact')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {t('footer.legal')}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.privacy')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.terms')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.cookies')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">{t('footer.social.twitter')}</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">{t('footer.social.github')}</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">{t('footer.social.linkedin')}</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// import { defaultLocale, locales } from '@/i18n/request'
// import { headers } from 'next/headers'
// import { redirect } from '@/navigation'
//
// export default function RootPage() {
//   // Get the user's preferred language from the Accept-Language header
//   // This function is only called on the server
//   const getUserLanguage = async () => {
//     try {
//       const headersList = await headers()
//       const acceptLanguage = headersList.get('accept-language') || ''
//
//       // Parse the Accept-Language header
//       // Example: "en-US,en;q=0.9,ko;q=0.8"
//       const languages = acceptLanguage.split(',').map(lang => {
//         const [language, quality = 'q=1.0'] = lang.trim().split(';')
//         const q = parseFloat(quality.split('=')[1])
//         return { language: language.split('-')[0], q }
//       })
//
//       // Sort by quality value
//       languages.sort((a, b) => b.q - a.q)
//
//       // Find the first supported language
//       const preferredLanguage = languages.find(lang =>
//         locales.includes(lang.language)
//       )
//
//       return preferredLanguage ? preferredLanguage.language : defaultLocale
//     } catch (error) {
//       console.error('Error parsing Accept-Language header:', error)
//       // Fallback to default locale if there's an error
//       return defaultLocale
//     }
//   }
//
//   // Get the user's preferred language
//   const userLanguage = getUserLanguage()
//
//   // Redirect to the appropriate language route
//   redirect(`/${userLanguage}`)
// }
