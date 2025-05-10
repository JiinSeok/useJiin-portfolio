'use client'

import { Input } from '@/components/Form/Input'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { Accordion, AccordionItem } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import StepperDialog from '@/components/ui/Modal/StepperDialog'
import { useModal } from '@/hooks/useModal'
import { Link } from '@/navigation'
import { useTranslations } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('HomePage')

  const { modalName, openModal, closeModal } = useModal()
  return (
    <div className="flex flex-col items-center">
      {/* Contact Dialog */}
      <StepperDialog
        isOpen={modalName === 'contactDialog'}
        onRequestClose={closeModal}
      />

      {/* Navigation */}
      <nav className="w-full max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-primary">Jiin Seok</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link
            href="#ux-design"
            className="text-foreground hover:text-primary transition-colors"
          >
            {t('nav.ux-design')}
          </Link>
          <Link
            href="#tech-stack"
            className="text-foreground hover:text-primary transition-colors"
          >
            {t('nav.tech-stack')}
          </Link>
          <Link
            href="#resume"
            className="text-foreground hover:text-primary transition-colors"
          >
            {t('nav.resume')}
          </Link>
          <Link
            href="#til"
            className="text-foreground hover:text-primary transition-colors"
          >
            {t('nav.til')}
          </Link>
          <button
            onClick={() => openModal('contactDialog')}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t('nav.contact')}
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
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
                {t('hero.cta-resume')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                {t('hero.cta-projects')}
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-primary hover:bg-primary/10"
                onClick={() => openModal('contactDialog')}
              >
                {t('hero.cta-contact')}
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
                      {t('hero.code-snippet')}
                    </span>
                    <div className="h-3 w-3 rounded-full bg-chart-1"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-secondary p-3 rounded-lg text-sm">
                      {t('hero.code-question')}
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg text-sm">
                      {t('hero.code-answer')}
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-lg text-sm font-mono">
                      <pre className="text-xs overflow-x-auto">
                        {`// Example TypeScript code
type User = {
  id: string;
  name: string;
  email: string;
};

const fetchUser = async (id: string): Promise<User> => {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UX Design Section */}
      <section id="ux-design" className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('ux-design.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('ux-design.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('ux-design.structure.title'),
                description: t('ux-design.structure.description'),
                icon: '📝',
              },
              {
                title: t('ux-design.component.title'),
                description: t('ux-design.component.description'),
                icon: '🧩',
              },
              {
                title: t('ux-design.state-management.title'),
                description: t('ux-design.state-management.description'),
                icon: '🔄',
              },
              {
                title: t('ux-design.performance.title'),
                description: t('ux-design.performance.description'),
                icon: '⚡',
              },
              {
                title: t('ux-design.accessibility.title'),
                description: t('ux-design.accessibility.description'),
                icon: '♿',
              },
              {
                title: t('ux-design.testing.title'),
                description: t('ux-design.testing.description'),
                icon: '🧪',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <a
                    href="#"
                    className="text-primary hover:underline text-sm flex items-center"
                  >
                    <span>View example</span>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="w-full py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('tech-stack.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('tech-stack.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                {[
                  {
                    title: t('tech-stack.frontend.title'),
                    description: t('tech-stack.frontend.description'),
                    icon: '🌐',
                  },
                  {
                    title: t('tech-stack.typescript.title'),
                    description: t('tech-stack.typescript.description'),
                    icon: '📘',
                  },
                  {
                    title: t('tech-stack.react.title'),
                    description: t('tech-stack.react.description'),
                    icon: '⚛️',
                  },
                  {
                    title: t('tech-stack.nextjs.title'),
                    description: t('tech-stack.nextjs.description'),
                    icon: '▲',
                  },
                ].map((tech, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1 bg-primary/10 rounded-full p-1 h-8 w-8 flex items-center justify-center">
                      <span className="text-lg">{tech.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {tech.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {tech.description}
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
                        <span className="text-2xl">💻</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          {t('tech-stack.skills.title')}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t('tech-stack.skills.subtitle')}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">
                            {t('tech-stack.skills.typescript')}
                          </span>
                          <span className="text-sm font-medium">95%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div
                            className="bg-chart-1 h-2 rounded-full"
                            style={{ width: '95%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">
                            {t('tech-stack.skills.react')}
                          </span>
                          <span className="text-sm font-medium">90%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div
                            className="bg-chart-3 h-2 rounded-full"
                            style={{ width: '90%' }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">
                            {t('tech-stack.skills.nextjs')}
                          </span>
                          <span className="text-sm font-medium">85%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div
                            className="bg-chart-4 h-2 rounded-full"
                            style={{ width: '85%' }}
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
              onClick={() => openModal}
            >
              {t('cta.contact')}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-20 bg-secondary/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl tablet:text-4xl font-bold mb-4">
              {t('faq.title') || 'Frequently Asked Questions'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('faq.description') ||
                'Find answers to common questions about our platform.'}
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <Accordion>
              <AccordionItem title={t('faq.q1') || 'What is NEXCA?'}>
                <p>
                  {t('faq.a1') ||
                    'NEXCA is an AI model management platform that helps teams build, deploy, and monitor AI models at scale. Our platform provides tools for model training, deployment, monitoring, and collaboration.'}
                </p>
              </AccordionItem>

              <AccordionItem title={t('faq.q2') || 'How does pricing work?'}>
                <p>
                  {t('faq.a2') ||
                    'We offer flexible pricing plans based on your needs. Our starter plan is free and includes basic features. For more advanced features, we offer premium plans starting at $99/month. Contact us for enterprise pricing.'}
                </p>
              </AccordionItem>

              <AccordionItem
                title={t('faq.q3') || 'Do you offer a free trial?'}
              >
                <p>
                  {t('faq.a3') ||
                    'Yes, we offer a 14-day free trial of our premium features. No credit card required. You can sign up and start using our platform right away.'}
                </p>
              </AccordionItem>

              <AccordionItem
                title={t('faq.q4') || 'How secure is your platform?'}
              >
                <p>
                  {t('faq.a4') ||
                    'Security is our top priority. We use industry-standard encryption, regular security audits, and follow best practices for data protection. Your data is always encrypted both in transit and at rest.'}
                </p>
              </AccordionItem>

              <AccordionItem
                title={t('faq.q5') || 'Can I integrate with my existing tools?'}
              >
                <p>
                  {t('faq.a5') ||
                    'Yes, our platform offers robust API and integration options. You can connect with popular tools like GitHub, Slack, Jira, and more. We also provide webhooks for custom integrations.'}
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Release Notification Section */}
      <section
        id="release-notification"
        className="w-full py-20 bg-gradient-to-b from-background to-secondary/20"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl tablet:text-4xl font-bold mb-4">
            {t('release.title') || '출시 소식 받기'}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('release.description') ||
              '새로운 기능과 업데이트 소식을 가장 먼저 받아보세요.'}
          </p>
          <div className="flex flex-col mobile:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={
                t('release.email-placeholder') || '이메일 주소를 입력하세요'
              }
              className="flex-grow"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              {t('release.subscribe') || '구독하기'}
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
                {/*{t('footer.product')}*/}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {/*{t('footer.features')}*/}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {/*{t('footer.pricing')}*/}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {/*{t('footer.documentation')}*/}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {/*{t('footer.api')}*/}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {/*{t('footer.company')}*/}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {/*{t('footer.about')}*/}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {/*{t('footer.blog')}*/}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {/*{t('footer.careers')}*/}
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
              {/*{t('footer.copyright', { year: new Date().getFullYear() })}*/}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {/*<span className="sr-only">{t('footer.social.twitter')}</span>*/}
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
